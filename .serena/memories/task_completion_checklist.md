# Task Completion Checklist

## Before Completing Any Task

### 1. Type Checking
```bash
pnpm typecheck
```
Ensure there are no TypeScript errors.

### 2. Local Testing
```bash
pnpm start:moduops
```
- Verify changes work correctly in the browser
- Check for console errors
- Test on different viewport sizes if UI changes were made

### 3. Build Verification
```bash
pnpm --filter moduops build
```
Ensure the site builds successfully without errors.

## For Documentation Changes
- Verify links are not broken (Docusaurus will warn about broken markdown links)
- Check sidebar navigation if adding new docs
- Ensure proper frontmatter is present

## For Blog Posts
- Use correct date format: `YYYY-MM-DD-name.md`
- Include required frontmatter (title, authors, tags)
- Verify images are in `static/img/blog/` if used

## For Component Changes
- Ensure CSS Module classes are properly imported
- Check component renders correctly
- Verify mobile responsiveness

## Deployment
- Dev deployment: `pnpm run deploy` (deploys to dev.moduops.com)
- Only deploy to production after thorough testing: `pnpm run deploy:prod`

## Notes
- The site uses SST v3 for deployment to AWS
- Production has `protect: true` - be cautious with production deployments
- Always test on dev stage before production
