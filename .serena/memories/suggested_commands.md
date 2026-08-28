# Suggested Commands

Work happens in the **devcontainer** (Debian bookworm, user `node`, workspace
`/workspace`), not the macOS host. Commands below assume the container.

## Installation
```bash
pnpm i                  # from repo root
```

## Development
```bash
pnpm start:moduops                # docusaurus start --host 0.0.0.0, port 3000
pnpm --filter moduops clear       # clear Docusaurus cache if content is stale
```
`--host 0.0.0.0` is required — bound to loopback the server is unreachable
through the container's port forwarding. `forwardPorts: [3000]`.

Bob runs dev servers himself; don't launch or background them.

## Clean Reinstall
```bash
pnpm clean        # rm every node_modules (excl. .git/.sst/.worktrees) + pnpm-lock.yaml
pnpm reinstall    # clean, then pnpm install
```
`.npmrc` sets `verify-deps-before-run=false`; without it pnpm 11 reinstalls
dependencies before every script, which silently undoes `clean`.

## Type Checking
```bash
pnpm typecheck                      # currently FAILS, pre-existing
pnpm --filter moduops typecheck
```

## Build
```bash
pnpm build                     # via SST
pnpm --filter moduops build    # Docusaurus only
pnpm --filter moduops serve    # serve built site
```

## Deployment
```bash
pnpm run deploy         # dev.moduops.com
pnpm run deploy:prod    # moduops.com  (protected stage)
pnpm remove             # remove dev deployment
pnpm remove:prod        # remove production (use with caution)
pnpm console            # SST console
```
Deploy from the container or CI — **not** from macOS (StaticSite upload bug).
CI: `.github/workflows/deploy.yml`, manual `workflow_dispatch` taking `stage`
and `action` inputs, OIDC into AWS. Always pass an explicit `--stage`; a bare
`sst` command defaults the stage to the runner's username.

## Git
Standard commands. Use the **GitHub CLI** (`gh`) for GitHub operations.
Branch prefixes: `fix/`, `refactor/`, `feat/`, `chore/`.

## Shell Note
The container shell is **zsh**. An unmatched glob aborts the whole command
line (`no matches found`) rather than passing through as in bash — use `find`
for bulk deletes.
