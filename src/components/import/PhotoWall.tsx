"use client";

import { useState } from "react";
import { ImageOff, Layers, Play } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { formatCount, type ImportPostView } from "@/lib/import/job";

/**
 * W4 — THE PHOTO WALL. Her own posts, arriving.
 *
 * PROVENANCE — IMPORTED. `npx shadcn@latest add skeleton` is the pre-arrival tile; the
 * grid, the stagger and the badges are DERIVED from `components/import/CodeCells.tsx`
 * (d9c348a, UI-007), this route's shipped "fixed-size cells in a row, one tone per
 * state" pattern — same radius token, same border token, same per-cell state ladder.
 * UI-008's ticket names `felipemenezes098/skeleton-13` (19010) plus the grid from
 * `elements-/uploadthing-image-grid` (20028) on 21st.dev; `API_KEY_21ST` has no value,
 * so both 401. Declared in the dev report, not silently hand-rolled.
 *
 * ITS THEME TRAP WAS THE WORST ONE IN THIS TICKET. shadcn's `Skeleton` ships
 * `bg-accent`, and this repo's `--color-accent` is the STOREFRONT's bright orange: the
 * twelve loading tiles rendered as twelve orange squares on the dark slab. Re-pointed in
 * `components/ui/skeleton.tsx`; the token it now uses was itself tuned by rendering,
 * because the first value measured 1.13:1 against the slab and the grid was invisible.
 *
 * WHY IT IS NOT A GREY BOX. Every image on this screen is the merchant's own media,
 * from the API (§6.1). No stock, no licensing, and it is why two sellers cannot produce
 * the same screenshot of this route.
 *
 * `<img>`, NOT `next/image`, and it is deliberate. These are signed `scontent-*` URLs
 * with `oh=`/`oe=` expiry params (api-contract.md). Routing them through
 * `/_next/image` would make oBizee's own server fetch and cache a merchant's ephemeral
 * CDN objects on a screen that is polled for nine minutes, and would put the optimizer
 * between the wall and the fast fill that is the whole point of this region. The
 * `onError` path below is what AC-8 measures and it is simpler without the wrapper.
 */

/**
 * TWELVE ON A PHONE, TWENTY-FOUR FROM `lg` — design-brief.md §6.2 I-4's own two numbers.
 *
 * AC-6 asserts the phone number and says so in its own words: *"Given the working screen
 * at 390px … exactly 12 tiles show plus a `+<n> more` text row"*. It is measured at 390
 * and it holds at 390.
 *
 * THE SECOND NUMBER IS A DENSITY FIX, and it came out of measuring rather than taste.
 * At 1440x900 with twelve tiles the screen covered 46% of the first viewport, under V5's
 * 55% floor: the right column ran out of wall two thirds of the way down the slab and
 * left a dead band. Twenty-four tiles is not padding — it is twelve more of HER OWN
 * PHOTOGRAPHS, which is the same move that makes this screen impossible to confuse with
 * another merchant's (V1/V2).
 *
 * DONE IN CSS, NOT IN A MEDIA-QUERY HOOK. All 24 are rendered and tiles 13-24 carry
 * `hidden lg:block`; the overflow line renders both counts, one hidden per breakpoint.
 * A `matchMedia` hook would have to return something on the server, and whatever it
 * returned would be wrong for half the visitors on the first paint.
 */
const VISIBLE_TILES_MOBILE = 12;
const VISIBLE_TILES_DESKTOP = 24;

/**
 * M14 — 40ms per tile, and the CEILING is the reason the constant exists.
 * `--motion-stagger` x 12 = 480ms, inside `--motion-slower` (600ms). A stagger that runs
 * past its own ceiling stops reading as "these arrived" and starts reading as "this is
 * slow", which on this particular screen is the one impression to avoid.
 */
const STAGGER_MS = 40;
const STAGGER_CEILING_MS = 600;

