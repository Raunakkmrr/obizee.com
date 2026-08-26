"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import HeroComposition from "@/components/HeroComposition";

// Purely decorative, so it may load late. Anything carrying meaning must not
// be ssr:false — that is how the hero ended up with no imagery in the HTML.
const FloatingFeatures = dynamic(() => import("@/components/FloatingFeatures"), { ssr: false });

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Static gradient orbs — pure CSS, no animation to avoid repaints */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }}
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
            <span className="text-orange-700 text-sm font-medium tracking-wide">0% commission on every sale</span>
          </div>

          {/* Headline — critical for LCP, renders as static HTML.
              One step smaller at every breakpoint than it was: these sizes were
              set when the site had no web font and `font-sans` fell through to
              the system stack. Bricolage sets considerably wider, and at the old
              scale "Run the whole business." broke three ways and orphaned
              "business." on its own line. */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 sm:mb-8 tracking-tight">
            <span className="text-gray-900">Keep the whole sale.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
              Run the whole business.
            </span>
          </h1>

          {/* Subtitle. "Platform fee 1% per order" used to sit here, which stated
              the payment gateway's rate as ours — the opposite of the model, on
              the most-read line of the site. */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            <span className="text-orange-600 font-normal">We take no commission</span> — not a
            rupee of what your customer pays you. Sell online, track stock and raw materials,
            ship with Delhivery, message your buyers and see your real profit.
            {" "}No monthly fee. The only per-order cost is the payment gateway, 1% capped at ₹10.
          </p>

          {/* CTA Buttons — two conversion paths: install the app, or talk to a human */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <AppDownloadTrigger>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-semibold rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-shadow duration-300"
                aria-label="Start free — no card"
              >
                Start free
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </Button>
            </AppDownloadTrigger>
            <WhatsAppCTA
              source="hero"
              label="Move my shop"
              message="Hi oBizee, I found you on your website. I sell online and I'd like to understand how oBizee works."
            />
          </div>

          <div className="flex justify-center mb-12 sm:mb-16">
            <Link
              href="/how-to-create-online-store"
              aria-label="See how it works"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200 underline-offset-4 hover:underline"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              See How It Works
            </Link>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>0% commission</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>No monthly fee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Launch in 2 minutes</span>
            </div>
          </div>
        </div>

        {/* Three real app surfaces, fanned and drifting. Replaces the lazy
            DashboardPreview, which was dynamic({ ssr: false }) and so never
            reached the server-rendered HTML — the hero carried no imagery at
            all for a crawler, and one flat screenshot could not stand for a
            product this wide anyway. */}
        <div className="mt-14 sm:mt-16">
          <HeroComposition />
        </div>
      </div>
    </section>
  );
};

export default Hero;
