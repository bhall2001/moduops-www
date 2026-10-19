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

Everything (dev server and deploys) runs inside the Linux dev container in `.devcontainer/`. Running on the Mac directly fails.

### Prerequisites (on the Mac)

- Docker or OrbStack
- VS Code with the Dev Containers extension, or the `devcontainer` CLI (`npm i -g @devcontainers/cli`)
- AWS credentials in `~/.aws` (only needed to deploy; mounted read-only into the container)

### Start the container

- VS Code: open the repo, then **Dev Containers: Reopen in Container**.
- CLI, from the repo root:

  ```sh
  devcontainer up --workspace-folder .
  devcontainer exec --workspace-folder . zsh
  ```

The repo is mounted at `/workspace`. The first build runs `.devcontainer/post-create.sh`, which installs dependencies (Linux binaries) with `pnpm install --frozen-lockfile`.

### Run the dev server

Inside the container:

```sh
cd /workspace/moduops
pnpm start              # live reload on port 4000
```

Port 4000 is forwarded, so open http://localhost:4000 on the Mac.

### Gotchas

- **Don't run pnpm or Docusaurus on the Mac.** `node_modules/` and `moduops/.docusaurus/` live in the bind mount and are shared with the Mac. A Mac `pnpm i` installs macOS binaries; a Mac dev server or build rewrites `.docusaurus/` with `/Users/...` paths, and the container server then fails with `Module not found ... in '/workspace/moduops/.docusaurus'`.
  - Fix `.docusaurus`: stop every server (Mac and container), `rm -rf moduops/.docusaurus`, start one server in the container.
  - Fix `node_modules`: run `pnpm i` again inside the container.
- **Stale content or odd build errors:** `pnpm clear` in `moduops/`, then restart.
- `pnpm reinstall` (root) deletes every `node_modules/` **and `pnpm-lock.yaml`**, then reinstalls. Commit the new lockfile.
- `pnpm typecheck` currently fails on `main` (pre-existing JSX and vitest type errors).

## Deploying

<<<<<<< Updated upstream
The SST stage name decides the domain. `production` deploys to `moduops.com`, with a redirect from `www.moduops.com`. Any other stage deploys to `<stage>.moduops.com`. State and asset buckets live in AWS `us-east-2`, set by `providers.aws.region` in `sst.config.ts`, so deploys from any machine use the same state. CloudFront, its certificate and Route 53 are global.
=======
Hosted with SST (`sst.config.ts`) as an `sst.aws.StaticSite`, AWS region `us-east-2`. SST runs the Docusaurus build itself; no need to build first. The stage decides the domain:
>>>>>>> Stashed changes

| Stage | URL |
| --- | --- |
| `production` | https://moduops.com (`www.moduops.com` redirects) |
| `dev` | https://dev.moduops.com |
| any other `<stage>` | `https://<stage>.moduops.com` |

Inside the container, from `/workspace`:

```sh
pnpm run deploy         # dev        -> dev.moduops.com
pnpm run deploy:prod    # production -> moduops.com
```

- **Never deploy from the Mac.** Native macOS deploys fail at `BucketFiles` with a bogus `open <file>: no such file or directory`.
- `~/.aws` is mounted read-only, so log in or refresh credentials on the Mac, not in the container.
- Use `pnpm run deploy`, not `pnpm deploy`. `pnpm deploy` is a pnpm built-in that does something else.
- Don't run `pnpm run deploy` inside `moduops/`. That is Docusaurus's GitHub Pages deploy, which this project doesn't use.
- When running `sst` directly, always pass `--stage`. A bare `sst` command uses your username as the stage and creates a stray site.

### Before deploying production

1. `pnpm run deploy` and check https://dev.moduops.com.
2. `pnpm exec sst diff --stage=production` and read it. Stop if it plans to replace or delete the CloudFront distribution, Route 53 records or the ACM certificate.
3. `pnpm run deploy:prod`.

### Tearing down a stage

```sh
pnpm run remove                                  # dev
pnpm exec sst remove --stage=<stage>             # any other stage
```

`production` is set to `retain` its resources on removal. Don't remove it unless you mean to take the site down.

## Unused: GitHub Actions deploy

`.github/workflows/deploy.yml` (manual trigger, AWS OIDC) exists but has never been used to deploy `dev` or `production`. Deploy from the container as above.
