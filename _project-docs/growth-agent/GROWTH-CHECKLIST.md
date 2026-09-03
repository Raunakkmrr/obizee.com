# oBizee — Growth Checklist

Ordered by **time to first result**, not by size. Everything above the fold
produces something within days; everything below compounds over months.

**Owner:** `RK` Raunak · `CC` Claude
**Status:** `[ ]` open · `[~]` in progress · `[x]` done

---

## The honest position

The funnel was broken and is now fixed. That was necessary and it is not growth.

- A lead can reach you — it could not before, at all
- You can see it happen — GA4 and Clarity are live
- 55 of 57 pages are readable by Google; comparison content went 68 chars → 51,257

None of that finds a single merchant on its own. Search traffic is **2.6 visits a
day**. Even a perfect site converts that to roughly 2 leads a month. The website
was the bottleneck; it is no longer the bottleneck, and it is also not the engine.

**What has not been touched: the acquisition channel.** The original plan put
direct Instagram outreach and merchant referrals as the primary motion, projecting
5–10 merchants a month. Nothing there has started.

---

## NOW — results in days, not months

### [ ] G1. Ask your 8 merchants for referrals · RK · 2 days
Highest-conversion source you have, and completely untapped. Crochet and handmade
sellers know each other; the community is dense and social.

- [ ] Message all 8 personally, not as a broadcast
- [ ] Give them a reason: free months, waived commission, a feature they asked for
- [ ] `CC` can draft the message — ask

**Done looks like:** 8 conversations, 3+ intros.

### [ ] G2. Start direct Instagram outreach · RK · 1 hr/day, ongoing
Manual and unscalable, which is correct at your stage. It is also free, which
matters at ₹110 lifetime revenue per signup.

- [ ] Source from `#crochetindia`, `#handmadeinindia`, `#crochetbusiness`, and the
      followers of your own 8 merchants
- [ ] **Qualify before sending.** Only accounts visibly selling — prices in
      captions, "DM to order", a linktree. This is where lead quality is decided
- [ ] Open with their problem, not your product
- [ ] Log every one in the admin Leads tracker

**The maths:** 20 DMs/day × 20 days = 400/month → 10-15% reply → 40-60
conversations → 10-20% convert → **5-10 merchants/month.** More than SEO has
produced in its entire existence.

### [ ] G3. Request reindexing for the 7 compare pages · RK · 10 min
Search Console → URL Inspection → Request Indexing. Starts the clock on all the
SEO work already shipped. Without it Google may not recrawl for weeks.

### [ ] G4. Post the Reddit drafts · RK · ongoing
`reddit-drafts.md`. Reddit was the **top-cited source** in the AI Overview that
prompted this work. Read the rules at the top before the copy — they matter more.

---

## NEXT — 2 to 4 weeks

### [ ] G5. Positioning · CC + RK · 2-3 days  ← biggest lever
Never done, and it was Phase 1 of the original plan. The site still says
"India's Most Affordable D2C Platform" to everybody, while all eight real
merchants are Instagram handmade sellers.

"Cheapest" actively selects for people who cannot pay. It is not an execution
problem; the targeting is working exactly as designed and the design is wrong.

- [ ] G5a. `RK` **Decide the ICP.** Own the handmade/Instagram niche, or stay broad
- [ ] G5b. `CC` Rewrite homepage positioning, H1, and metadata
- [ ] G5c. `CC` Niche landing pages, starting with crochet

**Blocked on G5a.** Everything else here is downstream of that one decision.

### [ ] G6. Real testimonials · RK + CC · 2 days
The current eight are initials-only, no numbers, no faces, written in one voice —
and they reuse the same names as the fake dashboard mockup in the hero. They are
almost certainly real customers, and the page makes them look invented.

- [ ] Photo or Instagram handle for each
- [ ] One concrete number each: orders/month, hours saved, "stopped losing orders"
- [ ] Two 30-second phone videos — worth more than the entire blog

### [ ] G7. Homepage server rendering · CC · 1 day
93 characters, no `<h1>`. Your highest-authority page contributes nothing to
search or AI visibility, and every Hero/Features edit made so far is invisible.
Mechanical to fix; parked behind the revamp decision.

---

## COMPOUNDING — 1 to 3 months

### [ ] G8. Off-site presence · RK · ongoing
G2, Capterra, SoftwareSuggest. Cited by AI answers. Slower than Reddit, durable.

### [ ] G9. Restart the blog · CC + RK · 2 posts/month
16 posts published on one day in April, nothing since. Two a month forever beats
sixteen at once and silence. Write ICP problems: losing Instagram DM orders,
shipping handmade goods, GST for home businesses.

### [ ] G10. Retire the wrong-audience content · CC · 1 hr
`bina-paisa-online-business-kaise-shuru-kare` and
`sabse-sasta-ecommerce-platform-india` target people who told Google they have no
money. They pull authority toward "free" and "cheapest".

---

## DECISIONS ONLY YOU CAN MAKE

### [ ] G11. Pricing and unit economics · RK
~₹110 lifetime revenue per signup, against ₹500 of signing bonus given away.
Lifetime cash collected: ₹17,950. The funnel now works, but at this take rate
more leads mostly means more small numbers. **No amount of marketing fixes this.**

### [ ] G12. One product, or two · RK
oBizee and the Service ERP. You chose D2C-only for this engagement; the ERP still
exists and still costs attention.

---

## Done

- [x] Lead capture end to end — WhatsApp CTA, qualifying form, site-wide prompt
      (30s / 50% scroll), backend endpoint, admin portal tab. Verified in production.
- [x] GA4 `G-KEY8DDC44L` + Clarity `y3pn3pmsl3` live and transmitting; Search
      Console linked to GA4.
- [x] Rendering fixed: 33/57 → 55/57 pages readable (16 blog posts, 7 compare
      pages, 22 others).
- [x] Comparison content rewritten: 68 chars/page → 51,257 total, all with `<h1>`
      and shared SoftwareApplication schema.
- [x] Facts corrected — Cashfree removed (it was never supported), gateway pricing
      stated for the first time, courier coverage widened, hyperlocal surfaced.
- [x] Contact unified — `admin@obizee.com`, `+91 87969 71046`.
- [x] Reddit drafts written.

---

## How to tell if this is working

| Signal | Now | 30 days | 90 days |
|---|---|---|---|
| Leads captured on site | 0 real | 15-20/mo | 30+/mo |
| Merchants from outreach | 0 | 5-10 | 20-30 |
| Search clicks/day | 2.6 | 4 | 8-10 |
| Merchants reaching first order | unknown | measured | 60% of signups |

**The row that matters is the last one.** Signups are vanity; a merchant who ships
their first order is the only event that means anything.

**The AI Overview test:** in ~6 weeks, search `dm2buy alternative` again. Success
is oBizee's description mentioning hyperlocal delivery and Razorpay/Paytm instead
of "automated Cashfree payments".
