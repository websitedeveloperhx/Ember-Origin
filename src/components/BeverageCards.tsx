import React from 'react';
import { SIGNATURE_BEVERAGES } from '../utils/coffeeData';
import { Beverage } from '../types/coffee';
import { Sparkles, Info, Plus } from 'lucide-react';

interface BeverageCardsProps {
  onSelectBeverage: (beverage: Beverage) => void;
}

export const BeverageCards: React.FC<BeverageCardsProps> = ({ onSelectBeverage }) => {
  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C35B34]">
                Signature Brews
              </span>
              <span className="w-6 h-px bg-[#C35B34]" />
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211612] tracking-tight">
              Make Your Morning Better.
            </h2>
            <p className="text-sm sm:text-base text-[#6E584B] mt-2">
              Great coffee crafted for brighter days and mindful rituals.
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <span className="font-editorial italic text-xl text-[#C35B34] block">
              Better Coffee, Happier People
            </span>
            <span className="text-xs text-[#8A7568]">Artisanal espresso & slow-steeped micro-lots</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_BEVERAGES.map((drink) => (
            <div
              key={drink.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8DEC8] hover:border-[#C35B34]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#ECE3D4]">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold text-[#211612] shadow-xs">
                      {drink.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-[11px] font-medium text-[#C35B34] uppercase tracking-wider mb-1">
                    {drink.subtitle}
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#211612] mb-1.5 group-hover:text-[#C35B34] transition-colors">
                    {drink.name}
                  </h3>
                  <p className="text-xs text-[#7A6354] leading-relaxed mb-4 line-clamp-2">
                    {drink.tagline}
                  </p>

                  {/* Clean unboxed metadata with separators (anti-slop rule) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#8C7667] pt-2 border-t border-[#F0E6D5]">
                    {drink.flavorNotes.map((note, idx) => (
                      <React.Fragment key={note}>
                        <span>{note}</span>
                        {idx < drink.flavorNotes.length - 1 && (
                          <span className="text-[#C35B34] opacity-70">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={() => onSelectBeverage(drink)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#F5EFE6] hover:bg-[#211612] text-[#211612] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Inspect Profile</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
