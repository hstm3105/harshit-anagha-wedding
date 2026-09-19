"use client";

import { motion } from "framer-motion";
import { Plane, Train, Compass } from "lucide-react";
import { SquiggleUnderline, WashiTape } from "../Doodles";

export default function TravelStaySection() {
  return (
    <section
      id="travel"
      className="relative py-20 px-4 sm:px-8 bg-[#FAF6EF] border-b-2 border-[#181413] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono-body text-xs font-bold tracking-widest uppercase text-[#FAF6EF] bg-[#7A1C28] border-2 border-[#181413] px-3 py-1.5 shadow-[3px_3px_0px_#181413] mb-4">
            <Compass className="w-4 h-4 text-[#E07A28]" />
            <span>GUEST GUIDE &amp; LOGISTICS</span>
          </div>

          <h2 className="font-serif-display text-5xl sm:text-7xl font-bold text-[#181413] tracking-tight">
            Travel
          </h2>

          <div className="flex justify-center mt-2 text-[#E07A28]">
            <SquiggleUnderline className="w-48 h-6" />
          </div>
        </div>

        {/* Travel Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Flight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#FFFDF9] border-2 border-[#181413] p-6 sm:p-8 shadow-[6px_6px_0px_#181413] rounded-sm flex flex-col justify-between"
          >
            <div className="absolute -top-3 right-6">
              <WashiTape color="amber" className="w-24 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-3 text-[#7A1C28] mb-4">
                <Plane className="w-7 h-7" />
                <span className="font-mono-body text-xs font-bold tracking-widest uppercase text-[#181413]">
                  BY AIR
                </span>
              </div>

              <h3 className="font-serif-display text-3xl font-bold text-[#181413] mb-2">
                Jaipur Airport (JAI)
              </h3>

              <p className="font-mono-body text-xs sm:text-sm text-[#181413]/80 leading-relaxed mb-4">
                Jaipur International Airport has direct flight connections to major Indian cities including Delhi, Mumbai, Bengaluru, and Hyderabad.
              </p>
            </div>

            <div className="bg-[#FAF6EF] p-3 border border-[#181413]/30 font-mono-body text-xs text-[#7A1C28] font-bold">
              Taxi to Raj Bagh Palace: ~45–60 minutes via Amer Road.
            </div>
          </motion.div>

          {/* Train Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-[#FFFDF9] border-2 border-[#181413] p-6 sm:p-8 shadow-[6px_6px_0px_#7A1C28] rounded-sm flex flex-col justify-between"
          >
            <div className="absolute -top-3 right-6">
              <WashiTape color="maroon" className="w-24 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-3 text-[#E07A28] mb-4">
                <Train className="w-7 h-7" />
                <span className="font-mono-body text-xs font-bold tracking-widest uppercase text-[#181413]">
                  BY TRAIN
                </span>
              </div>

              <h3 className="font-serif-display text-3xl font-bold text-[#181413] mb-2">
                Jaipur Junction (JP)
              </h3>

              <p className="font-mono-body text-xs sm:text-sm text-[#181413]/80 leading-relaxed mb-4">
                Jaipur Junction connects comfortably via Vande Bharat, Rajdhani, and Shatabdi express trains from across India.
              </p>
            </div>

            <div className="bg-[#FAF6EF] p-3 border border-[#181413]/30 font-mono-body text-xs text-[#7A1C28] font-bold">
              Distance to Amer: ~14 km (~35 minutes drive).
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
