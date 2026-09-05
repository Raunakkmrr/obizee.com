import type { Metadata, Viewport } from "next";

/**
 * /import — route shell.
 *
 * PROVENANCE — DERIVED from `star_by_obizee/app/import/layout.tsx`
 * (branch feat/instagram-import).
 *
 * DIFF, and every line of it is forced by this repo rather than chosen:
 *
 * 1. THE TWO `next/font` DECLARATIONS ARE GONE, and their absence is the point.
 *    The source declared Bricolage_Grotesque + Plus_Jakarta_Sans here purely to
 *    RE-CREATE, on the storefront origin, the type this site already serves — the
 *    seam's move S1. On obizee.com that is not a thing to re-create: `app/layout.tsx`
 *    already sets exactly those two families, the same weights, the same
 *    `--font-display` / `--font-body` variable names, on `<body>` for the whole site.
 *    Re-declaring them here would load the same self-hosted faces a second time under a
 *    second set of hashed variable names for no gain. This is the first of the
 *    storefront-only workarounds the port makes unnecessary.
 *
 * 2. `data-portal="import"` STAYS, and is now the only thing this wrapper does. It is
 *    the selector every token in src/index.css's import block hangs off, so the scope
 *    is still one scope with one owner (R3) — the route's palette cannot leak into the
 *    marketing pages and the marketing pages' orange cannot leak into it.
 *
 * 3. `interactiveWidget: "resizes-content"` is kept verbatim. By default a mobile
 *    browser leaves the LAYOUT viewport at full height when the keyboard opens and
 *    merely scrolls the focused field into the visual one, so a design cannot respond to
 *    the keyboard at all. With this the viewport genuinely shrinks and the
 *    `[@media(max-height:600px)]` rules the ported screens carry actually fire — which
 *    is what keeps the decision, rather than the argument, on screen while she is typing
 *    her email. It is scoped to this route and does not touch the site's root viewport.
 */
export const metadata: Metadata = {
  title: "Import your Instagram shop — oBizee",
  description:
    "Bring your Instagram shop to oBizee. We read your posts and captions and show you exactly what we found before anything is saved.",
  // Not indexable while the Meta App Review is outstanding: until then this route can
  // only serve accounts allow-listed in the Instagram app's development mode.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default function ImportLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-portal="import"
      className="min-h-screen font-sans text-neutral-900 antialiased"
    >
      {children}
    </div>
  );
}
