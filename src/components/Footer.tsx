import React from "react";
import { MapPin, Phone, Mail, ShieldAlert } from "lucide-react";
import { hotelInfo } from "../data";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavClick(id);
  };

  const getWhatsAppMessage = () => {
    return "Hello Hotel Mittal Paradise, I would like to check room availability and prices for my stay. Please share the available AC and Non AC rooms.";
  };

  return (
    <footer className="bg-[#0B0B0B] text-white pt-16 pb-8 border-t border-neutral-900" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand & Short SEO Blurb (Columns 1-4) */}
          <div className="lg:col-span-4 space-y-4" id="footer-branding-column">
            <h3 className="font-serif font-black text-2xl tracking-wide text-brand-300">
              Hotel Mittal Paradise
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans font-light leading-relaxed max-w-sm">
              Discover supreme comfort at the <strong className="text-brand-300 font-medium">best hotel in ujjain near mahakaleshwar temple</strong>. 
              We offer cozy, modern AC & Non-AC family rooms, free Wi-Fi, 24/7 reception, and continuous hot water. 
              Located just 450 meters walking distance from the sacred Shiva Jyotirlinga shrine.
            </p>
            <div className="flex gap-2 pt-2">
              <span className="bg-[#111111] border border-neutral-800 px-2.5 py-1 rounded-md text-[10px] font-mono text-neutral-400">
                Ujjain Station: 1.8km
              </span>
              <span className="bg-[#111111] border border-neutral-800 px-2.5 py-1 rounded-md text-[10px] font-mono text-neutral-400">
                Mahakal Lok: 400m
              </span>
            </div>
          </div>

          {/* Quick Links Map (Columns 5-7) */}
          <div className="lg:col-span-3 space-y-4" id="footer-links-column">
            <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-500 pb-2 border-b border-neutral-900">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { id: "home", label: "Home" },
                { id: "rooms", label: "Rooms & Suites" },
                { id: "amenities", label: "Premium Amenities" },
                { id: "gallery", label: "Photo Gallery" },
                { id: "attractions", label: "Nearby Sightseeing" },
                { id: "about", label: "About Us" },
                { id: "faq", label: "FAQ & Help" },
                { id: "contact", label: "Contact & Map" },
              ].map((link) => (
                <li key={`footer-link-${link.id}`}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(link.id, e)}
                    className="text-neutral-400 hover:text-brand-300 transition-colors flex items-center gap-2 cursor-pointer font-sans text-xs uppercase tracking-wider font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Quick View (Columns 8-12) */}
          <div className="lg:col-span-5 space-y-4" id="footer-contact-column">
            <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-500 pb-2 border-b border-neutral-900">
              Direct Office
            </h4>
            
            <div className="space-y-4 text-xs sm:text-sm text-neutral-400">
              
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">
                  Near Mahakaleshwar Temple, Jaisinghpura, Mahakal Lok Road, Ujjain, Madhya Pradesh - 456001
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`${hotelInfo.whatsappLink}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-300 hover:text-brand-400 font-bold block"
                  >
                    {hotelInfo.whatsappNumber}
                  </a>
                  <span className="text-[11px] text-neutral-500 block mt-0.5 font-light">
                    Click to message Reservation Desk
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="font-light">{hotelInfo.email}</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar containing Breadcrumbs, Legal Info, & Keywords Index */}
        <div className="pt-8 text-neutral-500 space-y-6">
          
          {/* Natural Internal linking keywords bar (Incredibly helpful for SEO indexing) */}
          <div className="bg-[#111111] p-4 rounded-xl border border-neutral-900 text-[11px] leading-relaxed text-center" id="seo-keyword-index">
            <strong className="text-neutral-450 font-semibold mr-1.5 uppercase tracking-wider">Local SEO Directory:</strong>
            <span className="space-x-1 font-light">
              <span>Hotel Mittal Paradise</span> • 
              <span className="text-neutral-400 hover:text-brand-300 cursor-pointer">hotels in ujjain near mahakaleshwar temple</span> • 
              <span className="text-neutral-400 hover:text-brand-300 cursor-pointer">hotel near mahakal temple ujjain</span> • 
              <span className="text-neutral-400 hover:text-brand-300 cursor-pointer">hotel near mahakaleshwar temple</span> • 
              <span className="text-neutral-400 hover:text-brand-300 cursor-pointer">hotel in ujjain near mahakal</span> • 
              <span className="text-neutral-400 hover:text-brand-300 cursor-pointer">hotel in ujjain</span> • 
              <span className="text-neutral-400 hover:text-brand-300 cursor-pointer">ujjain hotel booking</span> • 
              <span className="text-neutral-400 hover:text-brand-300 cursor-pointer">dharamshala in ujjain</span> • 
              <span className="text-neutral-400 hover:text-brand-300 cursor-pointer">ujjain room booking</span> • 
              <span className="text-neutral-400 hover:text-brand-300 cursor-pointer">ujjain dharamshala</span> • 
              <span className="text-neutral-400 hover:text-brand-300 cursor-pointer">best hotel in ujjain</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="font-light">
              &copy; {currentYear} <strong className="text-brand-300">Hotel Mittal Paradise Ujjain</strong>. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#home"
                onClick={(e) => handleLinkClick("home", e)}
                className="hover:text-brand-300 transition-colors font-medium"
              >
                Back to Top
              </a>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-brand-500" />
                <span className="font-medium text-brand-300">Authorized WhatsApp Booking Only</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
