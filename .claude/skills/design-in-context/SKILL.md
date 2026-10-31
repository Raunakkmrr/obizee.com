---
name: design-in-context
description: >-
  The placement gate for any visual deliverable. Load it BEFORE presenting a design, image
  treatment, component, section, mockup, or asset for review — and again before calling one
  done. It exists because of a specific repeated failure: showing a design floating on its own,
  with no page around it, no mobile view, an uncropped screenshot, over-long copy, and colours
  that are not actually legible. The owner then has to ask "where does this go?" and "how does
  it look on mobile?" — which means the deliverable failed before it was read. Triggers on:
  present a design, show a treatment, image framing, asset for the site, mockup for approval,
  screenshot for marketing, "how does this look", section design, any artifact whose job is to
  be judged visually.
---

# Design in context — never show an asset without its home

## The diagnosis

> **You show the artefact instead of the artefact in its place.**

A framed image on a blank canvas is not reviewable. The owner cannot tell whether it works,
because "works" means *works in the section it lives in, at the widths real people use*. When
they have to ask where it goes, the deliverable already failed — and asking costs them a full
round trip.

Observed, verbatim: *"Where will you show this? How it will look in the mobile view of the
website? You are not thinking at all."*

Four specific mechanisms, all observed in one session:

1. **The whole screenshot is shown.** An entire phone screen pasted in, including the parts
   that carry no argument. The one row that proves the point is 8% of the image.
2. **Copy written for a document, placed in a design.** Four-line paragraphs and five-item
   lists inside a section that has room for one sentence.
3. **Colour chosen for taste, not legibility.** Warm grey text on warm cream reads as
   "tasteful" at 100% zoom on a large monitor and is unreadable on a phone in daylight.
4. **One viewport shown.** Desktop only, then surprise when the mobile question arrives.

---

## GATE D1 — SHOW IT IN THE PAGE, NEVER ON A CANVAS

Every visual deliverable renders **inside a representation of the page section that will
contain it** — the heading above it, the content below it, the real ground colour behind it.

Not a swatch. Not a floating card. The section.

**Required in the same deliverable:** what sits immediately above, and what sits immediately
below. An image that looks strong alone and collides with the heading above it is a failure
that only the in-place view catches.

**Check:** cover the asset with your hand. Does the remaining page still read as a page? If
there is no remaining page, GATE FAILED.

## GATE D2 — MOBILE IS NOT AN APPENDIX

**Every deliverable shows the mobile rendering, always, in the same artifact — not on
request, not later, not "it's responsive".**

- Show at **390px** minimum. Add 360px when the design is dense.
- Show it **beside or beneath** the desktop view in the same scroll, so the two can be
  compared without switching anything.
- Mobile is not the desktop layout narrowed. State what actually changes: what stacks, what
  is dropped, what is re-cropped, what shrinks.

Most Indian merchant traffic is a phone. A design reviewed only at 1440px has been reviewed
at the width almost nobody uses.

**Check:** if the artifact contains no element narrower than 420px, GATE FAILED.

## GATE D3 — CROP TO THE ARGUMENT

A screenshot is evidence. Show only the part that is evidence.

- Identify the **one thing** the image proves. Crop so that thing occupies **at least 40%**
  of the visible area.
- Remove OS chrome always — status bar, clock, battery, home indicator, browser toolbar.
  They date the image and carry no argument.
- Remove empty states, blank space and repeated rows below the point.
- If the image needs a caption to explain what to look at, the crop is wrong.

**Never** show a full 2622px phone screen because it is what the capture produced.

## GATE D4 — COPY IS SIZED TO THE SLOT

Copy inside a design is not prose. Budget before writing:

| Slot | Ceiling |
|---|---|
| Section heading | 8 words |
| Supporting line | 20 words, one sentence |
| Card / tile title | 6 words |
| Card body | 18 words |
| Label, tag, eyebrow | 4 words |
| List item | 6 words |

Over budget means cut, not shrink the type. If the argument genuinely needs more words, it
needs its own section — not smaller text in this one.

**Check:** count the words in the longest block. Over budget, GATE FAILED.

## GATE D5 — CONTRAST IS MEASURED, NOT ADMIRED

Warm-on-warm and low-contrast neutrals are the standard failure, because they look
sophisticated on the machine the design was made on.

- Body text on its ground: **4.5:1 minimum**. Compute it, do not judge it.
- Large text and headings: 3:1 minimum, but treat 4.5:1 as the target anyway.
- Text on a coloured fill takes the **darkest stop of that same hue family**, never grey and
  never black.
- Never express text colour as `opacity` — it multiplies against the ground and drifts per
  surface.

**Check:** state the computed ratio for every text-on-ground pair in the deliverable. "It
looks fine" is not a measurement.

## GATE D6 — SHOW THE VARIANTS THAT WILL EXIST

One example is a sample, not a system. Show the treatment against the **hardest real case**,
not the flattering one:

- The longest business name, not the shortest
- The store with 3 products, not the one with 403
- The screen that is mostly empty, not the one full of data
- Dark mode as well as light

A treatment proven only on the best-case asset will break on the twentieth one, and it will
break after the work is done.

---

## Pre-flight — before building any visual deliverable

1. What section of what page does this live in? Can I draw it?
2. What does it look like at 390px, concretely?
3. What is the single thing this image proves, and is it cropped to that?
4. What is the word budget for each slot here?
5. What is the contrast ratio of the main text pair?
6. What is the ugliest real case this has to survive?

If any answer is "I'll work that out after they approve it", the deliverable is not ready.

## Post-flight — before presenting

Report in this shape:

```
Placement:  <section>, sits below <x>, above <y>
Viewports:  desktop <w>px shown · mobile <w>px shown
Crop:       <what the image proves> occupies <n>% of frame; OS chrome removed
Copy:       longest block <n> words against a budget of <n>
Contrast:   <fg> on <bg> = <n>:1 · <fg> on <bg> = <n>:1
Hard case:  proven against <longest name / emptiest screen / smallest catalogue>
Open:       <what still needs the owner's decision>
```

## House rules for this owner

- **Improve what exists; do not rebuild.** When asked to change a page, edit its actual
  copy and sections. A from-scratch replacement discards work and is not what was asked.
- **Ask before guessing.** One question with options costs a minute. A wrong guess costs a
  full cycle and the owner's patience.
- **Numbers come from a query, never from memory.** Count the rows before describing them.
- **Never label something in a way that implies a falsehood** — "live stores" implied the
  other 122 were dead. Check what a label says about everything it excludes.
