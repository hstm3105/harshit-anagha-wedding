"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/Marquee";
import StorySection from "@/components/sections/StorySection";
import ItinerarySection from "@/components/sections/ItinerarySection";
import VenueSection from "@/components/sections/VenueSection";
import RsvpSection from "@/components/sections/RsvpSection";
import TravelStaySection from "@/components/sections/TravelStaySection";
import GallerySection from "@/components/sections/GallerySection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#FAF6EF] overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Band 1 */}
      <Marquee
        text="21–22 NOVEMBER 2026 • JAIPUR, RAJASTHAN • HARSHIT & ANAGHA ARE GETTING MARRIED • RAJ BAGH PALACE • "
        bgVariant="maroon"
      />

      {/* Our Story */}
      <StorySection />

      {/* Marquee Band 2 */}
      <Marquee
        text="TILAK • SANGEET & ENGAGEMENT NIGHT • HALDI • BAARAAT • RECEPTION • VEDIC PHERAS • RAJ BAGH PALACE JAIPUR • "
        bgVariant="amber"
      />

      {/* Itinerary */}
      <ItinerarySection />

      {/* Venue & Location */}
      <VenueSection />

      {/* RSVP Form */}
      <RsvpSection />

      {/* Travel & Attractions */}
      <TravelStaySection />

      {/* Photo Gallery */}
      <GallerySection />

      {/* FAQ */}
      <FaqSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
