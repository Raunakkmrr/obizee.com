"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, AlertTriangle, Calendar, User } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";
import { OBIZEE_SOFTWARE_SCHEMA } from "@/lib/productSchema";
import type { AlternativesPage } from "@/data/alternatives";

const articleFor = (word: string) => (/^[aeiou]/i.test(word) ? "an" : "a");

/**
 * Survey-format comparison: "the best alternatives to X".
 *
 * Distinct from the head-to-head /compare/obizee-vs-X pages, which answer
 * "is oBizee better than X". This answers "what are my options instead of X",
 * which is the query people actually type and the format Google serves for it.
 *
 * oBizee appears first and is badged "Best {rival} alternative overall" because,
 * for this audience, it verifiably is — 0 subscription, 0 setup fee, a free
 * mapped custom domain, unlimited products, plus shipping and payments the
 * rival doesn't have. Every entry, including oBizee's, still carries real
 * drawbacks: a survey with no downsides on its author reads as an
 * advertisement and gets discounted. Lead with what's true and strong; don't
 * hide it, and don't invent what isn't there.
 */
const AlternativesListicle = ({ page }: { page: AlternativesPage }) => {
  // Root-level slugs beat /compare/ ones for the queries these pages target, so
  // two of them have moved. `path` is the source of truth; slug is only the key.
  const pageUrl = `https://www.obizee.com${page.path ?? `/compare/${page.slug}`}`;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: page.title,
    description: page.metaDescription,
    itemListElement: page.options.map((option, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: option.name,
      description: option.positioning,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  // Dates are real git commit dates from src/data/alternatives.ts, not
  // guesses — see the field comments there. Update dateModified only when
  // the content on this page actually changes.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.metaDescription,
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" },
    },
    mainEntityOfPage: pageUrl,
    image: "https://www.obizee.com/Obizee.png",
  };

  const formattedDate = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={OBIZEE_SOFTWARE_SCHEMA} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.obizee.com/" },
          { name: "Compare", url: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
          { name: page.title, url: pageUrl },
        ]}
      />
      <Navigation />

      <main>
        <section className="py-12 sm:py-16 bg-gradient-to-br from-white to-orange-50/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">{page.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Raunak Kumar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>
                  Published {formattedDate(page.datePublished)}
                  {page.dateModified !== page.datePublished && ` · Updated ${formattedDate(page.dateModified)}`}
                </span>
              </div>
            </div>
            {/* The opening answer is deliberately complete on its own — this is the
                paragraph a search engine or language model quotes. */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{page.answer}</p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Why sellers look for {articleFor(page.rival)} {page.rival} alternative
            </h2>
            <ul className="space-y-3">
              {page.whyLeave.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                  <span className="text-gray-700 leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              The {page.options.length} best {page.rival} alternatives
            </h2>

            <div className="space-y-6">
              {page.options.map((option, index) => (
                <article
                  key={option.name}
                  className={`rounded-2xl border-2 bg-white p-5 sm:p-7 ${
                    option.isObizee ? "border-orange-300 shadow-lg shadow-orange-500/5" : "border-gray-200"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {index + 1}. {option.name}
                    </h3>
                    {option.isObizee && (
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-700">
                        {page.obizeeBadge ?? `Best ${page.rival} alternative overall`}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{option.positioning}</p>

                  <dl className="grid gap-3 sm:grid-cols-2 mb-5">
                    <div className="rounded-xl bg-gray-50 p-3.5">
                      <dt className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Pricing</dt>
                      <dd className="text-sm text-gray-700">{option.pricing}</dd>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-3.5">
                      <dt className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Best for</dt>
                      <dd className="text-sm text-gray-700">{option.bestFor}</dd>
                    </div>
                  </dl>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-sm font-bold text-green-700">Strengths</p>
                      <ul className="space-y-1.5">
                        {option.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-bold text-gray-500">Drawbacks</p>
                      <ul className="space-y-1.5">
                        {option.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-5">Want to see if oBizee fits?</h2>
            <p className="text-orange-50 mb-8 text-lg">
              Tell us what you sell and we will set you up. No monthly fee, and nothing to pay until ₹50,000 in orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AppDownloadTrigger>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 px-10 py-5 text-lg font-bold rounded-2xl"
                >
                  Download App
                  <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
                </Button>
              </AppDownloadTrigger>
              <WhatsAppCTA
                source={`alternatives_${page.slug}`}
                variant="light"
                label="Talk to us on WhatsApp"
                message={`Hi oBizee, I'm comparing ${page.rival} alternatives. Can you help me understand oBizee?`}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AlternativesListicle;
