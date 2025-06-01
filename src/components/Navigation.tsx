
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const solutionsItems = [
    { name: 'Website Templates', href: '/templates', description: 'Professional website templates' },
    { name: 'Mobile Apps', href: '/solutions#mobile', description: 'iOS and Android apps' },
    { name: 'Web Dashboard', href: '/solutions#dashboard', description: 'Business management dashboard' }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center transition-transform hover:scale-105">
              <div className="w-12 h-12 mr-3">
                <img 
                  src="/lovable-uploads/2941a262-6754-4343-a36c-43a56c320d5d.png" 
                  alt="Obizee Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Obizee
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                to="/templates" 
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  isActive('/templates') 
                    ? 'text-orange-600 bg-orange-50 border-b-2 border-orange-600' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Website Templates
              </Link>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <Link
                  to="/solutions"
                  className={`px-4 py-2 text-sm font-medium flex items-center transition-all rounded-lg ${
                    isActive('/solutions')
                      ? 'text-orange-600 bg-orange-50 border-b-2 border-orange-600'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                
                {/* Solutions Dropdown */}
                <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-200 ${
                  isSolutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}>
                  <div className="p-4">
                    {solutionsItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="block p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link 
                to="/pricing" 
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  isActive('/pricing') 
                    ? 'text-orange-600 bg-orange-50 border-b-2 border-orange-600' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Pricing
              </Link>
              
              <Link 
                to="/success-stories" 
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  isActive('/success-stories') 
                    ? 'text-orange-600 bg-orange-50 border-b-2 border-orange-600' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Success Stories
              </Link>
              
              <Link 
                to="/help" 
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  isActive('/help') 
                    ? 'text-orange-600 bg-orange-50 border-b-2 border-orange-600' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Help
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="ghost" className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 p-2 rounded-lg hover:bg-orange-50 transition-all"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-100">
            <Link 
              to="/templates" 
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-all ${
                isActive('/templates') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Website Templates
            </Link>
            <Link 
              to="/solutions" 
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-all ${
                isActive('/solutions') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/pricing" 
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-all ${
                isActive('/pricing') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/success-stories" 
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-all ${
                isActive('/success-stories') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Success Stories
            </Link>
            <Link 
              to="/help" 
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-all ${
                isActive('/help') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Help
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-2 px-3">
                <Link to="/signin">
                  <Button variant="ghost" className="justify-start hover:bg-orange-50 w-full transition-all">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white justify-start rounded-xl w-full transition-all">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
