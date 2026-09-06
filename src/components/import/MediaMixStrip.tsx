"use client";

import { Image as ImageIcon, ImageOff, Layers, Play } from "lucide-react";

import { formatCount } from "@/lib/import/job";
import type { MediaKind, MediaSpecimen } from "@/lib/import/report";

/**
 * R3 — THE MEDIA MIX. A SPECIMEN ILLUSTRATION, NOT A CHART (R5, class 2).
 *
 * PROVENANCE — DERIVED from `components/import/PhotoWall.tsx:1-120` (commit 0c65c15,
 * UI-008), this route's shipped "her photographs, in tiles, on the slab" surface: same
 * `--wall-tile-*` grounds and borders, same `AvatarImage`-style error tolerance, same
 * `object-cover` crop, same radius. ONE-LINE DIFF: PhotoWall is a UNIFORM grid whose job
 * is "lots is happening"; this is THREE DIFFERENT TILES whose job is "your posts come in
 * three shapes", so each tile carries its own hue, its own badge and its own count, and
 * the carousel tile FANS its images where PhotoWall would have laid them flat.
 *
 * WHY IT IS NOT A CHART, since that was the obvious build and it is wrong (R5). A
 * 156/34/18 split is not data to compare — she is not deciding anything by ratio. It is
 * a CONCEPT: "some of your posts are one photo, some are several, some are videos", and
 * the honest way to show a concept is to draw the thing. Three bars at 74%/16%/9% would
 * show numbers moving and teach her nothing; `recharts` stays uninstalled.
 *
 * A TYPE WITH A COUNT OF 0 IS ABSENT (AC-1). `mediaSpecimens` filters it out before this
 * renders, so a seller with no reels sees two tiles and no invented shortfall.
 *
 * COLOUR (V1, §4.5). Three hue families, one per shape, each paired with an ICON AND A
 * WORD so the encoding never rests on colour alone (SC 1.4.1): warm for a single photo,
 * violet for a carousel, blue for a reel.
 */

const SPEC: Record<
  MediaKind,
  { label: (n: number) => string; note: string; ground: string; border: string; ink: string }
> = {
  single: {
    label: (n) => (n === 1 ? "single photo" : "single photos"),
    note: "One picture, one product.",
    ground: "var(--media-single-bg)",
    border: "var(--media-single-border)",
    ink: "var(--obz-cta-on-dark)",
  },
  carousel: {
    label: (n) => (n === 1 ? "post with several photos" : "posts with several photos"),
    note: "Swipe posts. You choose how these become products.",
    ground: "var(--media-carousel-bg)",
    border: "var(--media-carousel-border)",
    ink: "var(--violet-on-dark)",
  },
  reel: {
    label: (n) => (n === 1 ? "reel" : "reels"),
    note: "We keep the cover picture.",
    ground: "var(--media-reel-bg)",
    border: "var(--media-reel-border)",
    ink: "var(--info-on-dark)",
  },
};

export default function MediaMixStrip({
  specimens,
  handle,
}: {
  specimens: MediaSpecimen[];
  /** For alt text — the picture belongs to HER account and the alt should say so. */
  handle: string | null;
}) {
  if (specimens.length === 0) return null;

  return (
    /* AC-8 — at 390px this SCROLLS with the third tile's edge deliberately visible
       (`min-w-[70%]` + the trailing spacer), because a strip that fits exactly reads as
       a strip that has nothing more in it. From `sm` the tiles share the row equally. */
    <section
      aria-labelledby="media-mix-heading"
      data-testid="media-mix"
      className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:overflow-visible sm:px-0"
    >
      <h2 id="media-mix-heading" className="sr-only">
        The kinds of post we read
      </h2>
      <ul className="flex w-max gap-3 sm:grid sm:w-full sm:grid-cols-3 sm:gap-4">
        {specimens.map((specimen) => (
          <MediaTile key={specimen.kind} specimen={specimen} handle={handle} />
        ))}
      </ul>
    </section>
  );
}

