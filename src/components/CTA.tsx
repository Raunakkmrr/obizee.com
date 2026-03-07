import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Building } from "lucide-react";
import { Link } from "react-router-dom";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";

const CTA = () => {
  return (
    <section
      className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-red-300/20 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-5 sm:mb-8"
          role="status"
          aria-label="Business growth badge"
        >
          <Building className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2" aria-hidden="true" />
          <span className="text-white text-sm sm:text-base font-medium">Join 50K+ Growing Businesses</span>
          <Zap className="w-4 h-4 text-yellow-300 ml-2 hidden sm:block" aria-hidden="true" />
        </div>

        <h2 id="cta-heading" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-8 leading-tight">
          Ready to Transform Your
          <span className="block">Business Operations?</span>
        </h2>

        <p className="text-base sm:text-xl md:text-2xl text-orange-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
          Join thousands of entrepreneurs who streamlined their business operations and achieved remarkable growth. Start your
          transformation today with a simple pricing model.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mb-10 sm:mb-16" role="group" aria-label="Call to action buttons">
          <AppDownloadTrigger>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              aria-label="Download oBizee app"
            >
              Download App
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </Button>
          </AppDownloadTrigger>
          <Link to="/success-stories">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-xl font-bold rounded-2xl backdrop-blur-sm transition-all duration-300"
              aria-label="View success stories"
            >
              See Success Stories
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-8 max-w-4xl mx-auto" role="list" aria-label="Offer benefits">
          <div className="flex items-center justify-center bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm" role="listitem">
            <CheckCircle className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm sm:text-lg font-semibold text-white">3 months free trial</span>
          </div>
          <div className="flex items-center justify-center bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm" role="listitem">
            <CheckCircle className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm sm:text-lg font-semibold text-white">No setup fees</span>
          </div>
          <div className="flex items-center justify-center bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm" role="listitem">
            <CheckCircle className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm sm:text-lg font-semibold text-white">Launch in 5 minutes</span>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20" role="complementary" aria-label="Trust indicators">
          <p className="text-orange-100 text-sm sm:text-base mb-4 sm:mb-6">Trusted by leading businesses across India</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-70" role="list" aria-label="Business statistics">
            <div className="text-white font-bold text-base sm:text-lg" role="listitem">
              50K+ Users
            </div>
            <div className="text-white font-bold text-base sm:text-lg" role="listitem">
              99.9% Uptime
            </div>
            <div className="text-white font-bold text-base sm:text-lg" role="listitem">
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
