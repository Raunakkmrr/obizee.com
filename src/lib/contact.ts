/**
 * Single source of truth for public contact details.
 *
 * These values appear in the footer, compliance pages, terms, JSON-LD structured
 * data and every WhatsApp CTA. They were previously duplicated across six files,
 * which is how the site ended up shipping a personal Gmail address inside its
 * schema.org markup. Import from here — never hardcode.
 */

/**
 * Merchant dashboard. Linked from the header CTA and opened in a new tab so a
 * merchant signing in does not lose the marketing page they came from.
 *
 * Deliberately the bare host, not /login: an already-signed-in merchant lands
 * on their dashboard instead of being bounced through a login form they do not
 * need. Signed-out visitors are redirected to /login by the app itself.
 */
export const DASHBOARD_URL = "https://dashboard.obizee.com";

/** Public support inbox. Must be a live mailbox before deploy. */
export const CONTACT_EMAIL = "admin@obizee.com";

/** Display form of the business phone number. */
export const CONTACT_PHONE_DISPLAY = "+91 87969 71046";

/** E.164 without the leading "+", which is the format wa.me expects. */
export const WHATSAPP_NUMBER = "918796971046";

export const CONTACT_ADDRESS =
  "G-11, Hemkunt Chamber, Nehru Place, New Delhi, Delhi 110019, India";

/**
 * Builds a wa.me deep link with a pre-filled message.
 *
 * A pre-filled first message matters more than it looks: it removes the blank-box
 * hesitation that kills WhatsApp CTAs, and it tells us which page the lead came
 * from without any analytics plumbing.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Default opener used by the primary CTAs. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi oBizee, I sell online and I'd like to know how oBizee can help me manage my orders.";
