import * as Icons from "lucide-react";
import { amenitiesData } from "../data";

// Helper component to resolve icons dynamically from Lucide-react
function AmenityIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
}

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 bg-[#FAF8F3] border-t border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs sm:text-sm">
            EVERYTHING YOU NEED
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#0B0B0B] mt-2 tracking-tight">
            Premium Amenities & Comforts
          </h2>
          <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto my-4" />
          <p className="text-neutral-700 font-sans font-light text-base sm:text-lg">
            At Hotel Mittal Paradise, we deliver a blissful and comfortable lodging experience. 
            Enjoy our thoughtfully selected amenities designed to make your divine pilgrimage smooth, secure, and stress-free.
          </p>
        </div>

        {/* Bento/Grid Layout of Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="amenities-grid">
          {amenitiesData.map((item) => (
            <div
              key={`amenity-item-${item.id}`}
              className="p-6 rounded-2xl bg-white hover:bg-[#FAF8F3] border border-neutral-250 hover:border-[#D4AF37]/50 hover:shadow-[#D4AF37]/5 transition-all duration-300 flex flex-col items-start group shadow-sm"
              id={`amenity-card-${item.id}`}
            >
              {/* Icon Frame */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F3] text-[#D4AF37] mb-4 group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#F4D06F] group-hover:text-[#0B0B0B] transition-all duration-300 shadow-md border border-neutral-200">
                <AmenityIcon name={item.iconName} className="w-5 h-5" />
              </div>

              {/* Title & Description */}
              <h3 className="font-sans font-bold text-lg text-[#0B0B0B] mb-2">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Pitch Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#D4AF37]/30 text-[#0B0B0B] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl" id="amenities-speed-pitch">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#FAF8F3] rounded-xl text-[#D4AF37] border border-neutral-200 hidden sm:block">
              <Icons.Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base sm:text-lg text-[#826315]">Looking for early morning check-in?</h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mt-0.5 font-light">
                We understand that many trains arrive in Ujjain early in the morning. Share your arrival timing on WhatsApp, and we will do our best to accommodate you!
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/918409804535?text=Hello%20Hotel%20Mittal%20Paradise,%20I%20am%20arriving%20early.%20Can%20you%20please%20help%20me%20with%20early%20check-in%20availability?"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] hover:from-[#F4D06F] hover:to-[#D4AF37] text-[#0B0B0B] font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer whitespace-nowrap"
            id="amenities-early-checkin-cta"
          >
            💬 Inquire on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
