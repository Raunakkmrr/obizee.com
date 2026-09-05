/**
 * The gate's HTTP layer and its one piece of memory.
 *
 * PROVENANCE — DERIVED from `lib/merchantAuth.ts`, this repo's shipped auth helper.
 * DIFF: that file's `authedFetch` REQUIRES a token; these three endpoints are what mint
 * one, so they post unauthenticated. Everything after a successful exchange —
 * `setMerchantToken`, the `merchant_session` cookie, `authedFetch` — is that file's,
 * called not copied, exactly as UI-006's scope demands ("reuse its existing exported
 * functions — do not reimplement the cookie-setting logic").
 *
 * THE SHAPES ARE READ FROM THE SERVER, NOT ASSUMED.
 * `OM-backend/helper/functions.js:2` — every response is `{message, data?}`.
 * `OM-backend/controllers/ImportAuthController.js` (46d01cd, UI-005):
 *   POST /import/auth/google      200 {token, merchant, isNewAccount, email}
 *   POST /import/auth/otp/send    202 {expiresInSeconds}
 *   failures                      {message, data:{code}} with the codes below.
 * `OM-backend/controllers/ImportController.js` (56c34b8, UI-004):
 *   POST /import/jobs             202 {jobId, status}
 */

import { useSyncExternalStore } from "react";

import { WEBSITE_API_URL } from "@/lib/runtime-config";
import { authedFetch, setMerchantToken } from "@/lib/merchantAuth";

/** Which path she used last time. The ticket names this key; do not rename it. */
export const LAST_AUTH_METHOD_KEY = "import_last_auth_method";

/**
 * The proven identity, kept locally so the capture screen can name her without asking
 * again. NOT a credential and never sent as one: a client-asserted identity is
 * forgeable, so the server must mint its own — see the dev report's open item.
 */
export const IMPORT_IDENTITY_KEY = "import_identity";

export type AuthMethod = "google" | "email";

export type VerifiedIdentity = {
  method: AuthMethod;
  email: string;
  /** True when no oBizee merchant exists for this address yet (UI-005's AC-5). */
  isNewAccount: boolean;
};

/** `{message, data}` — `helper/functions.js:2`. */
type Envelope<T> = { message?: string; data?: T };

type IdentityPayload = {
  token: string | null;
  merchant: { id: string; email: string; name: string | null } | null;
  isNewAccount: boolean;
  email: string;
};

export type ApiFailure = {
  ok: false;
  code: string;
  message: string;
  /**
   * Seconds the SERVER says to wait, from its `Retry-After` header. Null on every
   * failure that is not a 429. UI-007's resend countdown resyncs to this.
   */
  retryAfterSeconds?: number | null;
};
export type IdentityOk = { ok: true; identity: VerifiedIdentity; hasSession: boolean };

/** localStorage throws in a private-mode iframe; a memory of last time is not worth a crash. */
function safeRead(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeWrite(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* no memory this visit; every path below still works without it */
  }
}

export function readLastAuthMethod(): AuthMethod | null {
  const raw = safeRead(LAST_AUTH_METHOD_KEY);
  return raw === "google" || raw === "email" ? raw : null;
}

/** Cross-tab only; a write in THIS tab does not fire `storage`, and need not. */
function subscribeToStorage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

/**
 * Which path she used last time, safe to call during render.
 *
 * `useSyncExternalStore` rather than `useState` + `useEffect`: localStorage IS an
 * external store, it does not exist on the server, and the server snapshot must be
 * `null` or the first client paint would disagree with the server HTML — which is
 * exactly what AC-1 depends on not happening. Both snapshots return a primitive, so
 * there is no new object per render to loop on.
 */
export function useLastAuthMethod(): AuthMethod | null {
  return useSyncExternalStore(subscribeToStorage, readLastAuthMethod, () => null);
}

export function rememberAuthMethod(method: AuthMethod) {
  safeWrite(LAST_AUTH_METHOD_KEY, method);
}

export function rememberIdentity(identity: VerifiedIdentity) {
  safeWrite(IMPORT_IDENTITY_KEY, JSON.stringify(identity));
}

/**
 * ADDED BY UI-008. The address she verified, read back.
 *
 * The working screen and its endings need it for ONE thing: to say "you've already
 * verified izel@…, so you won't be asked again" on D-6, rather than putting a second
 * form in front of a woman who filled one in thirty seconds ago. It is a FACT ABOUT
 * WHAT SHE DID, not a credential — this file's own header already says a client-asserted
 * identity is forgeable and that the server mints its own — and nothing here is ever
 * sent anywhere. A corrupt or absent value is simply an absent name, and every panel
 * that reads it has copy for that case.
 */
export function readIdentity(): VerifiedIdentity | null {
  return parseIdentity(safeRead(IMPORT_IDENTITY_KEY));
}

