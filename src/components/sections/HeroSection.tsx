"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountdownTimer from "../CountdownTimer";
import WeddingLogo from "../WeddingLogo";
import ScrapbookCard from "../ScrapbookCard";
import { SparkleDoodle, StarDoodle, ArrowDoodle } from "../Doodles";
import { MapPin, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-4 py-8 sm:px-8 sm:py-12 bg-[#FAF6EF]">
      {/* Top Navbar / Header Callout */}
      <header className="relative z-20 flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#181413] pb-4">
        <div className="flex items-center gap-3">
          <WeddingLogo className="w-12 h-12 sm:w-14 sm:h-14 shrink-0" />
          <div className="flex items-center gap-2 font-mono-body text-xs sm:text-sm font-bold tracking-widest uppercase">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#7A1C28] animate-pulse" />
            <span>SAVE THE DATE</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#rsvp"
            className="inline-block bg-[#7A1C28] text-[#FAF6EF] font-mono-body text-xs sm:text-sm font-bold tracking-wider px-5 py-2.5 rounded-sm border-2 border-[#181413] shadow-[4px_4px_0px_#181413] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#181413] transition-all"
            data-cursor="RSVP"
          >
            RSVP NOW
          </a>
        </div>
      </header>

      {/* Hero Center Editorial Headlines */}
      <div className="relative z-10 my-auto py-10 flex flex-col items-center justify-center text-center">
        {/* Prominent Official Monogram Logo Image (Click to open full high-res modal) */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 relative"
        >
          <div className="p-3 bg-[#FFFDF9] border-2 border-[#181413] shadow-[6px_6px_0px_#7A1C28] rounded-sm transform -rotate-1 hover:rotate-0 transition-transform">
            <WeddingLogo className="w-36 h-36 sm:w-48 sm:h-48" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <span className="block font-mono-body text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#E07A28] mb-2">
            WE ARE GETTING MARRIED
          </span>

          {/* Colossal Names Collision with Anagha & Harshit Portrait Badges */}
          <div className="relative font-serif-display leading-[0.85] tracking-tight">
            {/* ANAGHA Row with Bride Avatar Badge */}
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-[#181413] bg-[#FFFDF9] p-1 shadow-[3px_3px_0px_#7A1C28] overflow-hidden shrink-0"
                title="Bride Avatar"
              >
                <Image
                  src="/hero/bride_avatar.png"
                  alt="Bride Avatar"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </motion.div>

              <h1 className="text-[13vw] sm:text-[11vw] font-bold text-[#181413] select-none">
                ANAGHA
              </h1>
            </div>

            {/* Overlapping Ampersand */}
            <div className="relative my-[-2vw] sm:my-[-2.5vw] z-10 flex items-center justify-center">
              <span className="inline-block font-serif-display italic text-[10vw] sm:text-[8vw] text-[#7A1C28] transform -rotate-12 bg-[#FAF6EF] px-3 sm:px-6 rounded-full border-2 border-[#181413] shadow-[4px_4px_0px_#181413]">
                &amp;
              </span>
              <div className="absolute top-0 right-[25%] text-[#E07A28] animate-spin-slow">
                <StarDoodle className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
            </div>

            {/* HARSHIT Row with Sunset Couple Badge */}
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              <h1 className="text-[13vw] sm:text-[11vw] font-bold text-[#181413] select-none">
                HARSHIT
              </h1>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-[#181413] bg-[#FFFDF9] p-1 shadow-[3px_3px_0px_#E07A28] overflow-hidden shrink-0"
                title="Sunset Couple Portrait"
              >
                <Image
                  src="/hero/sunset_couple.png"
                  alt="Sunset Couple Portrait"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Date & Location Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-mono-body"
        >
          <div className="flex items-center gap-2 bg-[#FFFDF9] border-2 border-[#181413] px-4 py-2 rounded-sm shadow-[4px_4px_0px_#181413]">
            <Calendar className="w-4 h-4 text-[#7A1C28]" />
            <span className="font-bold text-sm sm:text-base text-[#181413]">
              21–22 NOVEMBER 2026
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#FFFDF9] border-2 border-[#181413] px-4 py-2 rounded-sm shadow-[4px_4px_0px_#7A1C28]">
            <MapPin className="w-4 h-4 text-[#E07A28]" />
            <span className="font-bold text-sm sm:text-base text-[#181413]">
              RAJ BAGH PALACE, JAIPUR
            </span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
        >
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Left side peeking scrapbook: sunset couple */}
      <div className="hidden lg:block absolute top-[18%] left-[3%] z-10">
        <ScrapbookCard
          src="/hero/top-left-sunset-couple.JPG"
          alt="Harshit and Anagha at sunset"
          rotation={-6}
          tapePosition="top-right"
          tapeColor="maroon"
          aspectRatio="square"
          className="w-56"
          cursorLabel="COUPLE"
        />
      </div>

      {/* Right side peeking scrapbook: navy couple */}
      <div className="hidden lg:block absolute bottom-[12%] right-[3%] z-10">
        <ScrapbookCard
          src="/hero/right-side-navy-formal-couple.png"
          alt="Harshit and Anagha in navy formal attire"
          rotation={6}
          tapePosition="top-left"
          tapeColor="amber"
          aspectRatio="square"
          className="w-56"
          cursorLabel="COUPLE"
        />
      </div>

      {/* Scroll Down Indicator */}
      <footer className="relative z-20 flex items-center justify-between border-t-2 border-[#181413] pt-4 mt-4">
        <div className="flex items-center gap-2 font-mono-body text-xs tracking-wider">
          <SparkleDoodle className="w-4 h-4 text-[#E07A28]" />
          <span>CELEBRATING OUR WEDDING</span>
        </div>

        <a
          href="#story"
          className="flex items-center gap-2 font-mono-body text-xs font-bold tracking-widest uppercase hover:text-[#7A1C28] transition-colors"
          data-cursor="SCROLL"
        >
          <span>SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDoodle className="w-5 h-5 text-[#7A1C28]" />
          </motion.div>
        </a>
      </footer>
    </section>
  );
}
