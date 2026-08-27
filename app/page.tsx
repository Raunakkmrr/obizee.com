import type { Metadata } from "next";
import { Suspense } from "react";
import HomePageClient from "./HomePageClient";

// The title and description are what a searcher actually reads in results, and
// what an AI assistant quotes — so every figure here has to survive a merchant
// checking it against their invoice.
//
// An earlier version claimed 0% commission. The billing code contradicts it:
// TransactionController.addOrderCommission debits 1% of each order, capped at
// ₹10, from the merchant's wallet and invoices it daily. What IS zero is the
// monthly fee, the setup fee and anything hidden — no path in the backend
// charges by the month or on signup. Four true zeros and a ₹10 cap read
// stronger than one claim that cannot be defended.
export const metadata: Metadata = {
  title: "oBizee — ₹0 a Month Online Store for Indian Sellers | ₹10 Max Per Order",
  description:
    "₹0 a month, ₹0 to set up, nothing hidden. You pay 1% per order, capped at ₹10 — a " +
    "₹10,000 sale still costs ₹10, and a month with no sales costs nothing. Online store, " +
    "orders from Instagram and WhatsApp, stock and raw materials, vendors, Delhivery, DTDC " +
    "and Blue Dart shipping, same-day hyperlocal delivery, COD and real profit reporting.",
  keywords:
    "no monthly fee ecommerce India, cheapest online store builder India, D2C platform India, " +
    "online store builder India, Shopify alternative India, Dukaan alternative, " +
    "dm2buy alternative, sell on Instagram India",
  alternates: { canonical: "https://www.obizee.com" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee — ₹0 a month commerce platform for Indian sellers",
    description:
      "oBizee lets Indian small businesses sell online with no monthly fee and no setup fee. " +
      "Orders, stock and raw materials, vendors and purchases, shipping, WhatsApp marketing " +
      "and profit reporting in one platform.",
    url: "https://www.obizee.com",
    inLanguage: "en-IN",
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "oBizee",
    url: "https://www.obizee.com",
    logo: "https://www.obizee.com/Obizee.png",
    description:
      "Indian commerce platform with no monthly fee and no setup fee — 1% per order, capped " +
      "at ₹10. Online store, order management, stock and raw materials, vendors, Delhivery " +
      "shipping, WhatsApp marketing and profit reporting.",
    // The identity graph Google resolves oBizee against. It previously held one
    // entry, and that entry 404'd — the app id was com.obizee, one "e" short of
    // the real com.obizeee — so the only external identity we published was a
    // dead link. Verify any URL added here actually resolves.
    sameAs: [
      "https://play.google.com/store/apps/details?id=com.obizeee",
      "https://twitter.com/obizee",
      "https://www.linkedin.com/company/obizee",
      "https://www.facebook.com/obizee",
      "https://www.producthunt.com/products/obizee",
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "oBizee",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    areaServed: "IN",
    // This offer is what Google quotes back when asked what oBizee costs. It
    // used to read "1% per successful order capped at ₹10", which stated our fee
    // as a per-order charge — the opposite of the actual model. oBizee takes no
    // commission; the 1% is the payment gateway's rate, which a seller pays on
    // any platform.
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description:
        "Free to start, no monthly fee, no setup fee, nothing hidden. oBizee charges 1% per " +
        "order, capped at ₹10 — a ₹10,000 sale still costs ₹10, and a month with no sales " +
        "costs nothing. Payment gateway charges are separate and set by the gateway.",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      {/* No Suspense boundary here on purpose. It existed to contain a
          useSearchParams bailout that has moved into DownloadAppFromQuery,
          and while it was here the whole homepage prerendered as its empty
          fallback — 93 characters of HTML for every crawler. */}
      <HomePageClient />
    </>
  );
}
