import type { Metadata } from "next";
import { Suspense } from "react";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "oBizee — India's Most Affordable Online Store Builder | Start Free, Pay 1% Max ₹10",
  description: "India's cheapest D2C platform. Auto-generated online store, Delhivery/DTDC shipping, order management, inventory tracking. 1% per order, max ₹10. No monthly fees. No coding needed.",
  keywords: "cheapest ecommerce platform India, D2C platform India, online store builder, Shopify alternative India, Dukaan alternative, sell online India",
  alternates: { canonical: "https://www.obizee.com" },
};

export default function HomePage() {
  return (
    <Suspense>
      <HomePageClient />
    </Suspense>
  );
}
