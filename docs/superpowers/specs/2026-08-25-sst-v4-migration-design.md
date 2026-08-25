# SST v4 Migration — Design Spec

**Date:** 2026-08-25
**Status:** Approved
**Branch:** `chore/sst-v4-upgrade` (to be created off `main`)

## Summary

Upgrade `moduops-www` from SST 3.19.3 to SST 4.17.1. SST v4's sole breaking
change is the underlying Pulumi AWS provider upgrade from v6 to v7. This
repository's `sst.config.ts` uses no `transform` blocks and no direct
`@pulumi/aws` imports, so **no configuration code changes are required**. The
work is a dependency bump plus a one-way state migration (`sst refresh`) run
once per stage.

## Context

| Item | Current | Target |
|---|---|---|
| `sst` package | 3.19.3 | 4.17.1 (`latest` at design time — re-verify, see Step 1) |
| `@pulumi/aws` provider | 6.66.2 (per `.sst/provider-lock.json`) | 7.20.0 (per v4 platform deps) |

SST v4.0.0 was published 2026-02-24, one day after 3.19.3. As of this spec,
v4 has had roughly five months and seventeen minor releases of stabilization.

Deployed infrastructure is a single `sst.aws.StaticSite` (Docusaurus build)
fronted by CloudFront with Route53 and ACM. There is no database, no stateful
compute, and no queue.

### Verified preconditions

These were confirmed against the repository, not assumed:

- `grep -nE "transform|@pulumi|\.get\(" sst.config.ts` returns no matches on
  either `main` or `feat/api-xchange`.
- `main`'s `sst.config.ts` declares only the `StaticSite` resource. This is the
  shape that matches currently deployed state.
- No `.github/workflows/` directory exists. All deploys are manual and local.

### Stages

State bucket: `sst-state-udtbxswzbwwo`. AWS account `309743830326`,
region `us-east-2`. Route53 zone `Z207BR6SP5DWDX`.

| Stage | State size | Domain | Distribution | Disposition |
|---|---|---|---|---|
| `production` | 487 KB | `moduops.com`, `www.moduops.com` | `E1D6NNIZKCM0L7`, `E3AH7VJOZ5D1FM` | Migrate |
| `dev` | 390 KB | `dev.moduops.com` | `E3KZAMA4APQJCV` | Migrate (rehearsal) |
| `test` | 366 KB | `test.moduops.com` | `E26KHMI96ULBWN` | **Undecided** — see below |
| `apiUser` | 622 B | none | none | Empty; delete state file |
| `prod` | 619 B | none | none | Empty; delete state file |

`apiUser` was **not** a deliberate stage. It is the IAM username
(`arn:aws:iam::309743830326:user/apiUser`); SST defaults the stage name to the
local user when `--stage` is omitted, so a command run without the flag created
it. Its state file contains **zero resources** (verified by reading the
checkpoint, not inferred from logs). `prod.json` is a similar 619-byte remnant.

`test` is a real stage from 2024-12-27 owning a live `test.moduops.com`
distribution. It was not known when this spec was first written. Migrating it is
optional; leaving it on v3 state is harmless as long as nobody deploys it.

## Scope

### In scope

- Removal of the unused `apiUser` stage.
- Bump `sst` to `4.17.1` in root `package.json`; refresh `pnpm-lock.yaml`.
- One-way state migration (`sst refresh`) for `dev`, then `production`.
- Redeploy and verification of both stages.

### Out of scope

- The `feat/api-xchange` API stack (`ApiGatewayV2` + Python Lambda). Per the
  agreed sequencing, that branch rebases onto the v4 baseline **after** this
  migration completes and deploys as ordinary feature work. The version bump and
  the new-resource deploy are deliberately kept apart so a failure attributes to
  exactly one of them.
- Any refactor of `sst.config.ts` beyond what v4 requires (which is nothing).
- Docusaurus, React, or other application dependency upgrades.

## Risk Model

**`sst refresh` is one-way.** It rewrites stored state to the v7 provider schema
(S3 resource renames dropping the `V2` suffix; `tags` to `tagsAll`). There is no
downgrade path.

