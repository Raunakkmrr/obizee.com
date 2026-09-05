"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, Clock, Info, MessageCircle, RotateCcw, ScrollText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import GroupingChoice from "@/components/import/GroupingChoice";
import MediaMixStrip from "@/components/import/MediaMixStrip";
import SkippedGroups from "@/components/import/SkippedGroups";
import SourceMasthead from "@/components/import/SourceMasthead";
import { WHATSAPP_HREF } from "@/components/import/OutcomeBand";
import { formatCount, type ImportJobView } from "@/lib/import/job";
import {
  carouselThumbs,
  groupSkipped,
  hasPartialFailure,
  mediaSpecimens,
  reportCounts,
  resolveGrouping,
} from "@/lib/import/report";

/** Not a session hand-off — a literal external link, per UI-009's scope. */
const DASHBOARD_HREF = "https://dashboard.obizee.com";

/**
 * SCREEN C — THE REPORT (design-brief.md §2.5), and SCREEN D's question inline on it.
 *
 * ────────────────────────────────────────────────────────────────────────────────
 * IT IS A RESULTS SCREEN, NOT A PERMISSION SCREEN. `api-contract.md`'s CORRECTION is
 * the binding spec and it is unambiguous: capture already happened, unconditionally,
 * and everything on this page is already stored. So there is nothing here to accept,
 * nothing to reject, and no confirm button — the only decision on the page is UI-010's
 * grouping, and even that one is already answered by default. What this screen owes her
 * is an honest account of what we read.
 *
 * WHY THE HEADLINE IS TWO NUMBERS AND NOT A CHART (R17, R5). "We read 561 posts and
 * found 148 products" is the whole argument, and the numbers are the argument, so they
 * take `--text-display` and the brand hue while the sentence around them stays quiet. A
 * summary card grid saying the same thing in four boxes would be four times the ink for
 * the same fact.
 *
 * PROVENANCE — DERIVED from `components/import/WorkingScreen.tsx` (0c65c15, UI-008):
 * eyebrow, two-tone display headline, `SourceMasthead`, then the region that changes,
 * all inside `ImportSlab`. Same rhythm, same tokens, same short-viewport rules. ONE-LINE
 * DIFF: the working screen's region MOVES (a counter, a bar, an estimate) because
 * nothing is decided yet; this one is SETTLED — every number is final, so the region is
 * a read rather than a watch, and the motion is reduced to one 600ms arrival (M16).
 *
 * REUSED UNCHANGED: `SourceMasthead` (UI-008) is R1. The ticket is explicit that the
 * report's masthead is that component in its settled state, not a new one — same
 * component, same `profile`, and it is the reason two different sellers produce visibly
 * different screenshots of this route (V2, tenant identity).
 *
 * THE FOUR DATA STATES (§2.8) are all here and all reachable:
 *   loading   `job === null` -> `ReportSkeleton`, at the FINAL heights (AC-5)
 *   empty     `mediaCount === 0` -> the masthead STILL renders, then one sentence and a
 *             next step. Never a blank page, never the full stack full of zeroes (AC-4)
 *   partial   errors present but posts captured -> an amber `Info` band above R2. The
 *             report renders anyway, because a partial result is a real result
 *   full      everything below
 * ────────────────────────────────────────────────────────────────────────────────
 */
