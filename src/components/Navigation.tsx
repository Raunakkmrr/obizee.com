
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                StreamFlow
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-orange-50">
                Templates
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-600 px-4 py-2 text-sm font-medium flex items-center transition-colors rounded-lg hover:bg-orange-50">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-orange-50">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-orange-50">
                Success Stories
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-orange-50">
                Help
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-orange-600 hover:bg-orange-50">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 p-2 rounded-lg hover:bg-orange-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-100">
            <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-orange-50">
              Templates
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-orange-50">
              Solutions
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-orange-50">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-orange-50">
              Success Stories
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-orange-50">
              Help
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-2 px-3">
                <Button variant="ghost" className="justify-start hover:bg-orange-50">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white justify-start rounded-xl">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
