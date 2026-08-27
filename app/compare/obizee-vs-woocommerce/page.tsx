import type { Metadata } from "next";
import CompareWoocommercePage from "@/pages/CompareWoocommerce";


export const metadata: Metadata = {
  title:
    "oBizee vs WooCommerce — Easiest WooCommerce Alternative for India [2026]",
  description:
    "0 subscription charges — you pay oBizee only when you get an order, then 1% capped at ₹10. Compare oBizee vs WooCommerce for Indian sellers. oBizee: 2-minute setup, ₹0/month, built-in Delhivery, DTDC, Blue Dart & hyperlocal. WooCommerce: requires WordPress, hosting, plugins, and technical knowledge.",
  keywords:
    "oBizee vs WooCommerce, WooCommerce alternative India, easiest online store India, no coding ecommerce India, WooCommerce too complicated",
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-woocommerce",
  },
  openGraph: {
    title:
      "oBizee vs WooCommerce — Easiest WooCommerce Alternative for India [2026]",
    description:
      "2-minute setup vs 2-5 hours. Zero technical knowledge vs WordPress/PHP. See why Indian sellers choose oBizee over WooCommerce.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-woocommerce",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "oBizee vs WooCommerce — Easiest WooCommerce Alternative for India [2026]",
    description:
      "2-minute setup vs 2-5 hours. No coding vs WordPress/PHP. Compare oBizee and WooCommerce for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs WooCommerce \u2014 Easiest WooCommerce Alternative for India (2026)",
    description: "Detailed comparison of oBizee vs WooCommerce for Indian sellers. oBizee: 2-minute setup, zero technical knowledge, built-in shipping. WooCommerce: requires WordPress, hosting, and plugins.",
    url: "https://www.obizee.com/compare/obizee-vs-woocommerce",
    inLanguage: "en-IN",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is oBizee easier than WooCommerce?", acceptedAnswer: { "@type": "Answer", text: "Much easier. oBizee requires zero technical knowledge \u2014 sign up, add products, and start selling in 2 minutes. WooCommerce requires WordPress installation, hosting setup, plugin configuration, and ongoing maintenance." } },
      { "@type": "Question", name: "Is WooCommerce free?", acceptedAnswer: { "@type": "Answer", text: "WooCommerce itself is free, but you need to pay for hosting (\u20B9300-2,000+/month), SSL certificate, domain, premium themes, and essential plugins. Total cost often exceeds \u20B91,000/month. oBizee has no monthly fees." } },
      { "@type": "Question", name: "Does oBizee have shipping like WooCommerce?", acceptedAnswer: { "@type": "Answer", text: "Better. oBizee has native Delhivery, DTDC, Blue Dart and hyperlocal integration built in. WooCommerce requires third-party shipping plugins that need separate configuration." } },
      { "@type": "Question", name: "Can a non-technical person use WooCommerce?", acceptedAnswer: { "@type": "Answer", text: "WooCommerce has a steep learning curve. You need to understand WordPress, hosting, domains, and plugins. oBizee is designed for non-technical merchants \u2014 anyone with a smartphone can set up a store in 2 minutes." } },
      { "@type": "Question", name: "Which is better for small Indian businesses?", acceptedAnswer: { "@type": "Answer", text: "oBizee. It\u2019s built specifically for Indian small merchants with built-in Indian courier integration, no technical requirements, and transparent pricing (1% per order, max \u20B910). WooCommerce is powerful but overkill for most small businesses." } },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
      { "@type": "ListItem", position: 3, name: "oBizee vs WooCommerce", item: "https://www.obizee.com/compare/obizee-vs-woocommerce" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <CompareWoocommercePage />
    </>
  );
}