**Ordinary rollback does not apply.** Reverting `package.json` to `sst@3` after a
refresh leaves v4-shaped state that a v3 binary cannot read. Every reversible
check must therefore happen *before* the irreversible step, per stage.

**Mitigating factors:**

- The failure mode is "site serves stale content or errors," not data loss —
  there is no stateful resource in the stack.
- `production` carries `protect: true` and `removal: retain`, so resources
  survive even a badly wrong operation.
- `dev` is `removal: remove` and unprotected, so a bad outcome there is
  recoverable by teardown and redeploy. It is a genuine rehearsal for
  `production` because both stages deploy the same single-component config.

## Implementation Plan

Steps are strictly ordered. Do not begin a step before the prior step's
verification passes.

### Step 0 — Legacy cleanup (deferred; NOT a migration prerequisite)

Investigation showed the original Step 0 was based on a false premise and, as
written, was unsafe. It is removed from the migration's critical path. The v4
migration does **not** depend on any of the cleanup below.

#### Finding: four SST v2 (CloudFormation) stacks still exist

These predate v3 and are invisible to the `sst` CLI, which reads only the S3
state bucket:

| Stack | Created | Notable resources |
|---|---|---|
| `prod-moduops-www-MyStack` | 2022-08-05 | **`AWS::Route53::RecordSet moduops.com`** |
| `sst2-moduops-www-MyStack` | 2023-11-05 | `RecordSet sst2.moduops.com`, CloudFront function |
| `apiUser-moduops-www-MyStack` | 2023-07-18 | SSM parameter, Lambda |
| `apiUser-moduops-www-debug-stack` | 2023-03-07 | ApiGatewayV2, S3 bucket, Lambda |

:::danger
**Do not delete `prod-moduops-www-MyStack` casually.** CloudFormation believes it
owns the `moduops.com` A record. That record has since been overwritten by the
v3 `production` stage and now points at distribution `E1D6NNIZKCM0L7`. Deleting
the stack would make CloudFormation attempt to delete the record currently
serving live production traffic.

The safe procedure is to first remove the `RecordSet` resources from the stack's
control — via a `DeletionPolicy: Retain` update, or `--retain-resources` on
delete — and only then delete the stack. Verify with `dig` afterward.
:::

#### Verified: live traffic is served by v3, not the legacy stacks

Authoritative Route53 records in zone `Z207BR6SP5DWDX`:

| Name | Alias target | Distribution | Owner |
|---|---|---|---|
| `moduops.com` | `d2139vxgj5iuh0.cloudfront.net` | `E1D6NNIZKCM0L7` | v3 `production` |
| `www.moduops.com` | `d25j4rhssmr77b.cloudfront.net` | `E3AH7VJOZ5D1FM` | v3 `production` |
| `dev.moduops.com` | `d27jcxr9joi18e.cloudfront.net` | `E3KZAMA4APQJCV` | v3 `dev` |

The legacy stacks therefore serve no live traffic and can be left in place
indefinitely without risk. Cleaning them up is housekeeping, to be scheduled as
separate work with its own plan.

#### Optional, safe now

Deleting the two empty state files is harmless — both contain zero resources:

```bash
aws s3 rm s3://sst-state-udtbxswzbwwo/app/moduops-www/apiUser.json
aws s3 rm s3://sst-state-udtbxswzbwwo/app/moduops-www/prod.json
```

This is cosmetic and may be skipped.

### Step 1 — Branch and bump

1. `git checkout main && git pull`
2. `git checkout -b chore/sst-v4-upgrade`
3. Re-check the current v4 `latest` tag (`curl -s https://registry.npmjs.org/sst | \
   python3 -c "import json,sys; print(json.load(sys.stdin)['dist-tags']['latest'])"`).
   The migration guide requires being on the latest v4 before running any
   commands. `4.17.1` was `latest` when this spec was written; if it has moved,
   use the newer version and note it in the PR.
