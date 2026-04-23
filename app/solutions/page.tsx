import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SolutionsPage = dynamic(() => import("@/pages/Solutions"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Complete Business Solution Suite | oBizee",
  description:
    "Transform your business with oBizee's complete solution suite. Get professional website templates, powerful mobile apps, and comprehensive business management tools. Start growing today!",
  keywords:
    "business solutions, website templates, mobile apps, business management, e-commerce, retail, service business, portfolio website",
  alternates: { canonical: "https://www.obizee.com/solutions" },
  openGraph: {
    title: "Complete Business Solution Suite | oBizee",
    description:
      "Transform your business with oBizee's complete solution suite. Get professional website templates, powerful mobile apps, and comprehensive business management tools.",
    type: "website",
    url: "https://www.obizee.com/solutions",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Business Solution Suite | oBizee",
    description:
      "Transform your business with oBizee's complete solution suite. Get professional website templates, powerful mobile apps, and comprehensive business management tools.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <SolutionsPage />;
}
