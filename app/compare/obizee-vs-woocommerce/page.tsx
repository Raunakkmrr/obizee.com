import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CompareWoocommercePage = dynamic(
  () => import("@/pages/CompareWoocommerce"),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "oBizee vs WooCommerce — Easiest WooCommerce Alternative for India [2026]",
  description:
    "Compare oBizee vs WooCommerce for Indian sellers. oBizee: 2-minute setup, ₹0/month, built-in Delhivery & DTDC. WooCommerce: requires WordPress, hosting, plugins, and technical knowledge.",
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
  return <CompareWoocommercePage />;
}
