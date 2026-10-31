---
name: visual-conviction
description: >-
  The anti-timidity gate for product UI. Load it BEFORE writing any screen, component, dashboard,
  or design system for an application — and again before claiming any UI is done. It exists because
  a specific, repeatable failure keeps happening: UI that passes every measurable check (contrast,
  type scale, imported components, real backend) and is still judged 1/10 by the owner, because it
  has no colour, no visible brand, no perceptible use of the components that were imported, no
  interaction craft, and no wow. Enforces COLOUR PRESENCE, brand visibility, registry components
  that are actually SEEN, a named wow mechanic, a density band, and a hard ban on self-certifying
  aesthetics. Triggers on: build a screen, dashboard, home, design system, tokens, "make the UI",
  "does this look good", reskin, redesign, or any UI the user will look at and judge.
---

# Visual Conviction — the anti-timidity gate

`futuristic-web-build` tells you what to do. **This skill exists because you can satisfy all of
it and still ship something the owner rates 1/10.** That happened. Repeatedly, in one project,
after the doctrine was read, the research was done, and every measurable gate passed.

This is the record of *how* that happens, and the checks that catch it.

## The diagnosis — read this, it is the whole skill

> **You optimise for defensible instead of desirable.**

Contrast ratios, type floors, imported-component counts and cited research are *provable*.
"Does this look expensive" is not. So under pressure you retreat to the provable, ship something
technically immaculate and visually dead, and present the measurements as if they answered the
question. They do not. The owner asked whether it looks worth paying for.

Six specific mechanisms, all observed:

1. **Stripping is mistaken for hierarchy.** Criticised → remove more. Six cards became one
   sentence on an empty canvas, described as "answer-first". It was emptiness with a rationale.
2. **Colour discipline is over-applied into colourlessness.** "Colour carries meaning, never
   decoration" becomes *almost no colour*. Mercury and Linear are restrained **and have a real
   accent doing visible work.** Beige-on-beige is not restraint, it is abdication.
3. **Registry components are imported and then made invisible.** A background pattern at 2%
   opacity. A spotlight card whose gradient only appears under the cursor. THE LAW #2 satisfied
   on paper; nothing on screen a user could point at.
4. **"Wow" is skipped entirely** because product-mode says wow ≠ animation. True — but it says
   wow *is* speed, anticipation, the keyboard path, the total the user did not have to compute.
   None of those got built either.
5. **Research becomes a shield.** A beautiful measured brief, then a screen with less content
   than the thing it replaced. Citations are not craft.
6. **Self-certification.** Scoring your own aesthetics 9/10, or refusing to score at all, which
   is the same dodge wearing humility.

**A skill cannot give you taste. It can stop you shipping an empty screen and calling it done.**

---

## GATE V1 — COLOUR MUST BE PRESENT, not merely disciplined

Discipline governs *what a hue means*. It does not license a greyscale product.

**Colour must be a staged system — primary, secondary, tertiary — declared before any screen.**
"Some colour is present" is not enough; a system means each stage has a defined job and a defined
share of the screen, so a later screen cannot invent its own.

| Stage | Job | Where it appears | Rough share |
|---|---|---|---|
| **Primary** | the brand, and the single "you can act here" signal | primary actions, active nav, brand surfaces, focus | small but unmissable |
| **Secondary** | supporting structure and identity — panel grounds, mastheads, chart fills, section tints | surfaces and containers | the largest coloured area |
| **Tertiary** | accents and state — status bands, badges, severity, emphasis | small marks, always paired with an icon or word | smallest, highest saturation |

Semantic status hues (good / warning / serious) sit **inside tertiary** and are reserved — never
reused as a decorative accent.

**Required on a working screen:** all three stages visibly painted, and at least **three distinct
hue families**. Neutrals never count. "Visible" means a reader can point at it unprompted.

**The brand accent must appear doing real work in at least three places** on the primary screen
(a primary action, an active state, and one identity surface at minimum).

**Check it, do not eyeball it.** Screenshot the rendered screen, then sample:

```
node -e '...' # count pixels whose saturation > 0.15, grouped by hue bucket
```

If **< 4% of non-neutral pixels** carry any hue, the screen is greyscale in practice. FAIL.
If the brand hue appears **only** in one 24px logo, the product is unbranded. FAIL.

**Anti-pattern seen:** a whole ERP whose every colour token was `oklch(L 0 0)` — zero
saturation, including all five chart colours — shipped for eleven build sections while the
`BUILD_LOG` recorded seven-dimension audits at 8/10 on "Colour".

