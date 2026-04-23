import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CompareDukaanPage = dynamic(() => import("@/pages/CompareDukaan"), {
  ssr: false,
});

export const metadata: Metadata = {
  title:
    "oBizee vs Dukaan — Best Dukaan Alternative in India [2026 Comparison]",
  description:
    "Compare oBizee vs Dukaan for Indian sellers. oBizee: ₹0/month, 1% per order (max ₹10), built-in Delhivery & DTDC. Dukaan: ₹4,999/year subscription.",
  keywords:
    "oBizee vs Dukaan, Dukaan alternative, Dukaan app review, cheapest online store India, Dukaan pricing, best Dukaan alternative 2026",
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-dukaan",
  },
  openGraph: {
    title:
      "oBizee vs Dukaan — Best Dukaan Alternative in India [2026 Comparison]",
    description:
      "Side-by-side comparison: ₹0/month vs ₹4,999/year. Built-in Delhivery/DTDC vs no shipping integration. See why Indian sellers are switching to oBizee.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-dukaan",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "oBizee vs Dukaan — Best Dukaan Alternative in India [2026 Comparison]",
    description:
      "₹0/month vs ₹4,999/year. Built-in Delhivery/DTDC vs no shipping. Compare oBizee and Dukaan for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <CompareDukaanPage />;
}
