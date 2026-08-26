"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Instagram, Quote } from "lucide-react";
import { verifiedBrands } from "@/data/verifiedBrands";
import ScrollReveal from "@/components/motion/ScrollReveal";

// Laid out as a grid, not a horizontal scroller. A sideways strip hides most of
// the proof behind a gesture people do not always make, and on a phone it
// competes with the page scroll. Every quote should be visible by scrolling down.
const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animationId: number;
    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += 0.5;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">Success Stories</p>
          <h2 id="testimonials-heading" className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
            Real Merchants,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Real Growth</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Instagram sellers and small businesses across India are scaling with oBizee.
          </p>
        </ScrollReveal>
      </div>

      <div
        ref={scrollRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 px-4 sm:px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="list"
      >
        {[...verifiedBrands, ...verifiedBrands].map((brand, index) => (
          <motion.article
            key={`${brand.brandName}-${index}`}
            className="flex h-full flex-col bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300"
            whileHover={{ y: -4 }}
            role="listitem"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={brand.logo}
                alt={`${brand.brandName} logo`}
                className="w-11 h-11 rounded-xl object-contain bg-gray-50 p-0.5 ring-1 ring-gray-200 flex-shrink-0"
                width="44" height="44" loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900 text-sm truncate">{brand.brandName}</h3>
                <p className="text-gray-500 text-xs truncate">{brand.ownerName}</p>
              </div>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>

            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 text-orange-400 fill-current" />
              ))}
            </div>

            <div className="relative mb-4">
              <Quote className="absolute -top-1 -left-1 w-4 h-4 text-orange-200" />
              <blockquote className="text-gray-700 text-sm leading-relaxed pl-5 line-clamp-4">
                {brand.quote}
              </blockquote>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500 font-medium">{brand.state}</span>
              <span className="text-xs text-orange-600 font-semibold">{brand.subDomain}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
