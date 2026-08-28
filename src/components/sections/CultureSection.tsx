"use client";

import { motion } from "framer-motion";
import ScrapbookCard from "../ScrapbookCard";
import { SquiggleUnderline, WashiTape, HeartDoodle, StarDoodle } from "../Doodles";
import { Sparkles, Sun, Flower2, Heart } from "lucide-react";

export default function CultureSection() {
  return (
    <section
      id="cultures"
      className="relative py-24 px-4 sm:px-8 bg-[#FFFDF9] border-b-2 border-[#181413] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono-body text-xs font-bold tracking-widest uppercase text-[#FAF6EF] bg-[#7A1C28] border-2 border-[#181413] px-4 py-1.5 shadow-[3px_3px_0px_#181413] mb-4">
            <Heart className="w-4 h-4 fill-current text-[#E07A28]" />
            <span>TWO HERITAGES • ONE CELEBRATION</span>
          </div>

          <h2 className="font-serif-display text-5xl sm:text-7xl font-bold text-[#181413] tracking-tight">
            Rajasthan &amp; Maharashtra
          </h2>

          <p className="font-serif-display italic text-xl sm:text-2xl text-[#7A1C28] mt-2">
            “Padharo Mhare Des” meets “Aapla Swagat Ahe”
          </p>

          <div className="flex justify-center mt-3 text-[#E07A28]">
            <SquiggleUnderline className="w-52 h-6" />
          </div>
        </div>

        {/* Culture Fusion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Rajasthan Roots (Harshit) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#FAF6EF] border-2 border-[#181413] p-6 sm:p-8 shadow-[8px_8px_0px_#7A1C28] rounded-sm relative"
          >
            <div className="absolute -top-4 left-6 z-20">
              <WashiTape color="amber" className="w-28 h-6" />
            </div>

            <div className="flex items-center justify-between border-b-2 border-[#181413]/20 pb-3 mb-4">
              <span className="font-mono-body text-xs font-bold tracking-widest uppercase text-[#E07A28]">
                HARSHIT’S ROOTS
              </span>
              <span className="font-serif-display text-2xl font-bold text-[#181413]">
                Rajasthan
              </span>
            </div>

            <h3 className="font-serif-display text-3xl font-bold text-[#181413] mb-3">
              Land of Kings &amp; Saffron Skies
            </h3>

            <p className="font-mono-body text-xs sm:text-sm text-[#181413]/85 leading-relaxed mb-4">
              From the vibrant Bandhani drapes and golden sandstone forts of Jaipur to energetic Ghoomar beats and royal Rajasthani warmth — Harshit brings the majestic spirit of the Pink City.
            </p>

            <div className="bg-[#FFFDF9] p-3 border border-[#181413]/30 rounded-xs font-mono-body text-xs text-[#7A1C28] font-bold flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#E07A28] shrink-0" />
              <span>Royal Baaraat • Marigold Blooms • Dhol Beats</span>
            </div>
          </motion.div>

          {/* Center Union Emblem */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center my-4 lg:my-0">
            <div className="w-16 h-16 rounded-full bg-[#7A1C28] text-[#FAF6EF] border-2 border-[#181413] shadow-[4px_4px_0px_#181413] flex items-center justify-center font-serif-display italic text-3xl font-bold rotate-[-8deg]">
              &amp;
            </div>
            <span className="font-mono-body text-[11px] font-bold tracking-widest text-[#E07A28] uppercase mt-2">
              THE FUSION
            </span>
          </div>

          {/* Maharashtra Roots (Anagha) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#FAF6EF] border-2 border-[#181413] p-6 sm:p-8 shadow-[8px_8px_0px_#181413] rounded-sm relative"
          >
            <div className="absolute -top-4 right-6 z-20">
              <WashiTape color="maroon" className="w-28 h-6" />
            </div>

            <div className="flex items-center justify-between border-b-2 border-[#181413]/20 pb-3 mb-4">
              <span className="font-mono-body text-xs font-bold tracking-widest uppercase text-[#7A1C28]">
                ANAGHA’S ROOTS
              </span>
              <span className="font-serif-display text-2xl font-bold text-[#181413]">
                Maharashtra
              </span>
            </div>

            <h3 className="font-serif-display text-3xl font-bold text-[#181413] mb-3">
              Land of Paithani &amp; Mogra Blooms
            </h3>

            <p className="font-mono-body text-xs sm:text-sm text-[#181413]/85 leading-relaxed mb-4">
              Rich Paithani silks, fragrant Mogra garlands, joyful Tutari horns, and timeless Maharashtrian warmth — Anagha brings the elegance, grace, and rich cultural heritage of Maharashtra.
            </p>

            <div className="bg-[#FFFDF9] p-3 border border-[#181413]/30 rounded-xs font-mono-body text-xs text-[#7A1C28] font-bold flex items-center gap-2">
              <Flower2 className="w-4 h-4 text-[#7A1C28] shrink-0" />
              <span>Paithani Grace • Mogra Fragrance • Festive Tutari</span>
            </div>
          </motion.div>
        </div>

        {/* Fusion Summary Banner */}
        <div className="mt-12 bg-[#FAF6EF] border-2 border-[#181413] p-6 text-center shadow-[6px_6px_0px_#181413] rounded-sm max-w-3xl mx-auto">
          <p className="font-serif-display text-2xl sm:text-3xl text-[#181413]">
            “Where Rajasthani Royalty meets Maharashtrian Elegance under the Jaipur Sky.”
          </p>
        </div>
      </div>
    </section>
  );
}
