import { useState, useEffect } from "react";
import { Phone, Menu, X, Calendar } from "lucide-react";
import { hotelInfo } from "../data";

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "rooms", label: "Rooms" },
    { id: "amenities", label: "Amenities" },
    { id: "gallery", label: "Gallery" },
    { id: "attractions", label: "Nearby Attractions" },
    { id: "about", label: "About Us" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-950/90 backdrop-blur-md shadow-xl py-3 border-b border-brand-900/60 text-white"
          : "bg-gradient-to-b from-brand-950/90 to-transparent text-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex flex-col items-start text-left focus:outline-none group"
            id="logo-button"
          >
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-wide text-white group-hover:text-brand-300 transition-colors">
              Hotel Mittal Paradise
            </span>
            <span className="text-[9px] sm:text-xs font-sans font-medium uppercase tracking-[0.25em] text-brand-400">
              Ujjain • Near Mahakal Temple
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={`nav-desktop-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-brand-950 bg-brand-500 shadow-md"
                    : "text-neutral-200 hover:text-brand-400 hover:bg-white/[0.05]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* WhatsApp Direct Call-to-Action */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`${hotelInfo.whatsappLink}?text=${encodeURIComponent(hotelInfo.defaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-bold tracking-wider uppercase shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer bg-emerald-600 text-white hover:bg-emerald-500 border border-emerald-500/20"
              id="cta-whatsapp-header"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? "text-neutral-800 hover:bg-neutral-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-neutral-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
        id="mobile-drawer"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <div>
              <h3 className="font-serif font-bold text-lg text-brand-300">Mittal Paradise</h3>
              <p className="text-xs text-neutral-400">Hotels in Ujjain near Mahakal</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white"
              aria-label="Close Menu"
              id="close-drawer-button"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 py-8 space-y-3 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={`nav-mobile-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-display font-semibold transition-all ${
                  activeSection === item.id
                    ? "bg-brand-800/50 text-brand-300 border-l-4 border-brand-500 pl-3"
                    : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-neutral-800 space-y-4">
            <div className="flex items-center gap-3 text-neutral-400 text-xs">
              <Calendar className="w-4 h-4 text-brand-400" />
              <span>Easy Booking 24/7</span>
            </div>
            <a
              href={`${hotelInfo.whatsappLink}?text=${encodeURIComponent(hotelInfo.defaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold rounded-xl text-sm shadow-md transition-all uppercase tracking-wider"
              id="mobile-drawer-whatsapp-cta"
            >
              <Phone className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </a>
            <div className="text-center">
              <p className="text-[11px] text-neutral-500">Call/WhatsApp: +91 84098 04535</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay behind drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          id="drawer-overlay"
        />
      )}
    </header>
  );
}
