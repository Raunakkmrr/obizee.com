/**
 * Single source of truth for public contact details.
 *
 * These values appear in the footer, compliance pages, terms, JSON-LD structured
 * data and every WhatsApp CTA. They were previously duplicated across six files,
 * which is how the site ended up shipping a personal Gmail address inside its
 * schema.org markup. Import from here — never hardcode.
 */

/** Public support inbox. Must be a live mailbox before deploy. */
export const CONTACT_EMAIL = "admin@obizee.com";

/** Display form of the business phone number. */
export const CONTACT_PHONE_DISPLAY = "+91 70115 71373";

/** E.164 without the leading "+", which is the format wa.me expects. */
export const WHATSAPP_NUMBER = "917011571373";

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
