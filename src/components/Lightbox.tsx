"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { WashiTape } from "./Doodles";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
}

export default function Lightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  caption,
}: LightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 bg-[#181413]/85 backdrop-blur-md"
          onClick={onClose}
          data-cursor="CLOSE"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, rotate: -2 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.85, opacity: 0, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative max-w-4xl max-h-[85vh] w-full bg-[#FFFDF9] p-4 sm:p-6 rounded-sm border-2 border-[#181413] shadow-[12px_24px_48px_rgba(0,0,0,0.5)] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 z-30 p-2.5 bg-[#7A1C28] text-[#FAF6EF] border-2 border-[#181413] rounded-full shadow-[3px_3px_0px_#181413] hover:scale-110 transition-transform"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute -top-3 left-8 z-20">
              <WashiTape color="amber" className="w-28 h-6" />
            </div>

            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-[#F0E6D8] rounded-xs overflow-hidden border border-[#181413]/10">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                unoptimized={imageSrc.startsWith("http")}
              />
            </div>

            {caption && (
              <div className="mt-4 text-center">
                <p className="font-serif-display text-xl sm:text-2xl text-[#181413]">
                  {caption}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
