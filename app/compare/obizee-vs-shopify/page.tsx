import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CompareShopifyPage = dynamic(() => import("@/pages/CompareShopify"), {
  ssr: false,
});

export const metadata: Metadata = {
  title:
    "oBizee vs Shopify — Cheapest Shopify Alternative in India [2026]",
  description:
    "Compare oBizee vs Shopify for Indian sellers. oBizee: ₹0/month, 1% per order (max ₹10), built-in Delhivery & DTDC shipping. Shopify: ₹2,000+/month + extra for Indian logistics.",
  keywords:
    "oBizee vs Shopify, Shopify alternative India, cheapest Shopify alternative, Shopify too expensive India, best ecommerce platform India, Shopify India pricing",
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-shopify",
  },
  openGraph: {
    title:
      "oBizee vs Shopify — Is oBizee the Cheapest Shopify Alternative in India?",
    description:
      "Side-by-side comparison: ₹0/month vs ₹2,000+/month. Built-in Delhivery/DTDC vs paid third-party apps. See why Indian sellers are switching to oBizee.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-shopify",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "oBizee vs Shopify — Cheapest Shopify Alternative in India [2026]",
    description:
      "₹0/month vs ₹2,000+/month. Built-in Delhivery/DTDC vs paid apps. Compare oBizee and Shopify for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <CompareShopifyPage />;
}
