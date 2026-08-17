/**
 * Thin analytics wrapper.
 *
 * The site had Search Console but no on-site analytics, so there was no way to
 * tell a bounce from a lead. Every conversion control now emits an event through
 * here. Safe to call before (or without) GA4 being configured — it no-ops.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * GA4 Measurement ID for the oBizee property (account 404840345, property 550152769).
 *
 * Committed deliberately. A Measurement ID is not a credential — it is served in
 * the page source of every site running GA4 and grants no access to the property.
 * It lives here as a fallback so analytics works without console access; setting
 * NEXT_PUBLIC_GA_ID in the hosting environment still overrides it.
 */
const GA_ID_FALLBACK = "G-KEY8DDC44L";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || GA_ID_FALLBACK;

/** No fallback yet — set NEXT_PUBLIC_CLARITY_ID once the Clarity project exists. */
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "";

export const analyticsEnabled = Boolean(GA_MEASUREMENT_ID);

/**
 * Hosts that must never report into the production property.
 *
 * The site is a static export, so one build serves every environment and the
 * decision has to be made in the browser rather than at build time. Without this
 * every local `next dev` session would pollute real traffic.
 */
export const NON_REPORTING_HOSTS = ["localhost", "127.0.0.1", "0.0.0.0"];

/**
 * Records a conversion-relevant interaction.
 *
 * Fails silently when analytics is not configured so a missing env var can never
 * break a CTA — a dead button costs more than a missing datapoint.
 */
export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean> = {},
): void {
  if (typeof window === "undefined") return;

  try {
    window.gtag?.("event", name, params);
    window.clarity?.("event", name);
  } catch {
    // Analytics must never surface an error to the visitor.
  }
}
