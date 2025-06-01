
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Search, MessageCircle, Mail, Phone, Book, Video, Users, HelpCircle } from 'lucide-react';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I create my first invoice?',
          answer: 'Navigate to Templates > Invoice Template, fill in your business details, add items, and save. You can then send it directly to your customer or download as PDF.'
        },
        {
          question: 'How do I set up my business profile?',
          answer: 'Go to Settings > Business Profile and fill in your company name, address, logo, and other business details. This information will appear on all your invoices and documents.'
        },
        {
          question: 'Can I import my existing customer data?',
          answer: 'Yes! Go to Customers > Import and upload a CSV file with your customer information. We support standard formats from Excel, Google Sheets, and other business apps.'
        }
      ]
    },
    {
      title: 'Billing & Pricing',
      faqs: [
        {
          question: 'How does the ₹500 bonus work?',
          answer: 'The ₹500 bonus is credited to your account upon signup and automatically used to cover transaction fees. It typically covers 50-100 orders depending on your order values.'
        },
        {
          question: 'When am I charged the 1% fee?',
          answer: 'The 1% fee (max ₹10) is only charged on successful orders after your bonus is exhausted or free period ends. No charges for failed transactions or refunds.'
        },
        {
          question: 'Can I change from bonus to free months?',
          answer: 'The choice between ₹500 bonus or 2 months free is made during signup and cannot be changed later. Choose based on your expected order volume.'
        }
      ]
    },
    {
      title: 'Features & Templates',
      faqs: [
        {
          question: 'Can I customize the templates?',
          answer: 'Absolutely! All templates are fully customizable. You can modify colors, fonts, layouts, add your logo, and save custom versions for future use.'
        },
        {
          question: 'Do you support multiple currencies?',
          answer: 'Yes, we support 100+ currencies. You can set your default currency in Settings and also create invoices in different currencies for international clients.'
        },
        {
          question: 'Can I track inventory across multiple locations?',
          answer: 'Yes, our inventory management supports multiple warehouses/locations. You can track stock levels, transfers, and set location-specific reorder points.'
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 2 hours',
      action: 'Send Email',
      color: 'bg-green-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Sat, 9 AM - 9 PM',
      action: 'Call Now',
      color: 'bg-orange-500'
    }
  ];

  const resources = [
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Comprehensive guides and tutorials',
      link: '#'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '#'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
      link: '#'
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Can We
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Help You?
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to your questions, get support, or learn how to make the most of our platform.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get Instant Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 text-center">
                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-2">{option.description}</p>
                <p className="text-sm text-gray-500 mb-6">{option.availability}</p>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl">
                  {option.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          
          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-8">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-500">No results found for "{searchTerm}"</p>
              <Button 
                onClick={() => setSearchTerm('')}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white"
              >
                Clear Search
              </Button>
            </div>
          )}
          
          {(searchTerm === '' ? faqCategories : filteredFAQs).map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white rounded-2xl p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a 
                key={index} 
                href={resource.link}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-orange-100 transition-colors">
                  <resource.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;
