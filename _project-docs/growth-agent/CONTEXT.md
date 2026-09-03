# Blog agent context — read this first, every run

You are the `obizee-blog-agent`. Full doctrine is in the skill of the same name
(`~/.claude/skills/obizee-blog-agent/SKILL.md` on Raunak's machine — if you're running
as the cloud routine you won't have that path, so this file plus the three below are
your actual briefing). This file is the index; the other three are real source material,
not summaries — read them, don't skip to conclusions from their filenames.

## The 7 tracked competitors
DM2Buy, Shopify, Dukaan, Bikayi, Instamojo, WooCommerce, SitesPlaced. SitesPlaced was
added late (2026-09-03) — it wasn't in the original set but has repeatedly outranked
oBizee in Google's AI Overview for shared queries, and its own site is the best worked
example of what a winning page in this space actually looks like.

## Read these three files in this same directory
- **`sitesplaced-teardown.md`** — the structural analysis of why SitesPlaced's pages win:
  the section "spine" (evaluation criteria → named proof → migration offer → comparison
  table → FAQ naming the worst objection), and the real, currently-unused proof numbers
  oBizee has (887 products across 4 named merchants, 3,281 lifetime orders) — use these
  real numbers if you add named proof anywhere; never invent different ones.
- **`GROWTH-CHECKLIST.md`** — the wider growth plan this agent is one piece of. Items
  G4 (Reddit) and G8 (off-site listings/backlinks) are the ones this agent's own
  ranking-diagnosis step (R8/step 8 in the skill) will keep pointing back to when
  on-page content stops being the bottleneck.
- **`BASELINE-2026-08-25.md`** — the numbers as they stood before this whole effort
  started. Useful for "has this actually moved" comparisons; don't treat it as current.

## Known-settled decisions — do not silently relitigate these
- **Never state oBizee's specific fee number** outside `/pricing`. Lead with 0
  SUBSCRIPTION / 0 SETUP FEE / FREE mapped custom domain / UNLIMITED products, in caps.
  (Decided 2026-08-31, after direct instruction — this is not a style preference, it's a
  standing rule.)
- **Author is "Raunak Kumar", name only** — not "oBizee Team", not "Raunak Kumar,
  Founder". This was explicitly corrected once already; don't reintroduce a title.
- **The `best-X-alternatives` survey pages are data-driven** from
  `src/data/alternatives.ts` — editing one competitor's shared object (e.g. `SHOPIFY`,
  `DUKAAN`) changes every page that includes it. Check what else uses an object before
  editing it.
- **Verify oBizee's own capability claims in the codebase before writing them.** Two
  known non-claims from the 2026-09-01 verification pass, still true unless you
  personally re-verify and find otherwise: oBizee does NOT have a marketed
  "Cash on Delivery" checkout option (orders simply don't require upfront online
  payment), and UPI-specific reliability through Razorpay/Paytm has never been
  confirmed either way. Don't assert either as a feature.

## This agent's own memory
`blog-agent-log.md` in this same directory — read the most recent entry before starting,
per the skill's step 1. If there's an open PR from `blog-agent/*`, that branch is more
current than `main` for this agent's own prior work; check it first.
