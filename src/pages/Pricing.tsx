
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Shield, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      duration: 'for first 2 months',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 100 orders per month',
        'Basic invoice templates',
        'Inventory tracking',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ],
      popular: false,
      buttonText: 'Start Free Trial',
      afterBonus: '1% per order (max ₹10)'
    },
    {
      name: 'Growth',
      price: '₹500 Bonus',
      duration: 'OR 2 months free',
      description: 'Ideal for growing businesses with moderate volume',
      features: [
        'Up to 1,000 orders per month',
        'All template categories',
        'Advanced inventory management',
        'Priority email support',
        'Multi-user access',
        'Advanced analytics',
        'Custom branding',
        'API access'
      ],
      popular: true,
      buttonText: 'Claim Bonus',
      afterBonus: '1% per order (max ₹10)'
    },
    {
      name: 'Pro',
      price: '₹500 Bonus',
      duration: 'OR 2 months free',
      description: 'For established businesses with high volume',
      features: [
        'Unlimited orders',
        'All premium templates',
        'Advanced automation',
        'Phone & email support',
        'Unlimited users',
        'Custom reports',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations'
      ],
      popular: false,
      buttonText: 'Claim Bonus',
      afterBonus: '1% per order (max ₹10)'
    }
  ];

  const faqs = [
    {
      question: 'How does the ₹500 bonus work?',
      answer: 'When you sign up, you get ₹500 credited to your account that can be used towards transaction fees. This typically covers your first 50-100 orders depending on your order values.'
    },
    {
      question: 'What happens after the bonus or free period?',
      answer: 'After your bonus is used up or the 2-month free period ends, you pay a simple 1% fee on each order, capped at ₹10 per order. No monthly subscriptions or hidden fees.'
    },
    {
      question: 'Can I switch between the bonus and free months?',
      answer: 'You can choose either the ₹500 bonus OR 2 months free when signing up. This is a one-time choice and cannot be changed later.'
    },
    {
      question: 'Are there any setup or monthly fees?',
      answer: 'No! We have no setup fees, no monthly subscriptions, and no hidden charges. You only pay the 1% transaction fee (max ₹10) after your bonus/free period.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We support all major payment methods including UPI, credit/debit cards, net banking, and popular wallets like Paytm, PhonePe, and Google Pay.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Bonus Banner */}
      <section className="py-6 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">Limited Time Offer</span>
              <Star className="h-6 w-6 ml-2" />
            </div>
            <p className="text-lg">
              Sign Up Today & Get <span className="font-bold text-yellow-200">₹500 Bonus OR 2 Months Free Usage!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free with our generous bonus offer. After that, pay only when you succeed - 
            just 1% per order with a maximum of ₹10 per transaction.
          </p>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 border border-green-200">
            <Shield className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">No Hidden Fees • No Setup Costs • No Long-term Contracts</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-orange-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-orange-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-orange-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">After bonus/free period:</p>
                    <p className="text-lg font-semibold text-gray-900">{plan.afterBonus}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/signup">
                    <Button 
                      className={`w-full py-3 rounded-xl text-lg font-semibold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg'
                          : 'bg-white text-orange-600 border-2 border-orange-500 hover:bg-orange-50'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model Explanation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How Our Pricing Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Start Free</h3>
              <p className="text-gray-600">Choose ₹500 bonus credit or 2 months completely free to get started.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-500 mx-auto mb-4">1%</div>
              <h3 className="text-xl font-semibold mb-3">Simple Fee</h3>
              <p className="text-gray-600">After the free period, pay only 1% per successful order.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-orange-500 mx-auto mb-4">₹10 Max</div>
              <h3 className="text-xl font-semibold mb-3">Capped Fee</h3>
              <p className="text-gray-600">Never pay more than ₹10 per order, no matter the order value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of businesses already using our platform to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl">
                Start Your Free Trial
              </Button>
            </Link>
            <Link to="/help">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold rounded-xl">
                <HeadphonesIcon className="mr-2 h-5 w-5" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
