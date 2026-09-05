"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import ImportChrome from "@/components/import/ImportChrome";
import ImportRoute from "@/components/import/ImportRoute";
import { parseHandle } from "@/lib/import/handle";
import { deriveImportState } from "@/lib/import/state";

/**
 * /import — the state-machine shell for the Instagram import journey.
 *
 * PROVENANCE — DERIVED from `star_by_obizee/app/import/page.tsx`
 * (branch feat/instagram-import). The routing decision, the container classes, the
 * handle parse and the props handed to `ImportRoute` are unchanged.
 *
 * THE ONE STRUCTURAL DIFF, AND IT IS FORCED: SERVER COMPONENT -> CLIENT COMPONENT.
 *
 * The source read `searchParams` in an `async` server component ON PURPOSE. Its AC-1
 * wanted `@izeljewels._` in the FIRST server-rendered HTML — seam move S3, the one thing
 * that tells a seller she has landed on HER import rather than on a generic login — and
 * it had to survive a slow phone where hydration is a second away.
 *
 * `next.config.js:2` here is `output: 'export'`. There is no server at request time:
 * every route is HTML written once at build, so `?h=` is unknowable when that HTML is
 * produced. A server component reading `searchParams` does not merely lose the
 * optimisation — `next build` refuses it. THE SEAM IS THEREFORE DEGRADED ON THIS
 * ORIGIN, NOT PRESERVED, and this is recorded as such rather than quietly dropped: the
 * handle now appears on the first CLIENT render instead of in the first byte of HTML.
 *
 * What that costs, honestly: on a cold load the slab paints for one frame with the chip
 * empty before the handle lands. What it does NOT cost is the thing the seam is actually
 * for — the rectangle. `ImportSlab`'s geometry is static markup and is in the build-time
 * HTML, so the panel she was looking at on the landing page is the panel that paints,
 * same width, same radius, same padding ramp, before any JavaScript runs.
 *
 * `useSearchParams` rather than reading `window.location.search` during render: the
 * latter is a hydration mismatch against build-time HTML that by definition has no
 * query, and it would also not re-read when `ImportRoute` calls `router.replace` to
 * correct a handle or to write `?job=<id>`. The `<Suspense>` boundary is not optional —
 * Next requires one around `useSearchParams`, and its fallback is the reason the chrome
 * and the slab are rendered OUTSIDE it: the branding and the rectangle must not be what
 * flickers.
 */

/**
 * `ImportState` / `deriveImportState` USED TO LIVE HERE and now live in
 * `@/lib/import/state`. Next.js 14 validates a page file's export surface and rejects
 * any named export outside its known set; Next 15, the source repo's major, does not.
 * The function itself is unchanged — see that file's header.
 */
function ImportParams() {
  const params = useSearchParams();
  const raw = params.get("h");
  const job = params.get("job");

  // The same rule the server runs on the handle before it ever reaches Instagram's Graph
  // field expression (`src/lib/import/handle.ts`, derived from OM-backend's
  // `normaliseHandle`). A `?h=` that could never be a handle is dropped rather than
  // rendered: the chip is a claim that we know where her shop is, and it must not carry
  // something we already know is not one.
  const parsed = parseHandle(raw);
  const handle = parsed.ok ? parsed.handle : null;

  return (
    <div data-state={deriveImportState({ job })} data-handle={handle ?? ""}>
      <ImportRoute
        state={deriveImportState({ job })}
        handle={handle}
        job={job}
        // Public by necessity: Google Identity Services' `initCodeClient` runs in the
        // browser. The SECRET stays server-side in OM-backend's env.
        googleClientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      />
    </div>
  );
}

export default function ImportPage() {
  return (
    /* One decision belongs on a calm screen, so the gate is CENTRED in the viewport
       rather than pinned to the top with the leftover height dumped underneath it.
       `min-h-svh`, not `min-h-screen`: on a phone `100vh` is the LARGE viewport and
       ignores the browser chrome, which is exactly the case being measured.

       `max-w-7xl px-4 sm:px-6 lg:px-8` is NOT a style choice — it is the seam.
       `src/components/MoveYourShop.tsx` wraps the marketing slab in exactly this
       container, so the rectangle is the same 1216px at 1440 on both sides of the hop.
       Change this only by changing both files. */
    <main className="mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8 [@media(max-height:600px)]:py-4">
      <ImportChrome />
      {/* The fallback is deliberately `null`, not a spinner. The chrome above and the
          slab inside `ImportRoute` are the two things that must not flash; a spinner
          here would replace a rectangle that is already correct with a loading state
          that is not. In a static export this boundary resolves on the same tick as
          hydration. */}
      <Suspense fallback={null}>
        <ImportParams />
      </Suspense>
    </main>
  );
}
