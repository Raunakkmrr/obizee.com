import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CompareDM2buyPage = dynamic(() => import("@/pages/CompareDM2buy"), {
  ssr: false,
});

export const metadata: Metadata = {
  title:
    "oBizee vs DM2buy — Best D2C Platform for Indian Sellers [2026 Comparison]",
  description:
    "Compare oBizee vs DM2buy for Indian sellers. oBizee offers Delhivery/DTDC shipping, WhatsApp + Instagram selling, transparent pricing (1% max ₹10). DM2buy is Instagram-only with no logistics.",
  keywords:
    "oBizee vs DM2buy, DM2buy alternative, best D2C platform India, DM2buy review, Instagram selling platform India, dm2buy shipping",
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-dm2buy",
  },
  openGraph: {
    title:
      "oBizee vs DM2buy — Which D2C Platform Wins for Indian Sellers?",
    description:
      "Feature-by-feature comparison: logistics, multi-channel, pricing, and more. See why oBizee wins on 14 of 19 features.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-dm2buy",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "oBizee vs DM2buy — Best D2C Platform for Indian Sellers [2026]",
    description:
      "Logistics, multi-channel, transparent pricing — oBizee wins on 14 of 19 features vs DM2buy.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <CompareDM2buyPage />;
}
