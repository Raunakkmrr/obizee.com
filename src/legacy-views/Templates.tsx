"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Eye, Smartphone, ShieldCheck, Sparkles, Star } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const Templates = () => {
  const templateBaseUrl = "https://testing.obizee.com";

  const websiteTemplates = [
    {
      id: "template-modern-v1",
      name: "Modern V1",
      category: "Modern Commerce",
      description: "A clean storefront-first layout for brands that want a polished website with fast product discovery and a premium feel.",
      image: "/modern-template.png",
      features: ["Premium landing layout", "Hero-led product showcase", "Mobile responsive", "Fast catalog browsing"],
      rating: 5.0,
      previewUrl: `${templateBaseUrl}/?template=template-modern-v1`,
      popular: true,
      accent: "from-orange-500 to-amber-500",
      icon: Sparkles,
    },
    {
      id: "template-trust-v1",
      name: "Trust V1",
      category: "Trust-Led Brand",
      description: "Built for businesses that need stronger credibility, cleaner messaging, and a more confidence-driven customer journey.",
      image: "/trust-template.png",
      features: ["Trust-focused sections", "Clear brand messaging", "Conversion-oriented layout", "Responsive design"],
      rating: 5.0,
      previewUrl: `${templateBaseUrl}/?template=template-trust-v1`,
      popular: true,
      accent: "from-emerald-500 to-teal-500",
      icon: ShieldCheck,
    },
    {
      id: "template-mobile-social-v1",
      name: "Mobile Social V1",
      category: "Mobile-First Social",
      description: "A sharper mobile-first template made for Instagram and WhatsApp-led brands that sell through social traffic first.",
      image: "/mobile-template.png",
      features: ["Mobile-first structure", "Social traffic friendly", "Quick buy flow", "Compact product presentation"],
      rating: 5.0,
      previewUrl: `${templateBaseUrl}/?template=template-mobile-social-v1`,
      popular: true,
      accent: "from-sky-500 to-blue-500",
      icon: Smartphone,
    },
  ];

  // JSON-LD structured data for templates
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: websiteTemplates.map((template, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: template.name,
        applicationCategory: template.category,
        description: template.description,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: template.rating,
          ratingCount: "1",
          bestRating: "5",
          worstRating: "1",
        },
        url: template.previewUrl,
        featureList: template.features.join(", "),
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Templates", url: "https://www.obizee.com/templates" },
      ]} />
      <JsonLd data={jsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-white" aria-labelledby="templates-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 id="templates-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Website Templates
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Ready Right Now
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These are the only live website templates currently available on oBizee. Each one uses a different visual direction and can
                be previewed with the real template URL.
              </p>
            </div>
            <div className="mx-auto max-w-5xl rounded-3xl border border-orange-100 bg-gradient-to-r from-orange-50 via-white to-orange-50 p-5 sm:p-6">
              <div className="grid gap-4 md:grid-cols-3" role="list" aria-label="Live template summary">
                {websiteTemplates.map((template) => (
                  <div key={template.id} className="rounded-2xl bg-white p-4 text-left shadow-sm" role="listitem">
                    <p className="text-sm font-semibold text-orange-600">{template.category}</p>
                    <p className="mt-1 text-lg font-bold text-gray-900">{template.name}</p>
                    <p className="mt-2 text-sm text-gray-600">{template.id}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-16" aria-labelledby="templates-grid-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="templates-grid-heading" className="sr-only">
              Available Templates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Template list">
              {websiteTemplates.map((template) => (
                <article
                  key={template.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 group relative"
                  role="listitem"
                >
                  {template.popular && (
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center"
                        role="status"
                      >
                        <Star className="w-3 h-3 mr-1" aria-hidden="true" />
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Template Preview Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={template.image}
                      alt={`Preview of ${template.name} template`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                        <Button asChild size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                          <a
                            href={template.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            aria-label={`Preview ${template.name} template`}
                          >
                            <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                            Preview
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                      <div className="flex items-center text-yellow-500" role="img" aria-label={`${template.rating} out of 5 stars`}>
                        <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                        <span className="text-sm text-gray-600 ml-1">{template.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{template.description}</p>

                    <div className="mb-4 flex items-center gap-2">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${template.accent} text-white`}>
                        <template.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Template ID</p>
                        <p className="text-sm text-gray-500">{template.id}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2" role="list" aria-label="Template features">
                        {template.features.map((feature, index) => (
                          <span key={index} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full" role="listitem">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded" role="status">
                        {template.category}
                      </span>
                      <div className="text-sm font-medium text-green-600">Live preview available</div>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl">
                        <a
                          href={template.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          aria-label={`Use ${template.name} template`}
                        >
                          Open Template
                          <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="px-6 border-orange-200 hover:border-orange-300 hover:bg-orange-50 rounded-xl">
                        <a
                          href={template.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          aria-label={`Preview ${template.name} template`}
                        >
                          Preview
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Templates;
