import type { Metadata } from "next";
import CompareInstamojoPage from "@/pages/CompareInstamojo";


export const metadata: Metadata = {
  title:
    "oBizee vs Instamojo — Best Instamojo Alternative for Indian Sellers [2026]",
  description:
    "Compare oBizee vs Instamojo for Indian sellers. oBizee: ₹0/month, 1% per order (max ₹10), built-in Delhivery, DTDC, Blue Dart & hyperlocal shipping. Instamojo: 2-5% per transaction, basic storefront.",
  keywords:
    "oBizee vs Instamojo, Instamojo alternative, Instamojo review 2026, cheapest payment platform India, online store vs payment links",
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-instamojo",
  },
  openGraph: {
    title:
      "oBizee vs Instamojo — Best Instamojo Alternative for Indian Sellers [2026]",
    description:
      "Side-by-side comparison: 1% max ₹10 vs 2-5% fees. Full store vs basic storefront. See why Indian sellers choose oBizee over Instamojo.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-instamojo",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "oBizee vs Instamojo — Best Instamojo Alternative for Indian Sellers [2026]",
    description:
      "1% max ₹10 vs 2-5% fees. Full store vs basic storefront. Compare oBizee and Instamojo for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Instamojo \u2014 Best Instamojo Alternative for Indian Sellers (2026)",
    description: "Detailed comparison of oBizee vs Instamojo for Indian sellers. oBizee charges 1% per order (max \u20B910) with no monthly fees. Instamojo charges 2-5% per transaction.",
    url: "https://www.obizee.com/compare/obizee-vs-instamojo",
    inLanguage: "en-IN",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is oBizee better than Instamojo for selling products?", acceptedAnswer: { "@type": "Answer", text: "For physical products, yes. oBizee offers a full store, order management, inventory tracking, and built-in Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping. Instamojo is better for digital products and payment links." } },
      { "@type": "Question", name: "Does Instamojo have shipping?", acceptedAnswer: { "@type": "Answer", text: "No. Instamojo is primarily a payment platform with a basic storefront. oBizee has native Delhivery, DTDC, Blue Dart and hyperlocal logistics integration." } },
      { "@type": "Question", name: "Which is cheaper \u2014 oBizee or Instamojo?", acceptedAnswer: { "@type": "Answer", text: "oBizee charges 1% per order capped at \u20B910. Instamojo charges 2-5% per transaction. For a \u20B92,000 order, you pay \u20B910 on oBizee vs \u20B940-100 on Instamojo." } },
      { "@type": "Question", name: "Can Instamojo replace an online store?", acceptedAnswer: { "@type": "Answer", text: "Instamojo offers basic storefront features, but it\u2019s primarily a payment gateway. oBizee is purpose-built as a complete D2C store with order management, inventory, shipping, and multi-channel selling." } },
      { "@type": "Question", name: "What is the best Instamojo alternative for physical products?", acceptedAnswer: { "@type": "Answer", text: "oBizee is the best Instamojo alternative for physical product sellers in India. It offers everything Instamojo lacks: full order lifecycle management, Delhivery, DTDC & Blue Dart integration, and custom order forms \u2014 all at lower fees." } },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
      { "@type": "ListItem", position: 3, name: "oBizee vs Instamojo", item: "https://www.obizee.com/compare/obizee-vs-instamojo" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <CompareInstamojoPage />
    </>
  );
}
