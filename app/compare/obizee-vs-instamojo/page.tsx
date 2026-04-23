import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CompareInstamojoPage = dynamic(
  () => import("@/pages/CompareInstamojo"),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "oBizee vs Instamojo — Best Instamojo Alternative for Indian Sellers [2026]",
  description:
    "Compare oBizee vs Instamojo for Indian sellers. oBizee: ₹0/month, 1% per order (max ₹10), built-in Delhivery & DTDC shipping. Instamojo: 2-5% per transaction, basic storefront.",
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
  return <CompareInstamojoPage />;
}
