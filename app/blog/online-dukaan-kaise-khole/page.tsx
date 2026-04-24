import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HinglishPost1 = dynamic(() => import("@/pages/blog/HinglishPost1"), { ssr: false });

export const metadata: Metadata = {
  title: "Online Dukaan Kaise Khole — Poori Jankari [2026 Guide]",
  description: "Online dukaan kholne ka sabse aasan tarika. oBizee app se 2 minute mein apna online store banayein. Koi coding nahi, koi monthly fees nahi. Poori step-by-step guide.",
  keywords: "online dukaan kaise khole, online store kaise banaye, apna online business kaise shuru kare, online selling kaise kare India",
  alternates: { languages: { "hi-Latn-IN": "" }, canonical: "https://www.obizee.com/blog/online-dukaan-kaise-khole" },
  openGraph: {
    title: "Online Dukaan Kaise Khole — Poori Jankari [2026 Guide]",
    description: "Online dukaan kholne ka sabse aasan tarika. oBizee app se 2 minute mein apna online store banayein. Koi coding nahi, koi monthly fees nahi.",
    type: "article",
    url: "https://www.obizee.com/blog/online-dukaan-kaise-khole",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Dukaan Kaise Khole — Poori Jankari [2026 Guide]",
    description: "Online dukaan kholne ka sabse aasan tarika. oBizee app se 2 minute mein apna online store banayein. Koi coding nahi, koi monthly fees nahi.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <HinglishPost1 />;
}
