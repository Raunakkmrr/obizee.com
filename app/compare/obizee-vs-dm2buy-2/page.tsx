import type { Metadata } from "next";
import CompareDM2buy2Page from "@/pages/CompareDM2buy2";

export const metadata: Metadata = {
  title:
    "oBizee vs DM2buy — Best D2C Platform for Indian Sellers [2026 Comparison]",
  description:
    "0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain and UNLIMITED products. oBizee vs DM2buy for Indian sellers: built-in Delhivery, DTDC and Blue Dart shipping, same-day hyperlocal delivery, Instagram and WhatsApp selling. DM2buy is a catalog link with no logistics.",
  keywords:
    "oBizee vs DM2buy, DM2buy alternative, best D2C platform India, DM2buy review, Instagram selling platform India, dm2buy shipping",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-dm2buy-2",
  },
  openGraph: {
    title: "oBizee vs DM2buy — Which D2C Platform Wins for Indian Sellers?",
    description:
      "Real shops running today, the line-by-line comparison, and a free migration that keeps your old store live while you switch.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-dm2buy-2",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee vs DM2buy — Best D2C Platform for Indian Sellers [2026]",
    description:
      "Built-in couriers, Instagram + WhatsApp selling, 0 SUBSCRIPTION and a FREE custom domain.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <CompareDM2buy2Page />;
}
