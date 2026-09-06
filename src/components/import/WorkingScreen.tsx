"use client";

import { useCallback, useMemo, useState } from "react";
import { Check, Info, Laptop } from "lucide-react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import CaptureCounter from "@/components/import/CaptureCounter";
import ImportOutcome from "@/components/import/ImportOutcome";
import PhotoWall from "@/components/import/PhotoWall";
import ReportScreen from "@/components/import/ReportScreen";
import SourceMasthead from "@/components/import/SourceMasthead";
import StageRail from "@/components/import/StageRail";
import { outcomeFor } from "@/components/import/importOutcomes";
import {
  capturingLine,
  countCaptionsUnread,
  deriveStatusReason,
  estimateCopy,
  formatCount,
  isFinished,
  phaseOf,
  type CapturePhase,
  type ImportJobView,
} from "@/lib/import/job";
import { startImport } from "@/lib/import/identity";
import { useImportJob } from "@/lib/import/useImportJob";

/**
 * SCREEN B — WORKING (design-brief.md §2.5), and the three pre-report endings a capture
 * can reach from here.
 *
 * ────────────────────────────────────────────────────────────────────────────────
 * THE ONE FACT THIS SCREEN IS BUILT AROUND, and it is measured, not assumed.
 *
 * Against a real 561-post account (`api-contract.md`, run 2026-09-05):
 *
 *   CAPTURE      `fetching`          six pages of 100 at ~900ms each. All 561 posts
 *                                    landed in ~13 SECONDS, the count climbing
 *                                    monotonically because `appendPage` `$push`es each
 *                                    page before asking for the next.
 *   EXTRACTION   `reading_products`  one Anthropic caption read PER POST, SERIALLY.
 *                                    `readCaptions` is a sequential loop — NOT the
 *                                    `p-queue` concurrency of 5 the brief assumed — at
 *                                    roughly one post a second. 561 posts is about NINE
 *                                    MINUTES, against a ten-minute wall clock.
 *
 * So this screen has to hold a seller's attention for nine minutes without lying to
 * her, and the two halves have completely different tempos. design-brief.md §2.5 already
 * argues that one spinner across both is a lie; the numbers make it worse than that,
 * because one of the halves is over before she has finished reading the headline.
 *
 * TWO VISIBLY DIFFERENT CHARACTERS, therefore, in one region that CHANGES SHAPE:
 *
 *   phase 1, thirteen seconds   the count is the hero. A display-size NumberFlow rolling
 *                               0 -> 100 -> 200 -> 561, a shimmering "Reading posts
 *                               501-561…", and her photographs filling a wall. No bar
 *                               and no estimate: `progress.total` is 0 during `fetching`,
 *                               so a percentage here would be invented, and thirteen
 *                               seconds does not need an estimate anyway.
 *   phase 2, nine minutes       the count is now a SETTLED FACT with a tick on it, and
 *                               the hero becomes a real fraction — "post 231 of 561" — a
 *                               determinate bar, and a minutes-remaining figure measured
 *                               from this session's own observed rate.
 *
 * WHERE THIS DEPARTS FROM THE BRIEF, stated rather than hidden. §5 M13 asks for one
 * continuous shimmer for the whole of `running`. The shimmer is kept for the FAST phase,
 * where "still alive" is the only thing there is to say, and dropped for the slow one,
 * where the moving thing is a real number instead. A nine-minute shimmer is decoration
 * — §5's own test — and it repaints `background-position` on a phone for nine minutes to
 * say nothing. §7's negative list bans "a percentage progress bar" for the same reason
 * the brief could not see: it bans ONE percentage across BOTH halves, which has no
 * honest value. A per-phase fraction over a known denominator is not that number.
 * ────────────────────────────────────────────────────────────────────────────────
 *
 * PROVENANCE of the composition itself — DERIVED from `components/import/CodeStep.tsx`
 * (d9c348a, UI-007): eyebrow, two-tone display headline, the carried identity row, then
 * the working region, all inside `ImportSlab`. Same vertical rhythm, same short-viewport
 * rules, same token vocabulary — which is what makes this read as one beat after the
 * gate rather than as a different product.
 */
