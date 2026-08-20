import type { Metadata } from "next";
import AlternativesListicle from "@/components/AlternativesListicle";
import { getAlternativesPage } from "@/data/alternatives";

const page = getAlternativesPage("best-shopify-alternatives-india")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "https://www.obizee.com/compare/best-shopify-alternatives-india" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    type: "article",
    url: "https://www.obizee.com/compare/best-shopify-alternatives-india",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.metaDescription,
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <AlternativesListicle page={page} />;
}