## GATE V2 — BRAND MUST BE VISIBLE, and know whose brand

In a multi-tenant product there are **two** brands and they have different homes:

| Brand | Where it belongs | Where it must never be |
|---|---|---|
| **The vendor** (who sells the software) | chrome — sidebar, sign-in, empty states | in the middle of the customer's data |
| **The tenant** (whose data it is) | the masthead of their primary screen | absent, which is the default failure |

**The vendor's brand — name AND logo — must be visible at all times, and must read as its own
distinct object.** Not a 24px glyph tucked into a sidebar corner. The test is blunt:

> If this screen appears on someone's monitor across a room, or in a screenshot pasted into a
> WhatsApp group, **can a stranger name the product?**

If not, the brand has failed, however tasteful the mark is. That means: the logo at a size where
its form is actually legible, the wordmark set as a wordmark rather than as body text, given its
own visual space — never crowded by nav items or competing with a data label.

**And the tenant's identity is a separate requirement, not a substitute.** The primary screen also
carries whose books these are at real scale — legal name, identifiers, and the period the figures
cover. Not a 14px grey line that would read identically for every customer on the platform.

**Two brands, two jobs, both mandatory:** the vendor is *who made this* and lives in the chrome;
the tenant is *whose data this is* and owns the masthead. Satisfying one does not satisfy the other.

**Check:** render the screen for two different tenants. If the screenshots differ only in a
string, the product has no tenant identity.

## GATE V3 — AN IMPORTED COMPONENT MUST BE SEEN, or it does not count

THE LAW #2 requires 1–4 imported registry components. This gate closes the loophole.

**For every imported component, write one line naming the visible artefact it produces.** Then
prove it: **remove it, screenshot, and diff.** If a reasonable person would not notice the
difference, **it does not count toward the 1–4** and the section is not compliant.

Banned as compliance theatre:
- Background patterns below ~4% opacity
- Effects that only exist on hover, when the screen is judged from a screenshot
- A wrapper whose entire contribution is a border you could have written

**Also:** before claiming a registry "has nothing for this", verify. Both Aceternity and Magic UI
genuinely ship **no** data-table, combobox, date-picker, command menu, empty state or chart —
that finding is real and worth knowing. But it was also once *asserted* by an agent whose
`components.json` had `"registries": {}`, making the search it described impossible to have run.
**Configure, fetch, then conclude.**

## GATE V4 — NAME THE WOW, or there isn't one

Wow on a product screen is **not** animation. It is work the user did not have to do. Name at
least **two, concretely**, before the section ships:

- a total they would otherwise have computed by hand
- a keyboard path that skips clicks
- state that was already there when they arrived (a saved view, a restored filter)
- an instant transition — prefetched navigation, optimistic write, sub-100ms interaction
- a name where a code would have been (a person instead of an ID, a consequence instead of a status)
- a decision made for them (worst-first ordering, the one row that actually needs action)

"It is clean" is not a wow. "It loads fast" is not a wow unless you measured it and it is fast.

**If you cannot name two, the screen is a report, not a product.**

### And record the decisions, including the negative ones

Wow is not only what you added — it is evidence that the choices were *made* rather than defaulted
into. Before the section ships, write down:

1. **Which components, and where.** Each one, the surface it serves, and why it beat the
   alternatives on the shortlist.
2. **Where animation is used** — the specific element, trigger, duration, and what state change it
   explains. Motion with no state change behind it is decoration.
3. **What is deliberately NOT used, and why.** The rejected components, the places left
   deliberately still, the effects ruled out. A missing negative list means nothing was chosen —
   things merely failed to get added, which reads identically to laziness and usually is.

An unrecorded absence is indistinguishable from an oversight. Write the absence down.

## GATE V5 — THE DENSITY BAND

Both failure directions are real, and the empty one is the one you default to.

**Content must occupy 55–85% of the first viewport** on the target desktop width.

- **< 55% → empty.** Reads as unfinished, regardless of how deliberate the whitespace was.
- **> 85% → cluttered.** Nothing can be found.

**Check:** sum the bounding boxes of content elements in the first viewport, divide by viewport
area. Also count **information objects** above the fold — target **5–9**. One hero figure plus
two rows is not a product screen.

## GATE V6a — EVERY SEGMENTATION MUST DEGRADE GRACEFULLY

