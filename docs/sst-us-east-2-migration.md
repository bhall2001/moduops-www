# SST region fix: move moduops-www to us-east-2

Handoff from a Mac-side investigation (2026-10-19). Work happens in the devcontainer.

## Root cause

- `sst.config.ts` has `region: 'us-east-2'` inside `app()`. Not a valid SST option; silently ignored.
- Home region (state bucket) therefore comes from the environment:
  - Mac: `~/.aws/config` `region = us-east-1` -> state bucket `sst-state-udtbxswzbwwo`
  - Container: `devcontainer.json` `AWS_REGION=us-east-2` -> state bucket `sst-state-hwbducnfxexk`
- Both buckets hold `dev` and `production` stages claiming the same domains + Route 53 records. Deploys from one side collide with/orphan the other -> `NoSuchDistribution`, `CNAMEAlreadyExists`, manual cleanup loop.
- SST only overwrites existing Route 53 records with `dns: sst.aws.dns({ override: true })`.

## Verified state (2026-10-19)

| Stage | us-east-1 state (`sst-state-udtbxswzbwwo`) | us-east-2 state (`sst-state-hwbducnfxexk`) | Live |
| --- | --- | --- | --- |
| dev | dist `E1YFSKH54XOOOJ`, bucket `moduops-www-dev-moduopswwwassetsbucket-retukadv` | dist `EVW8CMX82EVDT` (GONE), bucket `moduops-www-dev-moduopswwwassetsbucket-damdrzxb` (exists) | us-east-1 |
| production | dists `E2NCOTZH5J9JB2` (moduops.com), `E26WK5I6A4J552` (www); buckets `...assetsbucket-dxktskdz`, `...cdnredirectbucketbucket-mckhhaam` | dists `E2RKJ3WN2LOEMY`, `E2QIK0AHBG786U` (GONE); buckets `...assetsbucket-ruansdff`, `...cdnredirectbucketbucket-mkebtxak` (exist) | us-east-1 |

Table is pre-cleanup. dev rows superseded by Phase 1.

Stray stages: us-east-1 `bobhall`, `apiUser`, `prod`, `test`; us-east-2 `node`, `bindtest`, `containertest`, `dctest`, `ciprobe`.

**Do not touch:** `test.moduops.com` (`E26KHMI96ULBWN`), `downloads.moduops.com` (`E3VQSZQHLYAT7G`), `assets.bobhall.net` bucket, anything ondeckmanager / bobhall.net, legacy SST v2 CloudFormation stacks.

## Target

- `providers: { aws: { region: 'us-east-2' } }` in `sst.config.ts`; remove bogus `region`.
- State + asset buckets in us-east-2. ACM cert, CloudFront, CF function/KV, Route 53 stay global/us-east-1 by AWS design.

## Rules

- Always pass `--stage`. Bare `sst` creates a username stage (`node` in container).
- Before any `sst remove`, confirm which state bucket it will hit (`AWS_REGION` / provider region) and which Route 53 records that state owns. Removing a stale stack can delete LIVE DNS records.
- `sst refresh` never with `--target`.
- "Stage not found" on remove = state file missing but resources live; delete by hand (disable+wait+delete distribution, then bucket, cert, CF function, then KV store).
- `production` has `removal: 'retain'`: keeps only S3 buckets (`.sst/platform/src/auto/run.ts`), and not StaticSite's assets bucket (`static-site.ts` forces `retainOnDelete: false`). `sst remove` DELETES distributions, certs, CF functions, KV, Route 53 records. Not a "forget".
- Both production states list the same live Route 53 records (A/AAAA + cert-validation CNAMEs). Removing either stage deletes live DNS.
- Get Bob's approval before every delete and before each production step.
- Bob runs dev servers himself; don't start/background them.

## Plan

### Phase 0: code (branch `fix/sst-region`) - DONE

Commit `5d2fbde0`, worktree `.worktrees/sst-region`. Verified: with `AWS_REGION=us-east-1`, SST still finds the us-east-2 bootstrap.

1. `sst.config.ts`: `providers: { aws: { region: 'us-east-2' } }`, domain `dns: sst.aws.dns({ override: true })`.
2. README region wording.

### Phase 1: dev rehearsal - DONE

New dist `E40IQZYJ62FK`, bucket `...assetsbucket-smkrmzex` (us-east-2), state in `sst-state-hwbducnfxexk`. Second diff: only the build command (always re-runs).

1. Old config: `AWS_REGION=us-east-1 pnpm exec sst remove --stage=dev`.
2. us-east-2 dev: `pnpm exec sst refresh --stage=dev`, inspect, then `pnpm exec sst remove --stage=dev`.
3. New config: `pnpm run deploy`.
4. Verify https://dev.moduops.com, state in `sst-state-hwbducnfxexk`, and a second deploy succeeds with no changes.

### Phase 2: production - DONE except step 6

New dists `E3GEGOMZNEBGSH` / `EEDKVOE8OY1JN`, buckets `...assetsbucket-rrcxnuko`, `...cdnredirectbucketbucket-vkrtcomc` (us-east-2), state in `sst-state-hwbducnfxexk`. Second diff clean. Step 2 also deleted assets bucket `...dxktskdz`; only empty `...mckhhaam` left for step 6.


1. us-east-2 stale state, by hand (NOT `sst remove`, it would delete live DNS). Dists `E2RKJ3WN2LOEMY` / `E2QIK0AHBG786U` already gone. Delete buckets `...assetsbucket-ruansdff`, `...cdnredirectbucketbucket-mkebtxak`; certs `e855987d` (moduops.com), `d1d9e1aa` (www), both unused; functions `...dsfomrno`, `...bvutkdau` (unassociated); KV `...KvStore-fnzwersr`. Then delete `app/moduops-www/production.json` from `sst-state-hwbducnfxexk`. No DNS touched, no outage.
2. Outage start: old config, `AWS_REGION=us-east-1 pnpm exec sst remove --stage=production`. Deletes `E2NCOTZH5J9JB2` / `E26WK5I6A4J552`, certs `62162eb0` / `3b312ff8`, functions, KV, DNS; retains buckets `...assetsbucket-dxktskdz`, `...cdnredirectbucketbucket-mckhhaam`.
3. Verify step 2 removed everything; hand-delete any leftovers.
4. From worktree: `pnpm run deploy:prod`.
5. Outage end: verify https://moduops.com and www redirect; second diff clean.
6. Hand-delete the 2 retained us-east-1 buckets.

### Phase 3: tidy
- Remove stray stages (check DNS ownership first).
- Decide whether to keep `override: true`.

## Open questions
- Keep `override: true`?
- Delete stray stages?
