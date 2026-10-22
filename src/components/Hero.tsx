import React, { useState } from 'react';
import { CoffeeScene3D } from './CoffeeScene3D';
import { ArrowRight, Compass, Sparkles, BookOpen } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const [isStaticView, setIsStaticView] = useState(false);

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E29547]/10 rounded-full blur-3xl pointer-events-none -z-10 transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C35B34]/10 rounded-full blur-3xl pointer-events-none -z-10 transform -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Script Kicker */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-editorial italic text-lg md:text-xl text-[#C35B34]">
                Good Coffee, Good Vibes
              </span>
              <span className="w-8 h-px bg-[#C35B34]/50" />
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#211612] font-bold tracking-tight leading-[1.08] mb-6 text-balance">
              Start Your Day <br />
              <span className="italic font-normal text-[#C35B34]">the Right Way.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5A453A] leading-relaxed max-w-xl mb-8 font-normal">
              We serve freshly fire-roasted single origins, thoughtful slow brews, and comforting
              artisan sweets—bringing warmth, rhythm, and honest craft to every morning.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#211612] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C35B34] transition-all duration-300 shadow-md active:scale-95 whitespace-nowrap"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#D8C7AC] text-[#211612] text-xs font-semibold uppercase tracking-wider hover:bg-[#F5EFE6] hover:border-[#C35B34] transition-all duration-300 shadow-xs active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#C35B34]" />
                <span>Book a Table</span>
              </button>
            </div>

            {/* Quick Micro-Trust Indicator */}
            <div className="mt-10 pt-6 border-t border-[#E8DEC8] flex items-center gap-6 text-xs text-[#7A6354]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#58644A]" />
                <span>Small Batch Drum Roasted</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C35B34]" />
                <span>Single-Origin Specialty Terroir</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Ceramic Coffee Scene & Fallback (5 cols) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <CoffeeScene3D
              isStaticView={isStaticView}
              onStaticFallbackToggle={(val) => setIsStaticView(val)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
