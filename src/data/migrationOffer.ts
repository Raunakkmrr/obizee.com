/**
 * The migration offer's steps and loss-aversion list, shared between the full
 * `/move-my-store` page and the compact version embedded on compare pages.
 *
 * One source of truth so the claims can't drift between the two surfaces.
 * Every fee figure here matches the billing code: 1% per order capped at ₹10,
 * nothing monthly, nothing on signup — stated as 0 SUBSCRIPTION per R3, never
 * the exact number, outside /pricing.
 */
export interface MigrationStep {
  title: string;
  body: string;
}

export const migrationSteps: MigrationStep[] = [
  {
    title: "Send us the link",
    body: "Your DM2Buy, Dukaan, Shopify, Bikayi, Instamojo or Instagram store. One message on WhatsApp is enough.",
  },
  {
    title: "We move it across",
    body: "Products, images, prices, variants and categories. You do not re-upload anything.",
  },
  {
    title: "You check it",
    body: "Your old store stays live the whole time. Look at yours on oBizee before anything changes.",
  },
  {
    title: "Switch when ready",
    body: "Point your domain over, or use your free obizee.com address. Your call, your timing.",
  },
];

export const migrationKeeps: string[] = [
  "Your product photos, at full resolution",
  "Your prices, variants and categories",
  "Your own domain, or a free one from us",
  "Your customers — we do not touch your list",
  "Your Instagram and WhatsApp orders, now in one place",
  "Your existing store, running until you say otherwise",
];
