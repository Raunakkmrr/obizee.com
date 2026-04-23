import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HowToCreateStorePage = dynamic(
  () => import("@/pages/HowToCreateStore"),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "How to Create Your Online Store on oBizee — Step-by-Step Guide [2026]",
  description:
    "Learn how to set up your online store on oBizee in minutes. Step-by-step guide with screenshots: create account, add products, share order forms, manage shipping with Delhivery & DTDC.",
  keywords:
    "how to create online store India, how to sell online India, oBizee tutorial, online store setup guide, how to start ecommerce India, sell products online India",
  alternates: {
    canonical: "https://www.obizee.com/how-to-create-online-store",
  },
  openGraph: {
    title:
      "How to Create Your Online Store on oBizee — Step-by-Step Guide [2026]",
    description:
      "Learn how to set up your online store on oBizee in minutes. Step-by-step guide with screenshots: create account, add products, share order forms, manage shipping with Delhivery & DTDC.",
    type: "article",
    url: "https://www.obizee.com/how-to-create-online-store",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Create Your Online Store on oBizee — Step-by-Step Guide [2026]",
    description:
      "Learn how to set up your online store on oBizee in minutes. Step-by-step guide with screenshots.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <HowToCreateStorePage />;
}
