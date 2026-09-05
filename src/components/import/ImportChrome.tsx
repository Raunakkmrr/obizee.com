import Image from "next/image";

/**
 * The vendor's chrome — who made this.
 *
 * V2, stated bluntly: *if this screen appears on a monitor across a room, can a stranger
 * name the product?* The gate is the exact screen where a seller decides whether oBizee
 * is a real company before handing over her email, so an unbranded gate is not a style
 * choice, it is the failure.
 *
 * R4 — REAL ASSET. `public/obizee-mark.png`, 512×512, copied byte-for-byte from
 * `obizee-dashboard/public/obizee-mark.png` (233,877 B), which design-brief.md §6.2 I-9
 * names as the mark. `star_by_obizee/public/OBIZEE-LOGO.png` is a 1080×1080 SQUARE
 * LOCKUP carrying the wordmark and a tagline baked into the bitmap: at 44 px both turn
 * to mush, so the mark is the image and the wordmark is REAL TEXT beside it — crisp at
 * any density, selectable, and readable by a crawler.
 *
 * `components/merchant/Brand.tsx` draws a hand-written cube path instead of any of this
 * and is the R4 defect design-brief.md §6.2 flags. It is NOT touched here: Gate B
 * (2026-09-05 03:10 IST) names it explicitly as an open item, not a fix, and it is not
 * reused here either — its tokens live in the `[data-portal="merchant"]` scope, which
 * this route deliberately does not inherit.
 */
export default function ImportChrome() {
  return (
    // The mark and wordmark NEVER hide, at any height: V2's stranger-across-the-room
    // test is the reason this component exists. Only the gap under it tightens.
    <div className="mb-8 flex items-center gap-3 [@media(max-height:600px)]:mb-3">
      <Image
        src="/obizee-mark.png"
        alt="oBizee"
        width={44}
        height={44}
        priority
        // Served straight from /public. Two reasons, and the second is the blocking one:
        // a 512x512 PNG rendered at 44px through the optimizer saves nothing worth a
        // round trip, and `/_next/image?...&w=96` returns a TRUNCATED, undecodable body
        // here (measured 2026-09-05: 4,096 B, `createImageBitmap` throws, while the raw
        // 233,877 B file and the w=256 variant both decode). The width/height stay, so
        // there is still no layout shift.
        unoptimized
        className="h-11 w-11 rounded-[var(--radius-md)] shadow-[var(--shadow-1)]"
      />
      <div className="flex min-w-0 flex-col leading-none">
        <span className="font-[family-name:var(--font-display)] text-[20px] font-extrabold tracking-tight text-[color:var(--text-primary)]">
          oBizee
        </span>
        <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--obz-cta)]">
          Instagram import
        </span>
      </div>
    </div>
  );
}
