import React from "react";

// Tilak: Traditional Auspicious Thali & Vermilion
export function TilakIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="300" rx="8" fill="#FFFDF9" />
      {/* Background Mandala */}
      <circle cx="200" cy="150" r="110" fill="#FAF6EF" stroke="#E07A28" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="200" cy="150" r="85" stroke="#7A1C28" strokeWidth="1.5" />
      
      {/* Golden Thali Plate */}
      <circle cx="200" cy="150" r="70" fill="#F4C430" stroke="#181413" strokeWidth="3" />
      <circle cx="200" cy="150" r="62" fill="#E6B800" />

      {/* Tilak Kalash Bowl */}
      <circle cx="170" cy="140" r="20" fill="#7A1C28" stroke="#181413" strokeWidth="2" />
      <circle cx="170" cy="140" r="14" fill="#C82333" />
      <circle cx="170" cy="140" r="6" fill="#F4C430" />

      {/* Akshata Rice Bowl */}
      <circle cx="230" cy="140" r="20" fill="#FAF6EF" stroke="#181413" strokeWidth="2" />
      <circle cx="230" cy="138" r="3" fill="#E07A28" />
      <circle cx="225" cy="144" r="3" fill="#E07A28" />
      <circle cx="234" cy="145" r="3" fill="#E07A28" />

      {/* Coconut / Nariyal */}
      <circle cx="200" cy="180" r="18" fill="#8B4513" stroke="#181413" strokeWidth="2" />
      <path d="M190 170 Q200 160 210 170" stroke="#228B22" strokeWidth="4" strokeLinecap="round" />

      {/* Floating Marigold Petals */}
      <path d="M110 90 Q120 70 130 90 Q110 100 110 90 Z" fill="#E07A28" />
      <path d="M280 80 Q290 60 300 80 Q280 90 280 80 Z" fill="#E07A28" />
      <path d="M100 210 Q110 190 120 210 Q100 220 100 210 Z" fill="#7A1C28" />
      <path d="M290 200 Q300 180 310 200 Q290 210 290 200 Z" fill="#F4C430" />

      {/* Decorative Text */}
      <text x="200" y="270" textAnchor="middle" fontFamily="var(--font-serif-display), serif" fontSize="22" fontWeight="bold" fill="#7A1C28">
        Tilak &amp; Blessings
      </text>
    </svg>
  );
}

// Sangeet & Engagement: Ring Exchange & Musical Dhol
export function SangeetIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="300" rx="8" fill="#FAF6EF" />
      
      {/* Festoon Lights / Garland */}
      <path d="M 20 40 Q 100 80 200 40 Q 300 80 380 40" stroke="#181413" strokeWidth="2" />
      <circle cx="60" cy="55" r="7" fill="#E07A28" />
      <circle cx="120" cy="65" r="7" fill="#7A1C28" />
      <circle cx="180" cy="58" r="7" fill="#F4C430" />
      <circle cx="240" cy="60" r="7" fill="#E07A28" />
      <circle cx="300" cy="66" r="7" fill="#7A1C28" />
      <circle cx="350" cy="50" r="7" fill="#F4C430" />

      {/* Engagement Ring Velvet Box */}
      <rect x="140" y="110" width="120" height="90" rx="10" fill="#7A1C28" stroke="#181413" strokeWidth="3" />
      <path d="M140 150 H260" stroke="#F4C430" strokeWidth="3" />
      
      {/* Sparkling Diamond Ring */}
      <circle cx="200" cy="130" r="22" stroke="#F4C430" strokeWidth="4" />
      <polygon points="200,98 212,112 188,112" fill="#FAF6EF" stroke="#181413" strokeWidth="2" />

      {/* Dhol Drum */}
      <ellipse cx="80" cy="200" rx="30" ry="40" fill="#8B4513" stroke="#181413" strokeWidth="3" />
      <path d="M80 160 L140 175 V225 L80 240 Z" fill="#D2691E" stroke="#181413" strokeWidth="2" />

      {/* Musical Notes */}
      <path d="M310 140 v-30 h20 v30" stroke="#7A1C28" strokeWidth="3" fill="none" />
      <circle cx="305" cy="140" r="8" fill="#7A1C28" />
      <circle cx="325" cy="140" r="8" fill="#7A1C28" />

      <text x="200" y="270" textAnchor="middle" fontFamily="var(--font-serif-display), serif" fontSize="22" fontWeight="bold" fill="#7A1C28">
        Sangeet &amp; Ring Exchange
      </text>
    </svg>
  );
}

