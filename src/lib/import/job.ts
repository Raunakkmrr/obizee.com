/**
 * The capture job, on the client — the poll shape, the derivations, and the pace.
 *
 * PROVENANCE — DERIVED from `lib/import/identity.ts` (commit 880e1d9, UI-006), this
 * route's own HTTP layer. Same envelope reader, same `{message, data}` contract, same
 * "the shapes are read from the server, not assumed" rule. DIFF: those three endpoints
 * MINT a credential and so post unauthenticated; every call here PRESENTS one, so they
 * go through `authedFetch` — which since UI-011 (`3965dc5`) carries either a merchant
 * token or a two-hour prospect token, both of which `verifyMerchantOrProspectToken`
 * accepts on `/import/jobs*` and nothing else accepts anywhere.
 *
 * THE SHAPE IS READ, NOT GUESSED. Every field below is one field of
 * `OM-backend/controllers/ImportController.js`'s `serialiseJob()` (56c34b8 + 3965dc5),
 * in its order. Nothing is added, and the one thing that is missing is handled
 * explicitly — see `deriveStatusReason`.
 */

import { authedFetch } from "@/lib/merchantAuth";

/** `{message, data}` — `OM-backend/helper/functions.js:2`. */
type Envelope<T> = { message?: string; data?: T };

/**
 * `IMPORT_JOB_STEPS`, verbatim from `OM-backend/import/types/index.js`.
 *
 * THREE IN-FLIGHT VALUES AND A TERMINAL, and that is the whole list. design-brief.md
 * §2.5 W1 names FOUR merchant-facing rows including "Saving your photos", off
 * `architecture.md:668` — a `rehosting_images` step that does not exist in the shipped
 * entity and that no code path can ever set. Rendering it would be a row that is
 * permanently pending on every successful import. UI-008's ticket says the same thing
 * in its own words; this constant is the ground truth both defer to.
 */
export const IMPORT_STEPS = ["fetching", "reading_products", "reading_brand"] as const;
export type ImportStep = (typeof IMPORT_STEPS)[number] | "awaiting_confirmation";

/** `IMPORT_JOB_STATUSES`, verbatim from the same file. */
export type ImportStatus =
  | "queued"
  | "running"
  | "awaiting_confirmation"
  | "confirmed"
  | "failed"
  | "cancelled";

/** One element of `serialiseJob().posts` — `projectPost()`, not the stored post. */
export type ImportPostView = {
  sourceUrl: string;
  mediaType: string | null;
  isCarousel: boolean;
  isReel: boolean;
  /** A RAW INSTAGRAM CDN URL while capture runs. Signed, short-lived; it can 403. */
  thumbUrl: string | null;
  dropReason: string | null;
  hasProducts: boolean;
};

/** `capturedProfileSchema`, projected. Populated from the FIRST fetched page. */
export type ImportProfileView = {
  username: string | null;
  name: string | null;
  biography: string | null;
  website: string | null;
  followersCount: number | null;
  mediaCount: number | null;
  profilePictureUrl: string | null;
};

/** `captureSummarySchema`. Every field optional: the sub-document starts as `{}`. */
export type ImportCaptureSummary = {
  postsCaptured?: number;
  carousels?: number;
  reels?: number;
  singleImages?: number;
  postsWithProducts?: number;
  postsSkipped?: number;
  pagesFetched?: number;
  pagesTruncated?: boolean;
};

export type ImportJobView = {
  jobId: string;
  status: ImportStatus;
  step: ImportStep | null;
  progress: { current: number; total: number };
  sourceHandle: string | null;
  profile: ImportProfileView | null;
  captureSummary: ImportCaptureSummary;
  posts: ImportPostView[];
  assembly: { grouping: string | null; decidedAt: string | null };
  errors: { code: string; message: string; step: string | null; at: string }[];
  warnings: string[];
};

export type JobPollResult =
  | { ok: true; job: ImportJobView }
  /** `no_session` = the prospect token expired or was never there. `not_found` = 404. */
  | { ok: false; code: "no_session" | "not_found" | "unreachable" | string; message: string };

/**
 * `GET /import/jobs/:jobId`.
 *
 * A 404 IS NOT NECESSARILY "DELETED". `findOwnedJob` answers "not yours" and "does not
 * exist" identically, on purpose, so a stranger cannot walk the id space — which means
 * a 404 here most often means the credential in this browser is not the one that
 * created this job. The screen says that rather than inventing a deletion.
 */
