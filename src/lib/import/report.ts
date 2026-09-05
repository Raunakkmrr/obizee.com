/**
 * The report's derivations — UI-009 + UI-010.
 *
 * PROVENANCE — DERIVED from `lib/import/job.ts` (commit 0c65c15, UI-008): same
 * `{message, data}` envelope reader, same `authedFetch` credential, same "the shapes are
 * READ from the server, never guessed" rule. DIFF: `job.ts` describes a RUNNING capture
 * (pace, phase, estimate); this file describes a FINISHED one (counts, groups, grouping),
 * and it is a separate file because a nine-minute screen and a results screen have no
 * shared state beyond the job document itself.
 *
 * ────────────────────────────────────────────────────────────────────────────────
 * THE ONE FIELD THAT DOES NOT ARRIVE, and it is the trap the ticket's own Notes
 * warned about ("Mongoose Map fields serialise to plain objects by default, but
 * VERIFY rather than assume").
 *
 * `captureSummary.skippedByReason` is declared `{ type: Map, of: Number }`
 * (`OM-backend/Entity/importJobEntity.js:186`). `serialiseJob()` reads it via
 * `job.captureSummary.toObject()` (`ImportController.js:202`), and Mongoose's
 * `toObject()` defaults to `flattenMaps: false` — the opposite of `toJSON()`. So the
 * value that reaches `res.json()` is a real `Map`, which `JSON.stringify` has no
 * serialiser for and renders as `{}`. The count is not wrong on the wire; it is ABSENT
 * from it.
 *
 * Rather than build the report's largest region on a field that may be empty, the
 * groups are DERIVED FROM `posts[]`, which is projected field-by-field
 * (`projectPost()`, same file) and carries `dropReason` per post — the same data the
 * map is a rollup of, and the data the rows themselves need anyway. The server's map is
 * still preferred when it arrives non-empty, so the one-line backend fix
 * (`toObject({ flattenMaps: true })`) needs no change here. Recorded as an open item.
 * ────────────────────────────────────────────────────────────────────────────────
 */

import { authedFetch } from "@/lib/merchantAuth";
import type { ImportJobView, ImportPostView } from "@/lib/import/job";

/**
 * Every reason a post can carry, in merchant language.
 *
 * READ, NOT INVENTED — the keys are the union of three shipped backend enums:
 *   `DROP_REASONS`         `OM-backend/import/adapters/instagram/captionPrompt.js:36`
 *   `CAPTURE_DROP_REASONS` `OM-backend/import/pipeline/captureInstagram.js:44`
 *   `IMAGE_DROP_REASONS`   `OM-backend/import/adapters/instagram/mediaImages.js:41`
 *
 * The VALUES are written for a jewellery seller, not for an engineer, which is the
 * whole point of this screen: `promotion_only` is a code, "This post only asked for a
 * DM" is a reason she can agree or disagree with. An unrecognised code falls back to a
 * humanised form of itself rather than being dropped — a new extractor reason must
 * never make a post vanish from her count.
 */
export const SKIP_REASON_LABELS: Record<string, string> = {
  promotion_only: "Only asked for a DM",
  greeting_or_festival: "A festival greeting",
  restock_or_announcement: "An announcement, not an item",
  testimonial_or_review: "A customer's review",
  no_product_named: "No product named in the caption",
  empty_caption: "No caption to read",
  reel_or_video: "A video with no price in it",
  caption_unreadable: "We couldn't read this caption",
  no_media_url: "Instagram withheld the photo",
  no_video_thumbnail: "This reel had no cover photo",
  no_carousel_children: "The photos wouldn't load",
  unknown_media_type: "A post type we don't read yet",
};