/**
 * The verified address alone, safe to call during render.
 *
 * `useSyncExternalStore`, exactly like `useLastAuthMethod` above and for exactly the
 * same three reasons: localStorage IS an external store, it does not exist on the
 * server, and the server snapshot must be `null` or the first client paint disagrees
 * with the server HTML — which is what UI-006's AC-1 rests on.
 *
 * IT RETURNS A STRING, NOT THE IDENTITY OBJECT, and that is not a convenience.
 * `getSnapshot` is compared by reference; returning a freshly parsed object every call
 * would give React a new value on every render and loop forever. Both snapshots here
 * return a primitive.
 */
export function useVerifiedEmail(): string | null {
  return useSyncExternalStore(
    subscribeToStorage,
    () => parseIdentity(safeRead(IMPORT_IDENTITY_KEY))?.email ?? null,
    () => null,
  );
}

/** One parser, so the hook and the plain read cannot disagree about a corrupt value. */
function parseIdentity(raw: string | null): VerifiedIdentity | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<VerifiedIdentity>;
    if (typeof parsed?.email !== "string" || parsed.email.length === 0) return null;
    return {
      method: parsed.method === "google" ? "google" : "email",
      email: parsed.email,
      isNewAccount: Boolean(parsed.isNewAccount),
    };
  } catch {
    return null;
  }
}

/**
 * POST to the public gate. No `Authorization` header: these routes sit OUTSIDE
 * `protectedRoutes` (`OM-backend/routes/index.js:698-700`) precisely because a caller
 * here has no token yet.
 */
