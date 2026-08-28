# ModuOps Website Project Overview

## Purpose
ModuOps website is a static documentation and blog site for the ModuOps model railroad operations application. It provides documentation, tutorials, and blog posts about the ModuOps software.

## Tech Stack
- **Framework**: Docusaurus 3.7 (React-based static site generator)
- **Frontend**: React 19, TypeScript, MDX
- **Styling**: CSS Modules, custom CSS
- **Package Manager**: pnpm (monorepo structure)
- **Deployment**: SST v3 (AWS StaticSite)
- **Cloud Provider**: AWS (us-east-2 region)
- **Node.js**: Version 22+ required

## Architecture
- **pnpm monorepo** with workspaces defined in `pnpm-workspace.yaml`
- **Root package** (`package.json`): Contains SST configuration and monorepo scripts
- **moduops package** (`moduops/`): The Docusaurus static site

## Domain Configuration
- Production: `moduops.com` (with redirect from `www.moduops.com`)
- Development/staging: `{stage}.moduops.com` (e.g., `dev.moduops.com`)

## Repository
- GitHub: `bhall2001/moduops-www`
- Main branch: `main`
