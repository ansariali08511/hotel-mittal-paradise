import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Users, Check, Wind, Star } from "lucide-react";
import { roomsData, hotelInfo } from "../data";
import { Room } from "../types";

export default function RoomsSection() {
  const [filter, setFilter] = useState<"all" | "ac" | "non-ac" | "large">("all");

  const filteredRooms = roomsData.filter((room) => {
    if (filter === "ac") return room.type === "AC";
    if (filter === "non-ac") return room.type === "Non AC";
    if (filter === "large") return room.beds >= 3;
    return true;
  });

  const getWhatsAppMessage = () => {
    return "Hello Hotel Mittal Paradise, I would like to check room availability and prices for my stay. Please share the available AC and Non AC rooms.";
  };

  return (
    <section id="rooms" className="py-24 bg-[#1C1C1C] border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs sm:text-sm">
            PREMIUM PILGRIM ACCOMMODATION
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#FAF8F3] mt-2 tracking-tight">
            Ujjain Hotel Room Booking
          </h2>
          <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto my-4" />
          <p className="text-neutral-300 font-sans font-light text-base sm:text-lg">
            Choose from our clean, well-ventilated, and thoughtfully curated room categories. 
            We offer the comfort and hygiene of the <strong className="text-[#D4AF37] font-medium">best hotel in ujjain near mahakaleshwar temple</strong> 
            at highly affordable, competitive options.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="rooms-filter-container">
          {[
            { id: "all", label: "All Rooms" },
            { id: "ac", label: "AC Premium Rooms" },
            { id: "non-ac", label: "Non-AC Budget Rooms" },
            { id: "large", label: "Family Sized (3-4 Beds)" },
          ].map((tab) => (
            <button
              key={`rooms-tab-${tab.id}`}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] text-[#0B0B0B] shadow-lg shadow-[#D4AF37]/20"
                  : "bg-[#111111] text-neutral-300 border border-neutral-800 hover:bg-[#0B0B0B]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rooms Grid with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="rooms-grid">
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={`rooms-card-${room.id}`}
                className="bg-[#0B0B0B] rounded-2xl border border-neutral-800/80 overflow-hidden shadow-xl hover:shadow-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col group h-full"
              >
                {/* Room Image with badging */}
                <div className="relative h-64 overflow-hidden bg-[#1C1C1C]">
                  <img
                    src={room.image}
                    alt={`${room.name} at Hotel Mittal Paradise near Mahakal temple Ujjain - hotels in ujjain near mahakaleshwar temple`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />
                  
                  {/* Badges on top of Image */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold tracking-wider uppercase shadow-md ${
                        room.type === "AC"
                          ? "bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] text-[#0B0B0B]"
                          : "bg-neutral-800 text-white border border-neutral-700"
                      }`}
                    >
                      {room.type === "AC" ? <Wind className="w-3 h-3" /> : null}
                      <span>{room.type} Comfort</span>
                    </span>

                    <span className="bg-[#0B0B0B]/90 text-neutral-300 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase shadow-md border border-neutral-800">
                      {room.beds} Bed Configuration
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Room Name */}
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#FAF8F3] leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {room.name}
                  </h3>

                  {/* Occupancy details */}
                  <div className="flex items-center gap-2 text-neutral-400 font-sans text-xs sm:text-sm mt-2 mb-4 bg-[#1C1C1C] px-3 py-1.5 rounded-lg border border-neutral-800/60">
                    <Users className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="font-medium text-neutral-300">{room.occupancy}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6 flex-1">
                    <h4 className="text-xs uppercase font-sans font-bold tracking-widest text-[#D4AF37] mb-2">
                      Included Premium Amenities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5">
                      {room.features.map((feat, fidx) => (
                        <div key={`room-${room.id}-feat-${fidx}`} className="flex items-start gap-1.5 text-xs text-neutral-300 font-sans font-light">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book now trigger */}
                  <div className="pt-4 border-t border-neutral-800">
                    <a
                      href={`${hotelInfo.whatsappLink}?text=${encodeURIComponent(
                        getWhatsAppMessage()
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] hover:from-[#F4D06F] hover:to-[#D4AF37] text-[#0B0B0B] font-sans font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md hover:shadow-[#D4AF37]/30 transform hover:-translate-y-0.5 cursor-pointer"
                      id={`book-now-room-${room.id}`}
                    >
                      <span>💬 Check Price & Room Availability</span>
                    </a>
                    <p className="text-center text-[10px] text-neutral-500 mt-2 font-sans">
                      No Booking Fees • Direct WhatsApp Booking
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Card (Dharamshala vs Hotel Pitch) */}
        <div className="mt-16 bg-[#0B0B0B] rounded-3xl p-8 sm:p-12 text-white border border-[#D4AF37]/20 shadow-xl relative overflow-hidden" id="dharamshala-pitch">
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-[#D4AF37]/5 to-transparent pointer-events-none hidden md:block" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-wider text-xs bg-neutral-900/80 px-3 py-1 rounded-full border border-[#D4AF37]/30">
              The Smarter Choice
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl mt-4 mb-4 text-[#D4AF37]">
              Why Choose Hotel Mittal Paradise over a traditional Dharamshala in Ujjain?
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-sans font-light">
              Many pilgrims search for a <strong className="text-white font-medium">dharamshala in ujjain near mahakaleshwar temple</strong> expecting affordable rates, 
              but often compromise on essential security, deep hygiene, modern air conditioning, and prompt service. 
              At Hotel Mittal Paradise, we provide the luxury, hygiene, and absolute security of a modern hotel—including 
              secured parking, Smart TV, free continuous Wi-Fi, and hot water—at pricing that directly rivals local budget accommodations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`${hotelInfo.whatsappLink}?text=${encodeURIComponent("Hello Hotel Mittal Paradise, I would like to check room availability and prices for my stay. Please share the available AC and Non AC rooms.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] hover:from-[#F4D06F] hover:to-[#D4AF37] text-[#0B0B0B] font-sans font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                id="rooms-package-cta"
              >
                <Phone className="w-4 h-4" />
                <span>💬 Check Price & Room Availability</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