function MediaTile({ specimen, handle }: { specimen: MediaSpecimen; handle: string | null }) {
  const spec = SPEC[specimen.kind];
  const Badge = specimen.kind === "single" ? ImageIcon : specimen.kind === "carousel" ? Layers : Play;

  return (
    <li
      data-kind={specimen.kind}
      /* M17 — the tile lifts on hover. R7: every card surface gets a hover state, and
         this one is honest about being inert (it is a specimen, not a control), so the
         lift is 1px and the border brightens rather than a scale that would promise a
         click. `--motion-fast`, collapsed by the scope's reduced-motion rule. */
      className="group flex min-w-[62vw] flex-col gap-3 rounded-[var(--radius-lg)] border p-3 transition-[transform,border-color] [transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)] hover:-translate-y-px sm:min-w-0 sm:p-4"
      style={{ background: spec.ground, borderColor: spec.border }}
    >
      <Specimen specimen={specimen} handle={handle} />

      <div className="min-w-0">
        <p className="flex items-baseline gap-2">
          {/* THE NUMBER IS THE ARGUMENT (R17), so it takes the display step and the
              tile's own hue, and the label under it stays quiet. */}
          <span className="text-[28px] leading-8 font-extrabold tabular-nums sm:text-[32px] sm:leading-9" style={{ color: spec.ink }}>
            {formatCount(specimen.count)}
          </span>
          <Badge aria-hidden className="size-4 shrink-0 translate-y-[-2px]" style={{ color: spec.ink }} />
        </p>
        <p className="mt-0.5 text-[14px] leading-5 font-semibold break-words text-white">
          {spec.label(specimen.count)}
        </p>
        <p className="mt-1 text-[12.5px] leading-[17px] text-[color:var(--slab-text-muted)]">{spec.note}</p>
      </div>
    </li>
  );
}

/**
 * The drawing itself.
 *
 * SINGLE   one frame.
 * CAROUSEL three frames FANNED — the shape is the point, and it is the same shape the
 *          grouping question's first diagram uses, so the two read as the same idea.
 * REEL     one frame with a play mark, tall-cropped the way a reel actually is.
 *
 * When a URL 403s (Meta's CDN links are signed and short-lived — `api-contract.md`) the
 * `onError` swap paints the designed empty tile rather than a browser's broken glyph,
 * which is the same mechanism `SourceMasthead` gets free from Radix's `AvatarFallback`.
 */
function Specimen({ specimen, handle }: { specimen: MediaSpecimen; handle: string | null }) {
  const alt = handle ? `A post from @${handle}` : "A post from your Instagram";

  if (specimen.kind === "carousel") {
    const shots = specimen.images.slice(0, 3);
    return (
      <div aria-hidden className="relative h-[86px] w-full sm:h-[96px]">
        {[0, 1, 2].map((index) => (
          <Frame
            key={index}
            src={shots[index] ?? null}
            alt={alt}
            /* MEASURED BY LOOKING, TWICE. The first fan was three 58%-wide frames at
               18% steps: rendered at 1440 they overlapped so far that the tile read as
               ONE torn photograph, which is the opposite of "this post has several".
               46% at 26% steps leaves each frame's own edge visible, which is the whole
               argument the tile is making. */
            className="absolute top-0 h-full w-[46%] transition-transform [transition-duration:var(--motion-base)] [transition-timing-function:var(--motion-ease)]"
            style={{
              left: `${index * 26}%`,
              zIndex: 3 - index,
              transform: `rotate(${(index - 1) * 4}deg)`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div aria-hidden className="relative h-[86px] w-full sm:h-[96px]">
      <Frame src={specimen.images[0] ?? null} alt={alt} className="h-full w-[58%]" />
      {specimen.kind === "reel" ? (
        <span className="absolute top-1/2 left-[29%] flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--slab-ground)]/80 ring-1 ring-[color:var(--media-reel-border)]">
          <Play aria-hidden className="size-3.5 fill-current text-[color:var(--info-on-dark)]" />
        </span>
      ) : null}
    </div>
  );
}

function Frame({
  src,
  alt,
  className,
  style,
}: {
  src: string | null;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`block overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--wall-tile-border)] bg-[color:var(--wall-tile-ground)] ${className ?? ""}`}
      style={style}
    >
      {src ? (
        /* A signed Meta CDN url, short-lived and un-proxyable; next/image would cache a
           URL that expires. (The source carried an `@next/next/no-img-element` disable
           here; this repo's flat eslint config does not load the Next plugin, so the
           directive was an unresolved-rule ERROR. The reason is kept as prose.) */
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="size-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <span className="flex size-full items-center justify-center">
          <ImageOff aria-hidden className="size-4 text-[color:var(--slab-text-muted)]" />
        </span>
      )}
    </span>
  );
}
