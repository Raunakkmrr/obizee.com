# Product brief — the second import

**Written 2026-09-08 11:24 IST. Needs Raunak's decision on three questions before code.**

Covers the two remaining items from 2026-09-08: a dashboard entry point with a
returning-merchant voice, and re-grouping after the catalogue is published. The two
that shipped that day — the edit-loss fix and the gate short-circuit — are their
foundation and are already on main.

---

## The one root cause

Every screen in the import assumes **this is the first thing the seller ever does on
oBizee**. The gate proves an address because she has no account. The exit says "Open my
shop" because she has never seen it. `POST /import/jobs/:jobId/account` builds an
account because there isn't one. Publish appends because nothing was there before.

All four are correct for a prospect and wrong for a merchant. Nothing is broken; a whole
second case was simply never written.

---

## Part A — the door

**Verified today:** `grep` finds no import entry point anywhere in obizee-dashboard.
`src/components/products/products-view.tsx:76` has an "Add product" button, and its
empty state at `:110` is the bare string `"No products yet."`

That empty state is the single most valuable pixel in this brief. A merchant looking at
"No products yet" is in exactly the state the importer solves, and we say nothing.

### Where the entry point goes

| | Option | Reads as |
|---|---|---|
| **A1** | Products page only — beside "Add product", and filling the empty state | "This is how you get products in" |
| **A2** | Home briefing only — a row beside the other actions | "This is a thing you could do today" |
| **A3** | Both, products page primary | Discoverable from where the need is felt AND from the daily screen |

**Recommendation: A3, but ship A1 first.** The empty state is where the sentence lands
hardest, and the briefing row is ten minutes on top once A1 exists.

The link is `https://obizee.com/import/?resume=1` — `?resume=1` is already read by
`app/import/page.tsx` and already skips the gate for a merchant session. Nothing else is
needed to make the door work.

### Copy

Not "Import from Instagram" — the source picker on the slab is now the thing that asks
which shop, and naming one source in the button contradicts it. **"Bring in products"**,
with the empty state reading something like *"No products yet. Bring them in from your
Instagram or your website — it takes about a minute."* (≤ 20 words, D4.)

---

## Part B — the voice

Once she skips the gate, three things still speak to a first-timer:

1. `ResumingPanel` — already written for her. Correct.
2. `FinishButton` — "Open my shop" / "Setting up your shop…". She has a shop.
3. The server's own message — `"Your oBizee shop is already set up."` when
   `isNewAccount: false`. Honest, but it answers a question she did not ask.

For a returning merchant the exit is **"Back to my products"** and the sentence above it
is what actually changed: *"N products added to your shop."* — which is the number she
came for and the one nothing currently tells her. `createStorefrontAccount` already
returns `productsPublished`; it is thrown away by the client today.

**How the screen knows she is returning.** `resumeRequested` is already threaded to
`ImportRoute`. Pass it down to `ReportScreen`, or read `isMerchantSession()` at that
point — the report screen is well past hydration, so the localStorage read that was
wrong in `ImportRoute` is fine there. Prefer threading the prop: one source of truth.

**Not in scope:** re-writing the gate copy. She never sees it.

---

## Part C — re-grouping after publish

The hardest of the three, and the one with a genuine product question inside it.

**Where it stands.** `postAssembly` now answers `409 import_already_published` on a
terminal job, because `publishCatalogFromImport` skips by title and never removes — so
re-deriving after publish would desync the job from the Catalog documents, and a
re-publish would add the newly-titled products beside the old ones. The refusal is
honest but it is still a refusal.

**What unblocks it.** `Entity/catalogEntity.js` has no link back to the import that
created a row — confirmed by grep. Stamping the job id on every document
`publishCatalogFromImport` writes turns "which products did this import make?" from a
guess into a query, and reconciliation becomes possible: drop what this run no longer
makes, add what is new, leave everything else alone.

**The three rules that decide whether this is safe.**

1. **A product she has edited in the dashboard is never overwritten by a re-group.**
   Without this rule, re-grouping destroys her work — the same class of bug as the one
   fixed this morning, one layer out. Needs a "touched since import" signal on the
   Catalog document.
2. **A product with orders against it is never deleted.** Deactivated at most. An order
   history pointing at a row that no longer exists is a support ticket, not a tidy-up.
3. **She is told what will happen before it happens.** "This will remove 14 products and
   add 39. 3 you have edited will be left alone." Not a silent re-derive.

**Where she reaches it.** The products page, filtered to one import, with a "Change how
these were grouped" action. Not the import route — that flow is finished and she has
left it.

---

## Open questions — these three block Part C

1. **Is re-grouping after publish the right feature at all**, or is the honest answer
   "run the import again and we will skip what you already have"? A second import is
   simpler, already mostly works, and never touches a product she has edited. It costs
   her a capture she has already paid for in time, and leaves duplicates if titles moved.
   *My read: a second import is the better answer for a large catalogue; re-grouping is
   the better answer for the 20-product Instagram seller this was built for. If we only
   build one, build re-grouping.*
2. **Deactivate or delete** a product a re-group no longer produces? Deactivating is
   safe and leaves her with a list of dead rows to tidy. Deleting is clean and
   irreversible.
3. **How long does an import job live?** Re-grouping needs `posts[]` to still exist.
   Nothing currently expires a job; if something ever should, that TTL is the real limit
   on how long this feature works.

---

## Order of work

1. **A1** — products page entry point and empty state. Small, no new backend. Half a day.
2. **B** — returning-merchant voice on the report screen, `productsPublished` surfaced.
   Small. Half a day.
3. **A2** — briefing row. An hour on top of A1.
4. **C** — only after question 1 is answered. Provenance stamp and reconciliation is two
   days; the three safety rules are what make it four.

Nothing in 1–3 depends on anything in 4.
