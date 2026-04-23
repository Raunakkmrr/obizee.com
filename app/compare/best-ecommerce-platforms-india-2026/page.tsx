import type { Metadata } from "next";
import dynamic from "next/dynamic";

const BestPlatforms2026Page = dynamic(
  () => import("@/pages/BestPlatforms2026"),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "7 Best Ecommerce Platforms in India [2026] — Cheapest to Most Expensive",
  description:
    "Ranked list of the 7 best ecommerce platforms for Indian sellers in 2026. Compare pricing, shipping integration, and features. oBizee, Dukaan, Shopify, Bikayi, Instamojo, WooCommerce, DM2buy.",
  keywords:
    "best ecommerce platform India 2026, cheapest online store India, D2C platform India, Shopify alternative India, best platform to sell online India",
  alternates: {
    canonical:
      "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026",
  },
  openGraph: {
    title:
      "7 Best Ecommerce Platforms in India [2026] — Cheapest to Most Expensive",
    description:
      "We compared 7 ecommerce platforms for Indian sellers on pricing, shipping, and features. See which one is best for your business.",
    type: "article",
    url: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Best Ecommerce Platforms in India [2026]",
    description:
      "Ranked list of the best ecommerce platforms for Indian sellers. Compare pricing, shipping, and features.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <BestPlatforms2026Page />;
}
