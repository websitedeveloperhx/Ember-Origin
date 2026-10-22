import React, { useState } from 'react';
import { FULL_COLLECTION } from '../utils/coffeeData';
import { Beverage } from '../types/coffee';
import { Sparkles, Info, Eye } from 'lucide-react';

interface CollectionGridProps {
  onSelectBeverage: (item: Beverage) => void;
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({ onSelectBeverage }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'espresso' | 'filter' | 'dessert'>('all');

  const filteredItems = FULL_COLLECTION.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'dessert') return item.category === 'dessert';
    if (activeTab === 'espresso') return item.category === 'espresso';
    if (activeTab === 'filter') return item.category === 'filter' || item.category === 'cold-brew';
    return true;
  });

  return (
    <section id="collection" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter Bar */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C35B34]">
              Artisanal Roster
            </span>
            <span className="w-6 h-px bg-[#C35B34]" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211612] tracking-tight">
            Specialty Roasts & Desserts.
          </h2>
          <p className="text-sm sm:text-base text-[#6E584B] mt-3">
            Fire-roasted micro-lots paired with house-baked pastry pairings.
          </p>

          {/* Interactive Filter Tabs (Functional segmented buttons per frontend-design skill) */}
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#F0E7D8] rounded-full mt-8 shadow-inner">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#211612] text-white shadow-sm'
                  : 'text-[#614D41] hover:text-[#211612]'
              }`}
            >
              All Offerings ({FULL_COLLECTION.length})
            </button>
            <button
              onClick={() => setActiveTab('espresso')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'espresso'
                  ? 'bg-[#211612] text-white shadow-sm'
                  : 'text-[#614D41] hover:text-[#211612]'
              }`}
            >
              Espresso Roasts
            </button>
            <button
              onClick={() => setActiveTab('filter')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'filter'
                  ? 'bg-[#211612] text-white shadow-sm'
                  : 'text-[#614D41] hover:text-[#211612]'
              }`}
            >
              Filter & Cold Brew
            </button>
            <button
              onClick={() => setActiveTab('dessert')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'dessert'
                  ? 'bg-[#211612] text-white shadow-sm'
                  : 'text-[#614D41] hover:text-[#211612]'
              }`}
            >
              Artisan Desserts
            </button>
          </div>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8DEC8] hover:border-[#C35B34] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-[#ECE3D4]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold text-[#211612] shadow-xs">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-wider text-[#C35B34] font-medium mb-1">
                    {item.origin}
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#211612] mb-1 group-hover:text-[#C35B34] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#7A6354] leading-relaxed mb-4 line-clamp-2">
                    {item.tagline}
                  </p>

                  {/* Clean unboxed metadata (Zero-pill discipline) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#8C7667] pt-2 border-t border-[#F0E6D5]">
                    {item.flavorNotes.map((note, idx) => (
                      <React.Fragment key={note}>
                        <span>{note}</span>
                        {idx < item.flavorNotes.length - 1 && (
                          <span className="text-[#C35B34]">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={() => onSelectBeverage(item)}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-[#F5EFE6] hover:bg-[#C35B34] text-[#211612] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
