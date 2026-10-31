---
name: obizee-rules
description: >-
  The standing rule book for Raunak's oBizee work. Load it BEFORE any change — design,
  content, code, data or deploy — and again before presenting anything. It exists because
  the same failures repeated across one long session: frames clipped because content grew
  and nobody re-measured, a manifest silently overwritten by a second writer, a fake logo
  shipped for hours, screenshots used where a drawing was needed, and work presented
  without ever being looked at. Every rule here is one Raunak had to give twice. Triggers
  on: any oBizee task, design canvas work, website or marketing changes, storefront or
  backend edits, anything about to be shown to him for feedback.
---

# oBizee rule book

Rules earned the hard way. Each one cost him a round trip.

## R0 — TIMESTAMP EVERY UNIT OF WORK

Get the real time (`date "+%Y-%m-%d %H:%M %Z"`), never infer it. Prefix work with
`[YYYY-MM-DD HH:MM IST]`: each command group, each status line, each finding, each
deliverable. He wants elapsed time per task to be countable. Group fast commands under
one stamp — the unit is a piece of work, not a keystroke.

## R1 — LOOK AT IT BEFORE YOU SHOW IT

Never present something you have not rendered and viewed. Computing coordinates and
hoping is how a navigation menu shipped as a hero, an image overflowed its container by
14px, and a page got clipped three times.

**Render it. Open the image. Actually look.** Then present.

## R2 — MEASURE, NEVER GUESS, AND RE-MEASURE AFTER EVERY CHANGE

Any fixed dimension — an artboard frame, a crop offset, a container height — is derived
from a measurement, never typed from memory.

**Content grows every time you edit it.** Adding icons, a section or a bigger footer
changes the height. If the number was right before the edit it is wrong after it.
Re-measure and re-set as part of the same change, not when he notices the clipping.

Automate it so it cannot drift: measurement is an input to the build.

## R3 — ONE OWNER PER FILE

Two scripts writing the same file will silently fight, and the loser's work vanishes.
`canvas.json` was rewritten by a second script on every run, wiping four artboards and
every corrected height, repeatedly, invisibly.

Before writing a generated file, ask what else writes it. Give it exactly one owner and
say so in a comment at the top.

## R4 — REAL ASSETS ONLY

Never draw a stand-in for something that exists. The oBizee logo was a fake "o" square
for hours while the real mark sat in `obizee-dashboard/public/obizee-logo.png` and
`Original-obizee-website/public/Obizee.png`.

Search for the real asset before inventing one: logos, icons, brand colours, fonts,
merchant images (120 merchants have a real `businessImage` on S3).

## R5 — FOUR IMAGE CLASSES. PICK THE RIGHT ONE.

Know before you place an image which of these it is. Getting this wrong is the single
most repeated visual mistake on this project.

**1. Composition** — for a hero, or anywhere one image must stand for the whole product.
Several real surfaces arranged in depth, fanned so each reads, with motion. Never one
flat crop. A cropped navigation menu shipped as a hero once; it proved nothing.

**2. Assembled custom illustration** — for a CONCEPT: how something works, what something
costs, how parts become a whole. Purpose-drawn, showing the pieces and the relationship
between them — materials with their costs converging into a finished product, an order
travelling from DM to doorstep. This is a DRAWING that assembles meaning.

**A chart is not this.** Progress bars, ranked bars and percentage fills are data
displays. Dropping one in where the section is explaining an idea is the same laziness as
pasting a screenshot — it shows numbers moving, not the idea. If the section says "know
what a product costs to make", draw the wool and the hook and the box carrying price tags
and becoming the product. Do not draw a bar at 60%.

**3. Screenshot** — only to prove one specific claim, cropped so that claim fills at
least 40% of the frame, OS chrome removed, nothing truncated.

**4. Chart** — only where the content genuinely IS data the reader must compare.

Before placing any image, name its class out loud. If the honest answer is "it is a
chart because that was quicker to build", it is the wrong image.

## R6 — PROOF BEFORE FEATURES

SitesPlaced puts testimonials at position 2 and its migration offer at 3. Anything that
leads with a feature grid and buries proof at position 12 has the order wrong. A visitor
leaving after two screens must have seen someone vouching.

## R7 — MOTION IS REQUIRED

Static is dead. The competitor runs hover-scale, shadow lift and translate on ~130
elements plus two-direction marquees. Every card surface gets a hover state; anything
"live" gets a pulse; long lists move rather than tile into clutter. Always behind
`prefers-reduced-motion`.

## R8 — TWO-TONE HEADINGS

The words carrying the argument take the brand colour. A heading in one flat colour
wastes the strongest emphasis available.

## R9 — CARDS NEED VISUAL, NOT JUST TEXT

A grid of text-only boxes reads as boring however good the copy is. Icons drawn on a
consistent grid, an accent rule, a number — something for the eye before the reading.

