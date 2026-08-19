import type { Metadata } from "next";
import HelpPage from "@/pages/Help";


export const metadata: Metadata = {
  title: "Help Center & Support | oBizee",
  description:
    "Find answers to your questions, get support, or learn how to make the most of our platform. Access our knowledge base, video tutorials, and community forum.",
  keywords:
    "help center, support, FAQ, knowledge base, video tutorials, community forum, customer support",
  alternates: { canonical: "https://www.obizee.com/help" },
  openGraph: {
    title: "Help Center & Support | oBizee",
    description:
      "Find answers to your questions, get support, or learn how to make the most of our platform. Access our knowledge base, video tutorials, and community forum.",
    type: "website",
    url: "https://www.obizee.com/help",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center & Support | oBizee",
    description:
      "Find answers to your questions, get support, or learn how to make the most of our platform. Access our knowledge base, video tutorials, and community forum.",
    images: ["/twitter-image.jpg"],
  },
};

export default function Page() {
  return <HelpPage />;
}
