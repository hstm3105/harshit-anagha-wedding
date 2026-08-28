import type { Metadata } from "next";
import { Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import WeddingLogo from "@/components/WeddingLogo";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif-display",
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono-body",
});

export const metadata: Metadata = {
  title: "Harshit & Anagha — Jaipur Wedding | 21–22 November 2026",
  description:
    "Harshit & Anagha are getting married at Raj Bagh Palace, Jaipur, Rajasthan on 21–22 November 2026. View itinerary, RSVP, venue details & our story.",
  openGraph: {
    title: "Harshit & Anagha — Jaipur Wedding 2026",
    description: "21–22 November 2026 • Raj Bagh Palace, Jaipur, Rajasthan",
    type: "website",
    locale: "en_US",
    siteName: "Harshit & Anagha Wedding",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${spaceMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#FAF6EF] text-[#181413] selection:bg-[#7A1C28] selection:text-[#FAF6EF] has-custom-cursor relative"
        suppressHydrationWarning
      >
        {/* Global Grain Noise Overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Subtle Background Watermark Wedding Logo */}
        <div
          className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-[0.065]"
          aria-hidden="true"
        >
          <div className="transform scale-[4.5] sm:scale-[5.5] rotate-[-10deg]">
            <WeddingLogo className="w-[500px] h-[500px]" interactive={false} />
          </div>
        </div>

        {/* Custom Mouse Cursor */}
        <CustomCursor />

        {/* Page Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
