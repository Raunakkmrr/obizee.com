import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ForKiranaStoresPage = dynamic(
  () => import("@/pages/ForKiranaStores"),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "Kirana Store Online Delivery Platform — Take Your Shop Online | oBizee",
  description:
    "Take your kirana store online with oBizee. Accept orders via WhatsApp, manage inventory, track deliveries. Auto-generated website for your shop. No technical knowledge needed. 1% per order, max ₹10.",
  keywords:
    "kirana store online India, kirana delivery platform, online kirana store app, grocery store online ordering, neighbourhood store online, local shop ecommerce India, kirana store app",
  alternates: {
    canonical: "https://www.obizee.com/for/kirana-stores",
  },
  openGraph: {
    title:
      "Kirana Store Online Delivery Platform — Take Your Shop Online | oBizee",
    description:
      "Take your kirana store online with oBizee. Accept orders via WhatsApp, manage inventory, track deliveries. Auto-generated website for your shop. No technical knowledge needed. 1% per order, max ₹10.",
    type: "website",
    url: "https://www.obizee.com/for/kirana-stores",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kirana Store Online Delivery Platform — Take Your Shop Online | oBizee",
    description:
      "Take your kirana store online with oBizee. Accept orders via WhatsApp, manage inventory, track deliveries. 1% per order, max ₹10.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <ForKiranaStoresPage />;
}
