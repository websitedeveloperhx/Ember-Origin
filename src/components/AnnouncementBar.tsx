import React from 'react';
import { MapPin, Clock, Phone, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#1C1410] text-[#D8C7BC] text-xs py-2 px-4 border-b border-[#2C211B] tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left: Location & Hours */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-[11px] sm:text-xs">
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#C35B34]" />
            <span>412 Foundry Lane, Craft District</span>
          </span>
          <span className="hidden md:inline text-[#4A3930]">|</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C35B34]" />
            <span>Open Daily: 7:00 AM – 7:00 PM</span>
          </span>
        </div>

        {/* Right: Phone & Notice */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="hidden lg:flex items-center gap-1.5 text-[#A89487]">
            <Phone className="w-3 h-3 text-[#C35B34]" />
            <span>(555) 782-9104</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-widest bg-[#2E2019] text-[#E29547] border border-[#443127]">
            Portfolio Concept
          </span>
        </div>
      </div>
    </div>
  );
};
