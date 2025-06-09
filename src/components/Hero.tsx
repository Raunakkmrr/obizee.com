import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/40 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-50/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200/50 backdrop-blur-sm mb-8">
              <Building className="w-5 h-5 text-orange-600 mr-2" aria-hidden="true" />
              <span className="text-orange-800 font-medium">Trusted by 50,000+ Businesses</span>
              <Sparkles className="w-4 h-4 text-orange-500 ml-2" aria-hidden="true" />
            </div>

            {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Business Operations
              </span>
            </h1> */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Instagram to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">Enpire</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Streamline sales, manage inventory, track finances, and grow your business with our comprehensive management platform. Get
              ₹500 bonus or 2 months free when you sign up today!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <Link to="/signup" aria-label="Get started with free trial">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="ml-3 h-6 w-6" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/success-stories" aria-label="View customer success stories">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-4 text-lg border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 rounded-2xl transition-all duration-300"
                >
                  <Play className="mr-3 h-6 w-6" aria-hidden="true" />
                  See Success Stories
                </Button>
              </Link>
            </div>

            <div
              className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500"
              role="list"
              aria-label="Key benefits"
            >
              <div className="flex items-center" role="listitem">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" aria-hidden="true"></div>
                ₹500 bonus OR 2 months free
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
          <div className="lg:col-span-6 mt-16 lg:mt-0">
            <div className="relative">
              {/* Main dashboard card */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
                role="complementary"
                aria-label="Dashboard preview"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Business Dashboard</h2>
                    <div className="flex space-x-2" aria-hidden="true">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4">
                      <div className="text-orange-100 text-sm mb-1">Today's Sales</div>
                      <div className="text-2xl font-bold">₹47,230</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <div className="text-orange-100 text-sm mb-1">Active Orders</div>
                      <div className="text-2xl font-bold">156</div>
                    </div>
                  </div>
                </div>

                {/* Template preview */}
                <div className="space-y-3" role="list" aria-label="Available features">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl" role="listitem">
                    <span className="text-gray-700">Invoice Templates</span>
                    <span className="text-green-600 font-semibold">Ready</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl" role="listitem">
                    <span className="text-gray-700">Inventory Management</span>
                    <Zap className="w-5 h-5 text-orange-500" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-4 shadow-lg"
                role="complementary"
                aria-label="Service uptime"
              >
                <div className="text-white font-bold text-center">
                  <div className="text-2xl">99.9%</div>
                  <div className="text-sm">Uptime</div>
                </div>
              </div>

              <div
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
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
