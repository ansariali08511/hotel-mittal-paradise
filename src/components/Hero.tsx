import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { hotelInfo } from "../data";

interface HeroProps {
  onCheckRoomsClick: () => void;
}

export default function Hero({ onCheckRoomsClick }: HeroProps) {
  const prefilledMessage = "Hello Hotel Mittal Paradise, I would like to check room availability and prices for my stay. Please share the available AC and Non AC rooms.";
  const bookingUrl = `${hotelInfo.whatsappLink}?text=${encodeURIComponent(prefilledMessage)}`;

  const handleViewPhotosClick = () => {
    const galleryEl = document.getElementById("gallery");
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background Image with Dark & Warm Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={new URL("../assets/images/regenerated_image_1783417195894.webp", import.meta.url).href}
          alt="Hotel Mittal Paradise Ujjain near Mahakaleshwar Temple - hotels in ujjain near mahakaleshwar temple"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft Radial Gradients for Sacred Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/90 to-transparent" />
        <div className="absolute inset-0 bg-[#0B0B0B]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Divine Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111]/90 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-sans font-medium tracking-widest uppercase mb-8 shadow-xl"
        >
          <Sparkles className="w-4 h-4 text-brand-500" />
          <span>JAY SHREE MAHAKAL • LUXURY HOSPITALITY</span>
        </motion.div>

        {/* Main H1 Title (SEO Rich) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6 max-w-5xl mx-auto"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F3] via-[#F4D06F] to-[#D4AF37] block font-extrabold pb-2">
            Hotel Mittal Paradise
          </span>
          <span className="text-sm sm:text-base md:text-lg font-sans font-semibold text-brand-500 block mt-4 uppercase tracking-[0.25em]">
            Hotels in Ujjain Near Mahakaleshwar Temple
          </span>
        </motion.h1>

        {/* Secondary Paragraph (Naturally includes key terms) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 font-sans font-light leading-relaxed"
        >
          Experience comfortable AC & Non AC rooms with warm hospitality near Mahakaleshwar Temple, ideal for families, pilgrims, couples, and groups visiting Ujjain.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-md mx-auto sm:max-w-none mb-16"
        >
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4.5 rounded-full bg-brand-500 hover:bg-brand-400 text-brand-950 font-sans font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-brand-500/20 transform hover:-translate-y-0.5 transition-all cursor-pointer"
            id="hero-whatsapp-booking-button"
          >
            <span>💬 Check Price & Room Availability</span>
          </a>

          <button
            onClick={handleViewPhotosClick}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-sans font-semibold text-sm tracking-wider uppercase border border-white/25 backdrop-blur-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
            id="hero-view-photos-button"
          >
            <span>View Gallery</span>
          </button>
        </motion.div>

        {/* Premium Brand Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-neutral-800"
        >
          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#111111]/80 border border-neutral-800 backdrop-blur-md">
            <span className="font-serif text-2xl text-brand-300 font-bold">450m</span>
            <span className="text-xs text-neutral-400 font-sans mt-1">To Mahakaleshwar Temple</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#111111]/80 border border-neutral-800 backdrop-blur-md">
            <span className="font-serif text-2xl text-brand-300 font-bold">400m</span>
            <span className="text-xs text-neutral-400 font-sans mt-1">To Mahakal Lok Corridor</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#111111]/80 border border-neutral-800 backdrop-blur-md">
            <span className="font-serif text-2xl text-brand-300 font-bold">24x7</span>
            <span className="text-xs text-neutral-400 font-sans mt-1">Reception & Security</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#111111]/80 border border-neutral-800 backdrop-blur-md">
            <span className="font-serif text-2xl text-brand-300 font-bold">Free</span>
            <span className="text-xs text-neutral-400 font-sans mt-1">Wi-Fi & Secure Parking</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