## R10 — POSITIVE FRAMING, AND ACCURATE

"0% commission" beats "1% per order" — and it was also the truer statement, because the
1% is the payment gateway, not oBizee's cut. Find the frame that is both generous and
accurate. Never invent a claim to make it generous.

## R11 — NUMBERS COME FROM A QUERY

Count the rows before describing them. "42 shops with more than 2 products" came from
querying 165 merchants; the four he was first shown were the ones that happened to be
mentioned earlier. Never describe data from memory.

## R12 — MARK EVERY PLACEHOLDER, INVENT NOTHING REAL

Anything not real is visibly marked — `[QUOTE TO COLLECT]`, `[PRESS LOGOS — none yet]`.
Never attribute invented words to a real named person or business; draft them as
awaiting that person's approval instead.

## R13 — IMPROVE WHAT EXISTS

Asked to change a page, edit its actual sections and copy. A from-scratch replacement
throws away work and is not what was asked.

## R14 — FINISH BEFORE ASKING

He reviews in one pass. Do not present half a thing and ask what he thinks — complete
it, check it against the plan, list honestly what is missing, then hand it over.

## R15 — COMPARE STRUCTURALLY, NOT JUST NUMERICALLY

A character-count comparison misses that proof is at position 12. When comparing against
a competitor, compare section order, what each leads with, where proof sits, motion and
visual density — not just how much text there is.

## R16 — FEEDBACK IS GLOBAL, NEVER LOCAL

**This is the rule he has had to repeat more than any other.**

When he criticises one section, he is naming a *class of defect*, not that one instance.
The fix is a sweep of every section the criticism touches — in the same turn, before
handing anything back.

Observed, all on one page, all costing a round trip:
- "these cards are boring" → the card grid was restyled in one section and left identical
  in three others.
- The ₹50,000 line was designed properly in the pricing section while the *same sentence*
  sat in the hero as a plain bordered paragraph.
- "where are the icons" → logos added to one list; the check-circle lists elsewhere stayed
  as identical grey ticks.

**Procedure, mandatory.** On any visual or copy feedback:
1. Write down the rule underneath the complaint ("a bare list of identical ticks is not a
   design", "the number is the argument and must dominate its section").
2. `grep` the page for every other instance of that pattern.
3. Fix all of them.
4. In the hand-off, list each place the rule was applied, so he can see the sweep happened.

Fixing only the screenshotted instance is the wrong answer even when the screenshotted
instance is now perfect.

## R17 — ONE BAR FOR THE WHOLE PAGE

A page is only as good as its weakest section. When one section is taken to a high
standard, that standard becomes the floor for every other section on that page —
immediately, not in a later pass.

Before hand-off, score every section against the best one on the page. Any section that
would embarrass the best one gets rebuilt or removed. Specifically, a section fails if it
is: a grid of identical text boxes, a paragraph where a number should be doing the work,
a list of repeated identical icons, or flat type with no emphasis on the words carrying
the argument.

## R18 — A SKETCH IS AN IMAGE ASSET, NOT CSS

When he asks for a **sketch**, a **rough mark**, a **hand-drawn** anything: it is a drawn
image, exported as a PNG, committed to the repo, and placed with `<img>`.

It is **not** an inline SVG path, not a CSS border-radius, not a pseudo-element. A
geometric ellipse drawn in markup reads as a shape, never as a pen stroke — that was
shipped once and rejected on sight.

**The procedure, every time:**
1. Design it as an image first — Claude artifact / design surface, at 3x the final size.
2. Make it look drawn: overlapping strokes, uneven weight, a wobble in the line, an
   overshoot where the pen carried past its start. Perfect curves are the tell.
3. Export to PNG with a **transparent background** and commit under `public/sketches/`.
4. Place it with `<img>`, positioned over or beside the element — and keep the underlying
   text as real text so crawlers and AI still read it. Never bake the words into the PNG.

## R19 — EDITORIAL BEATS A CARD GRID FOR AN ARGUMENT

Where a section is making a *case* — why sellers are leaving, what changed this year, why
this matters — set it as editorial: a large display headline with the key phrase in a
contrasting face or colour, real prose paragraphs at a readable measure, then named
reasons as a short list. That is what the competitor does on the section that works, and
it reads as journalism rather than as a pitch.

Three equal cards with three equal paragraphs is the wrong form for an argument. Reserve
card grids for genuinely parallel, scannable items — integrations, features, categories.

**Test:** if the three "cards" would read better as three paragraphs, they are paragraphs.

---

## Pre-flight

1. Timestamp ready?
2. Is anything here a real asset I should have fetched instead of drawn?
3. Have I re-measured everything my change affects?
4. Does anything else write the files I am writing?
5. Have I rendered it and looked at it?
6. Is every non-real element visibly marked?

## Post-flight

State what you measured, what you verified by looking, what is still placeholder, and
what is genuinely missing. Never claim completion you have not checked.
