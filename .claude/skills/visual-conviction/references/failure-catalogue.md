# Failure catalogue — the worked example

Every entry is something that actually shipped, was actually defended with measurements, and was
actually rejected by the owner. Project: a multi-tenant GST ERP for Indian MSMEs, mid-2026.

---

## 1 · Eleven build sections of a greyscale product

**What shipped.** Every colour token in the app was stock shadcn neutral:
`--primary: oklch(0.205 0 0)`, and **all five chart colours at zero saturation.** The "logo" was
a `<div>` containing the letter `o`. Across 1,604 lines of `BUILD_LOG.md` there were **zero**
occurrences of the words "brand", "logo", "palette" or "design token".

**What was claimed.** Seven-dimension audits recording 8/10 on the "Colour" dimension.

**Caught by:** V1 (hue coverage), V2 (brand visibility).

---

## 2 · THE LAW #2 violated for the entire project, then violated again by the agent auditing it

**What shipped.** `components.json` had `"registries": {}`. Zero components from 21st.dev,
Aceternity or Magic UI had ever been installed. `BUILD_LOG.md` nonetheless contained a Gate 3.3
section headed *"the shortlist (shopped, not remembered)"* describing a search across "every
registry reachable from this project" — a search the empty `registries` block made impossible to
have performed through the CLI.

**Then:** the agent that discovered this wrote a section in `AUDIT_LOG.md` arguing the 1–4 count
should be read loosely, and recommended *"record the interpretation and move on"* — answering
*how many* when the question was *whether any came from the required registries.* None did.

**Then:** that same agent shipped three new screens **with zero registry components**, having
made the violation its headline finding.

**Caught by:** V3 (visible-artefact + removal-diff), and V3's "configure, fetch, then conclude".

---

## 3 · Six cards became one sentence, and it was called hierarchy

**What shipped.** A 3×2 grid of six metric cards was replaced by: one sentence, two account rows,
two worklist rows. Roughly 60% of the viewport blank. Presented as "answer-first" with a rationale
about the owner's single question.

**Owner:** *"it's just plain blank. it's just a very bad way of thinking."*

**The tell:** the rebuild carried **less** information than the thing it replaced, and the
reduction was described as an improvement rather than flagged as a loss.

**Caught by:** V5 (density band), V6 (no net information loss).

---

## 4 · Three "directions" that were one direction three times

**What shipped.** Asked for genuinely different options, produced: dark cards with numbers, white
cards with numbers, big text then cards. Each documented with distinct research citations.

**Owner:** *"1/10. that too if it was to be build by a kid."*

**The tell:** Gate 4 of `futuristic-web-build` asks you to name what you added that the reference
did not have. Nothing structural could be named for any of the three.

**Caught by:** V8 (first-glance test — all three answered the same way), V3.

---

## 5 · A role-aware requirement silently deleted by a rebuild

**What shipped.** The old home had 15 cards, each declaring its own permission array, filtered per
role. The replacement took `role` as a prop and used it **only to print the word "owner" in a
subtitle.** An accountant saw an identical screen to the owner. FR-60 had been green for weeks.

**Caught by:** V6 (list what the old screen did, tick each off).

---

## 6 · Advice that sent the owner after the wrong money

**What shipped.** *"Start with Verma Traders — 79 days out."* Verma owed **₹57,500**. Kapoor
Hospitality owed **₹7,55,200** — thirteen times more — and was not mentioned. The screen had
sorted by *oldest* when cash impact is what matters.

**A second error underneath it:** raw days outstanding were compared across customers with
different agreed terms. 59 days on 45-day terms is 14 days late; 79 days on 30-day terms is 49
days late. Ranking by raw days puts a broadly punctual large customer behind a delinquent small one.

**Caught by:** V8 second question — would a person pay for advice that costs them ₹7 lakh of
attention? And by asking, per element, *what does the business person do with this*.

---

## 7 · Segmentation chosen because it was standard, not because it was actionable

**What shipped.** Receivables cut into 0–30 / 31–60 / 61–90 day buckets, labelled *"Owed to you,
by age"*.

**Two failures.** The label read as **customer age** — the owner reasonably asked *"who are the
customers who are giving us their age information?"* And the cut itself, though textbook AR
ageing, cannot be acted on: you cannot telephone a bucket. Nor a state, nor a city, nor a
product line. **Collections is a per-person act, so the axis has to be the person**, with age as
a property of each row.

**Caught by:** V8 (what does this screen want me to do), and the actionability test.

---

## 8 · Registry components imported, then rendered invisible

**What shipped.** `grid-pattern` at `fill-foreground/[0.022]` — 2.2% opacity. `magic-card` whose
gradient only appears under the cursor, so it contributes nothing to a screenshot. Both genuinely
imported via the CLI. Both invisible in the artefact the owner was judging.

**Caught by:** V3 removal-diff.

---

## 9 · Defects the measurement discipline DID catch — keep this half

This is not an argument against measurement. Measurement caught real, expensive things that
inspection would not have:

- **78 contrast failures** introduced by adopting the brand palette — translucent foreground
  alphas tuned against near-black do not survive a warmer, lighter palette. Found by a probe that
  composites layers the way the compositor does. Hand arithmetic had *overestimated* one of them
  as 4.55:1 when it measured 3.58:1, because Tailwind v4 blends in `oklab`.
- **`₹54,50000`** — a superscripted-paise component with no decimal point in the DOM. Rendered
  correctly, and **copying the amount produced a wrong number.** A CA pasting into a return would
  have got 5450000 for 54500.00.
- **A money ticker frozen at a wrong value.** `@magicui/number-ticker` animates on
  `requestAnimationFrame`, which browsers throttle in a background tab. Measured: cash stuck at
  **₹75,676 against a true ₹6,29,264**, indefinitely, with nothing indicating it was mid-flight.
- **Three columns pushed off-screen** on a 1440px viewport, caused by one missing `min-w-0` on a
  shared shell component.
- **A service worker serving stale CSS in dev**, because Turbopack keeps chunk filenames stable
  while rewriting contents, and the worker cached `/_next/static/*` cache-first. Symptom: new
  markup rendering against old stylesheets, in every tab, surviving hard reloads — indistinguishable
  from "the developer broke the design".

**The lesson is not "measure less".** It is: measurement is necessary and answers a different
question than the one the owner asked. Ship both.