export async function fetchImportJob(jobId: string): Promise<JobPollResult> {
  let response: Response;
  try {
    response = await authedFetch(`/import/jobs/${encodeURIComponent(jobId)}`);
  } catch (error) {
    // `authedFetch` throws `NO_TOKEN` when localStorage has none — and it also CLEARS
    // the token on any 401, so an expired two-hour prospect credential arrives here as
    // NO_TOKEN on the very next poll rather than as a status. Both are the same fact to
    // a seller: she has to prove her address again to see this import.
    if ((error as { code?: string })?.code === "NO_TOKEN") {
      return { ok: false, code: "no_session", message: "Your import session has expired." };
    }
    return { ok: false, code: "unreachable", message: "We could not reach oBizee." };
  }

  const payload = (await response.json().catch(() => ({}))) as Envelope<ImportJobView>;
  if (response.status === 200 && payload.data?.jobId) return { ok: true, job: payload.data };
  if (response.status === 404) {
    return { ok: false, code: "not_found", message: payload.message ?? "Import not found." };
  }
  return {
    ok: false,
    code: (payload.data as unknown as { code?: string })?.code ?? "unexpected",
    message: payload.message ?? "We could not read your import.",
  };
}

/**
 * WHY THIS FUNCTION EXISTS, and it is a real gap rather than a preference.
 *
 * `serialiseJob()` returns `status`, `step`, `progress`, `profile`, `posts`, `errors`
 * and `warnings` — and NOT `statusReason`, which is the one field that says WHICH dead
 * end to render. UI-008's AC-4 and AC-5 are both written against it.
 *
 * It is recoverable without a backend change, and safely: `publicCapturePersistence
 * .terminate()` writes `statusReason` and pushes `errors[{code}]` in ONE `updateOne`,
 * from the same `mapped.code` variable, so the last error's code IS the status reason
 * on every terminal job this pipeline can produce. This reads `statusReason` first so
 * that adding the field server-side later needs no change here, and falls back to the
 * last error otherwise.
 *
 * The one-line server fix is in UI-008's dev report as an open item.
 */
export function deriveStatusReason(job: ImportJobView): string | null {
  const declared = (job as unknown as { statusReason?: string | null }).statusReason;
  if (typeof declared === "string" && declared.length > 0) return declared;
  const last = job.errors[job.errors.length - 1];
  return last?.code ?? null;
}

/** Terminal in the schema's sense: nothing further will happen to this job. */
export function isTerminal(job: ImportJobView): boolean {
  return job.status === "confirmed" || job.status === "failed" || job.status === "cancelled";
}

/** Capture finished and there is something to show her. */
export function isFinished(job: ImportJobView): boolean {
  return job.status === "awaiting_confirmation" || job.status === "confirmed";
}

/** Nothing more will be fetched, either way. Stops the poll. */
export function isSettled(job: ImportJobView): boolean {
  return isTerminal(job) || isFinished(job);
}

// ──────────────────────────────────────────────────────────────────────────────
// The pace — the thing this screen is built around
// ──────────────────────────────────────────────────────────────────────────────

/**
 * THE MEASURED FACT, and it is the reason this screen has two halves rather than one
 * spinner (`api-contract.md`, and the live 561-post run on 2026-09-05):
 *
 *   CAPTURE (`fetching`)          100 posts per call at ~900ms. 561 posts across six
 *                                 pages finished in ~13 SECONDS, the count climbing
 *                                 monotonically because each page is `$push`ed before
 *                                 the next is asked for.
 *   EXTRACTION (`reading_products`) one Anthropic caption read PER POST, SERIALLY —
 *                                 `readCaptions` is a plain sequential loop, not the
 *                                 `p-queue` concurrency of 5 that design-brief.md §2.5
 *                                 assumed. Roughly one post per second, so 561 posts is
 *                                 about NINE MINUTES against a ten-minute wall clock
 *                                 (`MAX_JOB_WALL_CLOCK_MS`).
 *
 * Nine minutes is not a spinner's problem. It is an expectation-setting problem, and
 * the only honest answer is the one number she actually wants: how much longer. So the
 * fast half gets a climbing count and a filling wall, and the slow half gets a real
 * fraction and a real estimate. Where design-brief.md §5 M13 asks for one continuous
 * shimmer across both, the numbers win and the deviation is recorded in the dev report.
 */
export type CapturePhase = "queued" | "capturing" | "extracting" | "branding" | "done";

