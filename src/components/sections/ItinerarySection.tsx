"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Sparkles,
  Sun,
  Music,
  Shield,
  Crown,
  Flame,
  Utensils,
  Coffee,
} from "lucide-react";
import { SquiggleUnderline } from "../Doodles";
import ScrapbookCard from "../ScrapbookCard";

interface EventItem {
  id: string;
  name: string;
  time: string;
  venue: string;
  description: string;
  dressCode?: string;
  icon: React.ReactNode;
  photoUrl?: string;
  rotation?: number;
  tapeColor?: "amber" | "maroon" | "cream";
  isSecondary?: boolean;
}

interface DayEvents {
  dayNumber: string;
  dayName: string;
  fullDate: string;
  events: EventItem[];
}

const schedule: DayEvents[] = [
  {
    dayNumber: "21",
    dayName: "SATURDAY",
    fullDate: "NOVEMBER 2026",
    events: [
      {
        id: "tilak",
        name: "Tilak Ceremony",
        time: "12:00 PM",
        venue: "Banquet Hall",
        description: "Traditional welcome blessings & celebratory lunch.",
        dressCode: "Festive Ethnic / Kurtas & Sarees",
        icon: <Sun className="w-5 h-5 text-[#E07A28]" />,
        photoUrl: "/itinerary/enhanced_01_tilak.png",
        rotation: -4,
        tapeColor: "amber",
        isSecondary: false,
      },
      {
        id: "tilak-lunch",
        name: "Celebratory Lunch",
        time: "01:30 PM",
        venue: "Banquet Hall",
        description: "Grand festive afternoon feast following the Tilak ceremony.",
        icon: <Utensils className="w-4 h-4 text-[#E07A28]" />,
        isSecondary: true,
      },
      {
        id: "sangeet",
        name: "Sangeet & Engagement Night",
        time: "07:00 PM Onwards",
        venue: "Poolside Lawn",
        description: "Ring exchange, dance performances, live music & nightlong celebrations.",
        dressCode: "Indo-Western / Glamorous Ethnic",
        icon: <Music className="w-5 h-5 text-[#E07A28]" />,
        photoUrl: "/itinerary/enhanced_02_sangeet.png",
        rotation: 3,
        tapeColor: "maroon",
        isSecondary: false,
      },
      {
        id: "sangeet-dinner",
        name: "Sangeet Gala Dinner",
        time: "08:30 PM Onwards",
        venue: "Poolside Dining Lawn",
        description: "Scintillating nightlong dinner, live counters & a festive feast.",
        icon: <Utensils className="w-4 h-4 text-[#E07A28]" />,
        isSecondary: true,
      },
    ],
  },
  {
    dayNumber: "22",
    dayName: "SUNDAY",
    fullDate: "NOVEMBER 2026",
    events: [
      {
        id: "haldi",
        name: "Haldi & Phoolon Ki Holi",
        time: "10:00 AM",
        venue: "Courtyard",
        description: "Turmeric rituals, marigold & mogra shower, and sunny morning beats.",
        dressCode: "Yellow, Sunshine & Pastel Shades",
        icon: <Sparkles className="w-5 h-5 text-[#E07A28]" />,
        photoUrl: "/itinerary/enhanced_03_haldi.png",
        rotation: -3,
        tapeColor: "amber",
        isSecondary: false,
      },
      {
        id: "sajjan-goth",
        name: "Sajjan Goth (Traditional Rajasthani Lunch)",
        time: "01:00 PM",
        venue: "Banquet Hall",
        description: "A traditional royal Marwari & Rajasthani sit-down feast honoring our guests.",
        icon: <Coffee className="w-4 h-4 text-[#E07A28]" />,
        isSecondary: true,
      },
      {
        id: "baaraat",
        name: "The Baaraat Procession",
        time: "06:00 PM",
        venue: "Palace Main Gate",
        description: "Dhol beats, horses & festive arrival of the groom's party.",
        dressCode: "Royal Festive / Formal Ethnic",
        icon: <Shield className="w-5 h-5 text-[#E07A28]" />,
        photoUrl: "/itinerary/enhanced_04_baaraat.png",
        rotation: 4,
        tapeColor: "maroon",
        isSecondary: false,
      },
      {
        id: "reception",
        name: "Wedding Reception",
        time: "07:00 PM Onwards",
        venue: "Main Lawn",
        description: "A royal stage welcome and varmala ceremony for the newlyweds.",
        dressCode: "Regal / Black Tie / Heavy Ethnic",
        icon: <Crown className="w-5 h-5 text-[#E07A28]" />,
        photoUrl: "/itinerary/enhanced_05_reception_wedding_varmala.png",
        rotation: -2,
        tapeColor: "cream",
        isSecondary: false,
      },
      {
        id: "reception-dinner",
        name: "Royal Reception Dinner",
        time: "08:30 PM",
        venue: "Main Lawn",
        description: "Sumptuous wedding banquet feast before the midnight pheras.",
        icon: <Utensils className="w-4 h-4 text-[#E07A28]" />,
        isSecondary: true,
      },
      {
        id: "pheras",
        name: "Vedic Pheras",
        time: "11:30 PM",
        venue: "Courtyard",
        description: "Sacred seven vows around the holy fire.",
        dressCode: "Traditional Royal Ethnic",
        icon: <Flame className="w-5 h-5 text-[#E07A28]" />,
        photoUrl: "/itinerary/enhanced_06_pheras_night.png",
        rotation: 3,
        tapeColor: "maroon",
        isSecondary: false,
      },
    ],
  },
  {
    dayNumber: "27",
    dayName: "FRIDAY",
    fullDate: "NOVEMBER 2026",
    events: [
      {
        id: "nagpur-reception",
        name: "Reception at Nagpur",
        time: "07:00 PM",
        venue: "Officers Lawn, Civil Lines, Nagpur",
        description: "An evening reception celebration with family and friends in Nagpur.",
        icon: <Crown className="w-5 h-5 text-[#E07A28]" />,
        photoUrl: "/itinerary/enhanced_07_nagpur_reception.png",
        rotation: -3,
        tapeColor: "amber",
        isSecondary: false,
      },
    ],
  },
];

