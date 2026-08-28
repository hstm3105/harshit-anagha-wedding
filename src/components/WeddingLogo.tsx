"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface WeddingLogoProps {
  className?: string;
  color?: string;
  interactive?: boolean;
}

export default function WeddingLogo({
  className = "w-28 h-28",
  interactive = true,
}: WeddingLogoProps) {
  return (
    <motion.div
      whileHover={interactive ? { scale: 1.04, rotate: -1 } : undefined}
      className={`relative inline-block ${className}`}
      title="Harshit & Anagha Official Monogram"
    >
      <Image
        src="/logo.jpg"
        alt="Harshit & Anagha Official Monogram Logo"
        width={400}
        height={400}
        className="w-full h-full object-contain filter contrast-[1.04] mix-blend-multiply"
        priority
      />
    </motion.div>
  );
}
