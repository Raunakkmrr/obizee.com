"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, FileText, Smartphone, Truck, BarChart3, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

const journeySteps = [
  { icon: Globe, step: "01", title: "Set Up Categories & Products", description: "Create a clean catalog with categories, pricing, variants, and stock.", features: ["Category-wise catalog", "Price & stock in one view", "Fast product listing"], href: "/business-journey#step-01", color: "from-blue-500 to-cyan-500" },
  { icon: FileText, step: "02", title: "Custom Order Forms", description: "Set required fields based on your business — every order has the right details.", features: ["Business-specific fields", "Address & preference capture", "Error-free collection"], href: "/business-journey#step-02", color: "from-violet-500 to-purple-600" },
  { icon: Smartphone, step: "03", title: "Share & Manage Orders", description: "Share your form link instantly. Manage every order from one dashboard.", features: ["One-tap shareable link", "Status flow tracking", "Full order visibility"], href: "/business-journey#step-03", color: "from-orange-500 to-red-500" },
  { icon: Truck, step: "04", title: "Logistics & Shipping", description: "Integrate Delhivery, DTDC & Blue Dart. Generate AWB, schedule pickups, track deliveries.", features: ["Delhivery integration", "DTDC integration", "Live customer tracking"], href: "/business-journey#step-04", color: "from-green-500 to-emerald-500" },
  { icon: BarChart3, step: "05", title: "Financial Overview", description: "Track daily, weekly, and monthly performance with revenue and profit views.", features: ["Revenue tracking", "Net profit visibility", "Product-level insights"], href: "/business-journey#step-06", color: "from-indigo-500 to-purple-500" },
  { icon: Users, step: "06", title: "Team & Vendor Management", description: "Assign responsibility across team members and vendors with accountability.", features: ["Role-wise team view", "Vendor coordination", "Task ownership"], href: "/business-journey#step-07", color: "from-slate-500 to-slate-700" },
];

const Services = () => {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14 sm:mb-20">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">Platform Services</p>
          <h2 id="services-heading" className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
            What You Get
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Inside oBizee</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each service solves a real problem Indian merchants face every day.
          </p>
        </ScrollReveal>

        <div className="space-y-4 sm:space-y-5">
          {journeySteps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.05}>
              <motion.article
                className="group bg-white rounded-2xl border border-gray-200 hover:border-orange-300 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -2, boxShadow: "0 12px 30px -8px rgba(249,115,22,0.1)" }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className={`sm:w-16 flex-shrink-0 bg-gradient-to-br ${step.color} flex items-center justify-center p-3 sm:p-0`}>
                    <span className="text-white text-xl sm:text-2xl font-bold">{step.step}</span>
                  </div>

                  <div className="flex-1 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center lg:gap-8">
                    <div className="flex items-start gap-4 flex-1 mb-4 lg:mb-0">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 hidden sm:flex shadow-sm`}>
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="lg:w-44 flex-shrink-0">
                      <Link href={step.href}>
                        <Button variant="outline" size="sm" className="w-full border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-600 rounded-lg text-xs">
                          Learn More <ArrowRight className="ml-1.5 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
