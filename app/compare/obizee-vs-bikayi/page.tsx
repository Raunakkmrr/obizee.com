import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CompareBikayiPage = dynamic(() => import("@/pages/CompareBikayi"), {
  ssr: false,
});

export const metadata: Metadata = {
  title:
    "oBizee vs Bikayi — Best Bikayi Alternative in India [2026 Comparison]",
  description:
    "Compare oBizee vs Bikayi for Indian sellers. oBizee: ₹0/month, 1% per order (max ₹10), built-in Delhivery & DTDC shipping. Bikayi: free tier + paid plans from ₹999/month.",
  keywords:
    "oBizee vs Bikayi, Bikayi alternative, Bikayi app review, cheapest online store India, Bikayi pricing",
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-bikayi",
  },
  openGraph: {
    title:
      "oBizee vs Bikayi — Best Bikayi Alternative in India [2026 Comparison]",
    description:
      "Side-by-side comparison: ₹0/month vs ₹999+/month. Built-in Delhivery/DTDC vs no logistics. See why Indian sellers choose oBizee over Bikayi.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-bikayi",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "oBizee vs Bikayi — Best Bikayi Alternative in India [2026 Comparison]",
    description:
      "₹0/month vs ₹999+/month. Built-in Delhivery/DTDC vs no logistics. Compare oBizee and Bikayi for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <CompareBikayiPage />;
}
