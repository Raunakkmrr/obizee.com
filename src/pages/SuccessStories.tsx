import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { verifiedBrands } from "@/data/verifiedBrands";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";

const SuccessStories = () => {
  const successStories = verifiedBrands.map((brand) => ({
    businessName: brand.brandName,
    owner: brand.ownerName,
    state: brand.state,
    subDomain: brand.subDomain,
    profileUrl: brand.instagramUrl,
    challenge: brand.challenge,
    solution: brand.solution,
    rating: 5,
    quote: brand.quote,
    image: brand.logo,
  }));

  const statesRepresented = new Set(successStories.map((story) => story.state)).size;

  const stats = [
    { label: "Verified Brands Featured", value: `${successStories.length}`, icon: Users },
    { label: "States Represented", value: `${statesRepresented}`, icon: TrendingUp },
    { label: "Active Store Links", value: `${successStories.length}`, icon: TrendingUp },
    { label: "Customer Rating", value: "5.0/5", icon: Star },
  ];

  // JSON-LD structured data for success stories
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: successStories.map((story, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        headline: `${story.businessName} Success Story`,
        author: {
          "@type": "Person",
          name: story.owner,
        },
        locationCreated: {
          "@type": "Place",
          name: story.state,
        },
        about: {
          "@type": "Thing",
          name: "Instagram-led small business operations",
        },
        url: story.profileUrl,
        description: story.quote,
        articleBody: `${story.challenge} ${story.solution}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://obizee.com/success-stories/${story.businessName.toLowerCase().replace(/\s+/g, "-")}`,
        },
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Success Stories | How Businesses Thrive with oBizee</title>
        <meta
          name="description"
          content="Read real success stories from early-stage Indian brands using oBizee to run orders, inventory, and customer communication in one place."
        />
        <meta
          name="keywords"
          content="oBizee success stories, Indian startup brands, customer testimonials, Instagram seller stories, business growth case studies"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Success Stories | How Businesses Thrive with oBizee" />
        <meta
          property="og:description"
          content="Real stories from early-stage Indian brands using oBizee for day-to-day business operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://obizee.com/success-stories" />
        <meta property="og:image" content="https://obizee.com/Obizee.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Success Stories | How Businesses Thrive with oBizee" />
        <meta
          name="twitter:description"
          content="Real stories from early-stage Indian brands using oBizee for order, stock, and customer workflows."
        />
        <meta name="twitter:image" content="https://obizee.com/Obizee.png" />
        <link rel="canonical" href="https://obizee.com/success-stories" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-white" aria-labelledby="success-stories-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="success-stories-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Businesses,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Real Success</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Discover how early-stage businesses across India are using oBizee to organize and scale daily operations.
            </p>

            {/* Success Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list" aria-label="Success statistics">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" role="listitem">
                  <div
                    className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    aria-hidden="true"
                  >
                    <stat.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16" aria-labelledby="stories-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="stories-heading" className="sr-only">
              Success Stories
            </h2>
            <div className="space-y-16" role="list" aria-label="Success stories">
              {successStories.map((story, index) => (
                <article
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  role="listitem"
                >
                  {/* Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <div
                      className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium"
                      role="status"
                    >Verified Brand • {story.state}</div>

                    <h3 className="text-3xl font-bold text-gray-900">{story.businessName}</h3>

                    <div className="flex items-center space-x-1 mb-4" role="img" aria-label={`${story.rating} out of 5 stars`}>
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                    </div>

                    <blockquote className="text-xl text-gray-700 italic border-l-4 border-orange-500 pl-6">"{story.quote}"</blockquote>

                    <div className="text-gray-600">
                      <strong>{story.owner}</strong>, Founder of {story.businessName}
                    </div>
                    <div>
                      <a
                        href={story.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-orange-600 hover:text-orange-700 underline"
                        aria-label={`View ${story.businessName} Instagram profile`}
                      >
                        View Instagram Profile
                      </a>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
                        <p className="text-gray-600">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">The Solution:</h4>
                        <p className="text-gray-600">{story.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-4" role="list" aria-label="Business results">
                      <div className="bg-green-50 rounded-xl p-4 text-center" role="listitem">
                        <div className="text-2xl font-bold text-green-700">{story.owner}</div>
                        <div className="text-sm text-gray-600">Owner</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 text-center" role="listitem">
                        <div className="text-2xl font-bold text-blue-600 break-all">{story.subDomain}</div>
                        <div className="text-sm text-gray-600">Store Subdomain</div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 text-center">
                      <div className="w-64 h-64 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <img
                          src={story.image}
                          alt={`${story.businessName} logo`}
                          className="w-52 h-52 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-6">
                        <h4 className="text-xl font-bold text-gray-900">{story.businessName}</h4>
                        <p className="text-gray-600">{story.state}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Your Story */}
        <section className="py-16 bg-gray-50" aria-labelledby="submit-story-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="submit-story-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Share Your Success Story
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Have you achieved remarkable growth with oBizee? We'd love to feature your success story and inspire other entrepreneurs.
            </p>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Include:</h3>
              <ul className="text-left text-gray-600 space-y-2 mb-8 max-w-2xl mx-auto" role="list" aria-label="Story requirements">
                <li className="flex items-center" role="listitem">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" aria-hidden="true"></div>
                  Your business background and challenges
                </li>
                <li className="flex items-center" role="listitem">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" aria-hidden="true"></div>
                  How oBizee helped solve your problems
                </li>
                <li className="flex items-center" role="listitem">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" aria-hidden="true"></div>
                  Specific results and growth metrics
                </li>
                <li className="flex items-center" role="listitem">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" aria-hidden="true"></div>
                  High-quality photos of your business
                </li>
              </ul>
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl"
                aria-label="Submit your success story"
              >
                Submit Your Story
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-orange-100 mb-8">Join thousands of successful businesses and start your transformation today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AppDownloadTrigger>
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl"
                    aria-label="Download oBizee app"
                  >
                    Download App
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </AppDownloadTrigger>
                <Link to="/templates">
                  <Button
                    variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold rounded-xl"
                >
                  Explore Templates
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SuccessStories;
