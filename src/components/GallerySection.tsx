import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Image, ZoomIn, Phone } from "lucide-react";
import { galleryData, hotelInfo } from "../data";
import { GalleryImage } from "../types";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryImage["category"]>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = galleryData.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  const categories: { id: GalleryImage["category"]; label: string }[] = [
    { id: "all", label: "Show All" },
    { id: "rooms", label: "Rooms & Suites" },
    { id: "exterior", label: "Facade & Exterior" },
    { id: "temple", label: "Mahakal Temple & Lok" },
    { id: "amenities", label: "Amenities" },
  ];

  const getWhatsAppMessage = () => {
    return "Hello Hotel Mittal Paradise, I would like to check room availability and prices for my stay. Please share the available AC and Non AC rooms.";
  };

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0B] border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs sm:text-sm">
            VISUAL EXPERIENCE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#FAF8F3] mt-2 tracking-tight">
            Hotel Gallery & Surroundings
          </h2>
          <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto my-4" />
          <p className="text-neutral-400 font-sans font-light text-base sm:text-lg">
            Browse through actual photographs of Hotel Mittal Paradise. Take a visual tour of our clean guest rooms, 
            well-maintained spaces, secure parking, and adjacent spiritual highlights of <strong className="text-[#D4AF37] font-medium">ujjain hotels near temple</strong>.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-category-filters">
          {categories.map((cat) => (
            <button
              key={`gallery-cat-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] text-[#0B0B0B] shadow-lg shadow-[#D4AF37]/20"
                  : "bg-[#111111] text-neutral-300 border border-neutral-800 hover:bg-[#1C1C1C]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={`gallery-card-${img.id}`}
                onClick={() => setSelectedImage(img)}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-xl border border-neutral-800/80 cursor-zoom-in bg-neutral-900"
              >
                {/* Image */}
                <img
                  src={img.url}
                  alt={`${img.alt} - Hotel Mittal Paradise - hotels in ujjain near mahakaleshwar temple`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Hover Details */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D4AF37]">
                    {img.category}
                  </span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#FAF8F3] mt-1 leading-snug">
                    {img.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to view full photo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
              id="gallery-lightbox"
            >
              {/* Close Button on top right */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                aria-label="Close Lightbox"
                id="close-lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full flex flex-col bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800"
              >
                {/* Fullscreen Image Frame */}
                <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.alt}
                    className="w-full h-full max-h-[70vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Section beneath image */}
                <div className="p-6 sm:p-8 bg-[#0B0B0B] border-t border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#D4AF37]">
                      Category: {selectedImage.category}
                    </span>
                    <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#FAF8F3]">
                      {selectedImage.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-xl font-light">
                      {selectedImage.alt}
                    </p>
                  </div>

                  <a
                    href={`${hotelInfo.whatsappLink}?text=${encodeURIComponent(
                      getWhatsAppMessage()
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] hover:from-[#F4D06F] hover:to-[#D4AF37] text-[#0B0B0B] font-sans font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer whitespace-nowrap"
                    id="lightbox-whatsapp-cta"
                  >
                    <Phone className="w-4 h-4" />
                    <span>💬 Check Price & Room Availability</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
