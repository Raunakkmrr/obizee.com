#!/usr/bin/env bash
# OWNER: _project-docs/cloud/setup/website.sh — copied to .claude/cloud-setup.sh by sync.sh.
# SessionStart hook. Installs dependencies in a cloud session only; a no-op locally.
# Idempotent: SessionStart also fires on resume and compaction, so it skips when the
# lockfile has not changed since the last install.
set -euo pipefail
[ "${CLAUDE_CODE_REMOTE:-}" = "true" ] || exit 0
cd "${CLAUDE_PROJECT_DIR:-.}"
marker=node_modules/.cloud-setup-lock
lock_hash=$(cat package-lock.json 2>/dev/null | sha256sum | cut -d' ' -f1)
if [ -f "$marker" ] && [ "$(cat "$marker")" = "$lock_hash" ]; then exit 0; fi
npm ci --no-audit --no-fund
echo "$lock_hash" > "$marker"
echo "[cloud-setup] dependencies installed" >&2