**The mistake:** choosing how to slice data by asking "what is the standard cut?" or even "what is
actionable?" without asking **"what does this look like on a real tenant's data?"**

Run every breakdown against **five** shapes before committing to it:

| Shape | The question it exposes |
|---|---|
| **Empty** (0 rows) | Is there a real empty state, or a blank panel? |
| **Tiny** (1–2 rows, trivial amounts) | Does a list of two customers owing ₹500 look like a product or an apology? |
| **Typical** (5–20 rows) | Does it earn its space? |
| **Large** (200+ rows) | Does the panel still say something, or become a truncated fragment? |
| **Skewed** (one row is 90% of the total) | Does the design surface the concentration, or bury it? |

**A cut that only works at one of those five is the wrong cut.** A named-debtor list ranked by
amount is excellent for a trader with fifty customers owing lakhs, and embarrassing for a service
firm with two clients owing ₹1,000 — and if the product serves **both business types** (as an ERP
spanning goods and services must), then a panel that only works for one is broken by design.

**The robust answer is usually a statement plus a head, not a list.** A sentence that holds at
every shape — *"₹7,55,200 of ₹8,12,700 sits with one customer"* (concentration), *"across 2 states"*
(exposure), *"₹4,72,000 is more than 30 days past terms"* (severity) — carrying the top one or two
names underneath it as the action. The sentence survives N=1 and N=500; the bare list does not.

**Also check the axis is one the business actually acts on**, and that its label cannot be misread.
"By age" was read as *customer age* by the owner it was built for — a demographic cut of his own
ledger, which no merchant would expect. A label needing explanation has already failed.

## GATE V6b — NO NET INFORMATION LOSS ON A REBUILD

When you replace a screen, **count the information objects before and after.** If the new one
carries fewer, that is a regression to be flagged and approved — never a silent improvement.

Rebuilding also silently drops requirements. Observed: a role-aware home where every card
declared its own permissions was replaced by a screen that ignored role entirely, breaking a
requirement that had been green for weeks. **Before deleting a screen, list what it did, and
tick each one off in the replacement.**

## GATE V7 — YOU DO NOT SCORE YOUR OWN AESTHETICS

Report what you **measured** — contrast, floors, overflow, density ratio, hue coverage, named
wow mechanics, components proven visible. Then stop.

Refusing to score at all is the same dodge as inflating one. **Give the measurements, state
plainly what you think is weak, and let the human's number be the number.**

## GATE V8 — THE FIRST-GLANCE TEST

Screenshot the screen. Look at it for two seconds. Answer, in one sentence:

> **What does this screen want me to do?**

If you cannot, neither can the user. And ask the second question honestly: **would a person pay
for this?** If the answer is "it is correct and functional", that is a no.

---

## Pre-flight — before writing a line of UI

1. Do I know whose brand this is, and do I have its actual colour values?
2. Can I name the three hue families that will appear, and the job each one does?
3. Can I name the wow mechanics — two, concrete?
4. Can I name the imported components **and** the visible artefact each produces?
5. If replacing something: have I listed what it currently does?
6. Do I know what the user thinks good looks like, or am I about to guess? **If guessing —
   ask for one reference product before building, not after the second rejection.**

## Post-flight — before saying anything is done

Run all eight gates. Then report in this shape, and no other:

```
Measured:   contrast N · floor N · density N% · hues N · objects N
Colour:     primary <where> · secondary <where> · tertiary <where>
Brand:      vendor <where, size> · tenant <where> — stranger-can-name-it: yes/no
Components: <name> → <visible artefact>, proven by removal-diff
Animation:  <element> on <trigger>, <duration>, explains <state change>
Not used:   <rejected component / effect> because <reason>
Wow:        1. <work the user didn't do>  2. <…>
Robustness: cut holds at 0 / 2 / 20 / 200 / skewed — yes/no each
Weak:       <what you honestly think is short>
Score:      not mine to give
```

## The calibration this came from

One owner, one project, verbatim:

- *"there are no colors, no colors branding"*
- *"no point of understanding for where the components with 21st.dev is required"*
- *"no wow factors. nothing at all."*
- *"it should not look clustered. it should not look too empty. it should be just perfect."*
- *"you are making me do lot of prompting and not able to understand what do i want"*

That last line is the failure this skill exists to prevent. **The user should not have to
prompt eight times to get colour onto a screen.**

## Reference

`references/failure-catalogue.md` — the full worked example: what was built, what was measured,
what the owner said, and the specific gate that would have caught each one.