4. Set `sst` to that version in root `package.json` (pin exactly, no `^`, so the
   migration runs against a known binary).
5. `pnpm i` from the repository root (never inside `moduops/`, per CLAUDE.md).
6. `sst install` to generate `.sst/platform/` types; confirm
   `.sst/provider-lock.json` reports `@pulumi/aws` at 7.x.
7. `pnpm typecheck` — **`sst.config.ts` must be error-free.** The wider
   repository typecheck does not gate this migration; see below.
8. Commit the bump and lockfile.

#### Note on the typecheck gate

`main` does not typecheck independently of this migration. It carries 26
pre-existing errors: `moduops/` has no `tsconfig.json`, the root tsconfig is
mis-scoped, React 19 removed the global `JSX` namespace, and `vitest.config.ts`
references a dependency `main` never declared. Commit `66d4589` on
`feat/api-xchange` already fixes all of them.

These are unrelated to SST and are being fixed separately. The gate for this
migration is narrowed to `sst.config.ts` alone, which typechecks clean under v4
once `sst install` has generated the platform types.

### Step 2 — Migrate `dev`

1. `pnpm sst diff --stage=dev` — **review against the pass condition below.**
2. `pnpm sst refresh --stage=dev` — no `--target` flag; the refresh must cover
   all resources for state to be consistent.
3. `pnpm sst deploy --stage=dev`
4. Verify `dev.moduops.com` loads and serves current content.

### Step 3 — Migrate `production`

Begin only after Step 2 is verified green.

1. `pnpm sst diff --stage=production` — same pass condition.
2. `pnpm sst refresh --stage=production`
3. `pnpm sst deploy --stage=production`
4. Verify `moduops.com` loads and that `www.moduops.com` still redirects.

### Step 4 — Land and hand off

1. Open a PR from `chore/sst-v4-upgrade` to `main`; merge once both stages are
   verified.
2. Rebase `feat/api-xchange` onto the v4 `main`. The API stack then deploys as
   normal feature work, outside this migration.

## Pass / Stop Conditions

**`sst diff` pass condition (Steps 2 and 3):** the diff shows a provider version
change and **in-place updates only**.

**Stop-and-reassess signal:** any `replace` or `delete` operation against the
CloudFront distribution, the Route53 records, or the ACM certificate. Replacing
a distribution means a new domain-facing resource and real downtime on
`moduops.com`. If this appears, halt and reassess rather than proceeding — do
not run `refresh`, because that step cannot be undone.

**Per-stage verification:** the stage's domain serves current content over HTTPS
with a valid certificate.

## Rollback

Before `sst refresh` on a given stage, rollback is ordinary: discard the branch.

After `sst refresh` on a given stage, there is no version rollback. Recovery is
forward-only:

- **`dev`:** `sst remove --stage=dev` and redeploy from the v4 config.
- **`production`:** resources are retained under `removal: retain` and protected
  under `protect: true`. Recovery is to fix forward on v4 and redeploy. This is
  precisely why `dev` is migrated and verified first.

## Rejected Alternatives

**Ship the API first on v3, then upgrade.** Defers v4 indefinitely and enlarges
the eventual refresh to cover the API resources as well as the site. Rejected in
favor of migrating the smaller, known-good surface first.

**Combine the upgrade and the API deploy on `feat/api-xchange`.** Fewest deploys,
but a failed `sst refresh` and a broken new API stack would be
indistinguishable, and `refresh` is one-way. Rejected: attribution matters more
than deploy count when the failure is irreversible.

**Upgrade `production` directly, skipping `dev`.** Rejected: `dev` is a
low-cost, high-fidelity rehearsal of the identical config.

## Open Questions

1. **Migrate the `test` stage?** It owns a live `test.moduops.com` distribution
   and was unknown at design time. Leaving it on v3 state is harmless unless
   someone deploys it. Deciding this is not a blocker for `dev` or `production`.
2. **When to clean up the four legacy v2 CloudFormation stacks?** Separate work,
   needs its own plan given the Route53 hazard documented in Step 0.
