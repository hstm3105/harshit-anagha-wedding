"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const weddingDate = new Date("2026-11-21T12:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  if (!isMounted) {
    return (
      <div className="flex gap-3 sm:gap-4 font-mono-body">
        {["DAYS", "HOURS", "MINS", "SECS"].map((label) => (
          <div
            key={label}
            className="flex flex-col items-center bg-[#FFFDF9] border border-[#181413] px-3 py-2 sm:px-4 sm:py-3 shadow-[3px_3px_0px_#181413] rounded-sm min-w-[65px] sm:min-w-[80px]"
          >
            <span className="font-serif-display text-2xl sm:text-3xl font-bold text-[#7A1C28]">
              --
            </span>
            <span className="text-[10px] tracking-widest text-[#181413]/70">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 sm:gap-4 font-mono-body">
      {timeUnits.map(({ label, value }) => (
        <motion.div
          key={label}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center bg-[#FFFDF9] border-2 border-[#181413] px-3.5 py-2 sm:px-5 sm:py-3 shadow-[4px_4px_0px_#7A1C28] rounded-sm min-w-[70px] sm:min-w-[88px]"
        >
          <span className="font-serif-display text-2xl sm:text-4xl font-bold text-[#7A1C28] leading-tight">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-[11px] font-bold tracking-widest text-[#181413]/80 uppercase">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
