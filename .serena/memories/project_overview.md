# ModuOps Website Project Overview

## Purpose
ModuOps website is a static documentation and blog site for the ModuOps model railroad operations application. It provides documentation, tutorials, and blog posts about the ModuOps software.

## Tech Stack
- **Framework**: Docusaurus 3.7 (React-based static site generator)
- **Frontend**: React 19, TypeScript, MDX
- **Styling**: CSS Modules, custom CSS
- **Package Manager**: pnpm 11 (monorepo structure)
- **Deployment**: SST v3 (AWS StaticSite)
- **Cloud Provider**: AWS (us-east-2 region)
- **Node.js**: 24.19.0 (`.nvmrc`); `moduops` package declares `engines.node >=22.0`

## Development Environment
Primary dev environment is the **devcontainer** (`.devcontainer/`), not the macOS
host. See [devcontainer notes](#devcontainer) in `suggested_commands`.

- Image: `node:24.19.0-bookworm`, pnpm 11.24.0, user `node`, workspace `/workspace`
- Deploys from macOS fail on an SST/StaticSite upload bug — deploy from the
  container or via CI.

## Architecture
- **pnpm monorepo** with workspaces defined in `pnpm-workspace.yaml`
- **Root package** (`package.json`): SST config and monorepo scripts
- **moduops package** (`moduops/`): the Docusaurus static site

## Supply Chain
`pnpm-workspace.yaml` sets `minimumReleaseAge: 10080` (7-day cooldown on newly
published versions) and requires build scripts to be opted in via `allowBuilds`.

## Domain Configuration
- Production: `moduops.com` (with redirect from `www.moduops.com`)
- Development/staging: `{stage}.moduops.com` (e.g., `dev.moduops.com`)
- `protect: true` on the `production` stage

## Repository
- GitHub: `bhall2001/moduops-www`
- Main branch: `main`
- Branch prefixes: `fix/`, `refactor/`, `feat/`, `chore/`
