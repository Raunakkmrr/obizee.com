
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Filter, Eye, Download, Star } from 'lucide-react';

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'E-commerce', 'Restaurant', 'Portfolio', 'Service Business', 'Health & Beauty'];

  const websiteTemplates = [
    {
      id: 1,
      name: 'Fashion Store Pro',
      category: 'E-commerce',
      description: 'Modern e-commerce template perfect for fashion and apparel businesses',
      image: '/placeholder.svg',
      features: ['Mobile Responsive', 'Payment Gateway', 'Product Catalog', 'Shopping Cart'],
      rating: 4.8,
      downloads: 2400,
      popular: true
    },
    {
      id: 2,
      name: 'Restaurant Deluxe',
      category: 'Restaurant',
      description: 'Elegant restaurant template with online ordering and reservation system',
      image: '/placeholder.svg',
      features: ['Online Menu', 'Reservation System', 'Gallery', 'Contact Forms'],
      rating: 4.9,
      downloads: 1850,
      popular: true
    },
    {
      id: 3,
      name: 'Creative Portfolio',
      category: 'Portfolio',
      description: 'Showcase your work with this stunning portfolio template',
      image: '/placeholder.svg',
      features: ['Gallery', 'About Section', 'Contact Form', 'Blog'],
      rating: 4.7,
      downloads: 1200,
      popular: false
    },
    {
      id: 4,
      name: 'Electronics Hub',
      category: 'E-commerce',
      description: 'Professional electronics and gadgets online store template',
      image: '/placeholder.svg',
      features: ['Product Reviews', 'Wishlist', 'Compare Products', 'Multi-vendor'],
      rating: 4.6,
      downloads: 980,
      popular: false
    },
    {
      id: 5,
      name: 'Consulting Pro',
      category: 'Service Business',
      description: 'Professional template for consulting and service-based businesses',
      image: '/placeholder.svg',
      features: ['Service Pages', 'Team Section', 'Testimonials', 'Contact Forms'],
      rating: 4.8,
      downloads: 1500,
      popular: true
    },
    {
      id: 6,
      name: 'Beauty Salon Elite',
      category: 'Health & Beauty',
      description: 'Elegant beauty salon template with booking functionality',
      image: '/placeholder.svg',
      features: ['Appointment Booking', 'Service Menu', 'Staff Profiles', 'Gallery'],
      rating: 4.9,
      downloads: 1100,
      popular: false
    },
    {
      id: 7,
      name: 'Fitness Studio',
      category: 'Health & Beauty',
      description: 'Dynamic fitness and gym template with class scheduling',
      image: '/placeholder.svg',
      features: ['Class Schedule', 'Membership Plans', 'Trainer Profiles', 'Nutrition Blog'],
      rating: 4.7,
      downloads: 890,
      popular: false
    },
    {
      id: 8,
      name: 'Coffee Shop',
      category: 'Restaurant',
      description: 'Cozy coffee shop template with online ordering',
      image: '/placeholder.svg',
      features: ['Online Ordering', 'Menu Display', 'Location Map', 'Events Calendar'],
      rating: 4.8,
      downloads: 750,
      popular: true
    }
  ];

  const filteredTemplates = websiteTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Website Templates
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                For Your Business
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of professionally designed website templates. 
              Each template is fully responsive, customizable, and ready to launch your online presence.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl transition-all ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div 
                key={template.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 group relative"
              >
                {template.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                {/* Template Preview Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{template.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.features.map((feature, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Download className="w-4 h-4 mr-1" />
                      {template.downloads} downloads
                    </div>
                    <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {template.category}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl">
                      Use Template
                    </Button>
                    <Button variant="outline" className="px-6 border-orange-200 hover:border-orange-300 hover:bg-orange-50 rounded-xl">
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTemplates.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No templates found matching your criteria.</p>
              <Button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Templates;
