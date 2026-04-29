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
  {
    name: "Medium",
    href: "https://medium.com/@obizee.app",
    svg: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#000000" />
        <path d="M12.8 14.2L11 12.5V12H17.1L21.8 22.4L25.9 12H31.7V12.5L30.2 14C30.1 14.1 30 14.2 30 14.4V25.6C30 25.8 30.1 25.9 30.2 26L31.7 27.5V28H23.3V27.5L24.8 26C25 25.8 25 25.7 25 25.5V16.2L20.3 27.9H19.7L14.3 16.2V24C14.2 24.3 14.3 24.7 14.5 24.9L16.5 27.4V27.9H10V27.4L12 24.9C12.2 24.7 12.3 24.3 12.2 24V14.2H12.8Z" fill="white" />
      </svg>
    ),
    label: "Read our blog on Medium",
  },
];

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