export function phaseOf(job: ImportJobView): CapturePhase {
  if (isFinished(job)) return "done";
  if (job.status === "queued" || job.step === null) return "queued";
  if (job.step === "fetching") return "capturing";
  if (job.step === "reading_products") return "extracting";
  if (job.step === "reading_brand") return "branding";
  return "done";
}

/** One observation of `progress.current`, kept so a RATE can be measured rather than assumed. */
export type PaceSample = { at: number; current: number };

/**
 * The shortest run of evidence that may produce a minutes-remaining claim.
 *
 * Both bars have to clear, and they are deliberately conservative: an estimate off two
 * polls three seconds apart would swing by minutes between renders, and a number that
 * jumps around is worse than no number — it tells a seller the screen is guessing.
 */
const MIN_SAMPLE_SPAN_MS = 12_000;
const MIN_SAMPLE_POSTS = 6;

export type Estimate =
  /** Not enough evidence yet. The caller says "a few minutes", never a made-up figure. */
  | { kind: "unknown" }
  | { kind: "seconds" }
  | { kind: "minutes"; minutes: number };

/**
 * Minutes remaining, measured from THIS session's own observations.
 *
 * Never extrapolated from a constant: the per-post extraction rate depends on caption
 * length and on Anthropic's latency that minute, so a hard-coded "1 post/second" would
 * be a number we made up presented as a number we know. `samples` is the client's own
 * record of `progress.current` over time; the rate is the slope across the whole run,
 * which damps a single slow post without lagging a genuinely slower account.
 *
 * @param samples oldest first
 * @param total   `progress.total`, i.e. how many posts the extraction has to read
 */
export function estimateRemaining(samples: PaceSample[], total: number): Estimate {
  if (samples.length < 2 || total <= 0) return { kind: "unknown" };
  const first = samples[0];
  const last = samples[samples.length - 1];
  const spanMs = last.at - first.at;
  const done = last.current - first.current;
  if (spanMs < MIN_SAMPLE_SPAN_MS || done < MIN_SAMPLE_POSTS) return { kind: "unknown" };

  const perPostMs = spanMs / done;
  const remainingMs = (total - last.current) * perPostMs;
  if (remainingMs <= 0) return { kind: "seconds" };
  if (remainingMs < 60_000) return { kind: "seconds" };
  // Rounded to a whole minute on purpose. "About 6 minutes" is a promise this
  // arithmetic can keep; "5 min 47 s" is a precision it does not have.
  return { kind: "minutes", minutes: Math.max(1, Math.round(remainingMs / 60_000)) };
}

/** ≤ 8 words (D4). Never "later", never a bare spinner. */
export function estimateCopy(estimate: Estimate): string {
  if (estimate.kind === "seconds") return "Nearly done — under a minute left.";
  if (estimate.kind === "minutes") {
    return estimate.minutes === 1
      ? "About a minute left."
      : `About ${estimate.minutes} minutes left.`;
  }
  return "This part takes a few minutes.";
}

/**
 * W3, phase 1 — "Reading posts 501–561…".
 *
 * The RANGE, not a single number, because that is literally what is happening: one call
 * brings back a hundred posts at once, so a per-post counter here would be a fiction
 * dressed as precision. The page size is `media.limit(100)`, `api-contract.md`.
 */
export const CAPTURE_PAGE_SIZE = 100;

export function capturingLine(postsCaptured: number, mediaCount: number | null): string {
  const from = postsCaptured + 1;
  const ceiling = typeof mediaCount === "number" && mediaCount > 0 ? mediaCount : null;
  const to = ceiling ? Math.min(postsCaptured + CAPTURE_PAGE_SIZE, ceiling) : postsCaptured + CAPTURE_PAGE_SIZE;
  if (ceiling && from > ceiling) return "Reading the last of your posts…";
  return `Reading posts ${from.toLocaleString("en-IN")}–${to.toLocaleString("en-IN")}…`;
}

/**
 * W6 — the partial-failure count.
 *
 * `warnings[]` holds `"<code>:<detail>"` strings (`failureReasons.js` `warning()`), and
 * this is `countCaptionsUnread()`'s rule reimplemented on the client for the same
 * reason `lib/import/handle.ts` reimplements `normaliseHandle`: it is one split on the
 * first colon, and the alternative is the number on the screen drifting from the number
 * in the document.
 */
export function countCaptionsUnread(warnings: string[]): number {
  return warnings.filter((entry) => String(entry).split(":", 1)[0] === "caption_unreadable").length;
}

/** Indian digit grouping — this is an Indian seller's post count, not an American one. */
export function formatCount(value: number): string {
  return value.toLocaleString("en-IN");
}
