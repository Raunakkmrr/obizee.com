import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Monitor, ArrowRight, Download, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Solutions = () => {
  const websiteTemplates = [
    {
      title: "E-commerce & Retail",
      description: "Perfect for online stores, fashion boutiques, and retail businesses",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Service-Based Businesses",
      description: "Ideal for consultants, agencies, and professional services",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Portfolio & Showroom",
      description: "Showcase your work, products, and creative projects",
      image: "/api/placeholder/300/200",
    },
  ];

  const mobileFeatures = [
    "Process orders instantly",
    "Real-time inventory updates",
    "Customer communication tools",
    "Live sales monitoring",
    "Staff management",
    "Financial reporting",
  ];

  const dashboardFeatures = [
    "Comprehensive analytics dashboard",
    "Inventory management system",
    "Customer relationship management",
    "Financial reporting & insights",
    "Order processing & tracking",
    "Team collaboration tools",
  ];

  // Enhanced JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "oBizee Business Solution Suite",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Website Templates",
      "Mobile Apps",
      "Business Dashboard",
      "Inventory Management",
      "Order Processing",
      "Customer Management",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "50000",
      bestRating: "5",
      worstRating: "1",
    },
    description: "Complete business solution suite including website templates, mobile apps, and comprehensive business management tools.",
    applicationSubCategory: "BusinessManagement",
    downloadUrl: "https://www.obizee.com/download",
    screenshot: "https://www.obizee.com/screenshots/dashboard.png",
    softwareVersion: "2.0",
    softwareHelp: "https://www.obizee.com/help",
    releaseNotes: "https://www.obizee.com/release-notes",
  };

  return (
    <>
      <Helmet>
        <title>Complete Business Solution Suite | oBizee</title>
        <meta
          name="description"
          content="Transform your business with oBizee's complete solution suite. Get professional website templates, powerful mobile apps, and comprehensive business management tools. Start growing today!"
        />
        <meta
          name="keywords"
          content="business solutions, website templates, mobile apps, business management, e-commerce, retail, service business, portfolio website"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Complete Business Solution Suite | oBizee" />
        <meta
          property="og:description"
          content="Transform your business with oBizee's complete solution suite. Get professional website templates, powerful mobile apps, and comprehensive business management tools."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.obizee.com/solutions" />
        <meta property="og:image" content="https://www.obizee.com/Obizee.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Business Solution Suite | oBizee" />
        <meta
          name="twitter:description"
          content="Transform your business with oBizee's complete solution suite. Get professional website templates, powerful mobile apps, and comprehensive business management tools."
        />
        <meta name="twitter:image" content="https://www.obizee.com/Obizee.png" />
        <link rel="canonical" href="https://www.obizee.com/solutions" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-white" aria-labelledby="solutions-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h1 id="solutions-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Solution Suite</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to build, manage, and grow your business online. From stunning websites to powerful mobile apps and
                comprehensive dashboards.
              </p>
            </div>
          </div>
        </section>

        {/* Website Templates Section */}
        <section className="py-20 bg-white" aria-labelledby="templates-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6" aria-hidden="true">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center">
                  <Globe className="h-10 w-10 text-blue-600" aria-hidden="true" />
                </div>
              </div>
              <h2 id="templates-heading" className="text-4xl font-bold text-gray-900 mb-6">
                Create Your Professional Online Presence
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Build stunning, mobile-responsive online stores and business websites effortlessly with our diverse collection of
                customizable templates. Get online faster, showcase your products, and connect with customers globally.
              </p>
              <Link to="/templates" aria-label="Browse all website templates">
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover-scale">
                  Browse All Website Templates
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Website templates">
              {websiteTemplates.map((template, index) => (
                <article
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
                  role="listitem"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center" aria-hidden="true">
                    <div className="text-gray-400 text-sm">Template Preview</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{template.title}</h3>
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    <Link to="/templates" aria-label={`Preview ${template.title} template`}>
                      <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-300">
                        Preview Template
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">✓ SEO-Friendly ✓ Mobile Responsive ✓ Easy Customization ✓ No Coding Required</p>
            </div>
          </div>
        </section>

        {/* Mobile Apps Section */}
        <section id="mobile" className="py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="mobile-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6" aria-hidden="true">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl flex items-center justify-center">
                  <Smartphone className="h-10 w-10 text-green-600" aria-hidden="true" />
                </div>
              </div>
              <h2 id="mobile-heading" className="text-4xl font-bold text-gray-900 mb-6">
                Manage Your Business On The Go
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Stay connected and in control, wherever you are. Our native iOS and Android apps bring the power of your business management
                dashboard directly to your smartphone. Process orders, update inventory, communicate with staff, and monitor sales, all from
                your pocket.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Mobile Features</h3>
                <ul className="grid grid-cols-1 gap-4" role="list" aria-label="Mobile app features">
                  {mobileFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm" role="listitem">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-4" aria-hidden="true"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 mt-8" role="group" aria-label="App download buttons">
                  <Button asChild className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-xl flex items-center justify-center">
                    <a
                      href="https://apps.apple.com/in/app/obizee/id6739462943"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get the app on App Store"
                    >
                      <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                      Download on App Store
                    </a>
                  </Button>
                  <Button asChild className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-xl flex items-center justify-center">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.obizeee"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get the app on Google Play"
                    >
                      <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                      Get it on Google Play
                    </a>
                  </Button>
                </div>
              </div>

              <div
                className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 h-96 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="text-center">
                  <Smartphone className="h-24 w-24 text-gray-400 mx-auto mb-4" aria-hidden="true" />
                  <p className="text-gray-500">Mobile App Screenshots</p>
                  <p className="text-sm text-gray-400">Upload your iOS and Android screenshots here</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Dashboard Section */}
        <section id="dashboard" className="py-20 bg-white" aria-labelledby="dashboard-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6" aria-hidden="true">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl flex items-center justify-center">
                  <Monitor className="h-10 w-10 text-purple-600" aria-hidden="true" />
                </div>
              </div>
              <h2 id="dashboard-heading" className="text-4xl font-bold text-gray-900 mb-6">
                Powerful Business Management at Your Fingertips
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Our intuitive web-based dashboard is the central hub for all your business operations. From comprehensive sales analytics
                and inventory control to customer relationship management and financial reporting, take command of your entire business with
                ease.
              </p>
              <Link to="/features" aria-label="Explore dashboard features">
                <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover-scale">
                  Explore Dashboard Features
                  <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Dashboard features">
              {dashboardFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  role="listitem"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature}</h3>
                  <p className="text-gray-600">
                    Streamline your operations and make data-driven decisions with our comprehensive business management tools.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Solutions;
