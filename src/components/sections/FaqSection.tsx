"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { SquiggleUnderline } from "../Doodles";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "dress-code",
    question: "What is the dress code for each event?",
    answer:
      "We encourage traditional Indian wedding attire or festive ethnic wear across all functions. Tilak & Haldi call for bright, comfortable festive hues (yellows, marigolds, pastels). Sangeet & Reception are your opportunity to glitz it up in lehengas, sherwanis, or glamorous Indo-Western outfits!",
  },
  {
    id: "weather-jaipur",
    question: "What will the weather be like in Jaipur in late November?",
    answer:
      "November in Jaipur is pleasant and sunny during the daytime (22°C to 26°C), while evenings can be pleasantly crisp and cool (12°C to 15°C). We recommend bringing a lightweight shawl, jacket, or blazer for evening outdoor events.",
  },
  {
    id: "contact-questions",
    question: "Who can I contact if I have questions during travel?",
    answer:
      "Our wedding hospitality desk will be available round-the-clock for guests. You can reach out to our team via email at hello@harshitanagha.com or contact us directly on WhatsApp.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("dress-code");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-20 px-4 sm:px-8 bg-[#FAF6EF] border-b-2 border-[#181413] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono-body text-xs font-bold tracking-widest uppercase text-[#FAF6EF] bg-[#7A1C28] border-2 border-[#181413] px-3 py-1.5 shadow-[3px_3px_0px_#181413] mb-4">
            <HelpCircle className="w-4 h-4 text-[#E07A28]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-serif-display text-5xl sm:text-7xl font-bold text-[#181413] tracking-tight">
            Guest FAQ
          </h2>

          <div className="flex justify-center mt-2 text-[#7A1C28]">
            <SquiggleUnderline className="w-40 h-6" />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="relative bg-[#FFFDF9] border-2 border-[#181413] rounded-sm shadow-[4px_4px_0px_#181413] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-serif-display text-2xl sm:text-3xl font-bold text-[#181413] hover:text-[#7A1C28] transition-colors cursor-pointer"
                  data-cursor="TOGGLE"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 p-1 bg-[#FAF6EF] border border-[#181413] rounded-full text-[#7A1C28]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 sm:p-6 pt-0 font-mono-body text-xs sm:text-sm text-[#181413]/85 leading-relaxed border-t border-[#181413]/15 mt-1 bg-[#FAF6EF]/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
