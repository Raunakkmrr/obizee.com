"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Info, Loader2 } from "lucide-react";

import { GoogleMark } from "@/components/import/marks";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

/**
 * G3 — "Continue with Google", the default identity path.
 *
 * PROVENANCE — Google Identity Services, first-party, loaded from
 * `https://accounts.google.com/gsi/client`; the code-model flow documented at
 * https://developers.google.com/identity/oauth2/web/guides/use-code-model, and the
 * button's geometry, mark placement and permitted wording from
 * https://developers.google.com/identity/branding-guidelines. The mark itself is the
 * real published asset (see `marks.tsx`).
 *
 * WHY NOT GIS's OWN `renderButton()` — design-brief.md §3.3 G3, three reasons in order:
 *   1. It maxes out at `size:"large"` = 40 px tall and fails the 44 px target
 *      (WCAG 2.5.5). There is no configuration escape. A custom button on
 *      `initCodeClient` is Google's own sanctioned alternative and reaches 48 px.
 *   2. The code flow keeps the exchange SERVER-side — the browser never holds an ID
 *      token — which is better than the implicit path `@react-oauth/google` leads with.
 *   3. Zero staleness risk: GIS is versionless and first-party, where
 *      `@react-oauth/google` is a wrapper five months past publish. No new package.
 *
 * THE FOUR STATES ARE THE DESIGN (§2.5), not error handling bolted on:
 *   opening   — Loader2 replaces the G, "Opening Google…"
 *   blocked   — an INFO band (never danger) with TWO real next steps
 *   dismissed — rest, and NO error text anywhere. She closed it on purpose; an error
 *               here accuses her of a mistake she did not make.
 *   matched   — an existing merchant's email is a GOOD outcome, handled by the parent
 *
 * GIS distinguishes the last two for us: `error_callback` fires with
 * `type: "popup_failed_to_open"` when the browser blocked it and `"popup_closed"` when
 * she closed it. Guessing between them would have made the dismissal an error.
 */

type CodeClient = { requestCode: () => void };

type GisErrorType = "popup_failed_to_open" | "popup_closed" | string;

declare global {
  interface Window {
    google?: {
      accounts?: {
        oauth2?: {
          initCodeClient: (config: {
            client_id: string;
            scope: string;
            ux_mode: "popup";
            callback: (response: { code?: string; error?: string }) => void;
            error_callback?: (error: { type?: GisErrorType }) => void;
          }) => CodeClient;
        };
      };
    };
  }
}

const GIS_SRC = "https://accounts.google.com/gsi/client";

/** One `<script>` for the page however many times this component mounts. */
function loadGis(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.google?.accounts?.oauth2) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${GIS_SRC}"]`);
  const node = existing ?? Object.assign(document.createElement("script"), { src: GIS_SRC, async: true, defer: true });
  const ready = new Promise<void>((resolve, reject) => {
    node.addEventListener("load", () => resolve(), { once: true });
    node.addEventListener("error", () => reject(new Error("gis_unreachable")), { once: true });
  });
  if (!existing) document.head.appendChild(node);
  return ready;
}

export type GoogleButtonStatus = "idle" | "opening" | "exchanging";

