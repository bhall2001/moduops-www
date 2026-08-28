# Codebase Structure

## Root Directory
```
moduops-www/
├── moduops/              # Docusaurus site package
├── sst.config.ts         # SST deployment configuration
├── package.json          # Root monorepo package
├── pnpm-workspace.yaml   # pnpm workspace configuration
├── tsconfig.json         # TypeScript configuration
├── .nvmrc                # Node.js version (22)
└── CLAUDE.md             # Claude Code instructions
```

## Moduops Package (`moduops/`)
```
moduops/
├── docs/                 # Documentation markdown files
│   ├── tutorial/         # Tutorial section
│   ├── history.md
│   ├── quickstart.md
│   ├── overview.md
│   ├── faq.md
│   └── ... (other docs)
├── blog/                 # Blog posts (format: YYYY-MM-DD-name.md)
├── src/
│   ├── components/       # React components
│   │   ├── HomepageHeader/
│   │   ├── HomepageFeatures/
│   │   ├── HomepageDownload/
│   │   ├── HomepageHilites/
│   │   └── PronunciationWidget.jsx
│   ├── css/
│   │   └── custom.css    # Custom Docusaurus styles
│   └── pages/
│       └── index.tsx     # Homepage
├── static/               # Static assets (images, favicon)
├── docusaurus.config.js  # Docusaurus configuration
├── sidebars.js           # Sidebar navigation config
├── babel.config.js       # Babel configuration
└── package.json          # Package dependencies
```

## Key Files
- `sst.config.ts` - SST v3 deployment config (AWS StaticSite)
- `moduops/docusaurus.config.js` - Site metadata, theme, navigation
- `moduops/sidebars.js` - Documentation sidebar structure
- `moduops/src/css/custom.css` - Theme customization
