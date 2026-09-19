"use client";

import { motion } from "framer-motion";
import ScrapbookCard from "../ScrapbookCard";
import { HeartDoodle, SquiggleUnderline } from "../Doodles";

interface StoryBeat {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  photoUrl: string;
  rotation: number;
  tapeColor: "amber" | "maroon" | "cream";
}

const storyBeats: StoryBeat[] = [
  {
    id: "beat-1",
    number: "CHAPTER 01",
    title: "How It Started",
    tagline: "From IIM Calcutta to always",
    description:
      "We met at IIM Calcutta and began as friends—sharing long conversations, lingering late-night walks, and more time together than either of us noticed. Somewhere along the way, friendship became something deeper, and it felt like the most natural thing in the world.",
    photoUrl: "/story/c1_iim_graduation.png",
    rotation: -3,
    tapeColor: "amber",
  },
  {
    id: "beat-2",
    number: "CHAPTER 02",
    title: "The Proposal",
    tagline: "Under the Sunset, by the Sea",
    description:
      "A surprise getaway, a picturesque sunset, and a moment where time stood completely still.",
    photoUrl: "/story/c2_proposal_sunset.png",
    rotation: 3,
    tapeColor: "maroon",
  },
  {
    id: "beat-3",
    number: "CHAPTER 03",
    title: "Here We Are",
    tagline: "Counting down to Jaipur 2026",
    description:
      "With the people we love close by, we are making our way to Jaipur for two days of music, laughter, sacred vows, and the beginning of our next chapter together.",
    photoUrl: "/story/c3_rooftop_night.png",
    rotation: -4,
    tapeColor: "amber",
  },
];

export default function StorySection() {
  return (
    <section
      id="story"
      className="relative py-20 px-4 sm:px-8 bg-[#FAF6EF] border-b-2 border-[#181413] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono-body text-xs font-bold tracking-widest uppercase text-[#7A1C28] bg-[#FFFDF9] border border-[#181413] px-3 py-1 shadow-[2px_2px_0px_#181413] mb-4">
            <HeartDoodle className="w-4 h-4 text-[#7A1C28]" />
            <span>OUR JOURNEY TOGETHER</span>
          </div>

          <h2 className="font-serif-display text-5xl sm:text-7xl font-bold text-[#181413] tracking-tight">
            Our Story
          </h2>

          <div className="flex justify-center mt-2 text-[#E07A28]">
            <SquiggleUnderline className="w-40 h-6" />
          </div>
        </div>

        {/* Narrative Beats with Specified Avatar Cards */}
        <div className="space-y-24">
          {storyBeats.map((beat, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={beat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center justify-between gap-12 lg:gap-16`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-4 max-w-xl">
                  <span className="font-mono-body text-xs font-bold tracking-[0.2em] text-[#E07A28] uppercase">
                    {beat.number}
                  </span>

                  <h3 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#181413] leading-tight">
                    {beat.title}
                  </h3>

                  <p className="font-mono-body text-xs sm:text-sm font-bold text-[#7A1C28] uppercase tracking-wider">
                    — {beat.tagline}
                  </p>

                  <p className="font-mono-body text-sm sm:text-base leading-relaxed text-[#181413]/85 bg-[#FFFDF9] p-5 border-2 border-[#181413] shadow-[4px_4px_0px_#181413] rounded-sm">
                    {beat.description}
                  </p>
                </div>

                {/* Specified Avatar Photo Card */}
                <div className="flex-1 flex justify-center">
                  <ScrapbookCard
                    src={beat.photoUrl}
                    alt={beat.title}
                    rotation={beat.rotation}
                    tapeColor={beat.tapeColor}
                    tapePosition={isEven ? "top-left" : "top-right"}
                    aspectRatio="square"
                    className="w-full max-w-xs sm:max-w-sm"
                    cursorLabel="STORY"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
