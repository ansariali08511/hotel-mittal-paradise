import { Compass, Clock, MapPin } from "lucide-react";
import { attractionsData } from "../data";

export default function AttractionsSection() {
  return (
    <section id="attractions" className="py-24 bg-[#0B0B0B] border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs sm:text-sm">
            EXPLORE UJJAIN
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#FAF8F3] mt-2 tracking-tight">
            Nearby Spiritual Attractions
          </h2>
          <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto my-4" />
          <p className="text-neutral-400 font-sans font-light text-base sm:text-lg">
            Stay in the epicentre of devotion. Hotel Mittal Paradise is the ultimate choice for a 
            <strong className="text-[#D4AF37] font-semibold"> hotel near mahakal temple ujjain</strong>, giving you instantaneous 
            walking access to prime spiritual shrines, bathing ghats, and historical spots.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="attractions-grid">
          {attractionsData.map((att, idx) => (
            <div
              key={`attraction-card-${idx}-${att.name.replace(/\s+/g, "-").toLowerCase()}`}
              className="bg-[#111111] rounded-2xl overflow-hidden border border-neutral-800/80 shadow-xl hover:shadow-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col group h-full"
              id={`attraction-card-${idx}`}
            >
              {/* Image Frame */}
              <div className="relative h-56 overflow-hidden bg-neutral-900 shrink-0">
                <img
                  src={att.image}
                  alt={`${att.name} located near Hotel Mittal Paradise Ujjain - hotels in ujjain near mahakaleshwar temple`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Distance Badge */}
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0B0B0B] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-[#D4AF37]/30">
                  <MapPin className="w-3 h-3" />
                  <span>{att.distance}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#FAF8F3] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {att.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans font-light leading-relaxed mb-4">
                    {att.description}
                  </p>
                </div>

                {/* Best Time Info Block */}
                <div className="pt-4 border-t border-neutral-800/60 flex items-start gap-2.5 bg-[#1C1C1C] p-3.5 rounded-xl text-[11px] sm:text-xs text-neutral-300 leading-normal border border-neutral-800/60">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#D4AF37] font-semibold block mb-0.5">Recommended timings:</strong>
                    {att.timeToVisit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
