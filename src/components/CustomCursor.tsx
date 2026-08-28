"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Detect touch / fine pointer
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsTouch(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouch(!e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over element with data-cursor
      const target = e.target as HTMLElement | null;
      const cursorEl = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorEl) {
        const text = cursorEl.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[999999] flex items-center justify-center rounded-full bg-[#7A1C28] text-[#FAF6EF] shadow-lg transition-opacity duration-300 mix-blend-difference"
      animate={{
        x: position.x - (isHovered ? 36 : 10),
        y: position.y - (isHovered ? 36 : 10),
        width: isHovered ? 72 : 20,
        height: isHovered ? 72 : 20,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.5,
      }}
    >
      {isHovered && cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="text-[10px] font-bold tracking-widest uppercase font-mono-body text-center px-1 leading-none"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
