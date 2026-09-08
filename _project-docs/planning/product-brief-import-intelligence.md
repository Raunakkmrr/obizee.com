# Product brief — making the import understand what it read

**Written 2026-09-08 18:30 IST.** Covers the three AI capabilities Raunak asked for and
the source coverage in the seven-pill mockup. Opens with a live defect found while
checking them, because it outranks all of it.

---

## P0 — every imported product photo expires in three days

**Verified on production, 2026-09-08 18:26 IST.** `codesmokers.obizee.com` serves
**167 `scontent-*.cdninstagram.com` references and 0 oBizee S3 references.** One of the
signed URLs carries `oe=6AA42B2A`, which decodes to **2026-09-11 16:24 UTC — about 75
hours away.** The image still returns 200 today.

The chain: `captureInstagram.js:107` stores Meta's raw signed CDN links on the post,
`assembleProducts` carries them onto the derived rows, and `publishCatalog.js:91` writes
them straight into `Catalog.images`. There is no re-host anywhere —
`runImportJob.js:153` still reads `TODO T-004c: rehost imageUrls to S3 here`, and
`ImportJob.rehostedKeys` is a schema field written by nothing. `helper/uploadS3.js`
exists and is unused by this pipeline.

`importJobEntity.js` already states the intended contract: *"Never a raw Instagram CDN
URL past `awaiting_confirmation`: those are signed and expire."* The comment is correct
and the code does not do it.

**Every shop ever created by the importer goes blank.** Not degraded — blank, on a
storefront the merchant was told was ready. This is a fuse, not a backlog item.

**Fix:** stream each image through `helper/uploadS3.js` during `reading_products`,
record the keys in `rehostedKeys`, and write S3 URLs onto the rows. Then backfill every
already-published catalogue before Thursday. One to two days, and the backfill has a
deadline the calendar sets.

This is also where Raunak's own question — *"is the image being used actually set as a
picture in our catalog in right dimensions or not"* — lands. Nothing checks dimensions,
aspect or file size, because nothing touches the bytes at all. The re-host is the step
where that check belongs; the two are one piece of work.

---

## The three capabilities, graded against what exists

### 1. Knowing what is a product — NOT BUILT, and it is a deliberate reversal

`assembleProducts.js:60` is explicit: **"EVERY POST WITH A PHOTO IS A PRODUCT"**, changed
on 2026-09-06 on Raunak's own ruling — *"for us there are posts, so there are products"*
— after a seller with 13 posts was told she had 0. The only remaining exclusion is a post
with no usable photo.

So a personal reel becoming a product is not a bug. It is that rule working exactly as
written, and the observation is the cost of the rule showing up.

The answer is not to put the old gate back. The old gate was the extractor's *opinion*
presented as her inventory, which is what made "0 products" possible. What replaces both:

- **Classify, never exclude.** Every post still becomes a row. The model attaches a
  confidence that this row is a sellable product, and the checklist sorts by it: likely
  products first, "we do not think these are products" collapsed at the bottom with a
  count, pre-unticked but one tap from being included.
- **She decides, and the decision is hers to reverse.** Nothing is silently dropped. A
  seller whose grid genuinely is her catalogue ticks the group back on and loses nothing.
- **Cheap signals before the model.** `mediaType === "VIDEO"` with no price in the
  caption, no product noun, a caption under N characters, a face-dominant frame — several
  of these are free and already captured in `posts[]`. The model runs on what is left.

This also needs a category pass, which does not exist for Instagram at all: a grid has no
taxonomy, so today every Instagram product lands in one bucket while a Shopify import
gets 43 real collections. Grouping her products into her own categories is the same model
call and should ship with it.

### 2. Brand colour from her posts — ALREADY BUILT AND SHIPPED

`import/adapters/instagram/palette.js` samples the profile picture **plus six media
images** (`PALETTE_MEDIA_SAMPLE_SIZE = 6`), extracts four named swatches
(vibrant / muted / dark / light) with node-vibrant, stores them on
`normalised.brand.colours`, and `createImportAccount.js:224` writes them onto the account
— guarded so a merchant who has already chosen colours is never overwritten.

It uses node-vibrant rather than sharp for a recorded reason: sharp's darwin-arm64 build
needs Node ^18.17 || ^20.3 || >=21 and the host runs 19.9.0.

**Nothing to build. What is worth doing is checking it is any good** — six images is a
small sample, and no one has looked at whether the swatch it picks is the brand's colour
or the colour of one bouquet. That is an evaluation, not a feature.

### 3. Picking her template — NOT BUILT

`createImportAccount.js` has no template selection at all — no `template`, no `theme`.
Every imported shop lands on whatever the default is. There are four templates, with a
fifth (`template-bold-v1`) in progress.

The inputs already exist by the time the choice is made: her category, product count,
image aspect ratios, palette, whether her captions are long or bare, whether she has
carousels. This is a classifier with a handful of features, not a language model problem
— and it should always be presented as a suggestion she can change, never a silent
assignment.

---

## Source coverage

The mockup shows seven pills. Reality:

| Source | State |
|---|---|
| Instagram | Live |
| Website | Live, **Shopify only** — the ladder's rungs 2-4 are not built |
| DM2Buy | Adapter not built. Their API 502s from Azure App Gateway; their own storefront renders blank |
| TikTok | Nothing |
| Shopexer | Nothing |
| GitHub | Nothing |
| Linktree | Nothing |

Two of the seven work. The registry makes adding one cheap — `registry.js` plus an
adapter, and the frontend picker is already data-driven — so the cost per source is
mostly the reading strategy, not the plumbing.

**Two of these need questioning before anyone plans them.**

**GitHub is not a shop.** No Indian merchant on this product has a catalogue in a
repository. Unless it is on the mockup for a developer-tools audience nobody has
described, it should come off the row.

**Linktree is a link page, not a catalogue.** It has no products, no prices and no
images beyond icons. What it can honestly do is *find* her shop — read the links, spot
the Instagram handle or the Shopify domain, and hand that to the adapter that can
actually read it. That is a resolver in front of the picker, not a source in it.

**Shopexer** — needs one look at whether it exposes a public feed before it can be
estimated at all.

**The honest sequencing** is that the Website pill covers more real merchants than four
of these combined the moment it grows past Shopify: WooCommerce, and generic
JSON-LD/microdata scraping, would read most Indian storefronts that are not on Shopify.

---

## Order of work

1. **P0 — S3 re-host + backfill.** Deadline set by the expiry, not by us.
2. **Dimension and aspect handling**, in the same pass — it is the same bytes.
3. **Classification + categories.** The largest of the three, and the one that fixes what
   Raunak actually saw.
4. **Template suggestion.** Small once 3 exists, because it reuses the same features.
5. **Palette evaluation.** Not a build.
6. **Sources**, cheapest real coverage first: Website's rungs 2-4, then DM2Buy when their
   API returns, then TikTok. Linktree as a resolver. GitHub off the row unless defended.

## Open questions

1. Does the P0 jump the queue? It should, and everything below moves by two days.
2. Backfill scope: is every job's `posts[]` still around to re-fetch from, or do some
   already-published shops have no recoverable source for their images?
3. What is GitHub doing on the pill row?
4. For classification — is "collapsed at the bottom, pre-unticked, one tap to include"
   the right default, or should a low-confidence row still arrive ticked?
