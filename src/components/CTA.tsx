"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ScrollReveal from "@/components/motion/ScrollReveal";

const CTA = () => {
  return (
    <section
      className="py-20 sm:py-28 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-orange-100 text-sm font-semibold tracking-widest uppercase mb-6">Start Today</p>
          <h2 id="cta-heading" className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Online Store is
            <br />
            <span className="text-yellow-200">2 Minutes Away</span>
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 163 Indian sellers who already run their business on oBizee. Download the app, or message us on WhatsApp and we&apos;ll set you up.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <AppDownloadTrigger>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 px-10 py-5 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Download App
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </AppDownloadTrigger>
            <WhatsAppCTA
              source="footer_cta"
              variant="light"
              label="Talk to us on WhatsApp"
              message="Hi oBizee, I'd like to start selling online. Can you help me get set up?"
            />
            <Link href="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-5 text-lg font-bold rounded-2xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-orange-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>3-month free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>1% per order, max ₹10</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