async function postPublic<T>(
  path: string,
  body: unknown,
): Promise<Envelope<T> & { status: number; retryAfterSeconds: number | null }> {
  let response: Response;
  try {
    response = await fetch(`${WEBSITE_API_URL.replace(/\/$/, "")}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    // A dropped connection, a captive portal, a phone that lost signal between the tap
    // and the send. `fetch` REJECTS on those rather than resolving with a status, so
    // without this the rejection escapes the submit handler and the button sits in its
    // sending state for ever. Status 0 is not a real HTTP status and every caller below
    // treats it as the failure it is.
    return {
      status: 0,
      retryAfterSeconds: null,
      message: "We could not reach oBizee. Check your connection and try again.",
    };
  }
  let payload: Envelope<T> = {};
  try {
    payload = (await response.json()) as Envelope<T>;
  } catch {
    /* a proxy error page is not JSON; the status still classifies it */
  }
  // ADDED BY UI-007. `ImportAuthController.sendImportOtp` sets `Retry-After` on BOTH
  // its 429s — the per-address cooldown and the per-IP window — and that header is the
  // server's own arithmetic on its own clock. The resend countdown is a client timer
  // started when the code was sent, so the two can only agree by accident: a slow
  // network on the send, a phone that slept, a second tab that already resent. Reading
  // the header lets the countdown CONVERGE on the server rather than drift from it,
  // which is what UI-007's ticket demands ("do not let the client countdown diverge
  // from the server's actual window"). Without this the only honest option would be a
  // padded client timer, i.e. papering over the divergence — explicitly banned.
  const header = response.headers.get("Retry-After");
  const retryAfterSeconds = header && /^\d+$/.test(header.trim()) ? Number(header.trim()) : null;
  return { ...payload, status: response.status, retryAfterSeconds };
}

/**
 * Turn either identity response into the one shape the screen renders.
 *
 * `isNewAccount:true` is NOT an error and must not be painted as one — it is a
 * first-time seller, which is the whole point of a public import. `token` is null in
 * that case (UI-005's AC-5: no placeholder `User` is created), so there is no session
 * to store and `hasSession` says so.
 */
function toIdentity(
  method: AuthMethod,
  payload: Envelope<IdentityPayload> & { status: number; retryAfterSeconds: number | null },
): IdentityOk | ApiFailure {
  const data = payload.data;
  if (payload.status !== 200 || !data || typeof data.email !== "string") {
    return {
      ok: false,
      code: (data as unknown as { code?: string })?.code ?? "unexpected",
      message: payload.message ?? "We could not sign you in. Try again.",
      retryAfterSeconds: payload.retryAfterSeconds,
    };
  }
  if (data.token) setMerchantToken(data.token);
  const identity: VerifiedIdentity = {
    method,
    email: data.email,
    isNewAccount: Boolean(data.isNewAccount),
  };
  rememberAuthMethod(method);
  rememberIdentity(identity);
  // `hasSession` means "she is a merchant", NOT "a token came back". UI-011 gave
  // prospects a token of their own — scoped to the import routes and nothing else —
  // so `Boolean(data.token)` became true for someone with no account, and the gate
  // told a first-time seller "Signed in as …". `merchant` is null unless she really
  // has one, which is the question this flag is actually asking.
  return { ok: true, identity, hasSession: Boolean(data.merchant) };
}

/** Exchange Google's authorization code for a session. */
export async function exchangeGoogleCode(code: string): Promise<IdentityOk | ApiFailure> {
  const payload = await postPublic<IdentityPayload>("/import/auth/google", { code });
  return toIdentity("google", payload);
}

/**
 * Ask for a 6-digit code. `202` is the success status here, not `200`
 * (`ImportAuthController.issueCode`), and `429` carries `otp_cooldown` or
 * `otp_rate_limited` — both of which UI-007's resend countdown reads.
 */
export async function requestEmailCode(
  email: string,
): Promise<{ ok: true; expiresInSeconds: number } | ApiFailure> {
  const payload = await postPublic<{ expiresInSeconds?: number; code?: string }>(
    "/import/auth/otp/send",
    { email },
  );
  if (payload.status !== 202) {
    return {
      ok: false,
      code: payload.data?.code ?? "unexpected",
      message: payload.message ?? "We could not send the code. Try again.",
      retryAfterSeconds: payload.retryAfterSeconds,
    };
  }
  rememberAuthMethod("email");
  return { ok: true, expiresInSeconds: payload.data?.expiresInSeconds ?? 600 };
}

/**
 * How long the SERVER makes an address wait between codes.
 * `ImportAuthController.RESEND_COOLDOWN_MS = 60 * 1000`, measured from the live OTP
 * row's `createdAt`. UI-007's countdown starts from this, then resyncs on any 429.
 */
export const RESEND_COOLDOWN_SECONDS = 60;

/**
 * POST /import/auth/otp/verify — the six-digit code, checked.
 *
 * THE FAILURE CODES ARE READ FROM THE SERVER, NOT ASSUMED
 * (`OM-backend/controllers/ImportAuthController.js`, `CODES` + `classifyAttempt`):
 *   422 `otp_incorrect`            — wrong digits, the code is still alive
 *   422 `otp_expired`              — past its 10-minute TTL, OR no row at all (the
 *                                    controller deliberately answers both the same way
 *                                    so a stranger cannot probe whether an address has
 *                                    ever used the import)
 *   422 `otp_used`                 — already burnt, including the loser of a race
 *   429 `otp_attempts_exhausted`   — the 5th wrong try. Checked BEFORE the comparison,
 *                                    so a late correct answer cannot walk past the cap
 *   400 `invalid_email` / `invalid_request`
 *   403 `source_not_enabled`       — the import kill switch
 * Success is `200 {token, merchant, isNewAccount, email}` — the SAME shape the Google
 * exchange returns, which is why it goes through the same `toIdentity` below and needs
 * no second session-establishment path.
 */
export async function verifyEmailCode(
  email: string,
  code: string,
): Promise<IdentityOk | ApiFailure> {
  const payload = await postPublic<IdentityPayload>("/import/auth/otp/verify", { email, code });
  return toIdentity("email", payload);
}

export type StartImportResult =
  | { ok: true; jobId: string }
  | {
      ok: false;
      code: "no_session" | string;
      message: string;
      /**
       * ADDED BY UI-008 for D-5. `createImportJob` sets `Retry-After` (and
       * `X-RateLimit-Reset`) on the create-budget 429 — real arithmetic on the server's
       * own clock — and §2.7 D-5 bans a "try again later" with no timeframe behind it.
       * Null on every other failure, and the panel then falls back to the most precise
       * TRUE sentence it can say rather than inventing a clock time.
       */
      retryAfterSeconds?: number | null;
    };

/**
 * POST /import/jobs — start the capture, then the caller writes `?job=<id>` into the URL
 * (design-brief.md D6: *"`?job=<id>` lands in the URL the moment `202` returns"*).
 *
 * `no_session` IS THE KNOWN GAP, not a bug in this file. `/import/jobs` sits inside
 * `protectedRoutes` (`OM-backend/routes/index.js:1373`) and `ImportJob.createdBy` is
 * scoped from `req.user`, so a PROSPECT — verified, but with `token:null` because no
 * `User` may be fabricated for her — has no credential to present. `api-contract.md`'s
 * 11:50 ruling makes `createdBy` optional and moves the identity onto the job, which
 * this ticket implemented in the schema; what it does not settle is what a prospect
 * presents at the door. The screen therefore reports `no_session` honestly instead of
 * asserting an identity the server would have to trust from a browser. Open item in the
 * dev report, with the proposal.
 */
export async function startImport(handle: string): Promise<StartImportResult> {
  try {
    const response = await authedFetch("/import/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ handle }),
    });
    const payload = (await response.json().catch(() => ({}))) as Envelope<{
      jobId?: string;
      code?: string;
    }>;
    if (response.status === 202 && payload.data?.jobId) {
      return { ok: true, jobId: payload.data.jobId };
    }
    const header = response.headers.get("Retry-After");
    return {
      ok: false,
      code: payload.data?.code ?? "unexpected",
      message: payload.message ?? "We could not start the import.",
      retryAfterSeconds: header && /^\d+$/.test(header.trim()) ? Number(header.trim()) : null,
    };
  } catch (error) {
    if ((error as { code?: string })?.code === "NO_TOKEN") {
      return { ok: false, code: "no_session", message: "No oBizee account for this email yet." };
    }
    return { ok: false, code: "unreachable", message: "We could not reach oBizee. Try again." };
  }
}
