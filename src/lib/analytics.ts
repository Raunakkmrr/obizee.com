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

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "";

export const analyticsEnabled = Boolean(GA_MEASUREMENT_ID);

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
