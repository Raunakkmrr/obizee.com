#!/usr/bin/env node
// OWNER: _project-docs/cloud/kit/cloud-guard.mjs — copied into each repo's .claude/ by sync.sh.
// PreToolUse hook for Bash. In a cloud session (CLAUDE_CODE_REMOTE=true) it blocks the
// commands that reach production without Raunak: pushing or merging main, force-pushing,
// prod deploys, and AI attribution in commits. Local sessions pass straight through,
// because locally he has pre-authorised pushes to main for some repos.
import { execFileSync } from 'node:child_process';

const PROTECTED = new Set(['main', 'master']);

const RULES = [
  { test: /\bgit\b[^;&|]*\bpush\b[^;&|]*(--force\b|\s-f\b|--force-with-lease)/, why: 'force-push' },
  { test: /\bgit\b[^;&|]*\bpush\b[^;&|]*[\s:](main|master)\b/, why: 'push to main' },
  { test: /\bgh\s+pr\s+merge\b/, why: 'merging a PR (Raunak merges)' },
  { test: /\bvercel\b[^;&|]*--prod\b/, why: 'production Vercel deploy' },
  { test: /\bgit\b[^;&|]*\bcommit\b[\s\S]*co-authored-by:\s*claude/i, why: 'AI attribution in a commit' },
];

const readStdin = async () => {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
};

const currentBranch = (cwd) => {
  try {
    return execFileSync('git', ['branch', '--show-current'], { cwd, encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
};

// A bare `git push` / `git push origin` pushes the current branch, so it is a push to main
// whenever the session is sitting on main.
const isBarePushOnProtected = (command, cwd) =>
  /\bgit\b[^;&|]*\bpush\b(\s+(-u\s+)?[\w.-]+)?\s*($|[;&|])/.test(command) &&
  PROTECTED.has(currentBranch(cwd));

const block = (why) => {
  process.stderr.write(
    `Blocked in cloud session: ${why}. main is production for oBizee. ` +
      'Push a feature branch and open a PR; Raunak merges. See .claude/obizee-cloud.md §1.\n',
  );
  process.exit(2);
};

const main = async () => {
  if (process.env.CLAUDE_CODE_REMOTE !== 'true') return;
  let payload;
  try {
    payload = JSON.parse(await readStdin());
  } catch (error) {
    // Never let a malformed payload slip a command through unchecked.
    block(`guard could not parse hook input (${error.message})`);
    return;
  }
  const command = String(payload?.tool_input?.command ?? '');
  const hit = RULES.find((rule) => rule.test.test(command));
  if (hit) block(hit.why);
  if (isBarePushOnProtected(command, payload?.cwd ?? process.cwd())) block('push to main');
};

await main();
