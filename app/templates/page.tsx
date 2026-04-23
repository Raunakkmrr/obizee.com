import type { Metadata } from "next";
import dynamic from "next/dynamic";

const TemplatesPage = dynamic(() => import("@/pages/Templates"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Website Templates | Professional Business Templates | oBizee",
  description:
    "Explore the three live oBizee website templates available for merchants: Modern V1, Trust V1, and Mobile Social V1.",
  keywords:
    "oBizee templates, template-modern-v1, template-trust-v1, template-mobile-social-v1, merchant website templates",
  alternates: { canonical: "https://www.obizee.com/templates" },
  openGraph: {
    title: "Website Templates | Professional Business Templates | oBizee",
    description:
      "Browse the three live oBizee templates and preview the exact storefront experience for each one.",
    type: "website",
    url: "https://www.obizee.com/templates",
    images: [{ url: "/templates-og.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Templates | Professional Business Templates | oBizee",
    description:
      "Browse the three live oBizee templates and preview the exact storefront experience for each one.",
    images: ["/templates-twitter.jpg"],
  },
};

export default function Page() {
  return <TemplatesPage />;
}
