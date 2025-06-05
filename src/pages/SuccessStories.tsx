import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SuccessStories = () => {
  const successStories = [
    {
      businessName: "Artisan Jewelry Co.",
      industry: "Handmade Jewelry",
      owner: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      challenge: "Managing orders from Instagram was chaotic. Lost track of inventory and struggled with payment follow-ups.",
      solution: "Used StreamFlow to create a professional store, automate inventory tracking, and streamline order management.",
      results: {
        revenue: "300% increase",
        orders: "500+ monthly orders",
        time: "80% time saved",
        rating: 5,
      },
      quote:
        "StreamFlow transformed my small Instagram business into a professional operation. The inventory management alone saved me hours every day!",
      image: "/placeholder.svg",
    },
    {
      businessName: "Fresh Farm Produce",
      industry: "Organic Food",
      owner: "Rajesh Patel",
      location: "Pune, Maharashtra",
      challenge: "Seasonal demand fluctuations made inventory planning difficult. Manual invoicing was time-consuming.",
      solution: "Implemented automated reorder points and used professional invoice templates to speed up billing.",
      results: {
        revenue: "250% growth",
        orders: "1,200+ orders",
        time: "60% faster billing",
        rating: 5,
      },
      quote:
        "The automated inventory alerts help me plan for seasonal demands. I never run out of stock anymore, and billing is so much faster.",
      image: "/placeholder.svg",
    },
    {
      businessName: "TechGadget Hub",
      industry: "Electronics",
      owner: "Amit Kumar",
      location: "Bangalore, Karnataka",
      challenge: "High-volume business needed better analytics and customer management to scale efficiently.",
      solution: "Used advanced analytics dashboard and CRM features to track customer behavior and optimize operations.",
      results: {
        revenue: "400% increase",
        orders: "2,000+ monthly",
        customers: "150% retention",
        rating: 5,
      },
      quote:
        "The analytics help me understand my customers better. I can now predict trends and stock accordingly. It's like having a business consultant built-in!",
      image: "/placeholder.svg",
    },
    {
      businessName: "Boutique Fashion",
      industry: "Women's Clothing",
      owner: "Sneha Gupta",
      location: "Delhi, NCR",
      challenge: "Seasonal fashion trends required quick inventory turnover and efficient supplier management.",
      solution: "Streamlined supplier management and used marketing campaign templates to promote new collections.",
      results: {
        revenue: "350% growth",
        inventory: "90% turnover",
        campaigns: "200% engagement",
        rating: 5,
      },
      quote: "Managing seasonal collections is now effortless. The supplier management and marketing tools help me stay ahead of trends.",
      image: "/placeholder.svg",
    },
    {
      businessName: "Home Decor Studio",
      industry: "Interior Design",
      owner: "Kavita Singh",
      location: "Jaipur, Rajasthan",
      challenge: "Custom orders needed better project tracking and customer communication.",
      solution: "Used project management templates and automated customer communication for order updates.",
      results: {
        revenue: "275% increase",
        projects: "95% on-time",
        satisfaction: "98% customer",
        rating: 5,
      },
      quote:
        "Custom projects are complex, but StreamFlow keeps everything organized. My clients love the professional communication and timely updates.",
      image: "/placeholder.svg",
    },
    {
      businessName: "Fitness Nutrition",
      industry: "Health & Wellness",
      owner: "Dr. Vikram Reddy",
      location: "Hyderabad, Telangana",
      challenge: "Subscription-based model needed automated billing and customer retention tracking.",
      solution: "Implemented subscription management and used customer analytics to improve retention strategies.",
      results: {
        revenue: "320% growth",
        retention: "85% customer",
        subscriptions: "1,500+ active",
        rating: 5,
      },
      quote:
        "The subscription management is perfect for my nutrition programs. Customer retention insights help me provide better service.",
      image: "/placeholder.svg",
    },
  ];

  const stats = [
    { label: "Businesses Transformed", value: "50,000+", icon: Users },
    { label: "Revenue Generated", value: "₹2,500 Cr+", icon: DollarSign },
    { label: "Average Growth", value: "285%", icon: TrendingUp },
    { label: "Customer Satisfaction", value: "98%", icon: Star },
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
          name: story.location,
        },
        about: {
          "@type": "Thing",
          name: story.industry,
        },
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
        <title>Success Stories | How Businesses Thrive with Obizee</title>
        <meta
          name="description"
          content="Discover how 50,000+ businesses across India have achieved remarkable growth using Obizee. Read real success stories from various industries and learn how our platform can transform your business."
        />
        <meta
          name="keywords"
          content="success stories, business growth, case studies, customer testimonials, business transformation, revenue growth, business success"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Success Stories | How Businesses Thrive with Obizee" />
        <meta
          property="og:description"
          content="Discover how 50,000+ businesses across India have achieved remarkable growth using Obizee. Read real success stories from various industries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://obizee.com/success-stories" />
        <meta property="og:image" content="https://obizee.com/success-stories-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Success Stories | How Businesses Thrive with Obizee" />
        <meta
          name="twitter:description"
          content="Discover how 50,000+ businesses across India have achieved remarkable growth using Obizee. Read real success stories from various industries."
        />
        <meta name="twitter:image" content="https://obizee.com/success-stories-twitter.jpg" />
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
              Discover how businesses across India have transformed their operations and achieved remarkable growth using StreamFlow.
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
                    >
                      {story.industry} • {story.location}
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900">{story.businessName}</h3>

                    <div className="flex items-center space-x-1 mb-4" role="img" aria-label={`${story.results.rating} out of 5 stars`}>
                      {[...Array(story.results.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                    </div>

                    <blockquote className="text-xl text-gray-700 italic border-l-4 border-orange-500 pl-6">"{story.quote}"</blockquote>

                    <div className="text-gray-600">
                      <strong>{story.owner}</strong>, Founder of {story.businessName}
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
                        <div className="text-2xl font-bold text-green-600">{story.results.revenue}</div>
                        <div className="text-sm text-gray-600">Revenue Growth</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 text-center" role="listitem">
                        <div className="text-2xl font-bold text-blue-600">{story.results.orders}</div>
                        <div className="text-sm text-gray-600">Monthly Orders</div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 text-center">
                      <div className="w-64 h-64 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center" aria-hidden="true">
                        <div className="text-6xl">{story.businessName.charAt(0)}</div>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-xl font-bold text-gray-900">{story.businessName}</h4>
                        <p className="text-gray-600">{story.industry}</p>
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
              Have you achieved remarkable growth with StreamFlow? We'd love to feature your success story and inspire other entrepreneurs.
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
                  How StreamFlow helped solve your problems
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
              <Link to="/signup">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
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