export default function ReportScreen({
  job: incoming,
  handle,
  /** `no_products_found` (D-3) or `timed_out` (D-4). Absent on a normal finish. */
  reason,
  /** D-4's "Try again" and D-3's fallback — back to the gate with the handle kept. */
  onRestartGate,
}: {
  job: ImportJobView | null;
  handle: string | null;
  reason?: string | null;
  onRestartGate: () => void;
}) {
  /**
   * The assembly response IS the poll shape (`ImportController.js:195`), so a grouping
   * change re-renders every count on this page from that one response — no reload, no
   * second GET. UI-010 AC-3.
   */
  const [override, setOverride] = useState<ImportJobView | null>(null);
  const job = override ?? incoming;

  // D-4 — a timed-out job shows its ending FIRST. "See what we got" then reveals the
  // same report against whatever was captured before the watchdog fired (AC-7).
  const [revealed, setRevealed] = useState(false);
  // D-3 — "Show me what we read" opens the skipped list and scrolls to it (AC-6).
  const [openSkipped, setOpenSkipped] = useState(false);
  const skippedRef = useRef<HTMLDivElement>(null);

  const showSkipped = useCallback(() => {
    setOpenSkipped(true);
    // `requestAnimationFrame`, so the accordion has mounted its content before we
    // measure where to scroll to.
    requestAnimationFrame(() => skippedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  const counts = useMemo(() => (job ? reportCounts(job) : null), [job]);
  const specimens = useMemo(() => (job ? mediaSpecimens(job) : []), [job]);
  const groups = useMemo(() => (job ? groupSkipped(job) : []), [job]);
  const thumbs = useMemo(() => (job ? carouselThumbs(job, 3) : []), [job]);

  if (!job || !counts) return <ReportSkeleton />;

  const profile = job.profile;
  const carousels = job.captureSummary?.carousels ?? 0;
  const isEmpty = counts.postsRead === 0 && (profile?.mediaCount ?? 0) === 0;
  const timedOut = reason === "timed_out";
  const noProducts = reason === "no_products_found";

  // ── D-4, before the reveal ────────────────────────────────────────────────
  if (timedOut && !revealed) {
    return (
      <div className="animate-report-enter flex flex-col gap-5 sm:gap-6">
        <Eyebrow>Reading stopped</Eyebrow>
        <h1 className="typo-h1-xl text-balance text-white">
          That took <span className="text-[color:var(--warning-on-dark)]">too long</span>.
        </h1>
        <SourceMasthead profile={profile} handle={handle} />
        <Band tone="warning" icon={Clock} title="Nothing was lost.">
          We saved everything we read before it stopped —{" "}
          <strong className="font-bold text-white">{formatCount(counts.postsRead)} posts</strong>, already
          stored. A partial import is still an import.
        </Band>
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryButton onClick={() => setRevealed(true)}>
            See what we got
            <ArrowRight aria-hidden className="size-4" />
          </PrimaryButton>
          <SecondaryButton onClick={onRestartGate}>
            <RotateCcw aria-hidden className="size-4" />
            Try again
          </SecondaryButton>
        </div>
      </div>
    );
  }

  // ── The empty account (AC-4) ──────────────────────────────────────────────
  if (isEmpty) {
    return (
      <div className="animate-report-enter flex flex-col gap-5 sm:gap-6">
        <Eyebrow>Reading finished</Eyebrow>
        {/* THE MASTHEAD STILL RENDERS. She has to be able to see WHICH account we
            looked at before she can tell us we looked at the wrong one. */}
        <SourceMasthead profile={profile} handle={handle} />
        <h1 className="typo-h1-xl text-balance text-white">This account has no posts yet.</h1>
        <p className="max-w-2xl text-[15px] leading-6 text-[color:var(--slab-text-muted)]">
          We found the account and read it — there was nothing on it to bring over. Post your first
          products on Instagram and run this again, or send us your pictures and a person will do it.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SecondaryButton onClick={onRestartGate}>
            <RotateCcw aria-hidden className="size-4" />
            Try another account
          </SecondaryButton>
          <WhatsAppLink />
        </div>
      </div>
    );
  }

  return (
    <div className="animate-report-enter flex flex-col gap-5 sm:gap-6">
      <Eyebrow>{timedOut ? "What we got" : "Reading finished"}</Eyebrow>

      {/* PARTIAL — an Info band, never danger. §2.5: a partial result is still a result,
          and painting this red would tell a seller her import failed when three captions
          out of 561 were unreadable. Above R2 so it frames the numbers below it. */}
      {hasPartialFailure(job) && !noProducts ? (
        <Band tone="info" icon={Info} title="Some posts couldn't be read.">
          Everything we did read is below and is already saved.
        </Band>
      ) : null}

      {/* R2 — THE HEADLINE. Both numbers at the display step, in the brand hue; the rest
          of the sentence in foreground. R8's two-tone, and R17's "the number is the
          argument". `text-balance` so it breaks into two sensible lines at 390px rather
          than orphaning "products." */}
      <h1 className="typo-h1-xl text-balance text-white">
        We read{" "}
        <span className="typo-display-xl align-baseline text-[color:var(--obz-cta-on-dark)] tabular-nums">
          {formatCount(counts.postsRead)}
        </span>{" "}
        posts and {noProducts ? "didn't find prices" : "found"}
        {noProducts ? (
          "."
        ) : (
          <>
            {" "}
            <span className="typo-display-xl align-baseline text-[color:var(--obz-cta-on-dark)] tabular-nums">
              {formatCount(counts.productsFound)}
            </span>{" "}
            products.
          </>
        )}
      </h1>

      {/* R1 */}
      <SourceMasthead profile={profile} handle={handle} />

      {/* D-3 — the panel, and its two real next steps. */}
      {noProducts ? (
        <Band tone="info" icon={Info} title="We look for a price in the caption.">
          Posts that only say &ldquo;DM to order&rdquo; don&apos;t have one, so there was nothing for us
          to price.
          <span className="mt-3 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton onClick={showSkipped}>
              <ScrollText aria-hidden className="size-4" />
              Show me what we read
            </PrimaryButton>
            <WhatsAppLink label="Or ask a person" />
          </span>
        </Band>
      ) : null}

      {/* R4 — the yield, in one sentence, with a hue AND a word on each half (SC 1.4.1). */}
      <p data-testid="yield-line" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[16px] leading-6 sm:text-[17px]">
        <span className="inline-flex items-center gap-1.5">
          <Check aria-hidden className="size-4 shrink-0 text-[color:var(--kept-green-on-dark)]" />
          <span className="font-extrabold text-[color:var(--kept-green-on-dark)] tabular-nums">
            {formatCount(counts.productsFound)}
          </span>
          <span className="text-white">products kept</span>
        </span>
        <span aria-hidden className="text-[color:var(--slab-text-muted)]">·</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="font-extrabold text-[color:var(--warning-on-dark)] tabular-nums">
            {formatCount(counts.postsSkipped)}
          </span>
          <span className="text-[color:var(--slab-text-muted)]">posts set aside</span>
        </span>
      </p>

      {/* R3 */}
      <MediaMixStrip specimens={specimens} handle={profile?.username ?? handle} />

      {/* R6 — present in the DOM ONLY when something was actually dropped (AC-2). */}
      {counts.droppedOverCap > 0 ? (
        <Band tone="warning" icon={Info} title="We saved the first 50.">
          Your import limit is 50 products at a time.{" "}
          <strong className="font-bold text-white">
            {formatCount(counts.droppedOverCap)} more
          </strong>{" "}
          are still on your Instagram and are not lost — bring them over in a second run.
        </Band>
      ) : null}

      {/* R5 */}
      <div ref={skippedRef}>
        <SkippedGroups groups={groups} defaultOpen={openSkipped || noProducts} handle={profile?.username ?? handle} />
      </div>

      {/* SCREEN D — UI-010. ABSENT FROM THE DOM, not hidden, when she has no carousels
          (AC-1). A question about posts with several photos, asked of a seller who has
          none, is a question that makes the product look like it did not read her shop. */}
      {carousels >= 1 ? (
        <GroupingChoice
          jobId={job.jobId}
          carousels={carousels}
          thumbs={thumbs}
          selected={resolveGrouping(job.assembly?.grouping)}
          onAssembled={setOverride}
        />
      ) : null}

      {/* R7 — the exit. */}
      <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[color:var(--slab-chip-border)] bg-[color:var(--slab-chip-ground)] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <p className="flex items-start gap-2 text-[15px] leading-6">
          <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-[color:var(--kept-green-on-dark)]" />
          <span>
            <span className="font-bold text-white">Your catalogue is saved.</span>
            <span className="block text-[13.5px] text-[color:var(--slab-text-muted)]">
              Nothing here needs your approval — it is already stored.
            </span>
          </span>
        </p>
        <a
          href={DASHBOARD_HREF}
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--obz-cta)] px-5 text-[15px] font-bold text-white transition-colors [transition-duration:var(--motion-fast)] hover:bg-[color:var(--obz-cta-hover)]"
        >
          Open my dashboard
          <ArrowRight aria-hidden className="size-4" />
        </a>
      </div>
    </div>
  );
}

/* ── pieces ──────────────────────────────────────────────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-bold tracking-[0.18em] text-[color:var(--obz-cta-on-dark)] uppercase">
      {children}
    </p>
  );
}

/**
 * The two panel grounds UI-008 measured and shipped, reused rather than re-toned (R3).
 * Each carries an ICON and a TITLE — never the hue alone.
 */
function Band({
  tone,
  icon: Icon,
  title,
  children,
}: {
  tone: "info" | "warning";
  /**
   * PORT DIFF, forced by this repo's React 18 types. The source declared this as
   * `{ className?: string; "aria-hidden"?: boolean }`, which a lucide-react icon
   * satisfies under React 19 types. Under `@types/react` 18.3 an `aria-hidden` prop is
   * `Booleanish` (`boolean | "true" | "false"`), so every lucide glyph is rejected by
   * that narrower shape. `LucideIcon` is the exact type of the four icons actually
   * passed here — narrower than the structural shape, not wider — so nothing that was
   * accepted before is accepted now by accident.
   */
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  const ink = tone === "info" ? "var(--info-on-dark)" : "var(--warning-on-dark)";
  const ground = tone === "info" ? "var(--info-on-dark-bg)" : "var(--warning-on-dark-bg)";
  const border = tone === "info" ? "var(--info-on-dark-border)" : "var(--warning-on-dark-border)";
  return (
    <div
      role="status"
      className="flex items-start gap-3 rounded-[var(--radius-md)] border p-3.5 sm:p-4"
      style={{ background: ground, borderColor: border }}
    >
      <Icon aria-hidden className="mt-0.5 size-5 shrink-0" />
      <div className="min-w-0 text-[14px] leading-5 text-[color:var(--slab-text-muted)]">
        <p className="font-bold" style={{ color: ink }}>
          {title}
        </p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

function PrimaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--obz-cta)] px-5 text-[15px] font-bold text-white transition-colors [transition-duration:var(--motion-fast)] hover:bg-[color:var(--obz-cta-hover)]"
    >
      {children}
    </button>
  );
}

function SecondaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[color:var(--wall-tile-border)] px-5 text-[15px] font-bold text-white transition-colors [transition-duration:var(--motion-fast)] hover:bg-[color:var(--slab-chip-ground)]"
    >
      {children}
    </button>
  );
}

/** The WhatsApp path `MoveYourShop` already offers, linked — not rebuilt (UI-009 scope). */
function WhatsAppLink({ label = "Ask a person" }: { label?: string }) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[color:var(--kept-green-on-dark)] px-5 text-[15px] font-bold text-[color:var(--kept-green-on-dark)] transition-colors [transition-duration:var(--motion-fast)] hover:bg-[color:var(--slab-chip-ground)]"
    >
      <MessageCircle aria-hidden className="size-4" />
      {label}
    </a>
  );
}

/**
 * AC-5 — THE SKELETON, AT THE FINAL HEIGHTS.
 *
 * Every block below is the measured height of the thing it becomes: the eyebrow 20px,
 * the two-line headline 2x42px at the h1 step, the masthead 88px (the same
 * `SourceMasthead` row, whose own skeleton branch handles its interior), the yield line
 * 24px, three media tiles at 190px, the skipped list at 180px. Nothing reflows when the
 * data lands because nothing changes size.
 */
export function ReportSkeleton() {
  return (
    <div data-testid="report-skeleton" className="flex flex-col gap-5 sm:gap-6">
      <Skeleton className="h-5 w-40" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[42px] w-full max-w-2xl" />
        <Skeleton className="h-[42px] w-3/5 max-w-md" />
      </div>
      <Skeleton className="h-[88px] w-full rounded-[var(--radius-lg)]" />
      <Skeleton className="h-6 w-72 max-w-full" />
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <Skeleton className="h-[190px] rounded-[var(--radius-lg)]" />
        <Skeleton className="h-[190px] rounded-[var(--radius-lg)]" />
        <Skeleton className="h-[190px] rounded-[var(--radius-lg)]" />
      </div>
      <Skeleton className="h-[180px] w-full rounded-[var(--radius-lg)]" />
      <span className="sr-only" role="status" aria-live="polite">
        Putting your results together.
      </span>
    </div>
  );
}
