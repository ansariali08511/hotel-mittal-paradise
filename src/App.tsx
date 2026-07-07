import { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp, CalendarRange, MapPin, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import RoomsSection from "./components/RoomsSection";
import AmenitiesSection from "./components/AmenitiesSection";
import GallerySection from "./components/GallerySection";
import AttractionsSection from "./components/AttractionsSection";
import AboutSection from "./components/AboutSection";
import ReviewsSection from "./components/ReviewsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import { hotelInfo } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll helper
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Tracking scroll for floating trigger & scrollspy
  useEffect(() => {
    const handleScroll = () => {
      // Toggle floating buttons
      setShowFloatingButton(window.scrollY > 400);
      setShowScrollTop(window.scrollY > 800);

      // Scroll Spy Implementation
      const sections = ["home", "rooms", "amenities", "gallery", "attractions", "about", "faq", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset to trigger early

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-50/10 text-neutral-800 antialiased font-sans flex flex-col justify-between selection:bg-brand-100 selection:text-brand-900" id="app-root-container">
      
      {/* Premium Sticky Navigation Header */}
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Sections Body */}
      <main className="flex-1">
        
        {/* Hero Landing Banner */}
        <Hero onCheckRoomsClick={() => handleNavClick("rooms")} />

        {/* Highlight Trust Strip (Local Citation keywords) */}
        <section className="bg-gradient-to-r from-brand-900 to-brand-950 text-white py-6 shadow-md border-y border-brand-800" id="trust-strip">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`trust-star-${i}`} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-display font-bold text-brand-100">
                  Ujjain's Highly Recommended Family Stay near Mahakaleshwar Jyotirlinga
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-brand-200">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-brand-400" />
                  <span>Jaisinghpura Road</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CalendarRange className="w-3.5 h-3.5 text-brand-400" />
                  <span>Exclusively WhatsApp Booking</span>
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* Rooms Grid Section */}
        <RoomsSection />

        {/* Amenities Bento Section */}
        <AmenitiesSection />

        {/* Gallery Lightbox Section */}
        <GallerySection />

        {/* Tourist Guide attractions Section */}
        <AttractionsSection />

        {/* Guest Reviews Section */}
        <ReviewsSection />

        {/* Detailed About Us Section */}
        <AboutSection />

        {/* Interactive FAQ Section */}
        <FAQSection />

        {/* Contact and Map Route Section */}
        <ContactSection />

      </main>

      {/* Structured Footer Block */}
      <Footer onNavClick={handleNavClick} />

      {/* Floating Action Triggers */}
      <AnimatePresence>
        
        {/* Always Visible Floating WhatsApp Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 max-w-[calc(100vw-2rem)]"
          id="floating-cta-panel"
        >
          {/* Direct WhatsApp Trigger Bar */}
          <a
            href={`${hotelInfo.whatsappLink}?text=${encodeURIComponent("Hello Hotel Mittal Paradise, I would like to check room availability and prices. Please share the available AC and Non AC rooms.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:shadow-emerald-500/30 font-sans font-bold text-xs sm:text-sm tracking-wide transition-all transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/20 uppercase"
            aria-label="Check Price & Room Availability"
            id="floating-whatsapp-trigger"
          >
            <span>💬 Check Price & Room Availability</span>
          </a>
        </motion.div>

        {/* Scroll To Top Trigger */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-40 p-3.5 bg-brand-950 hover:bg-brand-900 text-white rounded-full shadow-lg border border-brand-800 transition-colors cursor-pointer"
            aria-label="Scroll to top"
            id="floating-scroll-top"
          >
            <ArrowUp className="w-4 h-4 text-brand-300" />
          </motion.button>
        )}

      </AnimatePresence>

    </div>
  );
}
