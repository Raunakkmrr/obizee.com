// Merchant-portal auth helper.
//
// The browser talks to OM-backend (`WEBSITE_API_URL`) directly — same
// pattern the rest of the storefront uses. We do NOT proxy through
// Next.js anymore.
//
// JWT lifecycle:
//   - On login, OM-backend `/login` returns `{token}` in the JSON body.
//     We store it in localStorage AND set a non-httpOnly sentinel cookie
//     (`merchant_session=1`) so the Next.js middleware can gate
//     `/merchant/*` route entry without flashing the protected page.
//   - All authed API calls read the JWT from localStorage and attach it
//     as `Authorization: Bearer …`. The sentinel cookie carries no
//     token; it's purely a "the user is logged in" flag.
//   - Logout clears both.
//
// Trust model: token-in-localStorage is the SPA-industry default. It is
// XSS-vulnerable in theory — but React escapes all content by default and
// we never `dangerouslySetInnerHTML` user input on this page, so the
// attack surface is no wider than for any other React app shipping the
// same pattern. The merchant flow also doesn't touch payments, so the
// blast radius of a stolen JWT is bounded to "modify own catalog".

import { WEBSITE_API_URL } from "@/lib/runtime-config";

const TOKEN_STORAGE_KEY = "merchant_token";
const SESSION_COOKIE = "merchant_session";

/**
 * The cross-subdomain hand-off.
 *
 * A merchant who signed in here and clicked through to dashboard.obizee.com was
 * asked to log in again: this site keeps its JWT in localStorage on
 * `www.obizee.com`, and neither localStorage nor a host-only cookie crosses to
 * another subdomain. This cookie is written on the shared parent so the
 * dashboard's route gate can pick it up on the very first navigation.
 *
 * FIVE MINUTES, AND THE DASHBOARD DELETES IT ON USE. A `.obizee.com` cookie
 * reaches EVERY subdomain, merchant storefronts included, so a long-lived one
 * would hand a merchant's dashboard JWT to any script on any shop. This exists
 * for the length of a redirect and no longer.
 */
const HANDOFF_COOKIE = "obz_handoff";
const HANDOFF_MAX_AGE_SECONDS = 300;
const SHARED_DOMAIN = ".obizee.com";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getMerchantToken(): string | null {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(TOKEN_STORAGE_KEY);
}

/**
 * @param token the JWT to store for this origin
 * @param options.shareAcrossSubdomains write the cross-subdomain hand-off too.
 *   FALSE FOR A PROSPECT. UI-011's `import_prospect` token is scoped to the
 *   import routes; handing it to the dashboard would produce a session that
 *   looks signed in and 401s on every screen — worse than the second login this
 *   whole change exists to remove.
 */
export function setMerchantToken(
  token: string,
  { shareAcrossSubdomains = true }: { shareAcrossSubdomains?: boolean } = {},
) {
  if (!isBrowser()) return;
  window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
  // 30-day sentinel cookie matching the backend JWT TTL. Read by
  // middleware.ts to gate /merchant/* page navigation.
  const maxAge = 60 * 60 * 24 * 30;
  document.cookie = `${SESSION_COOKIE}=1; path=/; max-age=${maxAge}; samesite=lax`;
  if (shareAcrossSubdomains) writeHandoffCookie(token);
}

/**
 * Write the hand-off, but only where a shared parent domain actually exists.
 *
 * On localhost there is none — `domain=.obizee.com` from `localhost:3200` is
 * silently rejected by the browser, and writing it anyway would look like it
 * worked. `Secure` is unconditional because the cookie carries a real JWT.
 *
 * @param token the merchant JWT
 */
function writeHandoffCookie(token: string) {
  if (!isBrowser()) return;
  if (!window.location.hostname.endsWith("obizee.com")) return;
  document.cookie =
    `${HANDOFF_COOKIE}=${encodeURIComponent(token)}` +
    `; domain=${SHARED_DOMAIN}; path=/; max-age=${HANDOFF_MAX_AGE_SECONDS}; secure; samesite=lax`;
}

export function clearMerchantToken() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(TOKEN_STORAGE_KEY);
  document.cookie = `${SESSION_COOKIE}=; path=/; max-age=0; samesite=lax`;
  // A signed-out merchant must not leave a live hand-off behind for the next
  // person on this browser.
  if (window.location.hostname.endsWith("obizee.com")) {
    document.cookie = `${HANDOFF_COOKIE}=; domain=${SHARED_DOMAIN}; path=/; max-age=0; samesite=lax`;
  }
}

/**
 * Resolve a backend path against WEBSITE_API_URL. Pass paths like
 * "/bulk-import/products/analyze" — they get the API base prepended.
 */
export function backendUrl(path: string) {
  const base = WEBSITE_API_URL.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
}

/**
 * fetch() wrapper that:
 *   - Resolves a relative backend path against WEBSITE_API_URL
 *   - Attaches `Authorization: Bearer <jwt>` from localStorage
 *   - Preserves any caller-supplied headers/body/method
 *
 * On 401, clears the local token and throws — callers can catch and
 * redirect to /merchant/login.
 */
export async function authedFetch(
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const token = getMerchantToken();
  if (!token) {
    // Surface as a recognisable error so callers can redirect rather
    // than receive a generic network failure.
    const err = new Error("Not authenticated");
    (err as Error & { code?: string }).code = "NO_TOKEN";
    throw err;
  }

  const headers = new Headers(init.headers || {});
  headers.set("Authorization", `Bearer ${token}`);

  const response = await fetch(backendUrl(path), { ...init, headers });

  if (response.status === 401) {
    clearMerchantToken();
  }

  return response;
}
