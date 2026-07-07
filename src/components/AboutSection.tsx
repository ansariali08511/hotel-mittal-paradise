import { ShieldCheck, Heart, UserCheck, Milestone } from "lucide-react";
import { hotelInfo } from "../data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FAF8F3] border-t border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-container">
          
          {/* Visual Presentation Block */}
          <div className="lg:col-span-5 relative" id="about-visuals">
            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl border-4 border-[#D4AF37]/30 bg-[#1C1C1C]">
              <img
                src={new URL("../assets/images/regenerated_image_1783417206470.webp", import.meta.url).href}
                alt="Hotel Mittal Paradise - Best hotels in Ujjain near Mahakaleshwar Temple - hotels in ujjain near mahakaleshwar temple"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/25 to-transparent" />
              
              {/* Trust Badge over image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-neutral-950/85 backdrop-blur-md border border-[#D4AF37]/40 text-white text-center">
                <span className="font-serif font-black text-2xl tracking-wide block text-[#D4AF37]">
                  Jay Shree Mahakal
                </span>
                <span className="text-[10px] uppercase font-sans font-semibold tracking-widest text-neutral-300 mt-1 block">
                  A home away from home for worldwide pilgrims
                </span>
              </div>
            </div>
          </div>

          {/* Descriptive Content Block */}
          <div className="lg:col-span-7 space-y-6" id="about-text">
            <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs sm:text-sm block">
              ABOUT HOTEL MITTAL PARADISE
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#0B0B0B] leading-tight">
              A Divine & Comfortable Lodging Experience in Ujjain
            </h2>
            <div className="h-0.5 w-24 bg-[#D4AF37]" />
            
            <p className="text-neutral-700 font-sans text-sm sm:text-base font-light leading-relaxed">
              Welcome to <strong className="text-neutral-950 font-bold">Hotel Mittal Paradise</strong>, 
              widely recognized as one of the <strong className="text-[#826315] font-semibold">best hotels in ujjain near mahakaleshwar temple</strong>. 
              Our hotel was founded with the sole vision of providing comfortable, clean, and highly secure lodging 
              for devotees, families, and solo tourists embarking on their sacred pilgrimage to the ancient, 
              blessed city of Ujjain, Madhya Pradesh.
            </p>

            <p className="text-neutral-700 font-sans text-sm sm:text-base font-light leading-relaxed">
              We understand that visiting the sacred Lord Mahakaleshwar temple, attending the early morning Bhasma Aarti, 
              or wandering the grand Shree Mahakal Lok Corridor can be a demanding journey. 
              Therefore, our accommodation acts as your quiet sanctuary, situated just a few steps away from the main temple gates. 
              We offer spacious rooms, comfortable beds, robust power backup, 24x7 security, and a helpful team of local guides.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" id="about-usp-grid">
              
              <div className="flex gap-3">
                <div className="p-2.5 h-fit rounded-lg bg-white text-[#D4AF37] border border-neutral-200 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#0B0B0B] uppercase tracking-wider">
                    Uncompromised Hygiene
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-normal font-sans font-light">
                    Sparkling clean bathrooms, deep sanitized linens, and fresh floor mops executed daily on call.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5 h-fit rounded-lg bg-white text-[#D4AF37] border border-neutral-200 shadow-sm">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#0B0B0B] uppercase tracking-wider">
                    Family-First Ethos
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-normal font-sans font-light">
                    Spacious 3-bed and 4-bed options so your entire family stays together comfortably under one roof.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5 h-fit rounded-lg bg-white text-[#D4AF37] border border-neutral-200 shadow-sm">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#0B0B0B] uppercase tracking-wider">
                    100% Honest Pricing
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-normal font-sans font-light">
                    Zero hidden fees, zero high-broker agency commissions. Directly book via WhatsApp at the best rates.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5 h-fit rounded-lg bg-white text-[#D4AF37] border border-neutral-200 shadow-sm">
                  <Milestone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#0B0B0B] uppercase tracking-wider">
                    Prime Hub Proximity
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-normal font-sans font-light">
                    Located on Mahakal Lok Road, walking distance to Ram Ghat, Harsiddhi temple, and bus stops.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
