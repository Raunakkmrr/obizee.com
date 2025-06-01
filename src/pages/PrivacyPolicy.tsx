
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: FileText,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes your name, email address, phone number, business information, and payment details.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect information about how you use our platform, including your interactions with features, time spent on pages, and the pages you visit.'
        },
        {
          subtitle: 'Device Information',
          text: 'We collect information about the device you use to access our services, including IP address, browser type, operating system, and device identifiers.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our business management platform, including processing transactions, managing your account, and providing customer support.'
        },
        {
          subtitle: 'Communication',
          text: 'We use your contact information to send you important updates about our services, respond to your inquiries, and provide customer support.'
        },
        {
          subtitle: 'Analytics and Improvements',
          text: 'We analyze usage patterns to understand how our platform is used and to improve our features and user experience.'
        }
      ]
    },
    {
      title: 'How We Share Your Information',
      icon: Shield,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and customer support.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, court order, or other legal process, or if we believe disclosure is necessary to protect our rights or the rights of others.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.'
        }
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Encryption',
          text: 'All sensitive data is encrypted in transit and at rest using industry-standard encryption protocols.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We limit access to personal information to employees and contractors who need access to perform their job functions.'
        }
      ]
    }
  ];

  const additionalSections = [
    {
      title: 'Your Rights',
      items: [
        'Access and update your personal information',
        'Request deletion of your personal data',
        'Object to processing of your information',
        'Request data portability',
        'Withdraw consent where applicable'
      ]
    },
    {
      title: 'Cookies and Tracking Technologies',
      items: [
        'We use cookies to enhance your experience and analyze usage',
        'You can control cookie settings through your browser',
        'Some features may not work properly if cookies are disabled',
        'We use analytics tools to understand user behavior'
      ]
    },
    {
      title: "Children's Privacy",
      items: [
        'Our services are not intended for children under 18',
        'We do not knowingly collect information from minors',
        'If we become aware of such collection, we will delete the information',
        'Parents can contact us regarding any concerns'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            How we collect, use, and protect your information
          </p>
          <p className="text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-orange-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              At StreamFlow, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              business management platform. By using our services, you consent to the practices described in this policy.
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.subtitle}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="space-y-12 mt-16">
            {additionalSections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Changes to Policy */}
          <div className="bg-orange-50 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
              updated policy on our website and updating the "Last updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 mt-12 text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-orange-100 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-orange-100">
              <p>Email: privacy@streamflow.com</p>
              <p>Phone: +91-800-123-4567</p>
              <p>Address: StreamFlow Technologies Pvt. Ltd., Bangalore, Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
