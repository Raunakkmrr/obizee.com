import type { Metadata } from "next";
import FeaturesPage from "@/legacy-views/FeaturesPage";


export const metadata: Metadata = {
  title: "oBizee Features | Orders, Inventory, Payments, Analytics",
  description:
    "You pay oBizee nothing until your store has taken ₹50,000 in orders. After that, 0 subscription charges — 1% per order, capped at ₹10. Explore oBizee features for Indian sellers and small businesses. Manage orders, inventory, payments, customer updates, and analytics from one dashboard.",
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

// The visible feature page owns its matching schema; avoid duplicate graphs.
export default function Page() {
  return <FeaturesPage />;
}
