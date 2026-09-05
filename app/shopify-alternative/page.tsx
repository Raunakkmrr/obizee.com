import type { Metadata } from "next";
import CompareShopifyPage from "@/pages/CompareShopify";

/**
 * Metadata only. Every JSON-LD block for this route — WebPage, Article, FAQPage,
 * BreadcrumbList and SoftwareApplication — is emitted by the page component, so
 * the FAQ answers in the structured data are the same strings the reader sees.
 * This file used to carry its own copies, which shipped a second contradicting
 * WebPage, FAQPage and BreadcrumbList alongside the component's own. They were
 * also stale — "Shopify costs ₹2,000+/month" against the real ₹1,994 monthly /
 * ₹1,499 annual. Do not add JSON-LD back here.
 */
export const metadata: Metadata = {
  // Leads with the phrase people actually search, and stays under the ~60
  // characters Google renders. See the DM2Buy route for the same reasoning.
  title: "Best Shopify Alternative in India — Free Until ₹50,000 | oBizee",
  // ~155 chars. The full Shopify cost argument lives on the page, not here.
  description:
    "Shopify Basic is ₹1,994/mo, sold or not. oBizee charges nothing until ₹50,000 in orders — with four couriers and GST invoicing built in.",
  keywords:
    "oBizee vs Shopify, Shopify alternative India, cheapest Shopify alternative, Shopify India pricing 2026, Shopify too expensive India, Shopify transaction fee India, Shopify GST invoice, best ecommerce platform India",
  alternates: {
    canonical: "https://www.obizee.com/shopify-alternative",
  },
  openGraph: {
    title: "oBizee vs Shopify — Which Wins for an Indian Seller?",
    description:
      "One month, itemised: what Shopify takes and what oBizee takes. 165 real shops running today, the line-by-line comparison, and a free migration that keeps your Shopify store live while you switch.",
    type: "article",
    url: "https://www.obizee.com/shopify-alternative",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee vs Shopify — India's Best Shopify Alternative [2026]",
    description:
      "No subscription, four couriers built in, GST invoicing, and nothing to pay until ₹50,000 in orders.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <CompareShopifyPage />;
}