export default function WorkingScreen({
  jobId,
  handle,
  /** A retry created a new job — write `?job=<id>` and re-point the poll. */
  onJobStarted,
  /** Back to the gate with the handle intact and editable. D-1/D-2's second action. */
  onRestartGate,
  /** Her verified address, if this browser still holds it. Stated as fact, never promised against. */
  email,
}: {
  jobId: string;
  handle: string | null;
  onJobStarted: (jobId: string) => void;
  onRestartGate: () => void;
  email: string | null;
}) {
  const { job, failure, loading, estimate } = useImportJob(jobId);
  const [retrying, setRetrying] = useState(false);

  const onRetry = useCallback(async () => {
    if (!handle) {
      onRestartGate();
      return;
    }
    setRetrying(true);
    const started = await startImport(handle);
    setRetrying(false);
    // A retry that itself fails falls back to the gate rather than stacking a second
    // panel on top of the first: two error states about the same handle is how a seller
    // decides the product is broken.
    if (started.ok === true) onJobStarted(started.jobId);
    else onRestartGate();
  }, [handle, onJobStarted, onRestartGate]);

  const handlers = useMemo(
    () => ({ onTryAnotherHandle: onRestartGate, onRetry, email }),
    [onRestartGate, onRetry, email],
  );

  // ── The endings ────────────────────────────────────────────────────────────
  // A transport failure that outlived the poll's grace, an expired two-hour prospect
  // credential, or a job this browser may not read.
  if (failure) {
    return <ImportOutcome spec={outcomeFor(failure.code, handlers)} />;
  }

  if (job && (job.status === "failed" || job.status === "cancelled")) {
    const reason = deriveStatusReason(job);
    // D-3 and D-4 belong to UI-009: their next step is "see what we got", which renders
    // report-like content off the posts this job DID capture. They are routed to the
    // report state rather than ended here — the job document is intact either way.
    if (reason === "no_products_found" || reason === "timed_out") {
      return <ReportScreen job={job} handle={handle} reason={reason} onRestartGate={onRestartGate} />;
    }
    return <ImportOutcome spec={outcomeFor(reason, handlers)} />;
  }

  // UI-009. The capture is done and the job document in hand IS the report's data —
  // handing the OBJECT over rather than the id is what stops the report re-fetching a
  // job this component already holds, and is why the hand-off has no loading flash.
  if (job && isFinished(job)) {
    return <ReportScreen job={job} handle={handle} onRestartGate={onRestartGate} />;
  }

  // ── The working screen ─────────────────────────────────────────────────────
  const phase: CapturePhase = job ? phaseOf(job) : "queued";
  const captured = job?.captureSummary?.postsCaptured ?? 0;
  const unread = countCaptionsUnread(job?.warnings ?? []);
  const posts = job?.posts ?? [];
  const profile = job?.profile ?? null;

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <header className="flex flex-col gap-1.5">
        <p className="text-[13px] font-bold tracking-[0.18em] text-[color:var(--obz-cta-on-dark)] uppercase">
          Bringing your shop over
        </p>
        {/* R8 — two-tone. The words carrying the argument take the brand colour, and the
            argument here is that a machine is doing the work she was told took a person
            24 hours. One `<h1>` per screen state (§8.3). */}
        <h1 className="typo-h1-xl text-balance text-white">
          We&apos;re reading{" "}
          <span className="text-[color:var(--brand-warm-on-dark)]">your whole shop</span>.
        </h1>
      </header>

      {/* W0 — populated at about one second, and it stays for the nine minutes after
          that. V4 wow mechanic 1, and V2's tenant identity in the same move. */}
      <SourceMasthead profile={profile} handle={handle} />

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
        <div className="flex min-w-0 flex-col gap-6">
          <PacePanel
            phase={phase}
            captured={captured}
            mediaCount={profile?.mediaCount ?? null}
            current={job?.progress.current ?? 0}
            total={job?.progress.total ?? 0}
            estimate={estimateCopy(estimate)}
            retrying={retrying}
          />

          {/* W6 — muted, `Info`, NEVER red. §2.5: "a partial result is still a result".
              Painting this the danger colour would tell a seller her import failed when
              what actually happened is that three captions out of 561 were unreadable. */}
          {unread > 0 ? (
            <p
              data-testid="partial-failures"
              className="flex items-start gap-2 text-[13.5px] leading-5 text-[color:var(--slab-text-muted)]"
            >
              <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-[color:var(--info-on-dark)]" />
              <span>
                {formatCount(unread)} {unread === 1 ? "post" : "posts"} couldn&apos;t be read. We&apos;ll show you
                which.
              </span>
            </p>
          ) : null}

          {/* W5 — and it is true, and it sits DIRECTLY UNDER THE WAIT rather than at the
              foot of the column. Measured at 1440x900: below the rail it fell past the
              fold in the extracting phase, i.e. the answer to "six more minutes" was
              off screen at the exact moment the question was asked. The capture runs on the queue, not in this tab: the
              job id is in the URL and `useImportJob` picks up wherever it actually is on
              a cold reload (AC-7). This is V4 wow mechanic 3, and on a nine-minute
              screen it is the single most valuable sentence on it. */}
          <p className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[color:var(--slab-chip-border)] bg-[color:var(--slab-chip-ground)] p-3 text-[13.5px] leading-5 text-[color:var(--slab-text-muted)]">
            <Laptop aria-hidden className="mt-0.5 size-4 shrink-0 text-[color:var(--kept-green-on-dark)]" />
            <span>
              <span className="font-semibold text-white">You can close this.</span> We&apos;ll keep going, and this
              link brings you back to exactly here.
            </span>
          </p>
          {/* W1 — three rows, one per REAL step in `IMPORT_JOB_STEPS`. See StageRail. */}
          <StageRail
            step={job?.step ?? null}
            detail={
              phase === "capturing"
                ? capturingLine(captured, profile?.mediaCount ?? null)
                : phase === "extracting" && job
                  ? `Post ${formatCount(job.progress.current)} of ${formatCount(job.progress.total)}`
                  : null
            }
          />

        </div>

        {/* W4 — her own photographs. The strongest colour on this screen is not ours. */}
        <PhotoWall
          posts={posts}
          totalCaptured={captured}
          handle={profile?.username ?? handle}
          loading={loading || posts.length === 0}
        />
      </div>

      {/* §8.3 — ONE polite live region, announcing STEP CHANGES ONLY. A screen reader
          must not read 561 numbers, so the counter and the fraction are deliberately
          NOT in here; only the sentence that changes three times in nine minutes is. */}
      <p className="sr-only" role="status" aria-live="polite">
        {announcementFor(phase, job)}
      </p>
    </div>
  );
}

