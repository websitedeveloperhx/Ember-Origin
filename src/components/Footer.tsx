import React from 'react';
import { Flame, ArrowUp, MapPin, Clock, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="visit" className="bg-[#160E0A] text-[#D8C7BC] pt-16 pb-12 border-t border-[#2C1D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C1D16]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#C35B34] text-white flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                EMBER & ORIGIN
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#E29547] font-semibold">
              Where Fire Meets Coffee
            </p>
            <p className="text-xs text-[#9E8B7F] leading-relaxed max-w-sm">
              Artisanal small-batch coffee roasted over wood embers. We honor the elemental bond
              between flame, terroir, and ceramic craft to deliver unhurried morning rituals.
            </p>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#A89487]">
              <li><a href="#story" className="hover:text-[#E29547] transition-colors">Our Story & Flame</a></li>
              <li><a href="#menu" className="hover:text-[#E29547] transition-colors">Signature Brews</a></li>
              <li><a href="#ritual" className="hover:text-[#E29547] transition-colors">Slow Brew Ritual</a></li>
              <li><a href="#collection" className="hover:text-[#E29547] transition-colors">Coffee & Desserts</a></li>
              <li><a href="#community" className="hover:text-[#E29547] transition-colors">Community Notes</a></li>
            </ul>
          </div>

          {/* Tasting Room & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Tasting Room
            </h4>
            <div className="space-y-2.5 text-xs text-[#A89487]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C35B34] shrink-0 mt-0.5" />
                <span>412 Foundry Lane, Historic Industrial Quarter</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C35B34] shrink-0 mt-0.5" />
                <span>Monday – Sunday: 7:00 AM – 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C35B34] shrink-0" />
                <span>(555) 782-9104</span>
              </div>
            </div>
          </div>

          {/* Concept Flight Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Daily Cuppings
            </h4>
            <p className="text-xs text-[#A89487] leading-relaxed">
              Public cupping sessions run daily at 10:00 AM & 3:00 PM. Experience 3 single-origin
              micro-lots side by side with our lead roaster.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full bg-[#241A14] border border-[#3C291F] text-[11px] text-[#E29547]">
                Walk-ins welcome & bookings honored
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Portfolio Disclosure & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#806E62]">
          <p className="max-w-xl text-center sm:text-left">
            EMBER & ORIGIN is a fictional portfolio concept created for design and development demonstration.
            It is not affiliated with Brewista, Roastery Coffee House, or any existing café brand.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#241A14] text-[#A89487] hover:text-white hover:bg-[#34241B] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
