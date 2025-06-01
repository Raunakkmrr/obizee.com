
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Filter, FileText, BarChart3, Users, DollarSign, Package, TrendingUp, Calendar, Mail } from 'lucide-react';

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sales', 'Inventory', 'Finance', 'Marketing', 'HR'];

  const templates = [
    {
      id: 1,
      name: 'Invoice Template',
      category: 'Sales',
      description: 'Professional invoice template with automatic calculations and payment tracking',
      icon: FileText,
      features: ['Auto calculations', 'Payment tracking', 'Customizable branding'],
      popular: true
    },
    {
      id: 2,
      name: 'Inventory Management',
      category: 'Inventory',
      description: 'Track stock levels, manage suppliers, and automate reorder points',
      icon: Package,
      features: ['Stock alerts', 'Supplier management', 'Reorder automation'],
      popular: true
    },
    {
      id: 3,
      name: 'Sales Dashboard',
      category: 'Sales',
      description: 'Comprehensive sales analytics with revenue tracking and forecasting',
      icon: BarChart3,
      features: ['Revenue analytics', 'Sales forecasting', 'Team performance'],
      popular: false
    },
    {
      id: 4,
      name: 'CRM Template',
      category: 'Sales',
      description: 'Customer relationship management with lead tracking and follow-ups',
      icon: Users,
      features: ['Lead management', 'Follow-up automation', 'Customer insights'],
      popular: true
    },
    {
      id: 5,
      name: 'Financial Reports',
      category: 'Finance',
      description: 'P&L statements, balance sheets, and cash flow reports',
      icon: DollarSign,
      features: ['P&L reports', 'Balance sheets', 'Cash flow tracking'],
      popular: false
    },
    {
      id: 6,
      name: 'Marketing Campaign',
      category: 'Marketing',
      description: 'Plan, execute, and track marketing campaigns across channels',
      icon: TrendingUp,
      features: ['Campaign planning', 'ROI tracking', 'Multi-channel support'],
      popular: false
    },
    {
      id: 7,
      name: 'Employee Management',
      category: 'HR',
      description: 'Manage employee records, attendance, and performance reviews',
      icon: Users,
      features: ['Employee records', 'Attendance tracking', 'Performance reviews'],
      popular: false
    },
    {
      id: 8,
      name: 'Event Planning',
      category: 'Marketing',
      description: 'Organize events, manage vendors, and track attendees',
      icon: Calendar,
      features: ['Vendor management', 'Attendee tracking', 'Budget planning'],
      popular: false
    },
    {
      id: 9,
      name: 'Email Marketing',
      category: 'Marketing',
      description: 'Create, send, and track email campaigns with automation',
      icon: Mail,
      features: ['Email automation', 'Campaign analytics', 'List management'],
      popular: true
    }
  ];

  const filteredTemplates = templates.filter(template => {
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
              Business Templates
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Ready to Use
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of professionally designed templates to streamline your business operations. 
              Each template is fully customizable and ready to deploy.
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
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 group relative"
              >
                {template.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-100 transition-colors">
                    <template.icon className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{template.name}</h3>
                <p className="text-gray-600 mb-6">{template.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