/** The two-character region. See this file's header for why it has two characters. */
function PacePanel({
  phase,
  captured,
  mediaCount,
  current,
  total,
  estimate,
  retrying,
}: {
  phase: CapturePhase;
  captured: number;
  mediaCount: number | null;
  current: number;
  total: number;
  estimate: string;
  retrying: boolean;
}) {
  // PHASE 2 — nine minutes. The count is finished, so it stops being the hero and
  // becomes a fact with a tick on it; the hero is the fraction and the time.
  if (phase === "extracting" || phase === "branding") {
    const percent = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;
    return (
      <section data-phase={phase} className="flex flex-col gap-4">
        <p className="flex items-center gap-2 text-[14px] text-[color:var(--slab-text-muted)]">
          <Check aria-hidden className="size-4 shrink-0 text-[color:var(--kept-green-on-dark)]" />
          <span>
            <span className="font-bold text-white">{formatCount(captured)}</span> posts captured
          </span>
        </p>

        {phase === "extracting" ? (
          <>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-[19px] leading-7 font-bold text-white">
                Reading post <CaptureCounter value={current} className="tabular-nums" /> of {formatCount(total)}
              </p>
              {/* THE NUMBER SHE ACTUALLY WANTS, and it is measured rather than assumed —
                  `estimateRemaining` refuses to say anything until it has watched at
                  least twelve seconds and six posts go by. Until then it says "a few
                  minutes", which is true, instead of a figure it made up. V4 wow 2. */}
              <p className="text-[14px] font-semibold text-[color:var(--obz-cta-on-dark)]">{estimate}</p>
            </div>

            {/* The determinate bar. `aria-valuenow` etc. come from Radix; the label is
                explicit because "41%" read alone means nothing. */}
            <Progress
              value={percent}
              aria-label={`Reading captions: post ${current} of ${total}`}
              className="h-2.5"
            />

            {/* WHY it is slow, in one line. The two-line version rendered at 1440x900
                pushed the "you can close this" promise below the fold — measured, and
                that promise is the single most valuable sentence on a nine-minute
                screen, so the sentence explaining the wait gave up the words. */}
            <p className="text-[13px] leading-5 text-[color:var(--slab-text-muted)]">
              One caption at a time, looking for the product and the price.
            </p>
          </>
        ) : (
          <p className="flex items-center gap-2 text-[19px] leading-7 font-bold text-white">
            <Spinner className="size-4 text-[color:var(--obz-cta-on-dark)]" />
            Picking up your logo and colours…
          </p>
        )}
      </section>
    );
  }

  // PHASE 1 — thirteen seconds. The count IS the hero, and it climbs.
  return (
    <section data-phase={phase} className="flex flex-col gap-2">
      <p className="flex items-baseline gap-3">
        <span className="typo-display-xl tabular-nums text-white">
          <CaptureCounter value={captured} />
        </span>
        <span className="text-[15px] font-semibold text-[color:var(--slab-text-muted)]">posts captured</span>
      </p>

      {/* M13 — the shimmer, and it is scoped to THIS phase. IMPORTED
          `animated-shiny-text` from Magic UI's keyless registry; its published defaults
          are `via-black/80` and `text-neutral-600/70`, both written for a light ground,
          so on the slab the sweep would exist and be invisible. Re-pointed here. */}
      <AnimatedShinyText shimmerWidth={140} className="mx-0 max-w-none text-[14px]">
        {phase === "queued" || retrying
          ? "Getting your import started…"
          : capturingLine(captured, mediaCount)}
      </AnimatedShinyText>
    </section>
  );
}

/** ≤ 8 words, and it fires three times in nine minutes rather than 270 (§8.3). */
function announcementFor(phase: CapturePhase, job: ImportJobView | null): string {
  if (phase === "queued") return "Starting your import.";
  if (phase === "capturing") return "Reading your Instagram posts.";
  if (phase === "extracting") {
    return `Reading your captions. ${formatCount(job?.progress.total ?? 0)} posts to go through.`;
  }
  if (phase === "branding") return "Picking up your logo and colours.";
  return "Finished reading your shop.";
}
