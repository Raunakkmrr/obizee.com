import type { Metadata } from "next";
import CompareDM2buyPage from "@/pages/CompareDM2buy";

/**
 * Metadata only. Every JSON-LD block for this route — WebPage, Article, FAQPage,
 * BreadcrumbList and SoftwareApplication — is emitted by the page component, so
 * the FAQ answers in the structured data are the same strings the reader sees.
 * This file used to carry its own copies; they went stale, ended up contradicting
 * the page (a "3-month free trial" in schema against ₹50,000 on screen) and were
 * removed. Do not add JSON-LD back here.
 */
export const metadata: Metadata = {
  // Leads with the phrase people actually search. The old title opened with
  // "oBizee vs DM2buy" — a low-volume comparison query — and pushed "DM2Buy
  // Alternative" past the ~60 characters Google renders. Keep this under 62.
  title: "Best DM2Buy Alternative in India — Free Until ₹50,000 | oBizee",
  // ~155 chars — Google truncates past that, and the old one was 302.
  description:
    "Nothing to pay until ₹50,000 in orders. Delhivery, DTDC, Blue Dart and India Post shipping, plus Instagram and WhatsApp selling — all built in, free.",
  keywords:
    "oBizee vs DM2buy, DM2buy alternative, best DM2Buy alternative India, best D2C platform India, DM2buy review, Instagram selling platform India, dm2buy shipping, free online store India",
  alternates: {
    canonical: "https://www.obizee.com/dm2buy-alternative",
  },
  openGraph: {
    title: "oBizee vs DM2buy — Which D2C Platform Wins for Indian Sellers?",
    description:
      "165 real shops running today, the line-by-line comparison, and a free migration that keeps your old store live while you switch. Nothing to pay until ₹50,000 in orders.",
    type: "article",
    url: "https://www.obizee.com/dm2buy-alternative",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee vs DM2buy — India's Best DM2Buy Alternative [2026]",
    description:
      "Built-in couriers, Instagram + WhatsApp selling, a FREE custom domain, and nothing to pay until ₹50,000 in orders.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <CompareDM2buyPage />;
}
