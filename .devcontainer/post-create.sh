#!/usr/bin/env bash
set -euo pipefail

echo "==> fixing ownership on volume mounts"
sudo chown -R node:node \
  /workspace/node_modules \
  /workspace/moduops/node_modules \
  /workspace/.sst \
  /home/node/.npm-global \
  /home/node/.local/share/pnpm/store 2>/dev/null || true

# install only if missing; never clobber a self-updated version
if command -v claude >/dev/null 2>&1; then
  echo "==> claude already present: $(claude --version 2>/dev/null || echo unknown)"
else
  echo "==> installing Claude Code into the persisted volume"
  npm install -g --allow-scripts=@anthropic-ai/claude-code @anthropic-ai/claude-code >/dev/null 2>&1 \
    && echo "    installed $(claude --version 2>/dev/null || echo '?')" \
    || echo "    WARNING: claude install failed - run 'npm i -g @anthropic-ai/claude-code' inside"
fi

echo "==> carrying over git identity from the host repo"
if ! git config user.email >/dev/null 2>&1; then
  echo "    (no user.email in repo config - set one inside the container)"
fi
git config --global --add safe.directory /workspace

echo "==> installing dependencies (linux binaries)"
# CI=true: skip pnpm's interactive purge + supply-chain prompts (no TTY)
export CI=true
pnpm install --frozen-lockfile --config.confirmModulesPurge=false

echo
echo "Ready. Notes:"
echo "  dev server : pnpm start:moduops   (port 3000, auto-forwarded)"
echo "  deploy     : pnpm exec sst deploy --stage=<name>   # always pass --stage"
echo "  aws        : credentials are mounted READ-ONLY from the host"
echo "  claude     : run 'claude' in an attached iTerm2 shell"
