"use client";

import React, { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

interface BlogPostLayoutProps {
  title: string;
  description: string;
  /** Real git commit date this post first went live. Never guess — check `git log`. */
  date: string;
  /** Real git commit date of the most recent substantive edit. Omit if the post hasn't been touched since it published — a bumped date with no real edit is the "fake freshness" pattern Google discounts. */
  updatedDate?: string;
  readTime: string;
  author: string;
  slug: string;
  children: ReactNode;
  jsonLdData?: Record<string, any>[];
}

export default function BlogPostLayout({
  title,
  description,
  date,
  updatedDate,
  readTime,
  author,
  slug,
  children,
  jsonLdData = [],
}: BlogPostLayoutProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: date,
    dateModified: updatedDate ?? date,
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" },
    },
    mainEntityOfPage: `https://www.obizee.com/blog/${slug}`,
    image: "https://www.obizee.com/Obizee.png",
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Blog", url: "https://www.obizee.com/blog" },
        { name: title, url: `https://www.obizee.com/blog/${slug}` },
      ]} />
      <JsonLd data={articleJsonLd} />
      {jsonLdData.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-orange-50/50 to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>
                  Published {date}
                  {updatedDate && updatedDate !== date && ` · Updated ${updatedDate}`}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-600 prose-img:rounded-2xl prose-img:shadow-lg">
              {children}
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-orange-100 mb-8 text-lg">Download oBizee and set up your store in 2 minutes. No coding. No monthly fees.</p>
            <AppDownloadTrigger>
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl text-lg font-semibold">
                Download oBizee <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </AppDownloadTrigger>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
