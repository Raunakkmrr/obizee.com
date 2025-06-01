
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Monitor, ArrowRight, Play, Download, ExternalLink } from 'lucide-react';

const Solutions = () => {
  const websiteTemplates = [
    {
      title: "E-commerce & Retail",
      description: "Perfect for online stores, fashion boutiques, and retail businesses",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Service-Based Businesses",
      description: "Ideal for consultants, agencies, and professional services",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Portfolio & Showroom",
      description: "Showcase your work, products, and creative projects",
      image: "/api/placeholder/300/200"
    }
  ];

  const mobileFeatures = [
    "Process orders instantly",
    "Real-time inventory updates",
    "Customer communication tools",
    "Live sales monitoring",
    "Staff management",
    "Financial reporting"
  ];

  const dashboardFeatures = [
    "Comprehensive analytics dashboard",
    "Inventory management system",
    "Customer relationship management",
    "Financial reporting & insights",
    "Order processing & tracking",
    "Team collaboration tools"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Solution Suite
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, manage, and grow your business online. From stunning websites to powerful mobile apps and comprehensive dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* Website Templates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Create Your Professional Online Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Build stunning, mobile-responsive online stores and business websites effortlessly with our diverse collection of customizable templates. Get online faster, showcase your products, and connect with customers globally.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover-scale">
              Browse All Website Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websiteTemplates.map((template, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Template Preview</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{template.title}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-300">
                    Preview Template
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">✓ SEO-Friendly ✓ Mobile Responsive ✓ Easy Customization ✓ No Coding Required</p>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl flex items-center justify-center">
                <Smartphone className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Manage Your Business On The Go
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Stay connected and in control, wherever you are. Our native iOS and Android apps bring the power of your business management dashboard directly to your smartphone. Process orders, update inventory, communicate with staff, and monitor sales, all from your pocket.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Mobile Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {mobileFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-xl flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download on App Store
                </Button>
                <Button className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-xl flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Get it on Google Play
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Smartphone className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Mobile App Screenshots</p>
                <p className="text-sm text-gray-400">Upload your iOS and Android screenshots here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl flex items-center justify-center">
                <Monitor className="h-10 w-10 text-purple-600" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful Business Management at Your Fingertips
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our intuitive web-based dashboard is the central hub for all your business operations. From comprehensive sales analytics and inventory control to customer relationship management and financial reporting, take command of your entire business with ease.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover-scale">
              Explore Dashboard Features
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 h-96 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <Monitor className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Dashboard Screenshot</p>
                <p className="text-sm text-gray-400">Live dashboard preview will appear here</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Capabilities</h3>
              <div className="grid grid-cols-1 gap-4">
                {dashboardFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center bg-purple-50 p-4 rounded-xl">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
