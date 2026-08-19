/**
 * Shared option lists for every lead-capture surface.
 *
 * Kept in one place because the same categories now appear on the /signup form
 * and the site-wide prompt. Two copies would drift, and the backend deliberately
 * stores these as free text rather than enums, so a drift would not surface as an
 * error — it would quietly fragment the reporting instead.
 */

export const LEAD_CATEGORIES = [
  "Crochet & handmade",
  "Jewellery & accessories",
  "Clothing & fashion",
  "Food, snacks & bakery",
  "Beauty & skincare",
  "Home decor & gifting",
  "Art & prints",
  "Something else",
] as const;

export const LEAD_VOLUMES = [
  "Just starting out",
  "Under 25",
  "25 – 100",
  "100 – 500",
  "500+",
] as const;

export const LEAD_CHANNELS = [
  "Instagram",
  "WhatsApp",
  "Both",
  "Offline shop",
  "Own website",
] as const;
