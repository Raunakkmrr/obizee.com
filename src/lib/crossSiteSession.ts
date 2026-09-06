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
 * The key below is committed in BOTH repos and must stay identical in the two.
 */

/** Unique to this hand-off. Verified against every cookie the storefront uses. */
export const SSO_COOKIE = "obz_sso_v1";

/** The shared parent. Both hosts sit under it; so does every storefront. */
const SHARED_DOMAIN = ".obizee.com";

/** Matches the dashboard's own token cookie lifetime. */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

/**
 * The shared key, in the repo on purpose.
 *
 * IT IS NOT A SECRET AND MUST NOT BE TREATED AS ONE. Any client-side scheme
 * ships its key to the browser, so this value is readable by anyone who opens
 * the bundle — committing it changes nothing about that. What it DOES buy over
 * the previous fallback is that it is long, random and used nowhere else, so it
 * is not guessable and not shared with any other system.
 *
 * Hardcoded rather than env-only because both apps must agree on it and the two
 * are deployed through different consoles; a value that only works once someone
 * remembers to set it in both places is a value that silently does not work.
 * `NEXT_PUBLIC_SSO_KEY` still overrides it, so rotating later needs no release.
 */
const SHARED_KEY = "pbprd2Fcgj7_T16AK-FXrD5gq76jFbg_-Clzc60MbNUF8CC_e9MUYSWhNbDz7cuy";

const key = () => process.env.NEXT_PUBLIC_SSO_KEY || SHARED_KEY;

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
