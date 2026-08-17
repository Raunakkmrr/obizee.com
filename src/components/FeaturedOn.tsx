"use client";

import ScrollReveal from "@/components/motion/ScrollReveal";
import { motion } from "framer-motion";

const featuredLinks = [
  {
    name: "Product Hunt",
    href: "https://www.producthunt.com/products/obizee?launch=obizee",
    svg: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#DA552F" />
        <path d="M22.667 20H17.333V14H22.667C24.324 14 25.667 15.343 25.667 17C25.667 18.657 24.324 20 22.667 20Z" fill="white" />
        <path d="M14 12V28H17.333V23H22.667C25.98 23 28.667 20.314 28.667 17C28.667 13.686 25.98 11 22.667 11H14V12Z" fill="white" />
      </svg>
    ),
    label: "Launched on Product Hunt",
  },
];
// Medium was removed: anyone can publish there, so listing it as a "Featured On"
// credential reads as padding and weakens the one genuine placement next to it.
// It remains linked from the footer under Resources, which is what it actually is.

export default function FeaturedOn() {
  return (
    <section className="py-8 sm:py-10 bg-white border-b border-gray-100" aria-label="Featured on">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center">
            <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] mb-5 sm:mb-6">
              Featured On
            </p>
            <div className="flex items-center justify-center gap-8 sm:gap-14">
              {featuredLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-gray-700 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  aria-label={item.label}
                >
                  <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.svg}
                  </span>
                  <span className="text-base sm:text-lg font-semibold tracking-tight">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
