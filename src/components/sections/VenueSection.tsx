"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Plane, Building2, ExternalLink } from "lucide-react";
import { SquiggleUnderline, WashiTape } from "../Doodles";

export default function VenueSection() {
  const directionsUrl =
    "https://www.google.com/maps/place/HOTEL+RAJ+BAGH+PALACE,+Amer+Rd,+Amber,+Jaipur,+Rajasthan+302028/@26.9952849,75.8693512,17z/data=!3m1!4b1!4m6!3m5!1s0x396db0476843349f:0xc29d22dc76bdbf44!8m2!3d26.9945684!4d75.8695534!16s%2Fg%2F11qs973s92";

  return (
    <section
      id="venue"
      className="relative py-20 px-4 sm:px-8 bg-[#FAF6EF] border-b-2 border-[#181413] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono-body text-xs font-bold tracking-widest uppercase text-[#7A1C28] bg-[#FFFDF9] border border-[#181413] px-3 py-1 shadow-[2px_2px_0px_#181413] mb-4">
            <MapPin className="w-4 h-4 text-[#E07A28]" />
            <span>DESTINATION &amp; LOCATION</span>
          </div>

          <h2 className="font-serif-display text-5xl sm:text-7xl font-bold text-[#181413] tracking-tight">
            The Venue
          </h2>

          <div className="flex justify-center mt-2 text-[#E07A28]">
            <SquiggleUnderline className="w-44 h-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Venue Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#FFFDF9] border-2 border-[#181413] p-6 sm:p-8 shadow-[8px_8px_0px_#181413] rounded-sm flex flex-col justify-between relative"
          >
            <div className="absolute -top-3 right-6 z-20">
              <WashiTape color="maroon" className="w-28 h-6" />
            </div>

            <div>
              <h3 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#181413] mb-4 leading-tight">
                Raj Bagh Palace
              </h3>

              <div className="space-y-4 font-mono-body text-sm text-[#181413]/90 leading-relaxed border-t-2 border-b-2 border-[#181413]/20 py-6 my-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#7A1C28] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Address:</p>
                    <p>
                      Van Talab Road, Amer, near Amer Fort, Jaipur, Rajasthan 302028
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Plane className="w-5 h-5 text-[#E07A28] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Nearest Airport:</p>
                    <p>Jaipur International Airport (JAI) — ~25 km</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#7A1C28] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Landmark:</p>
                    <p>Situated right near the historic Amer Fort &amp; Maota Lake</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#7A1C28] text-[#FAF6EF] font-mono-body text-sm font-bold tracking-wider px-6 py-3.5 rounded-sm border-2 border-[#181413] shadow-[4px_4px_0px_#181413] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#181413] transition-all text-center"
              data-cursor="MAP"
            >
              <Navigation className="w-4 h-4" />
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#FFFDF9] border-2 border-[#181413] p-2 shadow-[8px_8px_0px_#7A1C28] rounded-sm min-h-[350px] lg:min-h-[480px] flex"
          >
            <iframe
              src="https://www.google.com/maps?q=Hotel+Raj+Bagh+Palace,+Amer+Rd,+Amer,+Jaipur,+Rajasthan+302028&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Raj Bagh Palace Location Map"
              className="w-full h-full rounded-xs filter contrast-[1.05] grayscale-[20%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
