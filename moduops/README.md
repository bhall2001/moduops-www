# moduops (site)

The Docusaurus 3 site for [moduops.com](https://moduops.com). For setup, deploys, and infra, see the [root README](../README.md).

## Commands

Run these from the repo root:

```sh
pnpm i                  # install
pnpm start:moduops      # dev server at http://localhost:4000, live reload
```

Or from this directory:

```sh
pnpm build              # static build into build/
pnpm serve              # serve build/ locally
pnpm typecheck
```

Don't use `pnpm run deploy` here. That script is Docusaurus's GitHub Pages deploy, which this project doesn't use. The site is hosted with SST, so deploy from the root.

## Where things live

| Path | What |
| --- | --- |
| `docs/` | App docs; `docs/tutorial/` is the tutorial. Navigation lives in `sidebars.js` |
| `blog/` | Posts named `YYYY-MM-DD-slug.md`; authors in `blog/authors.yml` |
| `src/pages/` | Custom pages; `index.tsx` is the homepage |
| `src/components/` | Homepage sections and other React components |
| `src/css/custom.css` | Theme overrides |
| `static/` | Assets served as-is from `/` |
| `docusaurus.config.js` | Site config: navbar, footer, presets |
