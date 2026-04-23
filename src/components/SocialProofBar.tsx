"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { Users, ShoppingCart, MapPin, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 50000, suffix: "+", label: "Merchants" },
  { icon: ShoppingCart, value: 200000, suffix: "+", label: "Orders Processed" },
  { icon: MapPin, value: 500, suffix: "+", label: "Cities Served" },
  { icon: Star, value: 4.8, suffix: "", label: "App Rating" },
];

export default function SocialProofBar() {
  return (
    <section className="py-14 sm:py-20 bg-orange-50/50 border-y border-orange-100" aria-label="Platform statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 mb-4">
                  <stat.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {stat.label === "App Rating" ? (
                    <span>{stat.value}</span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
