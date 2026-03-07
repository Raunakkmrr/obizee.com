import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-8 left-2 w-40 h-40 sm:top-20 sm:left-10 sm:w-72 sm:h-72 bg-gradient-to-br from-orange-200/40 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 right-2 w-52 h-52 sm:bottom-20 sm:right-10 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-100/30 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-50/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-10 sm:pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center min-h-[78vh] sm:min-h-[80vh]">
          {/* Content */}
          <div className="lg:col-span-6 text-center lg:text-left min-w-0">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200/50 backdrop-blur-sm mb-6 sm:mb-8">
              <Building className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mr-2" aria-hidden="true" />
              <span className="text-orange-800 text-sm sm:text-base font-medium">Built for Indian Small Businesses</span>
              <Sparkles className="w-4 h-4 text-orange-500 ml-2 hidden sm:block" aria-hidden="true" />
            </div>

            {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Business Operations
              </span>
            </h1> */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-8">
              The Order of Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                for Indian Sellers
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-7 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              oBizee helps businesses selling on Instagram and WhatsApp manage orders, inventory, payments, shipping, and customer updates
              from one simple dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-12">
              <AppDownloadTrigger>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Download oBizee app"
                >
                  Download App
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </Button>
              </AppDownloadTrigger>
              <Link to="/success-stories" aria-label="View customer success stories">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 rounded-2xl transition-all duration-300"
                >
                  <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  See Success Stories
                </Button>
              </Link>
            </div>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500"
              role="list"
              aria-label="Key benefits"
            >
              <div className="flex items-center" role="listitem">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" aria-hidden="true"></div>
                3 months free trial, then 1% per successful order (max ₹10)
              </div>
              <div className="flex items-center" role="listitem">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" aria-hidden="true"></div>
                No setup fees
              </div>
              <div className="flex items-center" role="listitem">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" aria-hidden="true"></div>
                Launch in minutes
              </div>
            </div>
          </div>

          {/* Modern Dashboard Preview */}
          <div className="lg:col-span-6 mt-10 sm:mt-16 lg:mt-0 min-w-0">
            <div className="relative">
              {/* Main dashboard card */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-4 sm:p-8 border border-white/20"
                role="complementary"
                aria-label="Dashboard preview"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 sm:p-6 text-white mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-2xl font-bold">Business Dashboard</h2>
                    <div className="flex space-x-2" aria-hidden="true">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-3 sm:p-4">
                      <div className="text-orange-100 text-xs sm:text-sm mb-1">Today's Sales</div>
                      <div className="text-lg sm:text-2xl font-bold">₹47,230</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3 sm:p-4">
                      <div className="text-orange-100 text-xs sm:text-sm mb-1">Active Orders</div>
                      <div className="text-lg sm:text-2xl font-bold">156</div>
                    </div>
                  </div>
                </div>

                {/* Template preview */}
                <div className="space-y-2 sm:space-y-3" role="list" aria-label="Available features">
                  <div className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-xl" role="listitem">
                    <span className="text-gray-700 text-sm sm:text-base">Invoice Templates</span>
                    <span className="text-green-600 font-semibold">Ready</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-xl" role="listitem">
                    <span className="text-gray-700 text-sm sm:text-base">Inventory Management</span>
                    <Zap className="w-5 h-5 text-orange-500" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="hidden sm:block absolute -bottom-6 -right-6 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-4 shadow-lg"
                role="complementary"
                aria-label="Service uptime"
              >
                <div className="text-white font-bold text-center">
                  <div className="text-2xl">99.9%</div>
                  <div className="text-sm">Uptime</div>
                </div>
              </div>

              <div
                className="hidden sm:block absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
                role="complementary"
                aria-label="Business count"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">50K+</div>
                  <div className="text-sm text-gray-600">Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
