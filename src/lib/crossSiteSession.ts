import CryptoJS from "crypto-js";

/**
 * THE SHARED SESSION between obizee.com and dashboard.obizee.com.
 *
 * A merchant who signed in on obizee.com was asked to log in again on the
 * dashboard: the JWT lives in localStorage on `www.obizee.com` and the session
 * cookie is host-only, and neither crosses a subdomain boundary.
 *
 * SO THE COOKIE IS SET ON THE SHARED PARENT, `.obizee.com`, under a name no
 * other oBizee surface uses. It is encrypted at rest, matching what the
 * dashboard already does with its own localStorage copy.
 *
 * WHAT THE ENCRYPTION DOES AND DOES NOT BUY, stated plainly so nobody later
 * mistakes it for more than it is: the key ships in client JavaScript, so a
 * determined script on any *.obizee.com origin can read the dashboard bundle,
 * lift the key and decrypt. It stops casual reads — an analytics tag, a chat
 * widget, anything hoovering up document.cookie — and it stops the token being
 * legible at rest. It is not a boundary against a targeted attacker. The real
 * fix, if that day comes, is a backend-minted single-use hand-off code.
 *
 * SET `NEXT_PUBLIC_SSO_KEY` in BOTH apps to the same value. Without it this
 * falls back to the constant the dashboard already ships, which is public in
 * the repo and therefore worth nothing — it keeps the flow working, not safe.
 */

/** Unique to this hand-off. Verified against every cookie the storefront uses. */
export const SSO_COOKIE = "obz_sso_v1";

/** The shared parent. Both hosts sit under it; so does every storefront. */
const SHARED_DOMAIN = ".obizee.com";

/** Matches the dashboard's own token cookie lifetime. */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

const key = () =>
  process.env.NEXT_PUBLIC_SSO_KEY ||
  process.env.NEXT_PUBLIC_ENCRYPTION_KEY ||
  "obizee-secure-key-2024";

const onSharedDomain = () =>
  typeof window !== "undefined" && window.location.hostname.endsWith("obizee.com");

/**
 * Publish the session for the other subdomain to pick up.
 *
 * Silently does nothing off `*.obizee.com` — on localhost there is no shared
 * parent and the browser rejects the cookie, so writing it would only look like
 * it had worked.
 *
 * @param token the merchant JWT. Never written in the clear.
 */
export function publishSharedSession(token: string) {
  if (!onSharedDomain() || !token) return;
  const value = encodeURIComponent(CryptoJS.AES.encrypt(token, key()).toString());
  document.cookie =
    `${SSO_COOKIE}=${value}; domain=${SHARED_DOMAIN}; path=/` +
    `; max-age=${MAX_AGE_SECONDS}; secure; samesite=lax`;
}

/** Sign-out here must sign her out everywhere the cookie reached. */
export function clearSharedSession() {
  if (!onSharedDomain()) return;
  document.cookie = `${SSO_COOKIE}=; domain=${SHARED_DOMAIN}; path=/; max-age=0; samesite=lax`;
}