export default function ItinerarySection() {
  return (
    <section
      id="itinerary"
      className="relative py-24 px-4 sm:px-8 bg-[#FAF6EF] border-b-2 border-[#181413] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Editorial Section Header */}
        <div className="text-center mb-20">
          <span className="font-mono-body text-xs font-bold tracking-[0.3em] uppercase text-[#E07A28] mb-2 block">
            CELEBRATION SCHEDULE
          </span>

          <h2 className="font-serif-display text-5xl sm:text-7xl font-bold text-[#181413] tracking-tight">
            Our Wedding Weekend
          </h2>

          <p className="font-serif-display italic text-lg sm:text-xl text-[#7A1C28] mt-2">
            Two Days of Music, Rituals &amp; Celebrations at Raj Bagh Palace
          </p>

          <div className="flex justify-center mt-3 text-[#7A1C28]">
            <SquiggleUnderline className="w-44 h-6" />
          </div>
        </div>

        {/* Floating Timeline Container */}
        <div className="relative space-y-28">
          {schedule.map((day) => (
            <div key={day.dayNumber} className="relative">
              {/* Giant Serif Day Callout Header */}
              <div className="flex items-baseline gap-4 border-b-2 border-[#181413] pb-4 mb-14">
                <span className="font-serif-display text-7xl sm:text-9xl font-bold text-[#7A1C28] leading-none select-none">
                  {day.dayNumber}
                </span>
                <div>
                  <h3 className="font-mono-body text-base sm:text-2xl font-bold text-[#181413] tracking-widest">
                    {day.dayName}
                  </h3>
                  <span className="font-mono-body text-xs sm:text-sm font-bold text-[#E07A28] tracking-widest">
                    {day.fullDate}
                  </span>
                </div>
              </div>

              {/* Event Items List */}
              <div className="relative pl-6 sm:pl-10 space-y-10 sm:space-y-14 border-l-2 border-dashed border-[#7A1C28]/40 ml-4 sm:ml-8">
                {day.events.map((event, idx) => {
                  const isEven = idx % 2 === 0;

                  // Render Secondary Meal Events with white box venue tags
                  if (event.isSecondary) {
                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5 }}
                        className="relative flex flex-col space-y-1.5 group"
                      >
                        {/* Timeline Point Dot */}
                        <div className="absolute -left-[31px] sm:-left-[47px] top-2 z-10 w-4 h-4 rounded-full bg-[#FAF6EF] border-2 border-[#E07A28] flex items-center justify-center group-hover:bg-[#E07A28] transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#7A1C28]" />
                        </div>

                        <div className="flex flex-wrap items-center gap-2.5">
                          {/* Time Badge */}
                          <span className="inline-flex items-center gap-1 font-mono-body text-[11px] font-bold text-[#FAF6EF] bg-[#7A1C28]/90 px-2.5 py-0.5 rounded-full shadow-xs">
                            {event.icon}
                            <span>{event.time}</span>
                          </span>

                          {/* Venue Tag (Styled in white box like main functions) */}
                          <div className="inline-flex items-center gap-1 font-mono-body text-xs font-bold text-[#181413]/80 bg-[#FFFDF9] px-3 py-0.5 border border-[#181413]/30 rounded-xs shadow-2xs">
                            <MapPin className="w-3.5 h-3.5 text-[#E07A28]" />
                            <span>{event.venue}</span>
                          </div>
                        </div>

                        {/* Secondary Event Name */}
                        <h5 className="font-serif-display text-xl sm:text-2xl font-bold text-[#181413]/90 group-hover:text-[#7A1C28] transition-colors pt-0.5">
                          {event.name}
                        </h5>

                        <p className="font-mono-body text-xs text-[#181413]/75 max-w-xl">
                          {event.description}
                        </p>
                      </motion.div>
                    );
                  }

                  // Render Main Functions with full Polaroid cards & prominent headlines
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6 }}
                      className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
                    >
                      {/* Timeline Point Dot */}
                      <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 z-10 w-6 h-6 rounded-full bg-[#FAF6EF] border-2 border-[#7A1C28] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#7A1C28] transition-all">
                        <div className="w-2 h-2 rounded-full bg-[#E07A28] group-hover:bg-[#FAF6EF]" />
                      </div>

                      {/* Left: Event Typography & Information */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          {/* Time Badge */}
                          <div className="inline-flex items-center gap-1.5 font-mono-body text-xs font-bold text-[#FAF6EF] bg-[#7A1C28] px-3.5 py-1 rounded-full border border-[#181413] shadow-[2px_2px_0px_#181413]">
                            {event.icon}
                            <span>{event.time}</span>
                          </div>

                          {/* Venue Tag */}
                          <div className="inline-flex items-center gap-1 font-mono-body text-xs font-bold text-[#181413]/80 bg-[#FFFDF9] px-3 py-1 border border-[#181413]/30 rounded-xs">
                            <MapPin className="w-3.5 h-3.5 text-[#E07A28]" />
                            <span>{event.venue}</span>
                          </div>
                        </div>

                        {/* Event Name */}
                        <h4 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#181413] group-hover:text-[#7A1C28] transition-colors pt-1">
                          {event.name}
                        </h4>

                        {/* Short Description */}
                        <p className="font-mono-body text-xs sm:text-sm text-[#181413]/85 max-w-xl leading-relaxed">
                          {event.description}
                        </p>

                        {/* Dress Code Tag */}
                        {event.dressCode && (
                          <div className="pt-1">
                            <span className="font-mono-body text-[11px] font-bold text-[#7A1C28] tracking-wider uppercase bg-[#FFFDF9] border border-[#7A1C28]/40 px-3 py-1 rounded-xs inline-block shadow-[2px_2px_0px_#E07A28]">
                              ✨ {event.dressCode}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Right: Clean Polaroid Scrapbook Photo */}
                      {event.photoUrl && (
                        <div className="lg:w-72 shrink-0 flex justify-start lg:justify-end">
                          <ScrapbookCard
                            src={event.photoUrl}
                            alt={event.name}
                            rotation={event.rotation}
                            tapeColor={event.tapeColor}
                            tapePosition={isEven ? "top-left" : "top-right"}
                            aspectRatio="square"
                            className="w-64 sm:w-72"
                          />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
