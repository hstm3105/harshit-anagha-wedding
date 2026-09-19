"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WashiTape } from "./Doodles";

interface ScrapbookCardProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number; // e.g. -3, 2, -4, 4
  tapePosition?: "top-left" | "top-right" | "top-center";
  tapeColor?: "amber" | "maroon" | "cream";
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  onClick?: () => void;
  cursorLabel?: string;
  imagePosition?: string;
}

export default function ScrapbookCard({
  src,
  alt,
  rotation = -2,
  tapePosition = "top-left",
  tapeColor = "amber",
  className = "",
  aspectRatio = "portrait",
  onClick,
  cursorLabel = "VIEW",
  imagePosition = "center",
}: ScrapbookCardProps) {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[4/5]",
    landscape: "aspect-[4/3]",
  };

  const tapePositions = {
    "top-left": "-top-3 -left-4 -rotate-12",
    "top-right": "-top-3 -right-4 rotate-12",
    "top-center": "-top-4 left-1/2 -translate-x-1/2 -rotate-3",
  };

  return (
    <motion.div
      className={`relative group inline-block cursor-pointer select-none ${className}`}
      initial={{ rotate: rotation, scale: 1 }}
      whileHover={{
        rotate: 0,
        scale: 1.04,
        y: -6,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      onClick={onClick}
      data-cursor={cursorLabel}
    >
      {/* Washi Tape Corner Accent */}
      <div className={`absolute z-20 ${tapePositions[tapePosition]}`}>
        <WashiTape color={tapeColor} className="w-24 h-5" />
      </div>

      {/* Clean Polaroid Scrapbook Photo Frame */}
      <div className="bg-[#FFFDF9] p-3 rounded-sm border border-[#181413]/10 shadow-[4px_8px_20px_rgba(0,0,0,0.12)] group-hover:shadow-[8px_16px_32px_rgba(122,28,40,0.2)] transition-shadow duration-300">
        <div
          className={`relative overflow-hidden bg-[#F0E6D8] rounded-xs ${aspectClasses[aspectRatio]}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover filter contrast-[1.02] saturate-[1.05] group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: imagePosition }}
            unoptimized={src.startsWith("http")}
          />
          {/* Subtle Grain Overlay on Image */}
          <div className="absolute inset-0 bg-[#7A1C28]/5 mix-blend-overlay pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
