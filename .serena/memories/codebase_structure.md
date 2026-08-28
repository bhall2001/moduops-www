# Codebase Structure

## Root Directory
```
moduops-www/
├── moduops/              # Docusaurus site package
├── docs/superpowers/     # Design specs / plans
├── .devcontainer/        # Dev environment (primary; see project_overview)
├── .github/workflows/    # deploy.yml (manual dispatch, OIDC -> AWS)
├── .serena/              # Serena project config + these memories (tracked)
├── .claude/set/          # Tracked slice of .claude (allowlist in .gitignore)
├── sst.config.ts         # SST deployment configuration
├── package.json          # Root monorepo package
├── pnpm-workspace.yaml   # Workspaces, overrides, minimumReleaseAge
├── tsconfig.json
├── vitest.config.ts      # Present; vitest NOT in any package.json (see below)
├── .npmrc                # verify-deps-before-run=false
└── .nvmrc                # Node 24.19.0
```

No `CLAUDE.md` at repo root — instructions come from the user's global
`~/.claude/CLAUDE.md`.

## Moduops Package (`moduops/`)
```
moduops/
├── docs/                 # Documentation markdown files
│   ├── tutorial/
│   ├── history.md
│   ├── quickstart.md
│   ├── overview.md
│   ├── faq.md
│   └── ... (other docs)
├── blog/                 # Blog posts (format: YYYY-MM-DD-name.md)
├── src/
│   ├── components/
│   │   ├── HomepageHeader/
│   │   ├── HomepageFeatures/
│   │   ├── HomepageDownload/
│   │   ├── HomepageHilites/
│   │   └── PronunciationWidget.jsx
│   ├── css/custom.css
│   └── pages/
│       ├── index.tsx
│       └── markdown-page.md
├── static/               # Static assets (images, favicon)
├── docusaurus.config.js
├── sidebars.js
├── babel.config.js
└── package.json
```

## Key Files
- `sst.config.ts` — SST v3 config (AWS StaticSite), region `us-east-2`
- `moduops/docusaurus.config.js` — site metadata, theme, navigation
- `moduops/sidebars.js` — documentation sidebar structure
- `moduops/src/css/custom.css` — theme customization

## Not Part of This Repo
- `moduops/.xchange-data/` — separate clone of `bhall2001/moduops-xchange`,
  NOT a submodule. Gitignored; never `git add` it.
- `.worktrees/` — live git worktrees. Gitignored.

## Known Issue
`pnpm typecheck` fails (pre-existing): `vitest.config.ts` imports `vitest/config`
but vitest is in no package.json, and the root tsconfig pulls React/JSX types
that only exist in the `moduops` workspace.