// Haldi: Marigold Flower Shower & Turmeric Bowl
export function HaldiIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="300" rx="8" fill="#FFFDF9" />
      
      {/* Sunshine Rays */}
      <circle cx="200" cy="140" r="110" fill="#FFF8DC" opacity="0.6" />

      {/* Brass Haldi Urli Bowl */}
      <path d="M120 160 C120 220 280 220 280 160 Z" fill="#E6B800" stroke="#181413" strokeWidth="3" />
      <ellipse cx="200" cy="160" rx="80" ry="20" fill="#F4C430" stroke="#181413" strokeWidth="2" />
      <ellipse cx="200" cy="160" rx="70" ry="14" fill="#FFD700" />

      {/* Marigold Flower Garland Burst */}
      <g fill="#E07A28">
        <circle cx="100" cy="100" r="14" />
        <circle cx="130" cy="70" r="16" fill="#F4C430" />
        <circle cx="200" cy="60" r="18" fill="#E07A28" />
        <circle cx="270" cy="70" r="16" fill="#F4C430" />
        <circle cx="300" cy="100" r="14" fill="#E07A28" />
      </g>

      {/* Splash Petals */}
      <circle cx="150" cy="120" r="6" fill="#E07A28" />
      <circle cx="250" cy="115" r="6" fill="#7A1C28" />
      <circle cx="180" cy="100" r="5" fill="#F4C430" />

      <text x="200" y="270" textAnchor="middle" fontFamily="var(--font-serif-display), serif" fontSize="22" fontWeight="bold" fill="#E07A28">
        Haldi &amp; Phoolon Ki Holi
      </text>
    </svg>
  );
}

// Baaraat: Festive Horse / Elephant & Dhol
export function BaaraatIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="300" rx="8" fill="#FAF6EF" />

      {/* Palace Gate Outline */}
      <path d="M80 230 V100 Q80 50 200 50 Q320 50 320 100 V230" stroke="#7A1C28" strokeWidth="3" strokeDasharray="6 4" />

      {/* Royal Baaraat Umbrella / Chhatri */}
      <path d="M130 110 Q200 50 270 110 Z" fill="#7A1C28" stroke="#181413" strokeWidth="3" />
      <path d="M200 110 V190" stroke="#F4C430" strokeWidth="4" />

      {/* Festive Dhol Drum & Sticks */}
      <rect x="140" y="160" width="120" height="65" rx="15" fill="#8B4513" stroke="#181413" strokeWidth="3" />
      <ellipse cx="140" cy="192.5" rx="12" ry="32.5" fill="#D2691E" stroke="#181413" strokeWidth="2" />
      <ellipse cx="260" cy="192.5" rx="12" ry="32.5" fill="#D2691E" stroke="#181413" strokeWidth="2" />

      {/* Celebration Sparkles */}
      <path d="M70 120 L80 140 L60 140 Z" fill="#E07A28" />
      <path d="M330 120 L340 140 L320 140 Z" fill="#E07A28" />

      <text x="200" y="270" textAnchor="middle" fontFamily="var(--font-serif-display), serif" fontSize="22" fontWeight="bold" fill="#7A1C28">
        The Grand Baaraat
      </text>
    </svg>
  );
}

// Reception: Royal Palace Pavilion & Feast
export function ReceptionIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="300" rx="8" fill="#FFFDF9" />

      {/* Illuminated Palace Pavilion Arch */}
      <path d="M100 230 V120 Q100 60 200 40 Q300 60 300 120 V230" fill="#FAF6EF" stroke="#181413" strokeWidth="3" />

      {/* Chandelier / Lantern */}
      <path d="M200 40 V80" stroke="#F4C430" strokeWidth="3" />
      <polygon points="200,80 220,110 180,110" fill="#7A1C28" stroke="#181413" strokeWidth="2" />
      <circle cx="200" cy="120" r="10" fill="#F4C430" />

      {/* Royal Feast Thali */}
      <ellipse cx="200" cy="190" rx="60" ry="25" fill="#E6B800" stroke="#181413" strokeWidth="3" />
      <circle cx="170" cy="190" r="8" fill="#7A1C28" />
      <circle cx="200" cy="185" r="8" fill="#E07A28" />
      <circle cx="230" cy="190" r="8" fill="#228B22" />

      {/* Fireworks Burst */}
      <circle cx="60" cy="70" r="4" fill="#E07A28" />
      <circle cx="340" cy="70" r="4" fill="#E07A28" />

      <text x="200" y="270" textAnchor="middle" fontFamily="var(--font-serif-display), serif" fontSize="22" fontWeight="bold" fill="#181413">
        Royal Reception Feast
      </text>
    </svg>
  );
}