export default function GoogleButton({
  clientId,
  onCode,
  onUseEmail,
  busy,
  lastUsed,
}: {
  clientId: string | undefined;
  /** Hand the authorization code to the parent, which posts it to /import/auth/google. */
  onCode: (code: string) => Promise<void>;
  /** The blocked band's second next step — focuses the email field. */
  onUseEmail: () => void;
  /** The parent is mid-exchange or mid-create; the whole card is disabled. */
  busy: boolean;
  lastUsed: boolean;
}) {
  const [status, setStatus] = useState<GoogleButtonStatus>("idle");
  const [blocked, setBlocked] = useState<null | "popup" | "unavailable">(null);
  const clientRef = useRef<CodeClient | null>(null);

  useEffect(() => {
    // The script is fetched on mount, not on click: a popup opened inside an async
    // continuation of the click loses the user-gesture flag in Safari and is blocked
    // every time. Warming it here keeps `requestCode()` synchronous with the click.
    if (!clientId) return;
    let cancelled = false;
    loadGis()
      .then(() => {
        const oauth2 = window.google?.accounts?.oauth2;
        if (cancelled || !oauth2) return;
        clientRef.current = oauth2.initCodeClient({
          client_id: clientId,
          scope: "email profile",
          ux_mode: "popup",
          callback: (response) => {
            if (!response.code) {
              setStatus("idle");
              return;
            }
            setStatus("exchanging");
            void onCode(response.code).finally(() => setStatus("idle"));
          },
          error_callback: (error) => {
            setStatus("idle");
            // The one distinction that matters: blocked is our problem to solve for
            // her, closed is her decision and gets no copy at all.
            if (error?.type === "popup_failed_to_open") setBlocked("popup");
          },
        });
      })
      .catch(() => {
        if (!cancelled) setBlocked("unavailable");
      });
    return () => {
      cancelled = true;
    };
  }, [clientId, onCode]);

  const start = useCallback(() => {
    setBlocked(null);
    if (!clientRef.current) {
      setBlocked("unavailable");
      return;
    }
    setStatus("opening");
    clientRef.current.requestCode();
  }, []);

  const disabled = busy || status !== "idle" || !clientId;
  const label =
    status === "opening" ? "Opening Google…" : status === "exchanging" ? "Signing you in…" : "Continue with Google";

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={start}
        disabled={disabled}
        aria-describedby={blocked ? "google-blocked" : undefined}
        className={cn(
          // 48px — the whole reason GIS's own 40px button was rejected (§8.3).
          "relative flex h-12 w-full items-center justify-center gap-3 rounded-[var(--radius-md)]",
          "border border-[color:var(--card-border-strong)] bg-[color:var(--card-ground)]",
          "text-[15px] font-semibold text-[color:var(--text-primary)] shadow-[var(--shadow-1)]",
          "transition-[background-color,box-shadow,transform] [transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)]",
          "hover:bg-[color:var(--card-ground-2)] hover:shadow-[var(--shadow-2)] active:translate-y-px",
          "disabled:pointer-events-none disabled:opacity-60",
        )}
      >
        {status === "idle" ? (
          <GoogleMark size={20} />
        ) : (
          // M19: the spinner is the only proof the request is alive. Reduced motion
          // slows it via the route-level rule; it never stops.
          <Loader2 aria-hidden className="h-5 w-5 animate-spin text-[color:var(--obz-cta)]" />
        )}
        <span className="min-w-0 truncate">{label}</span>
        {lastUsed && status === "idle" ? (
          <span className="ml-1 shrink-0 rounded-[var(--radius-pill)] bg-[color:var(--color-success-bg)] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-success)]">
            Last time
          </span>
        ) : null}
      </button>

      {blocked ? (
        // INFO, never danger: the browser did this, not her. `role="status"` overrides
        // `Alert`'s built-in `role="alert"` for the same reason.
        <Alert
          id="google-blocked"
          role="status"
          className="rounded-[var(--radius-md)] border-[color:var(--color-info-border)] bg-[color:var(--color-info-bg)] p-3 [&>svg]:size-5"
        >
          <Info aria-hidden className="text-[color:var(--color-info)]" />
          <AlertTitle className="text-[13.5px] font-semibold break-words whitespace-normal text-[color:var(--text-primary)]">
            {blocked === "popup"
              ? "Your browser blocked the Google window."
              : "Google sign-in didn't load here."}
          </AlertTitle>
          <AlertDescription>
            {/* TWO real next steps, never one (§2.5). In Instagram's in-app browser —
                where much of this traffic arrives from — the popup path can simply not
                work, so "use my email instead" is not a courtesy, it is the route. */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={start}
                className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] px-3 text-[13.5px] font-semibold text-[color:var(--obz-cta)] underline underline-offset-4 hover:bg-[color:var(--card-ground-2)]"
              >
                Try again
              </button>
              <button
                type="button"
                onClick={onUseEmail}
                className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] px-3 text-[13.5px] font-semibold text-[color:var(--obz-cta)] underline underline-offset-4 hover:bg-[color:var(--card-ground-2)]"
              >
                Use my email instead
              </button>
            </div>
          </AlertDescription>
        </Alert>
      ) : null}
    </div>
  );
}
