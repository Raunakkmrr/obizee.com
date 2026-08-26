"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { Users, ShoppingCart, MapPin, Star } from "lucide-react";

/**
 * Figures are taken from the ops dashboard (lifetime) and must stay true —
 * these are the only hard proof on the page. Last verified 2026-08-27 against
 * /admin/stats and /admin/users: 165 merchants, 3,314 non-refunded orders,
 * ₹53.46L processed.
 *
 * "Cities Served" was carried here unverified and has been replaced by orders
 * processed, which comes straight from the order collection and is the stronger
 * proof anyway — a shopper understands orders, not cities.
 */
const stats = [
  { icon: Users, value: 165, suffix: "+", label: "Active Merchants" },
  { icon: ShoppingCart, value: 3314, suffix: "+", label: "Orders Processed" },
  { icon: MapPin, value: 53, suffix: "L+", label: "Revenue Processed" },
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
