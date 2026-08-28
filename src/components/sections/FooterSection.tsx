"use client";

import { motion } from "framer-motion";
import { HeartDoodle, SparkleDoodle, StarDoodle, WashiTape } from "../Doodles";
import { Mail, ArrowUp } from "lucide-react";
import WeddingLogo from "../WeddingLogo";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-4 sm:px-8 bg-[#181413] text-[#FAF6EF] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <WashiTape color="amber" className="w-32 h-6 mb-8 -rotate-2" />

        <div className="flex items-center justify-center gap-3 text-[#E07A28] mb-4">
          <WeddingLogo className="w-16 h-16" color="#FAF6EF" />
        </div>

        <h2 className="font-serif-display text-4xl sm:text-6xl font-bold tracking-tight mb-2">
          Harshit &amp; Anagha
        </h2>

        <p className="font-mono-body text-xs sm:text-sm font-bold tracking-widest text-[#E07A28] uppercase mb-6">
          21–22 NOVEMBER 2026 • RAJ BAGH PALACE, JAIPUR
        </p>

        <p className="font-mono-body text-sm max-w-md text-[#FAF6EF]/80 mb-8 leading-relaxed">
          We can’t wait to celebrate our special days with you. See you in Jaipur!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="mailto:hello@harshitanagha.com"
            className="inline-flex items-center gap-2 bg-[#FAF6EF] text-[#181413] font-mono-body text-xs font-bold tracking-wider px-4 py-2.5 rounded-sm border border-[#FAF6EF] hover:bg-[#E07A28] transition-colors"
            data-cursor="EMAIL"
          >
            <Mail className="w-4 h-4" />
            <span>hello@harshitanagha.com</span>
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-[#7A1C28] text-[#FAF6EF] font-mono-body text-xs font-bold tracking-wider px-4 py-2.5 rounded-sm border border-[#7A1C28] hover:bg-[#56121B] transition-colors cursor-pointer"
            data-cursor="TOP"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="border-t border-[#FAF6EF]/20 w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-body text-xs text-[#FAF6EF]/60">
          <p>© 2026 Harshit &amp; Anagha. Crafted with love for our wedding.</p>
          <p className="tracking-widest uppercase">RAJ BAGH PALACE • AMER, JAIPUR</p>
        </div>
      </div>
    </footer>
  );
}
