interface MarqueeProps {
  text?: string;
  className?: string;
  bgVariant?: "maroon" | "amber" | "ink";
}

export default function Marquee({
  text = "21–22 NOVEMBER 2026 • JAIPUR, RAJASTHAN • HARSHIT & ANAGHA ARE GETTING MARRIED • RAJ BAGH PALACE • ",
  className = "",
  bgVariant = "maroon",
}: MarqueeProps) {
  const bgStyles = {
    maroon: "bg-[#7A1C28] text-[#FAF6EF] border-y-2 border-[#181413]",
    amber: "bg-[#E07A28] text-[#181413] border-y-2 border-[#181413]",
    ink: "bg-[#181413] text-[#FAF6EF] border-y-2 border-[#E07A28]",
  };

  // Duplicate text to create seamless infinite scroll
  const repeatedText = Array(4).fill(text).join("");

  return (
    <div
      className={`relative w-full overflow-hidden py-3 font-mono-body text-sm sm:text-base font-bold tracking-widest uppercase select-none ${bgStyles[bgVariant]} ${className}`}
      data-cursor="LOVE"
    >
      <div className="animate-marquee whitespace-nowrap flex items-center gap-4">
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
      </div>
    </div>
  );
}
