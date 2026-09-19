"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrapbookCard from "../ScrapbookCard";
import Lightbox from "../Lightbox";
import { Camera } from "lucide-react";
import { SquiggleUnderline } from "../Doodles";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  rotation: number;
  tapeColor: "amber" | "maroon" | "cream";
  aspectRatio: "square" | "portrait" | "landscape";
}

const galleryImages: GalleryImage[] = [
  {
    id: "g2",
    src: "/gallery/09_pier_sunflowers.jpg",
    alt: "Laughing together on pier with sunflowers at sunset",
    rotation: 4,
    tapeColor: "maroon",
    aspectRatio: "portrait",
  },
  {
    id: "g3",
    src: "/gallery/06_petronas_towers.jpg",
    alt: "Petronas Twin Towers Kuala Lumpur trip",
    rotation: -2,
    tapeColor: "cream",
    aspectRatio: "portrait",
  },
  {
    id: "g4",
    src: "/gallery/08_lantern_date.jpg",
    alt: "Cozy lantern-lit dinner date",
    rotation: 3,
    tapeColor: "amber",
    aspectRatio: "portrait",
  },
  {
    id: "g5",
    src: "/gallery/03_boat_ocean.jpg",
    alt: "Longtail boat getaway in emerald ocean",
    rotation: -4,
    tapeColor: "maroon",
    aspectRatio: "portrait",
  },
  {
    id: "g7",
    src: "/gallery/01_laptops_home.jpg",
    alt: "Late night coding back to back at home",
    rotation: -3,
    tapeColor: "amber",
    aspectRatio: "portrait",
  },
  {
    id: "g9",
    src: "/gallery/02_skyline_lawn.jpg",
    alt: "City skyline lawn stroll",
    rotation: -2,
    tapeColor: "cream",
    aspectRatio: "portrait",
  },
  {
    id: "g10",
    src: "/gallery/10_festive_stars.jpg",
    alt: "Laughing together beneath festive hanging stars",
    rotation: 3,
    tapeColor: "amber",
    aspectRatio: "portrait",
  },
  {
    id: "g11",
    src: "/gallery/11_night_pier.jpg",
    alt: "Nighttime moment together on the pier",
    rotation: -4,
    tapeColor: "maroon",
    aspectRatio: "portrait",
  },
  {
    id: "g12",
    src: "/gallery/12_dinner_date.jpg",
    alt: "Laughing together over dinner",
    rotation: 2,
    tapeColor: "cream",
    aspectRatio: "portrait",
  },
  {
    id: "g13",
    src: "/gallery/13_coastal_selfies.jpg",
    alt: "Coastal holiday selfies together",
    rotation: -3,
    tapeColor: "amber",
    aspectRatio: "portrait",
  },
  {
    id: "g15",
    src: "/gallery/15_festive_portrait.jpg",
    alt: "Festive portrait framed by dried florals",
    rotation: -2,
    tapeColor: "cream",
    aspectRatio: "portrait",
  },
  {
    id: "g19",
    src: "/gallery/19_lantern_boat.jpg",
    alt: "Lantern boat ride at night",
    rotation: -3,
    tapeColor: "amber",
    aspectRatio: "portrait",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-20 px-4 sm:px-8 bg-[#FAF6EF] border-b-2 border-[#181413] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono-body text-xs font-bold tracking-widest uppercase text-[#FAF6EF] bg-[#7A1C28] border-2 border-[#181413] px-3 py-1.5 shadow-[3px_3px_0px_#181413] mb-4">
            <Camera className="w-4 h-4 text-[#E07A28]" />
            <span>MOMENTS &amp; MEMORIES</span>
          </div>

          <h2 className="font-serif-display text-5xl sm:text-7xl font-bold text-[#181413] tracking-tight">
            Photo Gallery
          </h2>

          <p className="font-mono-body text-xs sm:text-sm text-[#181413]/70 mt-2">
            Click any photo to view in full frame.
          </p>

          <div className="flex justify-center mt-2 text-[#7A1C28]">
            <SquiggleUnderline className="w-44 h-6" />
          </div>
        </div>

        {/* Gallery Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <ScrapbookCard
                src={img.src}
                alt={img.alt}
                rotation={img.rotation}
                tapeColor={img.tapeColor}
                aspectRatio={img.aspectRatio}
                className="w-full max-w-sm"
                onClick={() => setSelectedImage(img)}
                cursorLabel="EXPAND"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Component */}
      {selectedImage && (
        <Lightbox
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </section>
  );
}
