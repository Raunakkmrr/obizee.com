import type { Metadata } from "next";
import { Suspense } from "react";
import HomePageClient from "./HomePageClient";

// The title and description are what a searcher actually reads in results, and
// what an AI assistant quotes. Both previously led with "Pay 1% Max ₹10", which
// framed the payment gateway's rate as oBizee's fee. 0% commission is the
// stronger claim and the accurate one.
export const metadata: Metadata = {
  title: "oBizee — 0% Commission Online Store for Indian Sellers | Start Free",
  description:
    "Keep the whole sale. oBizee takes 0% commission — no monthly fee, no setup fee. " +
    "Online store, orders from Instagram and WhatsApp, stock and raw materials, vendors, " +
    "Delhivery, DTDC and Blue Dart shipping, same-day hyperlocal delivery, COD and real " +
    "profit reporting. Only the payment gateway costs you anything: 1%, capped at ₹10.",
  keywords:
    "0% commission ecommerce India, no commission online store, D2C platform India, " +
    "online store builder India, Shopify alternative India, Dukaan alternative, " +
    "dm2buy alternative, sell on Instagram India",
  alternates: { canonical: "https://www.obizee.com" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee — 0% commission commerce platform for Indian sellers",
    description:
      "oBizee lets Indian small businesses sell online with no commission on their sales. " +
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
      "Indian commerce platform that takes 0% commission on sales. Online store, order " +
      "management, stock and raw materials, vendors, Delhivery shipping, WhatsApp marketing " +
      "and profit reporting. No monthly fee.",
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
        "Free to start, no monthly fee. oBizee takes 0% commission on your sales — " +
        "you keep the full amount your customer pays. The only per-order cost is the " +
        "payment gateway, 1% capped at ₹10.",
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