export default function PhotoWall({
  posts,
  totalCaptured,
  handle,
  /** True while nothing has arrived yet — renders the twelve skeletons (§2.8 empty). */
  loading,
}: {
  posts: ImportPostView[];
  totalCaptured: number;
  handle: string | null;
  loading: boolean;
}) {
  const tiles = posts.slice(0, VISIBLE_TILES_DESKTOP);
  const moreMobile = Math.max(0, totalCaptured - Math.min(posts.length, VISIBLE_TILES_MOBILE));
  const moreDesktop = Math.max(0, totalCaptured - tiles.length);

  return (
    <div data-testid="photo-wall">
      {/* 3 columns at 390 (§8.2), 4 from lg. `aspect-square` rather than a fixed 108px:
          the tile then tracks the column width at every viewport instead of leaving a
          gutter at 360 and a gap at 430 — which is what "designed at 390, not squeezed"
          has to mean for a grid. */}
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-4">
        {loading
          ? Array.from({ length: VISIBLE_TILES_DESKTOP }, (_, index) => (
              <Skeleton
                key={`skeleton-${index}`}
                className={`aspect-square w-full rounded-[var(--radius-md)] border border-[color:var(--wall-tile-border)] ${
                  index >= VISIBLE_TILES_MOBILE ? "hidden lg:block" : ""
                }`}
              />
            ))
          : tiles.map((post, index) => (
              <Tile key={post.sourceUrl || index} post={post} index={index} handle={handle} />
            ))}
      </div>

      {/* AC-6 — the overflow is TEXT, not a thirteenth tile pretending to be a photo.
          The number climbs as pages land (100 at a time, three times in thirteen
          seconds), so this row is itself evidence the capture is moving. */}
      {moreMobile > 0 || moreDesktop > 0 ? (
        <p className="mt-2.5 text-[13px] font-semibold text-[color:var(--slab-text-muted)]" data-testid="wall-more">
          <span className="lg:hidden">{moreMobile > 0 ? `+${formatCount(moreMobile)} more` : ""}</span>
          <span className="hidden lg:inline">{moreDesktop > 0 ? `+${formatCount(moreDesktop)} more` : ""}</span>
        </p>
      ) : null}

      {loading ? <span className="sr-only">Waiting for your first posts</span> : null}
    </div>
  );
}

function Tile({
  post,
  index,
  handle,
}: {
  post: ImportPostView;
  index: number;
  handle: string | null;
}) {
  const [broken, setBroken] = useState(false);
  const delay = Math.min(index * STAGGER_MS, STAGGER_CEILING_MS);
  const kind = post.isCarousel ? "carousel" : post.isReel ? "reel" : "photo";

  return (
    <div
      data-testid="wall-tile"
      data-kind={kind}
      data-broken={broken ? "yes" : "no"}
      data-overflow={index >= VISIBLE_TILES_MOBILE ? "desktop-only" : "always"}
      className={`animate-tile-enter relative aspect-square w-full overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--wall-tile-border)] bg-[color:var(--wall-tile-ground)] ${
        index >= VISIBLE_TILES_MOBILE ? "hidden lg:block" : ""
      }`}
      // M14. The only inline style on this screen, and it is the case the rule allows:
      // a per-index delay is a genuinely dynamic value. `prefers-reduced-motion` is
      // already handled at the route level (styles.css:319), which collapses the
      // animation itself; the delay then has nothing left to delay.
      style={{ animationDelay: `${delay}ms` }}
    >
      {post.thumbUrl && !broken ? (
        // Signed, short-lived Meta CDN URLs. See this file's header for why the Next
        // optimizer is deliberately skipped here rather than merely unused.
        <img
          src={post.thumbUrl}
          // §6.2 I-4's alt rule, with what the poll shape actually carries. `projectPost`
          // returns no caption and no timestamp, so a caption-derived alt would be
          // invented. The position and the account are true.
          alt={`Post ${index + 1} from ${handle ? `@${handle}` : "your Instagram"}`}
          loading={index < 4 ? "eager" : "lazy"}
          decoding="async"
          onError={() => setBroken(true)}
          className="size-full object-cover"
        />
      ) : (
        // AC-8 — a 403'd signed URL becomes THIS, never the browser's broken-image
        // glyph, and the tile keeps its exact box so the grid does not reflow around it.
        <div className="flex size-full items-center justify-center">
          <ImageOff aria-hidden className="size-5 text-[color:var(--slab-text-muted)]" />
          <span className="sr-only">Post {index + 1} — picture unavailable</span>
        </div>
      )}

      {/* The tertiary stage, and the reason this grid carries three hue families rather
          than one (§4.5): a carousel is BLUE with `Layers`, a reel is VIOLET with
          `Play`, a single photo carries nothing. Icon AND kind, never colour alone —
          the `sr-only` word is what a screen reader and a greyscale display both get. */}
      {kind !== "photo" ? (
        <span
          className={[
            "absolute top-1.5 right-1.5 flex size-5 items-center justify-center rounded-full border border-[color:var(--slab-ground)] bg-[color:var(--slab-ground)]",
            kind === "reel" ? "text-[color:var(--violet-on-dark)]" : "text-[color:var(--info-on-dark)]",
          ].join(" ")}
        >
          {kind === "reel" ? <Play aria-hidden className="size-3" /> : <Layers aria-hidden className="size-3" />}
          <span className="sr-only">{kind === "reel" ? "Reel" : "Post with several photos"}</span>
        </span>
      ) : null}
    </div>
  );
}
