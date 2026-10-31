<!--
  OWNER: _project-docs/cloud/obizee-cloud.md (repo Raunakkmrr/obizee-project-docs).
  Every oBizee repo carries a COPY at .claude/obizee-cloud.md, written by
  _project-docs/cloud/sync.sh. Edit the source, then re-run sync.sh. Never edit a copy.
-->
# oBizee — standing rules for every Claude session (local and cloud)

Owner: **Raunak Kumar**. Address him by name when confirming decisions. Be direct, no
apologies, no filler. Recommendation first, then alternatives.

## 0. Where you are

A **cloud session** sees only this repository as it was last pushed to GitHub. It does
NOT see Raunak's global `~/.claude/CLAUDE.md`, his memory, his local skills, sibling repos,
`.env` files, or `_project-docs` (the shared docs repo is `Raunakkmrr/obizee-project-docs`).
This file and `.claude/skills/` are the condensed form of those. If a task needs a document
you cannot reach, say which one — never reconstruct it from guesswork.

Tell a cloud session apart with `echo $CLAUDE_CODE_REMOTE` (`true` in the cloud).

## 1. Production safety — non-negotiable

- **`main` is production.** Pushing `main` deploys OM-backend, admin-panel, star_by_obizee
  (every merchant storefront at once), obizee.com and the ERP API. **In a cloud session,
  never push or merge to `main`.** Work on a branch, open a PR, stop. Raunak merges.
- **There is no dev MongoDB.** `MONGO_URL` and `MONGO_URL_DEV` are the same production
  cluster. Cloud environments carry no production credentials on purpose. If something
  needs a database, stub the model or use an in-memory fixture. Never ask for a prod string.
- **ERP is Postgres on Neon.** Only ever a Neon *dev branch*, never the production branch.
- **Never set `ENCRYPTION_KEY`.** Production runs on the repo-committed fallback; setting
  the variable is a key rotation that breaks every merchant's payment gateway and courier
  credentials. New secrets get their own new variable.
- **New field for new purposes.** Never repurpose or "clean up" a live field or env var to
  serve new work; add a new one and report the old one's defect.
- Never commit `.env*`, keys, tokens. Never print a secret.

## 2. Git

- Conventional Commits: `type(scope): imperative subject` under 72 chars; body says *why*.
- **No AI attribution of any kind** — no `Co-Authored-By: Claude`, no "Generated with".
- Atomic commits, explicit paths (`git add <file>`), never `git add .` or `-A`.
- Never amend, never force-push, never rewrite history.
- PR body: what changed, how it was verified (commands + exit codes), what was NOT verified.

## 3. Verify before you claim

- Run the repo's **own** verify command from `package.json` / CI, verbatim — not a lint of
  the files you touched. Check the **exit code**, not the summary line.
- Write tests alongside new logic. Run the existing suite.
- A stub-fed screenshot is a sketch, not evidence. Never claim what you did not check.
- Timestamp every status line and finding: `[YYYY-MM-DD HH:MM IST]` from
  `TZ=Asia/Kolkata date "+%Y-%m-%d %H:%M"` — never guessed.

## 4. Code standards

- TypeScript strict, no `any` (use `unknown` + guards). `const` over `let`, never `var`.
- Functions under 50 lines, max 4 params (else an options object), no nested ternaries.
- Handle every error explicitly; no swallowed `.catch()`. No debug `console.log`.
- Every external call: timeout, retry with backoff. Every endpoint: input validation.
- No `// TODO` without a ticket. Comments explain *why*. Match the surrounding code.
- LLM calls default to `claude-haiku-5-5`, thinking off; prompts are versioned templates.

## 5. Product truths (decided — do not re-ask)

- **The only goal is app usage.** 87 of 223 merchants have zero products; only 54 have
  ever taken an order. A first product and a first order is the whole job. Cut any feature
  whose best outcome is the merchant doing less.
- **Order total:** `totalOrderAmount` is canonical; `amountPaid` is stale on manual-payment
  orders. Read via `helper/orderMoney.js`.
- **Partial payment is not adopted** (8 of 54). `total − paid` is mostly unrecorded payment,
  not debt. Never let a rule that fires for >40% of merchants claim a high-priority band.
- **Storefront templates are built on V1 (`star_by_obizee`) only. V2
  (`obizee-storefront-v2`) is frozen.** A template is a composition of shared sections,
  not new code. Merchant owns colour and type.
- **`star_by_obizee/backend` is dead** — the backend lives in OM-backend.
- **Multi-courier:** preserve the `/delhivery/*` routes and the `shippingService` contract.
- **A recurring slot (daily/weekly nudge) must always deliver** — silence is never valid.
- **Found a defect while doing your own work?** Fix it and log it. Do not hand Raunak an
  A/B/C menu. A schema defect found in passing is designed around, not escalated, unless it
  actually blocks the work.

## 6. UI work

Load these skills from `.claude/skills/` before writing or presenting any screen:
`obizee-rules`, `visual-conviction`, `design-in-context`.

- Every new screen ships with a draft UI — an API with no screen is incomplete work.
- No section except the hero renders a single item (min 2), else render nothing.
- Responsive for every size up front (390px mobile is a gate), WCAG AA, 44px targets.
- Tokens only — no hard-coded hex, px spacing or z-index outside the token system.
- **Feedback is global:** a criticism of one section names a class of defect. Grep for
  every instance and fix all of them in the same pass; list where it was applied.
- Real assets only. The logo is `obizee-dashboard/public/obizee-logo.png`.

## 7. What a cloud session cannot do — hand these back, do not fake them

- iOS simulator / Android builds and device checks (OrderManagement).
- `npx vercel --prod` (obizee-dashboard is the only manual deploy).
- AWS / Amplify console steps (redirects, env vars), Neon console, Play / App Store.
- Any call needing a production credential, including live integration tests.
- Checking a deploy landed — that happens after Raunak merges.

End every session with: what changed, what was verified, what is not done, and the PR link.
