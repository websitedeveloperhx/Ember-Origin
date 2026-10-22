import React from 'react';
import { Coffee, CakeSlice, Sparkles, Wifi } from 'lucide-react';

export const BenefitStrip: React.FC = () => {
  const items = [
    {
      icon: Coffee,
      title: 'Freshly Brewed Coffee',
      desc: 'Made with premium fire-roasted micro-lots & precision grind'
    },
    {
      icon: CakeSlice,
      title: 'Food & Dessert Pairings',
      desc: 'Freshly baked daily tiramisu, churros & sweet pastries'
    },
    {
      icon: Sparkles,
      title: 'Cozy Ambient Space',
      desc: 'Tactile natural timber, quiet tables & warm ceramic textures'
    },
    {
      icon: Wifi,
      title: 'High-Speed WiFi Access',
      desc: 'Stay connected comfortably while you sip, work & reflect'
    }
  ];

  return (
    <section className="relative z-10 -mt-4 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-[#E8DEC8] shadow-lg">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#FBF8F3] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4EFE7] border border-[#E4D8C4] flex items-center justify-center shrink-0 text-[#C35B34]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#211612] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7A6354] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
