# SitesPlaced teardown — and what oBizee must change

**Analysed:** 2026-08-25 · `sitesplaced.com/dm2buy-alternative` + homepage

---

## The finding that outranks everything else

| | obizee.com | sitesplaced.com |
|---|---|---|
| **Visible text on homepage** | **91 characters** | **13,581 characters** |
| `<h1>` | **0** | 1 |
| Images | **0** | 110 |
| Links | **0** | many |

obizee.com's homepage serves **91 characters** to any crawler — the title, and
nothing else. No heading, no image, no link. Everything renders client-side, and
Google, ChatGPT, Perplexity and Gemini all read the server response.

This is why oBizee does not appear for "shopify alternatives." The most
authoritative page on the domain is, to a machine, blank. Every AI crawler that
has ever visited obizee.com has come away with one sentence.

**This is not a redesign task. It is the single highest-leverage defect on the
site,** and it was previously parked as cosmetic. It is not cosmetic.

---

## What their page actually is

It is **not a comparison page. It is a migration offer.** The spine:

1. H1 — free DM2Buy alternative, for Indian Instagram sellers (query + price + ICP)
2. Live shops, open right now
3. Features, framed as already-plugged-in
4. **8 named real sellers**, each its own heading
5. Why sellers are leaving dm2buy in 2026 (the trigger)
6. Feature-by-feature comparison
7. **"How we migrate your store in one day"** — 4 steps
8. **"What you keep when you switch"** — 6 loss-aversion items
9. ICP statement — Instagram and WhatsApp sellers
10. Pricing + **"a real human runs your migration, end to end"**
11. FAQ about switching
12. CTA — move your store by tomorrow

### The mechanics that make it work

- **Named proof at volume.** 26 live storefronts with product counts, real domains,
  "827 real products" totalled. Specific and checkable.
- **Done-for-you migration.** A human moves the store in 24 hours. This removes
  effort, the real barrier — not features.
- **Loss aversion.** "What you keep" answers the actual fear of switching:
  products, domain, Razorpay, Shiprocket, WhatsApp orders, brand.
- **Sympathetic attack.** dm2buy is described as *once* the default, now
  unreliable — reported, not trash-talked, so the criticism lands as credible.
- **Concrete numbers.** ₹0 free tier, ₹499/mo, 24-hour migration, 0% commission,
  and the competitor's ₹999/mo quoted directly.
- **Scarcity on the homepage.** "first 30 stores · 19 left".
- **FAQ that names the worst objection** — will you disappear like dm2buy did.

**They rank with no schema markup and no comparison table on that page.** My earlier
hypothesis that tables drive AI citation was wrong. Depth, named proof and a
concrete offer are doing the work — 2,475 words against oBizee's ~1,100.

---

## Their design system

- **Fonts:** Barlow + Inter, deliberately loaded. oBizee loads **no web font at all.**
- **Palette:** warm artisan, not SaaS.

| Role | Hex |
|---|---|
| Ink | `#1b1410` |
| Cream surfaces | `#f2eadc` `#f7f2e8` `#fbf7ee` |
| Warm neutrals | `#e7decf` `#d9cfc0` `#9c8a7e` `#5c4d45` |
| Terracotta (primary/CTA) | `#c9532a` `#e0764a` |
| Gold | `#e6b450` |
| Sage | `#6fb07a` |
| Blush | `#f4d9cc` |

It reads handmade, Indian, small-business — matched to sellers doing crochet,
jewellery and home food. oBizee's live homepage exposes essentially one colour.

- **Navigation is five items: Import · Pricing · Examples · Blog · Help.**
  *Import is first.* Their primary nav item is the switching offer. Examples —
  named customer stores — is the third.

---

## The proof oBizee already owns and hides

SitesPlaced's headline proof is 827 products across named stores.

oBizee's actual numbers:

| Merchant | Products | Orders |
|---|---|---|
| crochetbypriya | 403 | 2,816 |
| shopvelnora | 192 | — |
| snazzystore | 157 | — |
| artbykhushh | 135 | — |

**887 products from four merchants alone, and 3,281 lifetime orders.** Bigger than
the proof SitesPlaced leads with — and oBizee shows none of it, anywhere.

---

## What to change, in order

1. **Server-render the homepage.** 91 chars → full content. Nothing else on this
   list matters until a crawler can read the site.
2. **Named customer proof.** A real Examples/Stores page plus proof blocks on
   comparison pages. Requires merchant permission — ask the four above first.
3. **A migration offer.** "Send your link, we rebuild your store in 24 hours, a
   real human does it." This doubles as the fix for the 43% who never add a
   product: the barrier is effort, and this removes it.
4. **Rewrite `best-dm2buy-alternatives`** from neutral listicle to switching page,
   using the spine above. Depth to ~2,500 words.
5. **Design system.** Load real fonts; commit to a warm, India-appropriate palette;
   stop shipping an unstyled shell.
6. **Restructure nav** so switching/import and examples are top-level.

---

## Not doing

**Copying their copy.** It is their copyright, it would make oBizee look derivative,
and it would import positioning built on *their* strengths. oBizee has more
features and better real numbers; the job is to show them, not to borrow someone
else's sentences.
