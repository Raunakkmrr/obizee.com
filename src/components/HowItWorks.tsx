"use client";

import { motion } from "framer-motion";
import { Download, ShoppingBag, Share2, Truck } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";

const steps = [
  { icon: Download, number: "01", title: "Download & Sign Up", description: "Get the oBizee app. Create your account in 2 minutes with your business details. No coding needed.", color: "from-orange-500 to-orange-600" },
  { icon: ShoppingBag, number: "02", title: "Add Your Products", description: "Upload product photos, set prices, add categories. Your website goes live instantly at yourname.obizee.com.", color: "from-amber-500 to-orange-500" },
  { icon: Share2, number: "03", title: "Share & Sell", description: "Share your store on Instagram, WhatsApp, and social media. Create custom order forms and start taking orders.", color: "from-orange-500 to-red-500" },
  { icon: Truck, number: "04", title: "Ship & Grow", description: "Ship orders via Delhivery & DTDC. Generate AWB, schedule pickups, give customers live tracking.", color: "from-red-500 to-orange-600" },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-orange-50/50 to-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14 sm:mb-20">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
          <h2 id="how-it-works-heading" className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            From Download to First Sale
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Four simple steps to launch your online business. No technical skills required.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <motion.div
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-orange-200 to-transparent z-0" aria-hidden="true" />
                )}

                <div className="relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 h-full">
                  <div className="text-orange-100 text-6xl font-bold absolute top-4 right-6 select-none">{step.number}</div>

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg shadow-orange-200`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
