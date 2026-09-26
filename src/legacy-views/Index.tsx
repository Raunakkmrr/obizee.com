"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useSearchParams } from "next/navigation";
import JsonLd from "@/components/JsonLd";

const SocialProofBar = lazy(() => import("../components/SocialProofBar"));
const Features = lazy(() => import("../components/Features"));
const HowItWorks = lazy(() => import("../components/HowItWorks"));
const Services = lazy(() => import("../components/Services"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTA = lazy(() => import("../components/CTA"));
const AppDownloadModal = lazy(() => import("@/components/AppDownloadModal"));

const Index = () => {
  const searchParams = useSearchParams();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("download_app") !== "1") return;
    setIsDownloadModalOpen(true);
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/");
    }
  }, [searchParams]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee - Order and Business Management for Indian Sellers",
    description: "oBizee helps Indian small businesses manage orders, inventory, payments, shipping, and customer communication from one platform.",
    url: "https://www.obizee.com",
    inLanguage: "en-IN",
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main id="main-content" role="main">
          <Hero />
          <Suspense fallback={null}>
            <SocialProofBar />
            <Features />
            <HowItWorks />
            <Services />
            <Testimonials />
            <CTA />
          </Suspense>
        </main>
        {isDownloadModalOpen && (
          <Suspense fallback={null}>
            <AppDownloadModal open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen} />
          </Suspense>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Index;
