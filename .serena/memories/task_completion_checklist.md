# Task Completion Checklist

## Before Completing Any Task

### 1. Type Checking
```bash
pnpm typecheck
```
NOTE: this currently fails for pre-existing reasons (vitest config + root
tsconfig JSX types). Confirm you haven't added *new* errors rather than
expecting a clean run. `pnpm --filter moduops typecheck` is the useful signal
for site changes.

### 2. Local Testing
```bash
pnpm start:moduops
```
Bob runs the dev server himself — ask him to check rather than starting it.
- Verify changes in the browser
- Check for console errors
- Test viewport sizes if UI changed

### 3. Build Verification
```bash
pnpm --filter moduops build
```
Must build without errors.

## For Documentation Changes
- Verify links aren't broken (Docusaurus warns on broken markdown links)
- Check sidebar navigation if adding new docs
- Ensure proper frontmatter

## For Blog Posts
- Date format: `YYYY-MM-DD-name.md`
- Required frontmatter (title, authors, tags)
- Images in `static/img/blog/`

## For Component Changes
- CSS Module classes properly imported
- Component renders correctly
- Mobile responsiveness

## Before Committing
- Never `git add` `moduops/.xchange-data/` (separate repo) or `.worktrees/`.
  Both are gitignored; confirm `git status` is clean of them.
- Verify claims about state by running the command — don't infer.

## Deployment
- Dev: `pnpm run deploy` → dev.moduops.com
- Production only after testing: `pnpm run deploy:prod`
- Deploy from the devcontainer or CI, never from macOS.

## Notes
- SST v3; production has `protect: true` — be cautious
- Always test on dev stage before production
