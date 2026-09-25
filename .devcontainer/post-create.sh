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

# plugin marketplaces are registered by absolute host path; mirror it so they resolve
echo "==> linking host claude path for plugin marketplace resolution"
sudo mkdir -p /Users/bobhall
sudo ln -sfn /home/node/.claude /Users/bobhall/.claude

# claude rewrites .claude.json atomically, which orphans a single-file bind mount;
# seed a container-local copy from the host instead
echo "==> seeding claude config"
if [ ! -s /home/node/.claude.json ] && [ -s /home/node/.claude/.claude.json.host ]; then
  cat /home/node/.claude/.claude.json.host > /home/node/.claude.json
  echo "    seeded from host copy"
elif [ -s /home/node/.claude.json ]; then
  echo "    existing config kept"
else
  echo "    WARNING: no host config found; MCP servers from ~/.claude.json will be missing"
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
echo "  dev server : pnpm start:moduops   (port 4000, auto-forwarded)"
echo "  deploy     : pnpm exec sst deploy --stage=<name>   # always pass --stage"
echo "  aws        : credentials are mounted READ-ONLY from the host"
echo "  claude     : run 'claude' in an attached iTerm2 shell"
