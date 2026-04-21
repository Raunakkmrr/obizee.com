import React from "react";
import { verifiedBrands } from "@/data/verifiedBrands";

const BrandDirectory = () => {
  return (
    <section className="py-14 sm:py-20 bg-white" aria-labelledby="brand-directory-heading">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 id="brand-directory-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Verified Brand Directory
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Brand name, owner name, brand logo, and profile link are listed separately for clear verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8" role="list" aria-label="Verified brand list">
          {verifiedBrands.map((brand) => (
            <article
              key={brand.brandName}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 min-w-0"
              role="listitem"
              aria-label={`${brand.brandName} by ${brand.ownerName}`}
            >
              <div className="flex items-start sm:items-center mb-4 min-w-0">
                <img src={brand.logo} alt={`${brand.brandName} logo`} className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-contain bg-white p-1 mr-3 sm:mr-4 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Brand</p>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 break-words">{brand.brandName}</h3>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <p className="text-gray-700 break-words">
                  <span className="font-semibold">Owner:</span> {brand.ownerName}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">State:</span> {brand.state}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Subdomain:</span> {brand.subDomain}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Profile Link:</span>{" "}
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-orange-600 hover:text-orange-700 underline break-all"
                    aria-label={`Open ${brand.brandName} profile`}
                  >
                    {brand.instagramUrl}
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandDirectory;
