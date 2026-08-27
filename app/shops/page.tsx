import type { Metadata } from "next";
import ShopsPageClient from "./ShopsPageClient";
import { liveShops } from "@/data/liveShops";

export const metadata: Metadata = {
  title: "Shops Built on oBizee — Real Indian Sellers, Open Now",
  description:
    `${liveShops.length} real shops running on oBizee right now — crochet, jewellery, clothing, ` +
    "candles, food and more, run by sellers across India. Open any of them and buy something. " +
    "0 subscription charges — sellers pay only when they get an order, then 1% capped at ₹10.",
  keywords:
    "oBizee stores, online shops India, Instagram seller websites, D2C store examples India, " +
    "handmade sellers India, crochet shop online India",
  alternates: { canonical: "https://www.obizee.com/shops" },
};

export default function ShopsPage() {
  // A shop wall is exactly what ItemList is for, and it is the one thing on this
  // site an assistant can quote as evidence rather than as a claim: named, real
  // businesses with resolvable URLs.
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shops built on oBizee",
    numberOfItems: liveShops.length,
    itemListElement: liveShops.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "OnlineStore",
        name: s.brandName,
        url: `https://${s.subDomain}.obizee.com`,
        ...(s.state ? { areaServed: s.state } : {}),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <ShopsPageClient />
    </>
  );
}
