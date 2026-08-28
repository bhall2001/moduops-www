# Suggested Commands

## Installation
```bash
# Install all dependencies (run from root)
pnpm i
```

## Development
```bash
# Start local development server (opens browser at localhost:3000)
pnpm start:moduops

# Clear Docusaurus cache (useful if seeing stale content)
pnpm --filter moduops clear
```

## Type Checking
```bash
# Run TypeScript type checking
pnpm typecheck

# Type check only the moduops package
pnpm --filter moduops typecheck
```

## Build
```bash
# Build for production (via SST)
pnpm build

# Build only Docusaurus site
pnpm --filter moduops build

# Serve built site locally
pnpm --filter moduops serve
```

## Deployment
```bash
# Deploy to dev.moduops.com
pnpm run deploy

# Deploy to production (moduops.com)
pnpm run deploy:prod

# Remove dev deployment
pnpm remove

# Remove production deployment (use with caution)
pnpm remove:prod
```

## SST Console
```bash
# Open SST console for debugging
pnpm console
```

## Git Commands (macOS/Darwin)
```bash
# Standard git commands work as expected
git status
git add .
git commit -m "message"
git push
git pull
```

## File System Commands (macOS/Darwin)
```bash
# List files
ls -la

# Find files
find . -name "*.md"

# Search in files
grep -r "pattern" .
```
