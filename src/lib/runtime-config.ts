// HARDCODED on purpose. NEXT_PUBLIC_* env vars on Amplify kept overriding
// these defaults and pointing the storefront at the wrong backend
// (star.obizee.com is NestJS — doesn't host /website/* or /delivery-config/*;
// prod.obizee.com is OM-backend — does). Reading from env meant a single
// misset variable in the Amplify console silently 404'd every checkout
// form-fields / order-submit / variant fetch / delivery quote call.
//
// Dev/prod switching is host-based now (no comment-swapping):
//   - Client-side: trust `window.location.hostname`. If it's localhost
//     or 127.0.0.1, use local URLs; otherwise prod.
//   - Server-side (SSR/build): no hostname available, so fall back to
//     NODE_ENV. `next dev` -> development -> local; build/deploy ->
//     production -> prod.
//
// To override during dev, edit the LOCAL_* constants below.

const PROD_STOREFRONT_API_URL = "https://star.obizee.com/api";
const PROD_WEBSITE_API_URL = "https://prod.obizee.com";
// Only the OM-backend (WEBSITE_API_URL) has a local equivalent. The
// NestJS landing-pages service that STOREFRONT_API_URL points at runs
// only in prod — locally we still hit star.obizee.com/api for it, or
// landing data comes back empty.
const LOCAL_WEBSITE_API_URL = "http://localhost:8080";

function isLocalEnvironment(): boolean {
  if (typeof window !== "undefined") {
    const h = window.location.hostname;
    return h === "localhost" || h === "127.0.0.1" || h.endsWith(".local");
  }
  // SSR / build context — only signal we have is NODE_ENV.
  return process.env.NODE_ENV !== "production";
}

const useLocal = isLocalEnvironment();
// const useLocal = false;

// Storefront API (landing pages, themes) — always prod. No local mirror exists.
export const STOREFRONT_API_URL = PROD_STOREFRONT_API_URL;
// OM-backend (orders, products, pincode, bulk-import) — local during dev.
export const WEBSITE_API_URL = useLocal
  ? LOCAL_WEBSITE_API_URL
  : PROD_WEBSITE_API_URL;
export const WEBSITE_UPLOAD_URL = `${WEBSITE_API_URL}/upload`;
export const RESOLVED_SUBDOMAIN_COOKIE = "obz_subdomain_resolved";

export function getPublicApiUrl() {
  return STOREFRONT_API_URL;
}

export function getPublicWebsiteApiUrl() {
  return WEBSITE_API_URL;
}

function getCookieValue(name: string) {
  if (typeof document === "undefined") {
    return "";
  }

  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
}

function getSubdomainFromHostname(hostname: string) {
  const normalizedHostname = hostname.split(":")[0].toLowerCase().trim();

  if (
    !normalizedHostname ||
    normalizedHostname === "localhost" ||
    normalizedHostname === "127.0.0.1" ||
    normalizedHostname === "obizee.com" ||
    normalizedHostname === "www.obizee.com"
  ) {
    return "";
  }

  if (normalizedHostname.endsWith(".obizee.com")) {
    return normalizedHostname.replace(/\.obizee\.com$/, "").split(".")[0] || "";
  }

  return normalizedHostname.split(".")[0] || "";
}

export function getResolvedClientSubdomain(explicitSubdomain?: string | null) {
  const normalizedExplicit = explicitSubdomain?.trim().toLowerCase();
  if (normalizedExplicit) {
    return normalizedExplicit;
  }

  const cookieSubdomain = getCookieValue(RESOLVED_SUBDOMAIN_COOKIE);
  if (cookieSubdomain) {
    return cookieSubdomain.trim().toLowerCase();
  }

  if (typeof window !== "undefined") {
    return getSubdomainFromHostname(window.location.hostname);
  }

  return "";
}
