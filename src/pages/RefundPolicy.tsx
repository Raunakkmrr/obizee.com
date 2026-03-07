import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { RefreshCcw, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const RefundPolicy = () => {
  const sections = [
    {
      title: "Cancellation Policy",
      icon: Clock,
      content: [
        {
          subtitle: "Cancellation Timeline",
          text: "Cancellations will only be considered if the request is made within 15 days of placing the order. However, cancellation requests may not be entertained if the orders have been communicated to sellers/merchants listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery.",
        },
        {
          subtitle: "Rejection at Doorstep",
          text: "In the event that the order cannot be cancelled as it has already been shipped or is out for delivery, you may choose to reject the product at the doorstep.",
        },
        {
          subtitle: "Perishable Items",
          text: "oBizee does not accept cancellation requests for perishable items like flowers, eatables, etc. However, refund/replacement can be made if the user establishes that the quality of the product delivered is not good.",
        },
      ],
    },
    {
      title: "Refund & Replacement",
      icon: RefreshCcw,
      content: [
        {
          subtitle: "Damaged or Defective Items",
          text: "In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/merchant listed on the Platform has checked and determined the same at its own end. This should be reported within 15 days of receipt of products.",
        },
        {
          subtitle: "Product Not as Expected",
          text: "In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 15 days of receiving the product. The customer service team after looking into your complaint will take an appropriate decision.",
        },
        {
          subtitle: "Warranty Products",
          text: "In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them directly.",
        },
      ],
    },
    {
      title: "Refund Processing",
      icon: CheckCircle,
      content: [
        {
          subtitle: "Processing Time",
          text: "In case of any refunds approved by oBizee, it will take 30 days for the refund to be processed to you.",
        },
        {
          subtitle: "Refund Method",
          text: "The refund will be processed to the original payment method used during the purchase. Please ensure your payment details are up to date to avoid any delays in receiving your refund.",
        },
      ],
    },
  ];

  const importantPoints = [
    "All cancellation requests must be made within 15 days of placing the order",
    "Perishable items cannot be cancelled but may be eligible for refund if quality issues are proven",
    "Damaged or defective items must be reported within 15 days of receipt",
    "Refunds take up to 30 days to process once approved",
    "Products with manufacturer warranties should be addressed directly with the manufacturer",
  ];

  // JSON-LD structured data for refund policy
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Refund & Cancellation Policy | oBizee",
    description:
      "Learn about oBizee's refund and cancellation policy. Understand our guidelines for cancellations, returns, and refund processing.",
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      url: "https://obizee.com",
    },
    mainEntity: {
      "@type": "Article",
      name: "Refund & Cancellation Policy",
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      author: {
        "@type": "Organization",
        name: "oBizee",
      },
      publisher: {
        "@type": "Organization",
        name: "oBizee",
        url: "https://obizee.com",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy | oBizee</title>
        <meta
          name="description"
          content="Learn about oBizee's refund and cancellation policy. Understand our guidelines for cancellations, returns, and refund processing."
        />
        <meta
          name="keywords"
          content="refund policy, cancellation policy, returns, refund processing, product returns, money-back guarantee"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Refund & Cancellation Policy | oBizee" />
        <meta
          property="og:description"
          content="Learn about oBizee's refund and cancellation policy. Understand our guidelines for cancellations, returns, and refund processing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://obizee.com/refund-policy" />
        <meta property="og:image" content="https://obizee.com/refund-policy-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refund & Cancellation Policy | oBizee" />
        <meta
          name="twitter:description"
          content="Learn about oBizee's refund and cancellation policy. Understand our guidelines for cancellations, returns, and refund processing."
        />
        <meta name="twitter:image" content="https://obizee.com/refund-policy-twitter.jpg" />
        <link rel="canonical" href="https://obizee.com/refund-policy" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-white" aria-labelledby="refund-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8"
              aria-hidden="true"
            >
              <RefreshCcw className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h1 id="refund-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">Our commitment to fair and transparent refund processes</p>
            <p className="text-gray-500">
              Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16" aria-labelledby="refund-content">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="bg-orange-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Refund & Cancellation Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                This refund and cancellation policy outlines how you can cancel or seek a refund for a product/service that you have
                purchased through the Platform. We are committed to ensuring customer satisfaction while maintaining fair business
                practices. Please read the following terms carefully to understand your rights and our procedures.
              </p>
            </div>

            {/* Main Sections */}
            <div className="space-y-12" role="list" aria-label="Refund policy sections">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0" role="listitem">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mr-4"
                      aria-hidden="true"
                    >
                      <section.icon className="h-6 w-6 text-orange-600" aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  <div className="space-y-6" role="list" aria-label={`${section.title} details`}>
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} role="listitem">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.subtitle}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Important Points */}
            <div className="bg-gray-50 rounded-2xl p-8 mt-12">
              <div className="flex items-center mb-6">
                <AlertCircle className="h-8 w-8 text-orange-600 mr-3" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900">Important Points to Remember</h2>
              </div>
              <ul className="space-y-3" role="list" aria-label="Important policy points">
                {importantPoints.map((point, index) => (
                  <li key={index} className="flex items-start" role="listitem">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 mt-12 text-white">
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                If you have any questions about our refund and cancellation policy, or if you need assistance with a return or refund,
                please contact our customer service team:
              </p>
              <address className="space-y-2 text-orange-100 not-italic">
                <p>
                  Email:{" "}
                  <a href="mailto:admin@obizee.com" className="underline hover:text-white">
                    admin@obizee.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+917011571373" className="underline hover:text-white">
                    +91-7011571373
                  </a>
                </p>
                <p>Address: oBizee, Gurgaon, Haryana, India</p>
              </address>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default RefundPolicy;
