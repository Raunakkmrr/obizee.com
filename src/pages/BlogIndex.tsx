"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const blogPosts = [
  {
    slug: "how-to-create-online-store-5-minutes",
    title: "How to Create Your Online Store in 5 Minutes with oBizee",
    description: "Step-by-step guide to setting up your online store on oBizee — from download to first product. No coding, no monthly fees.",
    date: "April 23, 2026",
    readTime: "5 min read",
    category: "Getting Started",
  },
  {
    slug: "why-obizee-charges-only-1-percent",
    title: "Why oBizee Charges Only 1% — And Why That Matters for Small Businesses",
    description: "Understanding oBizee's pricing model: 1% per order capped at ₹10. How it compares to Shopify, Dukaan, and why it's the cheapest option in India.",
    date: "April 23, 2026",
    readTime: "6 min read",
    category: "Pricing",
  },
  {
    slug: "obizee-customer-success-stories",
    title: "oBizee Customer Success Stories: Real Merchants, Real Growth",
    description: "How Indian Instagram sellers, crochet artists, and home businesses are scaling with oBizee's platform. Real stories from real merchants.",
    date: "April 23, 2026",
    readTime: "7 min read",
    category: "Success Stories",
  },
];

const BlogIndex = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "oBizee Blog",
    description: "Guides, tips, and stories for Indian merchants selling online. Learn how to grow your business with oBizee.",
    url: "https://www.obizee.com/blog",
    publisher: { "@type": "Organization", name: "oBizee", logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" } },
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Blog", url: "https://www.obizee.com/blog" },
      ]} />
      <JsonLd data={jsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="py-12 sm:py-16 bg-gradient-to-b from-orange-50/50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">Blog</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
              Guides & Stories for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Indian Sellers</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn how to sell online, grow your business, and make the most of oBizee.
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">{post.category}</span>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{post.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{post.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-orange-600 group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogIndex;
