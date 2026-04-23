"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import FloatingFeatures from "@/components/FloatingFeatures";

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating feature icons */}
      <FloatingFeatures />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-orange-100 border border-orange-200 mb-8 sm:mb-10"
          >
            <Sparkles className="w-4 h-4 text-orange-500 mr-2" aria-hidden="true" />
            <span className="text-orange-700 text-sm font-medium tracking-wide">India's Most Affordable D2C Platform</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6 sm:mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="text-gray-900">Your Business.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
              One Platform.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Manage orders, inventory, payments, and shipping from one dashboard.
            <span className="text-orange-600 font-normal"> Built-in Delhivery & DTDC.</span>
            {" "}Pay just 1% per order, max ₹10.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
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
          </motion.div>

          {/* Trust line */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
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
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          className="mt-16 sm:mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/20 to-amber-200/30 rounded-3xl blur-2xl" aria-hidden="true" />

            <div className="relative bg-white rounded-3xl border border-gray-200 p-4 sm:p-6 shadow-2xl shadow-gray-200/50">
              {/* Browser bar */}
              <div className="flex items-center gap-2 mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-gray-100 rounded-lg px-4 py-1 text-xs text-gray-500 font-mono">
                    yourstore.obizee.com
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                <motion.div
                  className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-3 sm:p-4 border border-orange-200/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-orange-500/70 text-xs mb-1">Revenue</div>
                  <div className="text-gray-900 text-lg sm:text-2xl font-bold">₹47,230</div>
                  <div className="text-green-600 text-xs mt-1">+12% today</div>
                </motion.div>
                <motion.div
                  className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-200/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-gray-500 text-xs mb-1">Orders</div>
                  <div className="text-gray-900 text-lg sm:text-2xl font-bold">156</div>
                  <div className="text-green-600 text-xs mt-1">23 new</div>
                </motion.div>
                <motion.div
                  className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-200/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-gray-500 text-xs mb-1">Shipped</div>
                  <div className="text-gray-900 text-lg sm:text-2xl font-bold">89</div>
                  <div className="text-blue-600 text-xs mt-1">via Delhivery</div>
                </motion.div>
              </div>

              {/* Order rows */}
              <div className="space-y-2">
                {[
                  { name: "Priya Yadav", product: "Crochet Earrings", amount: "₹350", status: "Shipped", statusColor: "text-green-700 bg-green-50 border-green-200" },
                  { name: "Seerat K.", product: "Handmade Bag", amount: "₹1,200", status: "In Progress", statusColor: "text-orange-700 bg-orange-50 border-orange-200" },
                  { name: "Tanvi P.", product: "Art Print Set", amount: "₹800", status: "New", statusColor: "text-blue-700 bg-blue-50 border-blue-200" },
                ].map((order, i) => (
                  <motion.div
                    key={order.name}
                    className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50/50 rounded-xl border border-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + i * 0.15 }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {order.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-gray-900 text-sm font-medium truncate">{order.name}</div>
                        <div className="text-gray-400 text-xs truncate">{order.product}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-gray-900 text-sm font-semibold hidden sm:block">{order.amount}</span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
