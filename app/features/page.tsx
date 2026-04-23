import type { Metadata } from "next";
import dynamic from "next/dynamic";

const FeaturesPage = dynamic(() => import("@/pages/FeaturesPage"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "oBizee Features | Orders, Inventory, Payments, Analytics",
  description:
    "Explore oBizee features for Indian sellers and small businesses. Manage orders, inventory, payments, customer updates, and analytics from one dashboard.",
  alternates: { canonical: "https://www.obizee.com/features" },
  openGraph: {
    title: "oBizee Features | Orders, Inventory, Payments, Analytics",
    description:
      "One platform for Indian businesses to manage core operations: orders, stock, payments, and growth analytics.",
    type: "website",
    url: "https://www.obizee.com/features",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee Features | Orders, Inventory, Payments, Analytics",
    description:
      "Manage your business operations in one place with oBizee's India-first feature set.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <FeaturesPage />;
}
