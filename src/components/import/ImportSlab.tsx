import type { ReactNode } from "react";

/**
 * ImportSlab — the travelling dark panel.
 *
 * PROVENANCE: DERIVED from the live marketing panel at
 * `Original-obizee-website/src/components/MoveYourShop.tsx:39`, whose class list is
 *   `rounded-3xl bg-gray-900 px-6 py-12 sm:px-12 sm:py-16`
 * (named as the provenance source in design-brief.md §3.4, "E0-E10 panel geometry").
 *
 * ONE-LINE DIFF: `bg-gray-900` -> `bg-[color:var(--slab-ground)]`. The marketing site is
 * on Tailwind v3; star is on Tailwind v4, whose `gray-900` is a different oklch value.
 * Using the v4 utility would change the ground and silently break the seam. The token
 * `--slab-ground` (app/merchant/styles.css, `[data-portal="import"]`) carries the v3
 * value. Everything else — radius, padding ramp, breakpoint — is byte-identical.
 *
 * WHY IT EXISTS (design-brief.md §2.6 S2, Gate A 2026-09-05 02:40 IST, Direction 1):
 * She types her handle on obizee.com and lands on star.obizee.com. Two origins, two Next
 * majors, two Tailwind majors. The continuity is carried by GEOMETRY, not by hue —
 * Raunak's Gate A ruling left `orange-500` unfixed on the marketing side, so the slab
 * legitimately CHANGES COLOUR as it travels. The last paint on obizee.com and the first
 * paint on star.obizee.com are the same rectangle at the same size in the same place, and
 * that survives a cold load, a slow connection and `prefers-reduced-motion`.
 *
 * DELIBERATELY PROPS-FREE beyond `children`. Any prop that let a caller change radius,
 * padding or ground would let a future edit drift this rectangle away from the marketing
 * panel's, which is the entire mechanic. If a later ticket needs a variant, change BOTH
 * files in the same commit or the seam is gone.
 */
export default function ImportSlab({ children }: { children: ReactNode }) {
  return (
    // The `max-height` variant is NOT a seam drift and does not need mirroring on the
    // marketing panel: it fires only when an on-screen keyboard has shrunk the viewport
    // below 600px, a state that panel is never in. Radius, width and the sm: padding ramp
    // — the three things the seam is measured on — are untouched at every normal height.
    <div className="rounded-3xl bg-[color:var(--slab-ground)] px-6 py-12 sm:px-12 sm:py-16 [@media(max-height:600px)]:py-6">
      {children}
    </div>
  );
}
