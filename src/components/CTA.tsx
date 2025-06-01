
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
          <Building className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-medium">Join 50K+ Growing Businesses</span>
          <Zap className="w-4 h-4 text-yellow-300 ml-2" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Ready to Transform Your
          <span className="block">Business Operations?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join thousands of entrepreneurs who streamlined their business operations and achieved remarkable growth. 
          Start your transformation today with our generous bonus offer.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link to="/signup">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300">
              Claim Your ₹500 Bonus
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
          <Link to="/success-stories">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-12 py-4 text-xl font-bold rounded-2xl backdrop-blur-sm transition-all duration-300"
            >
              See Success Stories
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <CheckCircle className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold text-white">₹500 bonus OR 2 months free</span>
          </div>
          <div className="flex items-center justify-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <CheckCircle className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold text-white">No setup fees</span>
          </div>
          <div className="flex items-center justify-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <CheckCircle className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" />
            <span className="text-lg font-semibold text-white">Launch in 5 minutes</span>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-orange-100 mb-6">Trusted by leading businesses across India</p>
          <div className="flex justify-center items-center space-x-12 opacity-70">
            <div className="text-white font-bold text-lg">50K+ Users</div>
            <div className="text-white font-bold text-lg">99.9% Uptime</div>
            <div className="text-white font-bold text-lg">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
