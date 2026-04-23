"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Globe, Truck, Smartphone, CreditCard, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";

const Features = () => {
  const features = [
    { icon: Package, title: "Order Management", description: "Track orders from pending to delivered. Full lifecycle visibility with real-time status updates for you and your customers.", highlight: "Full Lifecycle" },
    { icon: Globe, title: "Auto-Generated Website", description: "Get your own store at yourname.obizee.com instantly. Choose templates, set brand colors — no coding needed.", highlight: "Instant Store" },
    { icon: Truck, title: "Delhivery & DTDC Built-in", description: "Generate AWB numbers, schedule courier pickups, and give customers live tracking. Native Indian logistics.", highlight: "Ship Instantly" },
    { icon: Smartphone, title: "Sell on WhatsApp & Instagram", description: "Take orders from Instagram DMs and WhatsApp. Share order forms, manage everything from one dashboard.", highlight: "Multi-Channel" },
    { icon: CreditCard, title: "Payment Processing", description: "Accept UPI, cards, net banking, and wallets. Automatic payment tracking with hosted checkout.", highlight: "UPI + Cards" },
    { icon: TrendingUp, title: "Business Analytics", description: "Revenue, expenses, net profit snapshots. Product-level insights and custom date range reports.", highlight: "Data-Driven" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 sm:mb-20">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">Platform Features</p>
          <h2 id="features-heading" className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Sell Online</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Orders, inventory, shipping, payments, analytics — all in one platform for Indian merchants.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" staggerDelay={0.1}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.article
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-orange-300 transition-all duration-300 h-full"
                whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(249,115,22,0.12)" }}
              >
                <span className="inline-block bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-5 tracking-wide border border-orange-100">
                  {feature.highlight}
                </span>

                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-200 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <ScrollReveal className="text-center mt-12" delay={0.3}>
          <Link href="/features">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl text-base font-semibold shadow-lg shadow-orange-200 transition-all">
              Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
