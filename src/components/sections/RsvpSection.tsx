"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, Heart, Sparkles } from "lucide-react";
import { SquiggleUnderline, WashiTape } from "../Doodles";

const rsvpSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  attending: z.enum(["yes", "no"], {
    message: "Please select if you are attending",
  }),
  events: z.array(z.string()).optional(),
  guestCount: z.string().min(1, "Please select number of guests"),
  message: z.string().optional(),
});

type RsvpFormData = z.infer<typeof rsvpSchema>;

const availableEvents = [
  { id: "tilak", label: "Tilak Ceremony (Nov 21, 12:00 PM)" },
  { id: "sangeet", label: "Sangeet & Engagement Night (Nov 21, 07:00 PM)" },
  { id: "haldi", label: "Haldi & Phoolon Ki Holi (Nov 22, 10:00 AM)" },
  { id: "baaraat", label: "The Baaraat Procession (Nov 22, 06:00 PM)" },
  { id: "reception", label: "Wedding Reception (Nov 22, 07:00 PM)" },
  { id: "pheras", label: "Vedic Pheras (Nov 22, 11:30 PM)" },
];

export default function RsvpSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RsvpFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      fullName: "",
      attending: "yes",
      events: ["tilak", "sangeet", "haldi", "baaraat", "reception", "pheras"],
      guestCount: "1",
      message: "",
    },
  });

  const isAttending = watch("attending");

  const onSubmit = async (data: RsvpFormData) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Confetti burst
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#7A1C28", "#E07A28", "#D4881A", "#181413"],
        });
      } else {
        const result = await response.json();
        setErrorMessage(
          result.error || "Failed to submit RSVP. Please try again."
        );
      }
    } catch {
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="relative py-20 px-4 sm:px-8 bg-[#FAF6EF] border-b-2 border-[#181413] overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 font-mono-body text-xs font-bold tracking-widest uppercase text-[#FAF6EF] bg-[#7A1C28] border-2 border-[#181413] px-3 py-1.5 shadow-[3px_3px_0px_#181413] mb-4">
            <Heart className="w-4 h-4 fill-current text-[#E07A28]" />
            <span>JOIN OUR CELEBRATION</span>
          </div>

          <h2 className="font-serif-display text-5xl sm:text-7xl font-bold text-[#181413] tracking-tight">
            RSVP
          </h2>

          <p className="font-mono-body text-xs sm:text-sm text-[#181413]/80 mt-2">
            Kindly respond by October 15, 2026 to help us prepare for your arrival.
          </p>

          <div className="flex justify-center mt-2 text-[#7A1C28]">
            <SquiggleUnderline className="w-36 h-6" />
          </div>
        </div>

        {/* Form Container */}
        <div className="relative bg-[#FFFDF9] border-2 border-[#181413] p-6 sm:p-10 shadow-[10px_10px_0px_#181413] rounded-sm">
          <div className="absolute -top-4 left-10 z-20">
            <WashiTape color="amber" className="w-32 h-6" />
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="inline-flex p-4 bg-[#7A1C28] text-[#FAF6EF] border-2 border-[#181413] rounded-full shadow-[4px_4px_0px_#181413]">
                  <CheckCircle2 className="w-12 h-12 text-[#E07A28]" />
                </div>

                <h3 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#181413]">
                  Thank You!
                </h3>

                <p className="font-mono-body text-sm sm:text-base text-[#181413]/90 max-w-lg mx-auto leading-relaxed bg-[#FAF6EF] p-6 border-2 border-[#181413] shadow-[4px_4px_0px_#7A1C28]">
                  Your RSVP response has been successfully sent to Harshit &amp;
                  Anagha. We can’t wait to celebrate with you in Jaipur!
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="font-mono-body text-xs font-bold text-[#7A1C28] uppercase tracking-wider underline hover:text-[#181413]"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 bg-red-100 border-2 border-red-700 text-red-900 font-mono-body text-xs font-bold rounded-xs">
                    {errorMessage}
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block font-mono-body text-xs font-bold uppercase tracking-wider text-[#181413] mb-2">
                    Full Name <span className="text-[#7A1C28]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul & Sunita Sharma"
                    {...register("fullName")}
                    className="w-full bg-[#FAF6EF] border-2 border-[#181413] px-4 py-3 font-mono-body text-sm text-[#181413] focus:outline-hidden focus:ring-2 focus:ring-[#7A1C28] shadow-[3px_3px_0px_#181413] rounded-xs"
                  />
                  {errors.fullName && (
                    <p className="mt-1 font-mono-body text-xs text-[#7A1C28] font-bold">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Attending Radio */}
                <div>
                  <label className="block font-mono-body text-xs font-bold uppercase tracking-wider text-[#181413] mb-2">
                    Will you be attending? <span className="text-[#7A1C28]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-3 bg-[#FAF6EF] border-2 border-[#181413] p-3 shadow-[3px_3px_0px_#181413] cursor-pointer hover:bg-[#F0E6D8]">
                      <input
                        type="radio"
                        value="yes"
                        {...register("attending")}
                        className="w-4 h-4 accent-[#7A1C28]"
                      />
                      <span className="font-mono-body text-xs font-bold uppercase text-[#181413]">
                        Joyfully Accept
                      </span>
                    </label>

                    <label className="flex items-center gap-3 bg-[#FAF6EF] border-2 border-[#181413] p-3 shadow-[3px_3px_0px_#181413] cursor-pointer hover:bg-[#F0E6D8]">
                      <input
                        type="radio"
                        value="no"
                        {...register("attending")}
                        className="w-4 h-4 accent-[#7A1C28]"
                      />
                      <span className="font-mono-body text-xs font-bold uppercase text-[#181413]">
                        Regretfully Decline
                      </span>
                    </label>
                  </div>
                </div>

                {/* Conditional Fields if Attending = yes */}
                {isAttending === "yes" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6 border-t-2 border-dashed border-[#181413]/20 pt-6"
                  >
                    {/* Events Checkboxes */}
                    <div>
                      <label className="block font-mono-body text-xs font-bold uppercase tracking-wider text-[#181413] mb-3">
                        Which events will you join us for?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {availableEvents.map((evt) => (
                          <label
                            key={evt.id}
                            className="flex items-center gap-3 bg-[#FAF6EF] border border-[#181413]/40 p-3 rounded-xs cursor-pointer hover:border-[#181413]"
                          >
                            <input
                              type="checkbox"
                              value={evt.id}
                              {...register("events")}
                              className="w-4 h-4 accent-[#7A1C28]"
                            />
                            <span className="font-mono-body text-xs font-bold text-[#181413]">
                              {evt.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Guest Count */}
                    <div>
                      <label className="block font-mono-body text-xs font-bold uppercase tracking-wider text-[#181413] mb-2">
                        Number of Guests
                      </label>
                      <select
                        {...register("guestCount")}
                        className="w-full bg-[#FAF6EF] border-2 border-[#181413] px-4 py-3 font-mono-body text-sm text-[#181413] shadow-[3px_3px_0px_#181413] rounded-xs focus:outline-hidden"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4+">4+ Persons (Family)</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Free Text Message */}
                <div>
                  <label className="block font-mono-body text-xs font-bold uppercase tracking-wider text-[#181413] mb-2">
                    Message or Note for the Couple (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Send a warm wish or note for Harshit & Anagha..."
                    {...register("message")}
                    className="w-full bg-[#FAF6EF] border-2 border-[#181413] p-4 font-mono-body text-sm text-[#181413] shadow-[3px_3px_0px_#181413] rounded-xs focus:outline-hidden"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#7A1C28] text-[#FAF6EF] font-mono-body text-sm sm:text-base font-bold tracking-widest uppercase py-4 rounded-sm border-2 border-[#181413] shadow-[5px_5px_0px_#181413] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#181413] transition-all disabled:opacity-50 cursor-pointer"
                  data-cursor="SUBMIT"
                >
                  {isSubmitting ? (
                    <span>Submitting Response...</span>
                  ) : (
                    <>
                      <span>CONFIRM &amp; SEND RSVP</span>
                      <Send className="w-4 h-4" />
                      <Sparkles className="w-4 h-4 text-[#E07A28]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
