import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Filter, Eye, Download, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "E-commerce", "Restaurant", "Portfolio", "Service Business", "Health & Beauty"];

  const websiteTemplates = [
    {
      id: 1,
      name: "Fashion Store Pro",
      category: "E-commerce",
      description: "Modern e-commerce template perfect for fashion and apparel businesses",
      image: "/placeholder.svg",
      features: ["Mobile Responsive", "Payment Gateway", "Product Catalog", "Shopping Cart"],
      rating: 4.8,
      downloads: 2400,
      popular: true,
    },
    {
      id: 2,
      name: "Restaurant Deluxe",
      category: "Restaurant",
      description: "Elegant restaurant template with online ordering and reservation system",
      image: "/placeholder.svg",
      features: ["Online Menu", "Reservation System", "Gallery", "Contact Forms"],
      rating: 4.9,
      downloads: 1850,
      popular: true,
    },
    {
      id: 3,
      name: "Creative Portfolio",
      category: "Portfolio",
      description: "Showcase your work with this stunning portfolio template",
      image: "/placeholder.svg",
      features: ["Gallery", "About Section", "Contact Form", "Blog"],
      rating: 4.7,
      downloads: 1200,
      popular: false,
    },
    {
      id: 4,
      name: "Electronics Hub",
      category: "E-commerce",
      description: "Professional electronics and gadgets online store template",
      image: "/placeholder.svg",
      features: ["Product Reviews", "Wishlist", "Compare Products", "Multi-vendor"],
      rating: 4.6,
      downloads: 980,
      popular: false,
    },
    {
      id: 5,
      name: "Consulting Pro",
      category: "Service Business",
      description: "Professional template for consulting and service-based businesses",
      image: "/placeholder.svg",
      features: ["Service Pages", "Team Section", "Testimonials", "Contact Forms"],
      rating: 4.8,
      downloads: 1500,
      popular: true,
    },
    {
      id: 6,
      name: "Beauty Salon Elite",
      category: "Health & Beauty",
      description: "Elegant beauty salon template with booking functionality",
      image: "/placeholder.svg",
      features: ["Appointment Booking", "Service Menu", "Staff Profiles", "Gallery"],
      rating: 4.9,
      downloads: 1100,
      popular: false,
    },
    {
      id: 7,
      name: "Fitness Studio",
      category: "Health & Beauty",
      description: "Dynamic fitness and gym template with class scheduling",
      image: "/placeholder.svg",
      features: ["Class Schedule", "Membership Plans", "Trainer Profiles", "Nutrition Blog"],
      rating: 4.7,
      downloads: 890,
      popular: false,
    },
    {
      id: 8,
      name: "Coffee Shop",
      category: "Restaurant",
      description: "Cozy coffee shop template with online ordering",
      image: "/placeholder.svg",
      features: ["Online Ordering", "Menu Display", "Location Map", "Events Calendar"],
      rating: 4.8,
      downloads: 750,
      popular: true,
    },
  ];

  const filteredTemplates = websiteTemplates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
          ratingCount: template.downloads,
          bestRating: "5",
          worstRating: "1",
        },
        downloadUrl: `https://obizee.com/templates/${template.id}`,
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
      <Helmet>
        <title>Website Templates | Professional Business Templates | oBizee</title>
        <meta
          name="description"
          content="Choose from our collection of professionally designed website templates for e-commerce, restaurants, portfolios, and more. Fully responsive, customizable, and ready to launch."
        />
        <meta
          name="keywords"
          content="website templates, e-commerce templates, restaurant templates, portfolio templates, business templates, responsive templates, customizable templates"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Website Templates | Professional Business Templates | oBizee" />
        <meta
          property="og:description"
          content="Choose from our collection of professionally designed website templates for e-commerce, restaurants, portfolios, and more. Fully responsive, customizable, and ready to launch."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://obizee.com/templates" />
        <meta property="og:image" content="https://obizee.com/templates-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Templates | Professional Business Templates | oBizee" />
        <meta
          name="twitter:description"
          content="Choose from our collection of professionally designed website templates for e-commerce, restaurants, portfolios, and more. Fully responsive, customizable, and ready to launch."
        />
        <meta name="twitter:image" content="https://obizee.com/templates-twitter.jpg" />
        <link rel="canonical" href="https://obizee.com/templates" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-white" aria-labelledby="templates-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 id="templates-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Website Templates
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  For Your Business
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our collection of professionally designed website templates. Each template is fully responsive, customizable,
                and ready to launch your online presence.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  aria-label="Search templates"
                />
              </div>
              <div className="flex gap-2 flex-wrap" role="list" aria-label="Template categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl transition-all ${
                      selectedCategory === category
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300"
                    }`}
                    role="listitem"
                    aria-pressed={selectedCategory === category}
                  >
                    {category}
                  </button>
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
              {filteredTemplates.map((template) => (
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
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src={template.image}
                      alt={`Preview of ${template.name} template`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                        <Button
                          size="sm"
                          className="bg-white text-gray-900 hover:bg-gray-100"
                          aria-label={`Preview ${template.name} template`}
                        >
                          <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                          Preview
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
                      <div className="flex items-center text-gray-500 text-sm">
                        <Download className="w-4 h-4 mr-1" aria-hidden="true" />
                        {template.downloads} downloads
                      </div>
                      <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded" role="status">
                        {template.category}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl"
                        aria-label={`Use ${template.name} template`}
                      >
                        Use Template
                      </Button>
                      <Button
                        variant="outline"
                        className="px-6 border-orange-200 hover:border-orange-300 hover:bg-orange-50 rounded-xl"
                        aria-label={`Preview ${template.name} template`}
                      >
                        Preview
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="text-center py-16" role="status" aria-live="polite">
                <p className="text-xl text-gray-500">No templates found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 bg-orange-500 hover:bg-orange-600 text-white"
                  aria-label="Clear search and filters"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Templates;
