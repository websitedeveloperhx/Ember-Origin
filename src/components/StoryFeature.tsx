import React, { useState } from 'react';
import { ASSETS } from '../utils/coffeeData';
import { Compass, Sparkles, MapPin, ArrowRight, X } from 'lucide-react';

export const StoryFeature: React.FC = () => {
  const [storyModalOpen, setStoryModalOpen] = useState(false);

  return (
    <section id="story" className="py-16 md:py-24 bg-[#F5EFE6]/60 border-y border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Why People Return & Craft Imagery (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-10 border border-[#E4D8C4] shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C35B34]">
                  Our Philosophy
                </span>
                <span className="w-6 h-px bg-[#C35B34]" />
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#211612] tracking-tight leading-tight mb-4">
                Why People Come Back.
              </h2>

              <p className="text-sm sm:text-base text-[#665042] leading-relaxed mb-6">
                Fresh single-origin beans, fire-drum roasting, and an atmosphere designed to let you
                breathe. We roast in small batches over natural embers, developing sweet caramelized
                cacao notes without masking the soil, rainfall, and heritage of each harvest.
              </p>

              <button
                onClick={() => setStoryModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#211612] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C35B34] transition-colors shadow-sm cursor-pointer mb-8"
              >
                <span>Our Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Atmospheric Roastery Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-16/9 border border-[#E8DEC8] shadow-inner group">
              <img
                src={ASSETS.storyRoaster}
                alt="Master roaster tending the copper drum roaster at Ember & Origin"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs text-white/90 font-medium">
                  Wood-Fired Drum Roaster in Operation • Small-Batch Precision
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Warm Terracotta Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#C35B34] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
            {/* Background decorative curve */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-medium mb-8">
                <Sparkles className="w-3.5 h-3.5 text-[#FFDCB5]" />
                <span>Concept Tasting Room</span>
              </div>

              <p className="text-xs uppercase tracking-widest text-[#FFDCB5] font-semibold mb-2">
                Open Daily
              </p>

              <div className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                7 AM – 7 PM
              </div>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8">
                Great coffee, unhurried mornings, and brighter days. We roast in the early light and
                welcome you all day long.
              </p>

              <div className="space-y-3 border-t border-white/20 pt-6 text-xs text-white/85">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FFDCB5] shrink-0" />
                  <span>412 Foundry Lane, Historic Industrial District</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#FFDCB5] shrink-0" />
                  <span>Daily Public Cupping Sessions at 10 AM & 3 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6">
              <a
                href="#visit"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-[#C35B34] font-semibold text-xs uppercase tracking-wider hover:bg-[#FFDCB5] transition-colors shadow-md text-center"
              >
                <span>Get Directions & Details</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Story Modal */}
      {storyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FBF8F3] rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-[#E4D8C4] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setStoryModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#ECE3D4] text-[#211612] transition-colors"
              aria-label="Close story"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-widest font-semibold text-[#C35B34]">
              Artisanal Heritage
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#211612] mt-1 mb-4">
              Where Fire Meets Coffee
            </h3>

            <div className="prose text-sm text-[#5A453A] space-y-4 leading-relaxed">
              <p>
                EMBER & ORIGIN was founded on a simple observation: modern industrial coffee roasting
                often prioritizes sterile computer profiles over the living poetry of the flame.
              </p>
              <p>
                We revived the practice of wood-assisted drum roasting. Using sustainably gathered
                orchard wood and hardwood charcoal, our master roasters listen to the first crack of
                the beans and watch the gentle smoke caramelize natural fruit sugars into rich notes
                of cocoa butter, hazelnut praline, and warm cedar.
              </p>
              <p>
                Every green bean is sourced directly from generational farm partners in volcanic
                terroirs—from the cloud forests of Colombia to high-altitude Ethiopian plateaus.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8DEC8] flex justify-end">
              <button
                onClick={() => setStoryModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#211612] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C35B34] transition-colors"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
