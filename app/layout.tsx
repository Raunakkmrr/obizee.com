import type { Metadata, Viewport } from "next";
import "../src/index.css";
import Providers from "./providers";
import Analytics from "@/components/Analytics";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  title: {
    default: "oBizee — India's Most Affordable Online Store Builder | Start Free, Pay 1% Max ₹10",
    template: "%s",
  },
  description: "India's cheapest D2C platform. Auto-generated online store, Delhivery/DTDC shipping, order management, inventory tracking. 1% per order, max ₹10. No monthly fees. No coding needed.",
  keywords: "cheapest ecommerce platform India, D2C platform India, online store builder, Shopify alternative India, Dukaan alternative, sell online India, Instagram seller platform, WhatsApp business tools",
  metadataBase: new URL("https://www.obizee.com"),
  openGraph: {
    title: "oBizee — India's Most Affordable Online Store Builder",
    description: "Auto-generated online store, Delhivery/DTDC shipping, order management. 1% per order, max ₹10. No monthly fees.",
    url: "https://www.obizee.com",
    siteName: "oBizee",
    images: [{ url: "/Obizee.png" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee — India's Most Affordable Online Store Builder",
    description: "Auto-generated online store, Delhivery/DTDC shipping, order management. 1% per order, max ₹10. No monthly fees.",
    images: ["/Obizee.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.obizee.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" type="image/png" href="/Obizee.png" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