/** A code with no label yet — `no_price_found` → "No price found". Never a raw code. */
export function skipReasonLabel(code: string): string {
  const known = SKIP_REASON_LABELS[code];
  if (known) return known;
  const words = code.replace(/_/g, " ").trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export type SkippedGroup = {
  reason: string;
  label: string;
  count: number;
  posts: ImportPostView[];
};

/**
 * The skipped list, grouped by reason, LARGEST GROUP FIRST.
 *
 * Worst-first ordering is a decision made FOR her (V4): with three groups of 12, 4 and
 * 1 the one worth arguing with is the 12, and it should not be third. Ties fall back to
 * the label so the order is stable across polls — a list that reshuffles itself every
 * two seconds is unreadable.
 *
 * `count` comes from the server's rollup where that rollup arrives populated, and from
 * the rows otherwise; the two agree by construction (`assembleProducts` builds the map
 * by counting the same `dropReason`s). See this file's header for why the fallback is
 * the normal path today.
 */
export function groupSkipped(job: ImportJobView): SkippedGroup[] {
  const buckets = new Map<string, ImportPostView[]>();
  for (const post of job.posts) {
    if (post.hasProducts) continue;
    const reason = post.dropReason ?? "no_product_named";
    const bucket = buckets.get(reason);
    if (bucket) bucket.push(post);
    else buckets.set(reason, [post]);
  }

  const declared = readSkippedByReason(job);

  return [...buckets.entries()]
    .map(([reason, posts]) => ({
      reason,
      label: skipReasonLabel(reason),
      count: declared[reason] ?? posts.length,
      posts,
    }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

/** The server's map when it survived serialisation, `{}` when it did not. */
function readSkippedByReason(job: ImportJobView): Record<string, number> {
  const raw = (job.captureSummary as unknown as { skippedByReason?: unknown })?.skippedByReason;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const out: Record<string, number> = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (typeof value === "number" && Number.isFinite(value)) out[key] = value;
  }
  return out;
}

// ──────────────────────────────────────────────────────────────────────────────
// The media mix (R3)
// ──────────────────────────────────────────────────────────────────────────────

export type MediaKind = "single" | "carousel" | "reel";

export type MediaSpecimen = {
  kind: MediaKind;
  count: number;
  /** Her own photograph, so the specimen is a specimen OF HER SHOP, not an icon. */
  images: string[];
};

/**
 * The three shapes her posts come in, each with her own photographs in it.
 *
 * A TYPE WITH A COUNT OF ZERO IS DROPPED, not rendered reading "0" — AC-1, and the
 * exact case design-brief.md §8.1 records old Direction C failing on the Tiny fixture.
 * A seller with no reels has not lost anything; a tile saying "0 reels" invents a
 * shortfall she does not have.
 *
 * The counts are the SERVER'S (`captureSummary`, re-derived by `assembleProducts` on
 * every assembly run) and the pictures are the client's pick from `posts[]`. Counting
 * `posts[]` here instead would drift the moment a page is truncated.
 */
export function mediaSpecimens(job: ImportJobView): MediaSpecimen[] {
  const summary = job.captureSummary ?? {};
  const pick = (test: (post: ImportPostView) => boolean, want: number): string[] => {
    const found: string[] = [];
    for (const post of job.posts) {
      if (found.length >= want) break;
      if (test(post) && post.thumbUrl) found.push(post.thumbUrl);
    }
    return found;
  };

  const rows: MediaSpecimen[] = [
    {
      kind: "single",
      count: summary.singleImages ?? 0,
      images: pick((p) => !p.isCarousel && !p.isReel, 1),
    },
    {
      kind: "carousel",
      count: summary.carousels ?? 0,
      // THREE, because the fan is the argument: "several photos" is a shape you show,
      // not a number you print. Fewer than three still fans — the tile degrades.
      images: pick((p) => p.isCarousel, 3),
    },
    { kind: "reel", count: summary.reels ?? 0, images: pick((p) => p.isReel, 1) },
  ];

  return rows.filter((row) => row.count > 0);
}

/** The first carousel she actually posted — UI-010's diagram source (AC-2). */
export function firstCarousel(job: ImportJobView): ImportPostView | null {
  return job.posts.find((post) => post.isCarousel && post.thumbUrl) ?? null;
}

/**
 * Every image we hold that belongs to a carousel, newest first.
 *
 * `projectPost()` sends ONE url per post (`thumbUrl`), not the carousel's children — so
 * a single post cannot supply the three thumbnails UI-010's diagram needs. Rather than
 * invent placeholders (R12) the diagram borrows the covers of her next carousels, which
 * are real photographs of her real products and make the same point: these several
 * pictures either stay together or come apart.
 */
export function carouselThumbs(job: ImportJobView, want: number): string[] {
  const out: string[] = [];
  for (const post of job.posts) {
    if (out.length >= want) break;
    if (post.isCarousel && post.thumbUrl) out.push(post.thumbUrl);
  }
  return out;
}

// ──────────────────────────────────────────────────────────────────────────────
// The counts the headline is made of
// ──────────────────────────────────────────────────────────────────────────────

export type ReportCounts = {
  postsRead: number;
  productsFound: number;
  postsSkipped: number;
  droppedOverCap: number;
};

/**
 * WHY `posts.length` IS THE FALLBACK AND NOT `progress.total`.
 *
 * D-4 (`timed_out`) is the case: the watchdog fires with 40 of 208 posts captured, and
 * AC-7 requires the headline to read 40. `progress.total` is what the run INTENDED to
 * read; `postsCaptured` and `posts[]` are what it actually did. A partial report is a
 * real report, so it reports the real number.
 */
export function reportCounts(job: ImportJobView): ReportCounts {
  const summary = job.captureSummary ?? {};
  const postsRead = summary.postsCaptured ?? job.posts.length;
  const withProducts = summary.postsWithProducts ?? job.posts.filter((p) => p.hasProducts).length;
  const yielded = (summary as { productsYielded?: number }).productsYielded;
  return {
    postsRead,
    // `productsYielded` is the honest number under `one_image_one_product`, where one
    // post can become five products. `postsWithProducts` is its floor and is what the
    // older summaries carry, so it is the fallback rather than the source.
    productsFound: typeof yielded === "number" && yielded > 0 ? yielded : withProducts,
    postsSkipped: summary.postsSkipped ?? job.posts.filter((p) => !p.hasProducts).length,
    droppedOverCap: (summary as { productsDroppedOverCap?: number }).productsDroppedOverCap ?? 0,
  };
}

/** A mid-run failure that still produced data — the "partial" state of §2.8. */
export function hasPartialFailure(job: ImportJobView): boolean {
  return job.errors.length > 0 && job.posts.length > 0;
}

// ──────────────────────────────────────────────────────────────────────────────
// The grouping (UI-010)
// ──────────────────────────────────────────────────────────────────────────────

/** `IMPORT_GROUPINGS`, verbatim from `OM-backend/import/types/index.js`. */
export const GROUPINGS = {
  onePostOneProduct: "one_post_one_product",
  oneImageOneProduct: "one_image_one_product",
} as const;

export type Grouping = (typeof GROUPINGS)[keyof typeof GROUPINGS];

/**
 * NO ANSWER IS AN ANSWER, and it is option 1.
 *
 * `resolveGrouping` on the server already resolves null — and anything unrecognised —
 * to `one_post_one_product` (`ImportController.js:421`, and `postAssembly`'s own
 * comment: "the merchant is never blocked on this decision"). This mirrors that ONE
 * rule so the control never renders with nothing selected, which is the only client
 * behaviour the ticket asks for beyond it.
 */
export function resolveGrouping(value: string | null | undefined): Grouping {
  return value === GROUPINGS.oneImageOneProduct
    ? GROUPINGS.oneImageOneProduct
    : GROUPINGS.onePostOneProduct;
}

export type AssemblyResult =
  | { ok: true; job: ImportJobView }
  | { ok: false; message: string };

/**
 * `POST /import/jobs/:jobId/assembly` — re-derive, with NO CALL TO META.
 *
 * The endpoint replaces `normalised.products` from the posts it already holds and
 * returns THE SAME poll shape `GET` returns (`ImportController.js:195-196`, written
 * that way on purpose), so the screen re-renders its counts from this response without
 * a second round trip. Nothing here reaches graph.facebook.com, by construction: the
 * only outbound request this function makes is this one, to OM-backend.
 */
export async function setGrouping(jobId: string, grouping: Grouping): Promise<AssemblyResult> {
  let response: Response;
  try {
    response = await authedFetch(`/import/jobs/${encodeURIComponent(jobId)}/assembly`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ grouping }),
    });
  } catch {
    return { ok: false, message: "We could not reach oBizee." };
  }

  const payload = (await response.json().catch(() => ({}))) as {
    message?: string;
    data?: ImportJobView;
  };
  if (response.status === 200 && payload.data?.jobId) return { ok: true, job: payload.data };
  return { ok: false, message: payload.message ?? "We could not change that just now." };
}
