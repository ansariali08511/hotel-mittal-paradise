import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqData } from "../data";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "hotel" | "booking" | "temple">("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-dist"); // open the first by default

  const filteredFaqs = faqData.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  const categories = [
    { id: "all", label: "Show All FAQs" },
    { id: "hotel", label: "Hotel Stay & Location" },
    { id: "booking", label: "Booking & Payments" },
    { id: "temple", label: "Mahakal Temple Guidance" },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#1C1C1C] border-t border-neutral-800 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-sans font-bold uppercase tracking-widest text-xs sm:text-sm">
            GOT QUESTIONS?
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#FAF8F3] mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto my-4" />
          <p className="text-neutral-300 font-sans font-light text-base sm:text-lg">
            Have queries regarding <strong className="text-[#D4AF37] font-semibold">online hotel booking ujjain</strong>, 
            hotel proximity, or how to plan your Bhasma Aarti darshan? Find instant, honest answers below.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="faq-category-filters">
          {categories.map((cat) => (
            <button
              key={`faq-cat-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] text-[#0B0B0B] shadow-lg shadow-[#D4AF37]/20"
                  : "bg-[#0B0B0B] text-neutral-300 border border-neutral-800 hover:bg-[#111111]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  key={`faq-item-${faq.id}`}
                  className="bg-[#0B0B0B] rounded-2xl border border-neutral-800/85 overflow-hidden shadow-xl hover:border-[#D4AF37]/30 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                    id={`faq-toggle-${faq.id}`}
                  >
                    <div className="flex items-start gap-3.5 pr-4">
                      <HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="font-sans font-bold text-sm sm:text-base text-[#FAF8F3] leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div className="p-1 rounded-lg bg-[#111111] text-[#D4AF37] border border-neutral-850 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-5 pt-0 border-t border-neutral-800/60 text-xs sm:text-sm text-neutral-300 font-sans font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
