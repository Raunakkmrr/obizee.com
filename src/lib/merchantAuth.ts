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

function isBrowser() {
  return typeof window !== "undefined";
}

export function getMerchantToken(): string | null {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function setMerchantToken(token: string) {
  if (!isBrowser()) return;
  window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
  // 30-day sentinel cookie matching the backend JWT TTL. Read by
  // middleware.ts to gate /merchant/* page navigation.
  const maxAge = 60 * 60 * 24 * 30;
  document.cookie = `${SESSION_COOKIE}=1; path=/; max-age=${maxAge}; samesite=lax`;
}

export function clearMerchantToken() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(TOKEN_STORAGE_KEY);
  document.cookie = `${SESSION_COOKIE}=; path=/; max-age=0; samesite=lax`;
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
