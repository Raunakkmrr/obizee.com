"use client";

/**
 * The poll. One job, until it settles.
 *
 * PROVENANCE — DERIVED from `lib/import/useSettle.ts` (commit d9c348a, UI-007), this
 * route's own hook shape: a `use client` module in `lib/import/`, one `useCallback`
 * effect, state returned as a plain object, every timing constant named and justified
 * in a comment rather than typed inline. DIFF: that hook runs ONCE on a proven
 * identity; this one runs for up to ten minutes and therefore has to care about a
 * hidden tab, a lost connection, and its own unmount.
 *
 * WHY 2 SECONDS, AND WHY NOT ALWAYS. UI-008's ticket sets the visible interval. The
 * hidden-tab interval is this file's own decision and it is not a micro-optimisation:
 * measured extraction is ~9 minutes for a 561-post account, so a tab left open in a
 * background tab would otherwise make 270 authenticated round trips to watch a number
 * nobody is looking at. On `visibilitychange` back to visible it polls IMMEDIATELY, so
 * returning to the tab never shows a stale count — which is the only reason the slower
 * interval is honest.
 */

import { useCallback, useEffect, useRef, useState } from "react";

import {
  estimateRemaining,
  fetchImportJob,
  isSettled,
  phaseOf,
  type Estimate,
  type ImportJobView,
  type JobPollResult,
  type PaceSample,
} from "@/lib/import/job";

/** The ticket's interval, while she is looking at it. */
export const POLL_VISIBLE_MS = 2_000;
/** While the tab is hidden. See the header. */
export const POLL_HIDDEN_MS = 10_000;

/**
 * How many consecutive transport failures are absorbed before the screen says so.
 *
 * NOT zero, deliberately. A phone switching from wifi to mobile data drops exactly one
 * request, and a nine-minute screen that throws a panel up over a single dropped poll
 * would be lying about a job that is still running perfectly well on the server. Three
 * misses is six seconds of genuine silence.
 */
const TRANSPORT_GRACE = 3;

export type ImportJobState = {
  job: ImportJobView | null;
  /** Set only once a real failure has outlived `TRANSPORT_GRACE`, or on 404 / no_session. */
  failure: { code: string; message: string } | null;
  /** True until the first response of any kind lands. Drives the skeleton state. */
  loading: boolean;
  estimate: Estimate;
};

export function useImportJob(jobId: string | null): ImportJobState {
  /**
   * ONE snapshot, STAMPED WITH THE JOB IT BELONGS TO, rather than three pieces of state.
   *
   * The obvious shape — `job`, `failure` and a `loading` flag reset in the effect — puts
   * a synchronous `setLoading(true)` in the effect body, which React's own
   * `set-state-in-effect` rule refuses and which is a cascading render for a value that
   * is derivable. Stamping the snapshot makes "this is a different job now" a RENDER-TIME
   * comparison instead: a retry that swaps the id shows the loading state on the very
   * first render, before any effect has run, rather than one paint of the old job's
   * numbers under the new job's id.
   */
  const [snapshot, setSnapshot] = useState<{
    jobId: string | null;
    job: ImportJobView | null;
    failure: { code: string; message: string } | null;
  }>({ jobId: null, job: null, failure: null });
  const [estimate, setEstimate] = useState<Estimate>({ kind: "unknown" });

  const fresh = snapshot.jobId === jobId;
  const job = fresh ? snapshot.job : null;
  const failure = fresh ? snapshot.failure : null;
  const loading = job === null && failure === null;

  // Refs, not state: none of these should cause a render on its own, and every one of
  // them is read inside a timer callback that must see the CURRENT value rather than
  // the value captured when the effect ran.
  const samples = useRef<PaceSample[]>([]);
  const misses = useRef(0);
  const stopped = useRef(false);

  const apply = useCallback((id: string, result: JobPollResult) => {
    if (result.ok === true) {
      misses.current = 0;
      setSnapshot({ jobId: id, job: result.job, failure: null });
      // The pace record is EXTRACTION's only. `progress.current` is written by
      // `readAndReportCaptions` and by nothing else, so a sample taken during
      // `fetching` (where it is 0/0) would poison the slope with a flat run.
      if (phaseOf(result.job) === "extracting" && result.job.progress.total > 0) {
        const at = Date.now();
        const current = result.job.progress.current;
        const last = samples.current[samples.current.length - 1];
        // Only a CHANGED count is a sample. Recording every poll would add points
        // that carry no information and would drag the measured rate downwards
        // whenever Anthropic pauses.
        if (!last || last.current !== current) samples.current = [...samples.current, { at, current }];
        setEstimate(estimateRemaining(samples.current, result.job.progress.total));
      }
      if (isSettled(result.job)) stopped.current = true;
      return;
    }

    // A missing credential or a job this browser may not read are both final answers,
    // not blips — retrying them just burns requests against a 404 that will not change.
    if (result.code === "no_session" || result.code === "not_found") {
      stopped.current = true;
      setSnapshot((previous) => ({ jobId: id, job: previous.jobId === id ? previous.job : null, failure: result }));
      return;
    }
    misses.current += 1;
    if (misses.current >= TRANSPORT_GRACE) {
      // The last good job is KEPT under the failure. A phone that lost signal at minute
      // six should not also lose the 561 posts it was looking at — the failure panel
      // replaces the screen, but nothing behind it is thrown away, and one successful
      // poll puts it straight back.
      setSnapshot((previous) => ({ jobId: id, job: previous.jobId === id ? previous.job : null, failure: result }));
    }
  }, []);

  useEffect(() => {
    if (!jobId) return;
    // Refs only. Nothing here calls setState synchronously: the snapshot's own job
    // stamp is what makes the previous job's data invisible from the first render.
    stopped.current = false;
    misses.current = 0;
    samples.current = [];

    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const tick = async () => {
      if (cancelled) return;
      const result = await fetchImportJob(jobId);
      if (cancelled) return;
      apply(jobId, result);
      if (cancelled || stopped.current) return;
      timer = setTimeout(tick, document.hidden ? POLL_HIDDEN_MS : POLL_VISIBLE_MS);
    };

    // The first poll is immediate. AC-7's case — she closed the tab and came back to
    // `?job=<id>` — must not spend two seconds on a blank screen before showing her
    // the capture that has been running the whole time.
    void tick();

    // Coming back to the tab re-polls at once rather than waiting out the ten-second
    // hidden interval, which is what makes that interval safe to use at all.
    const onVisible = () => {
      if (document.hidden || cancelled || stopped.current) return;
      if (timer) clearTimeout(timer);
      void tick();
    };
    document.addEventListener("visibilitychange", onVisible);

    // NO ELAPSED-TIME COUNTER, deliberately. A client stopwatch restarted on every
    // mount cannot say how long the JOB has been running — the poll shape carries no
    // `startedAt` — so a tab reopened at minute eight would read "running for 5
    // seconds". The honest figure a seller wants is time REMAINING, which
    // `estimateRemaining` derives from observed progress and refuses to state until it
    // has real evidence. One number, and it is the useful one.
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [jobId, apply]);

  return { job, failure, loading, estimate };
}
