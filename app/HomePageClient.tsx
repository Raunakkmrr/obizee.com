"use client";

import React, { useEffect, useState, lazy, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load below-fold components — they don't need to be in the initial bundle
const SocialProofBar = lazy(() => import("@/components/SocialProofBar"));
const Features = lazy(() => import("@/components/Features"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Services = lazy(() => import("@/components/Services"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const CTA = lazy(() => import("@/components/CTA"));
const AppDownloadModal = lazy(() => import("@/components/AppDownloadModal"));

export default function HomePageClient() {
  const searchParams = useSearchParams();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("download_app") === "1") {
      setIsDownloadModalOpen(true);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Suspense fallback={null}>
        <SocialProofBar />
        <Features />
        <HowItWorks />
        <Services />
        <Testimonials />
        <CTA />
      </Suspense>
      <Footer />
      {isDownloadModalOpen && (
        <Suspense fallback={null}>
          <AppDownloadModal open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen} />
        </Suspense>
      )}
    </div>
  );
}
