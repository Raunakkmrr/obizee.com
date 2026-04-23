"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AppDownloadModal from "@/components/AppDownloadModal";
import JsonLd from "@/components/JsonLd";

export default function HomePageClient() {
  const searchParams = useSearchParams();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("download_app") === "1") {
      setIsDownloadModalOpen(true);
    }
  }, [searchParams]);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee - Order and Business Management for Indian Sellers",
    description: "oBizee helps Indian small businesses manage orders, inventory, payments, shipping, and customer communication from one platform.",
    url: "https://www.obizee.com",
    inLanguage: "en-IN",
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={webPageJsonLd} />
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
      <AppDownloadModal open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen} />
    </div>
  );
}
