import { Phone, MapPin, Mail, CalendarDays, ExternalLink, ShieldCheck } from "lucide-react";
import { hotelInfo } from "../data";

export default function ContactSection() {
  const getWhatsAppMessage = () => {
    return "Hello Hotel Mittal Paradise, I would like to check room availability and prices for my stay. Please share the available AC and Non AC rooms.";
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F5EE] border-t border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs sm:text-sm">
            REACH OUT TO US
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#0B0B0B] mt-2 tracking-tight">
            Contact Hotel Mittal Paradise
          </h2>
          <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto my-4" />
          <p className="text-neutral-700 font-sans font-light text-base sm:text-lg">
            Ready to finalize your <strong className="text-[#826315] font-semibold">ujjain room booking</strong>? 
            Connect with our front office on WhatsApp. We are available 24x7 to share tariffs, photos, and lock your stay.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-container">
          
          {/* Direct Address & Info Panel */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-panel">
            <div className="bg-white rounded-3xl p-8 border border-neutral-250 shadow-md space-y-6">
              
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0B0B0B] pb-4 border-b border-neutral-150">
                Official Business Info
              </h3>

              {/* Address card */}
              <div className="flex gap-4">
                <div className="p-3 bg-[#FAF8F3] text-[#D4AF37] rounded-2xl h-fit border border-neutral-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-neutral-500 mb-1">
                    Location Address
                  </h4>
                  <p className="text-sm text-neutral-850 font-sans font-semibold leading-relaxed">
                    {hotelInfo.location}
                  </p>
                  <p className="text-xs text-[#826315] font-semibold mt-1">
                    📍 Just 450m walking distance from main Temple Gate
                  </p>
                </div>
              </div>

              {/* Phone/WhatsApp Card */}
              <div className="flex gap-4">
                <div className="p-3 bg-[#FAF8F3] text-[#D4AF37] rounded-2xl h-fit border border-neutral-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-neutral-500 mb-1">
                    Booking WhatsApp & Call
                  </h4>
                  <a
                    href={`${hotelInfo.whatsappLink}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg text-[#826315] font-sans font-bold hover:text-[#D4AF37] block transition-colors"
                  >
                    {hotelInfo.whatsappNumber}
                  </a>
                  <p className="text-[11px] text-neutral-500 font-sans mt-0.5">
                    Click above to chat instantly with Reservation Executive
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex gap-4">
                <div className="p-3 bg-[#FAF8F3] text-[#D4AF37] rounded-2xl h-fit border border-neutral-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-neutral-500 mb-1">
                    Email Support
                  </h4>
                  <span className="text-sm text-neutral-800 font-sans font-semibold block">
                    {hotelInfo.email}
                  </span>
                </div>
              </div>

            </div>

            {/* Simple Help Card */}
            <div className="p-6 bg-white border border-[#D4AF37]/30 rounded-2xl flex gap-3 shadow-md">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#826315]">
                  Safe & Secure Reservations
                </h4>
                <p className="text-xs text-neutral-600 font-sans mt-1 leading-normal font-light">
                  Our bookings are backed 100% directly by our front desk. Avoid paying commissions to travel brokers or agents.
                </p>
              </div>
            </div>
          </div>

          {/* Map and Direct Route Guide */}
          <div className="lg:col-span-7 flex flex-col justify-between" id="contact-map-panel">
            <div className="bg-white text-[#0B0B0B] rounded-3xl p-8 border border-neutral-250 shadow-xl flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#D4AF37]">
                  INTERACTIVE ROUTE GUIDE
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#0B0B0B]">
                  How to reach Hotel Mittal Paradise Ujjain?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed">
                  We are situated on the prime road linking Jaisinghpura to the grand entry point of Shree Mahakal Lok. 
                  Whether you arrive by train at <strong className="text-[#826315] font-semibold">Ujjain Junction Railway Station (1.8 km away)</strong> 
                  or via <strong className="text-[#826315] font-semibold">Dewas Gate Bus Stand (2.0 km away)</strong>, you can easily find local autos, e-rickshaws, or taxis 
                  direct to our property near Mahakal Lok Corridor.
                </p>
              </div>

              {/* Static map widget styled in black/gold */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-neutral-800 my-6 bg-[#0B0B0B]">
                <div className="absolute inset-0 bg-neutral-950 opacity-80" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 space-y-4">
                  <div className="p-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#D4AF37]">
                      Hotel Mittal Paradise, Ujjain
                    </h4>
                    <p className="text-[11px] text-neutral-500 font-mono mt-1">
                      Coordinates: 23.1818° N, 75.7667° E • Near Mahakaleshwar Temple
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Hotel+Mittal+Paradise+Ujjain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] hover:from-[#F4D06F] hover:to-[#D4AF37] text-[#0B0B0B] font-sans font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-150">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <CalendarDays className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-light">Open 365 Days • 24 Hours Reception</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
