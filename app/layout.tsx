import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "../src/index.css";

/**
 * The site previously loaded no web font at all — `font-sans` fell through to
 * whatever the device happened to have, which is a large part of why it read
 * cheaper than it should. next/font self-hosts these, so there is no request to
 * Google on page load and no layout shift while they arrive.
 *
 * Bricolage Grotesque carries headings; Plus Jakarta Sans carries everything
 * else. Deliberately not Inter — it is the default every generated site reaches
 * for, and looking generic is the thing this is meant to fix.
 */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});
import Providers from "./providers";
import Analytics from "@/components/Analytics";
import LeadCapturePrompt from "@/components/LeadCapturePrompt";

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
  description: "India's cheapest D2C platform. Auto-generated online store, Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping, order management, inventory tracking. 1% per order, max ₹10. No monthly fees. No coding needed.",
  keywords: "cheapest ecommerce platform India, D2C platform India, online store builder, Shopify alternative India, Dukaan alternative, sell online India, Instagram seller platform, WhatsApp business tools",
  metadataBase: new URL("https://www.obizee.com"),
  openGraph: {
    title: "oBizee — India's Most Affordable Online Store Builder",
    description: "Auto-generated online store, Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping, order management. 1% per order, max ₹10. No monthly fees.",
    url: "https://www.obizee.com",
    siteName: "oBizee",
    images: [{ url: "/Obizee.png" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee — India's Most Affordable Online Store Builder",
    description: "Auto-generated online store, Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping, order management. 1% per order, max ₹10. No monthly fees.",
    images: ["/Obizee.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.obizee.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/Obizee.png" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>{children}</Providers>
        <LeadCapturePrompt />
        <Analytics />
      </body>
    </html>
  );
}