// Vedic Pheras: Sacred Fire Havan Kund & Mandap
export function PherasIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="300" rx="8" fill="#FAF6EF" />

      {/* Mandap Pillars */}
      <rect x="70" y="60" width="16" height="170" fill="#7A1C28" stroke="#181413" strokeWidth="2" />
      <rect x="314" y="60" width="16" height="170" fill="#7A1C28" stroke="#181413" strokeWidth="2" />
      <path d="M50 60 H350" stroke="#E07A28" strokeWidth="6" strokeLinecap="round" />

      {/* Floral Canopy */}
      <circle cx="100" cy="60" r="12" fill="#E07A28" />
      <circle cx="150" cy="60" r="12" fill="#F4C430" />
      <circle cx="200" cy="60" r="14" fill="#7A1C28" />
      <circle cx="250" cy="60" r="12" fill="#F4C430" />
      <circle cx="300" cy="60" r="12" fill="#E07A28" />

      {/* Sacred Havan Kund (Fire Altar) */}
      <polygon points="140,210 260,210 240,170 160,170" fill="#8B4513" stroke="#181413" strokeWidth="3" />

      {/* Sacred Holy Flames */}
      <path d="M180 170 Q200 110 200 130 Q200 110 220 170 Z" fill="#E07A28" stroke="#181413" strokeWidth="2" />
      <path d="M190 170 Q200 125 200 140 Q200 125 210 170 Z" fill="#F4C430" />

      <text x="200" y="270" textAnchor="middle" fontFamily="var(--font-serif-display), serif" fontSize="22" fontWeight="bold" fill="#7A1C28">
        Vedic Pheras &amp; 7 Vows
      </text>
    </svg>
  );
}

// Hero Celebration Art: Raj Bagh Palace & Floral Festivities
export function HeroJoyIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="500" height="400" rx="12" fill="#FFFDF9" stroke="#181413" strokeWidth="3" />
      
      {/* Palace Silhouette Background */}
      <path d="M 50 320 V 200 L 100 160 L 150 200 V 320 H 350 V 200 L 400 160 L 450 200 V 320 Z" fill="#FAF6EF" stroke="#7A1C28" strokeWidth="2" />
      
      {/* Central Palace Dome */}
      <path d="M 180 200 Q 250 120 320 200 Z" fill="#7A1C28" />
      <circle cx="250" cy="115" r="6" fill="#E07A28" />

      {/* Joyful Festive Toran / Garland Header */}
      <path d="M 30 50 Q 150 100 250 50 Q 350 100 470 50" stroke="#181413" strokeWidth="3" />
      <circle cx="100" cy="80" r="14" fill="#E07A28" />
      <circle cx="170" cy="90" r="14" fill="#7A1C28" />
      <circle cx="250" cy="75" r="16" fill="#F4C430" />
      <circle cx="330" cy="90" r="14" fill="#E07A28" />
      <circle cx="400" cy="80" r="14" fill="#7A1C28" />

      {/* Celebratory Dancing Confetti */}
      <circle cx="80" cy="140" r="5" fill="#E07A28" />
      <circle cx="420" cy="140" r="5" fill="#7A1C28" />
      <polygon points="120,240 130,260 110,260" fill="#F4C430" />
      <polygon points="380,240 390,260 370,260" fill="#E07A28" />

      <text x="250" y="365" textAnchor="middle" fontFamily="var(--font-serif-display), serif" fontSize="26" fontWeight="bold" fill="#7A1C28">
        Raj Bagh Palace Celebration
      </text>
    </svg>
  );
}
