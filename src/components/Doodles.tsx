import React from "react";

export function HeartDoodle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M50 88 C20 70, 5 45, 15 25 C25 5, 45 15, 50 30 C55 15, 75 5, 85 25 C95 45, 80 70, 50 88 Z" />
    </svg>
  );
}

export function StarDoodle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M50 5 L61 35 L95 38 L69 60 L77 94 L50 76 L23 94 L31 60 L5 38 L39 35 Z" />
    </svg>
  );
}

export function SparkleDoodle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
    >
      <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" />
    </svg>
  );
}

export function SquiggleUnderline({ className = "w-32 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      className={className}
    >
      <path d="M5 12 Q 25 3, 45 12 T 85 12 T 125 12 T 165 12 T 195 12" />
    </svg>
  );
}

export function ArrowDoodle({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 85 Q 40 20, 80 30" />
      <path d="M60 20 L85 30 L75 55" />
    </svg>
  );
}

export function RajasthaniArchDoodle({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
    >
      <path d="M10 90 L10 50 Q 10 25, 30 15 Q 50 5, 50 15 Q 50 5, 70 15 Q 90 25, 90 50 L90 90" />
      <circle cx="50" cy="30" r="4" fill="currentColor" />
    </svg>
  );
}

export function WashiTape({
  className = "w-28 h-6",
  color = "amber",
}: {
  className?: string;
  color?: "amber" | "maroon" | "cream";
}) {
  const bgClass =
    color === "maroon"
      ? "washi-tape-maroon"
      : color === "cream"
      ? "bg-[#FAF6EF]/70 border border-[#181413]/20"
      : "washi-tape";

  return <div className={`${bgClass} rounded-sm ${className}`} />;
}
