import React from "react";
import { Star, Instagram, TrendingUp } from "lucide-react";
import { verifiedBrands } from "@/data/verifiedBrands";

const Testimonials = () => {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <header className="text-center mb-10 sm:mb-16 md:mb-20">
          <div
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200/50 mb-4 sm:mb-6"
            role="status"
            aria-label="Section badge"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mr-2" aria-hidden="true" />
            <span className="text-orange-800 text-sm sm:text-base font-medium">Instagram Success Stories</span>
          </div>
          <h2 id="testimonials-heading" className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            From Followers to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Customers</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Real Instagram businesses sharing their transformation stories. See how they turned their social media presence into thriving
            enterprises.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8" role="list" aria-label="Customer testimonials">
          {verifiedBrands.map((brand, index) => (
            <article
              key={index}
              className="group bg-white rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden min-w-0"
              role="listitem"
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"
                aria-hidden="true"
              ></div>

              <div className="relative">
                {/* Header */}
                <header className="flex items-start sm:items-center mb-4 sm:mb-6 min-w-0">
                  <img
                    src={brand.logo}
                    alt={`${brand.brandName} logo`}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-contain bg-white p-1 mr-3 sm:mr-4 ring-2 ring-orange-100 shrink-0"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg break-words">{brand.brandName}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm break-words">Owner: {brand.ownerName}</p>
                    <div className="flex items-center mt-1">
                      <Instagram className="w-4 h-4 text-orange-500 mr-1" aria-hidden="true" />
                      <span className="text-orange-600 font-semibold text-xs sm:text-sm">Verified Brand</span>
                    </div>
                    <a
                      href={brand.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-xs text-orange-600 hover:text-orange-700 underline break-all"
                      aria-label={`View ${brand.brandName} Instagram profile`}
                    >
                      View Instagram Profile
                    </a>
                  </div>
                </header>

                {/* Rating */}
                <div className="flex mb-4" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 italic">
                  <p>"{brand.quote}"</p>
                </blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-4 border-t border-gray-100" role="list" aria-label="Business metrics">
                  <div className="text-center" role="listitem">
                    <div className="font-bold text-base sm:text-lg text-gray-900">{brand.state}</div>
                    <div className="text-xs text-gray-500">State</div>
                  </div>
                  <div className="text-center flex items-center justify-center" role="listitem">
                    <TrendingUp className="w-4 h-4 text-orange-500 mr-1" aria-hidden="true" />
                    <span className="font-bold text-sm text-orange-600 break-all">{brand.subDomain}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
