"use client";

import { useCallback, useState } from "react";

import type { Outcome } from "@/components/import/OutcomeBand";
import { startImport, type VerifiedIdentity } from "@/lib/import/identity";

/**
 * WHAT HAPPENS AFTER AN IDENTITY IS PROVEN — one implementation, both paths.
 *
 * PROVENANCE — EXTRACTED from `components/import/GateScreen.tsx:96-130` (commit 880e1d9,
 * UI-006), where this sequence was written, reviewed and measured. The logic, the
 * timings and the branch order are unchanged; only its home is.
 *
 * WHY IT MOVED. UI-007's ticket says the verified code must run "the same
 * session-establishment + job-creation sequence as UI-006's Google-success path". The
 * only two ways to honour "the same" are to call it or to copy it, and a copy of a
 * 600ms dwell plus a Promise.all race plus three outcome branches is a thing that
 * drifts. Recorded as an out-of-ticket touch in the dev report.
 *
 * WHAT IT DELIBERATELY DOES NOT DO: mint, assert or forge a credential for a prospect.
 * `POST /import/jobs` sits behind `verifyToken` and UI-005 correctly returns
 * `token: null` for a seller with no oBizee account, so `startImport` answers
 * `no_session` and this hook reports it honestly as the `prospect` outcome.
 * api-contract.md's 17:20 ruling gives that gap to UI-011 and states in terms that
 * UI-007 does not carry it.
 */

/**
 * How long "Signed in as <email>." is guaranteed to stay on screen before the gate hands
 * over to the capture.
 *
 * A MINIMUM DWELL, and it is a design decision rather than a delay. Measured 2026-09-05
 * on the production build: without it the exchange and the job create both resolve
 * inside 250 ms, `router.replace` fires, and "Signed in as izel@izeljewels.com." is
 * mounted and unmounted between two paints — a merchant sees the screen change with no
 * explanation of WHO she was signed in as. The band and the job creation RACE, so a slow
 * network is never made slower: the screen advances the moment BOTH the job is back and
 * the sentence has had 600 ms to be read. Worst case is 600 ms, inside the one-second
 * bound both UI-006's AC-3 and UI-007's AC-5 set.
 */
export const MATCHED_DWELL_MS = 600;

/**
 * ADDED BY UI-008. Create failures that deserve a WHOLE SCREEN, not a band.
 *
 * `source_not_enabled` is D-6, and design-brief.md §2.7 is blunt about it: *"This is the
 * state the public will actually see on day one. It must be beautiful, not a stub."*
 * Until Meta's App Review lands, EVERY seller who is not allow-listed reaches this
 * exact answer — so rendering it as a one-line red band under a gate she has just
 * filled in would make the modal experience of this feature a form error.
 * `rate_limited` is D-5 and is a wait rather than a refusal, which is equally not a
 * band. Both are refused before any job exists (`createImportJob` checks the kill
 * switch and spends the budget before the insert), so there is no job to poll and no
 * stage rail to show — AC-5's case exactly.
 *
 * Everything else still resolves through the outcome band beside the gate, where a
 * short correction belongs.
 */
export const BLOCKING_CREATE_CODES = ["source_not_enabled", "rate_limited"] as const;

export function useSettle({
  handle,
  onJobStarted,
  onBlocked,
}: {
  handle: string;
  onJobStarted: (jobId: string) => void;
  /** UI-008. Hands D-5 / D-6 to the route so it can render a full outcome panel. */
  onBlocked?: (blocked: { code: string; retryAfterSeconds?: number | null }) => void;
}) {
  const [outcome, setOutcome] = useState<Outcome>({ kind: "none" });
  const [settling, setSettling] = useState(false);

  /** Both paths end here: a proven address, and either a session or not. */
  const settle = useCallback(
    async (identity: VerifiedIdentity, hasSession: boolean) => {
      setSettling(true);
      if (!hasSession) {
        // NOT an error, and not a collision. She proved her address; she simply has no
        // oBizee account yet, which is the normal case for the seller this feature is
        // built for.
        setOutcome({ kind: "prospect", email: identity.email });
        setSettling(false);
        return;
      }
      setOutcome({ kind: "matched", email: identity.email });
      const [started] = await Promise.all([
        startImport(handle),
        new Promise((resolve) => setTimeout(resolve, MATCHED_DWELL_MS)),
      ]);
      setSettling(false);
      if (started.ok === true) {
        onJobStarted(started.jobId);
        return;
      }
      if (started.code === "no_session") {
        setOutcome({ kind: "prospect", email: identity.email });
        return;
      }
      // UI-008 — D-5 and D-6 leave the gate entirely. See BLOCKING_CREATE_CODES.
      if (onBlocked && (BLOCKING_CREATE_CODES as readonly string[]).includes(started.code)) {
        onBlocked({ code: started.code, retryAfterSeconds: started.retryAfterSeconds ?? null });
        return;
      }
      setOutcome({ kind: "error", message: started.message });
    },
    [handle, onJobStarted, onBlocked],
  );

  return { outcome, setOutcome, settling, settle };
}
