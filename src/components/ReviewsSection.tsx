import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ramesh Sharma",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent stay near Mahakaleshwar Temple! The rooms were spotlessly clean, and the staff was extremely polite and helpful. Walking to the temple took us barely 5 minutes. Best choice for families visiting Ujjain.",
    tag: "Family Stay"
  },
  {
    id: 2,
    name: "Priya Patel",
    rating: 5,
    date: "1 month ago",
    text: "Very comfortable AC rooms at pocket-friendly rates compared to expensive hotels. They have safe on-site parking which was a huge relief for our car. The reception helped us with tips for Bhasma Aarti too!",
    tag: "Couple Stay"
  },
  {
    id: 3,
    name: "Vikram Singh",
    rating: 5,
    date: "3 weeks ago",
    text: "Highly recommended for group travelers and pilgrims. We booked a 4-bed family room. It was incredibly spacious, clean, and has constant hot water. Truly the best hotel in Ujjain near Mahakal Lok Corridor.",
    tag: "Group Pilgrimage"
  },
  {
    id: 4,
    name: "Amit Dwivedi",
    rating: 5,
    date: "2 months ago",
    text: "Excellent hospitality. The room service was super fast. Getting pure vegetarian Indori Poha for breakfast hot in our room made our morning after the early morning darshan. Highly recommended!",
    tag: "Divine Experience"
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="reviews" className="py-24 bg-[#FAF8F3] border-t border-neutral-200 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="reviews-header">
          <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs sm:text-sm block mb-3">
            GUEST EXPERIENCES
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#0B0B0B] tracking-tight leading-tight">
            Loved By Mahakal Devotees
          </h2>
          <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto my-4" />
          <p className="text-sm sm:text-base text-neutral-600 font-sans font-light">
            Read real stories of comfort, convenience, and warm hospitality from families and pilgrims who chose Hotel Mittal Paradise near Mahakal Temple.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12" id="reviews-carousel">
          
          {/* Main Review Card */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#D4AF37]/30 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Background Watermark Quote */}
                <Quote className="absolute right-8 top-8 w-24 h-24 text-neutral-100 -z-0 pointer-events-none transform rotate-180" />

                <div className="relative z-10">
                  {/* Rating & Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex text-[#D4AF37]">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={`rating-star-${i}`} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="px-3 py-1 bg-[#FAF8F3] text-[#826315] text-xs font-sans font-bold tracking-wider uppercase rounded-full border border-[#D4AF37]/20">
                      {reviews[currentIndex].tag}
                    </span>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-base sm:text-lg md:text-xl text-neutral-800 font-sans font-light italic leading-relaxed mb-8">
                    "{reviews[currentIndex].text}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="relative z-10 flex items-center justify-between border-t border-neutral-150 pt-6">
                  <div>
                    <cite className="font-serif font-bold text-lg text-[#0B0B0B] not-italic block">
                      {reviews[currentIndex].name}
                    </cite>
                    <span className="text-xs text-neutral-500 font-sans mt-0.5 block">
                      Google Reviewer • {reviews[currentIndex].date}
                    </span>
                  </div>
                  
                  {/* Verified Icon */}
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-sans font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Verified Guest Stay</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8" id="carousel-controls">
            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-[#FAF8F3] text-[#0B0B0B] hover:text-[#D4AF37] rounded-full shadow-md border border-neutral-200 transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "bg-[#D4AF37] w-6" : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-[#FAF8F3] text-[#0B0B0B] hover:text-[#D4AF37] rounded-full shadow-md border border-neutral-200 transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
