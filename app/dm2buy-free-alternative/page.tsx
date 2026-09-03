import type { Metadata } from "next";
import AlternativesListicle from "@/components/AlternativesListicle";
import { getAlternativesPage } from "@/data/alternatives";

const page = getAlternativesPage("best-free-dm2buy-alternative")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "https://www.obizee.com/dm2buy-free-alternative" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    type: "article",
    url: "https://www.obizee.com/dm2buy-free-alternative",
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
