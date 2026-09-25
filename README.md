# ModuOps web site

Source for [moduops.com](https://moduops.com): the ModuOps docs, tutorial, and blog.

## Stack

- **[Docusaurus 3](https://docusaurus.io/)** builds a static site from Markdown and React. It lives in `moduops/`.
- **[SST v4](https://sst.dev/)** hosts it on AWS as an `sst.aws.StaticSite` (S3 + CloudFront). `sst.config.ts` is the entire infrastructure definition.
- **pnpm workspace**: the root holds SST, and `moduops/` is the only package.

## Layout

| Path | What |
| --- | --- |
| `moduops/docs/` | ModuOps app docs; `tutorial/` holds the tutorial |
| `moduops/blog/` | Blog posts named `YYYY-MM-DD-slug.md`; authors in `authors.yml` |
| `moduops/src/`, `moduops/static/` | Custom pages, components, and static assets |
| `moduops/docusaurus.config.js`, `sidebars.js` | Site config and docs navigation |
| `sst.config.ts` | AWS infra: stages, domains, build |
| `.devcontainer/` | Dev container setup |
| `.github/workflows/deploy.yml` | Manual deploy workflow |

## Local development

Requires Node 24 (see `.nvmrc`) and pnpm.

```sh
pnpm i                  # install everything, from the repo root
pnpm start:moduops      # dev server at http://localhost:4000
```

In the dev container, `pnpm i` runs automatically after the container is created, and port 4000 is auto-forwarded.

Other commands, run from the repo root:

- `pnpm typecheck` checks types.
- `pnpm reinstall` wipes every `node_modules` folder plus the lockfile, then installs again.

## Deploying

The SST stage name decides the domain. `production` deploys to `moduops.com`, with a redirect from `www.moduops.com`. Any other stage deploys to `<stage>.moduops.com`. State lives in AWS `us-east-2`.

You need AWS credentials set up locally.

```sh
pnpm run deploy         # dev stage     -> dev.moduops.com
pnpm run deploy:prod    # production    -> moduops.com
pnpm run remove         # tear down dev
```

Use `pnpm run deploy`, not `pnpm deploy`, which is a pnpm built-in. When running SST directly, always pass `--stage`. Without it, the stage defaults to your username.

```sh
pnpm exec sst diff --stage=dev     # preview changes
```

### GitHub Actions

`Deploy` (`.github/workflows/deploy.yml`) runs only when triggered manually. Start it from the Actions tab with a stage name and `deploy` or `remove`. It signs in to AWS through OIDC, so the repo stores no AWS secrets.
