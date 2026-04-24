"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";

// Lazy load heavy components — defer until after initial paint
const FloatingFeatures = dynamic(() => import("@/components/FloatingFeatures"), { ssr: false });
const DashboardPreview = dynamic(() => import("@/components/DashboardPreview"), { ssr: false });

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Static gradient orbs — no JS needed */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full animate-pulse"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full animate-pulse"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)", animationDelay: "2s" }}
        />
      </div>

      {/* Floating feature icons — lazy loaded, not needed for LCP */}
      <FloatingFeatures />

      {/* Content — renders immediately as static HTML */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-orange-100 border border-orange-200 mb-8 sm:mb-10 animate-fade-in">
            <Sparkles className="w-4 h-4 text-orange-500 mr-2" aria-hidden="true" />
            <span className="text-orange-700 text-sm font-medium tracking-wide">India's Most Affordable D2C Platform</span>
          </div>

          {/* Headline — critical for LCP, renders as static HTML */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6 sm:mb-8 tracking-tight">
            <span className="text-gray-900">Your Business.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
              One Platform.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Manage orders, inventory, payments, and shipping from one dashboard.
            <span className="text-orange-600 font-normal"> Built-in Delhivery & DTDC.</span>
            {" "}Pay just 1% per order, max ₹10.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16">
            <AppDownloadTrigger>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-semibold rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
                aria-label="Download oBizee app"
              >
                Download App
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </Button>
            </AppDownloadTrigger>
            <Link href="/how-to-create-online-store" aria-label="See how it works">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl border-2 border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50 rounded-2xl transition-all duration-300"
              >
                <Play className="mr-3 h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>3-month free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Launch in 2 minutes</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview — lazy loaded, below the fold on mobile */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;
