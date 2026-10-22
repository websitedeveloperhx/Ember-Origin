import React from 'react';
import { Beverage } from '../types/coffee';
import { X, Flame, MapPin, Mountain, Gauge, Droplets, Clock, Thermometer } from 'lucide-react';

interface ProductDetailModalProps {
  beverage: Beverage | null;
  onClose: () => void;
  onBookTasting: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  beverage,
  onClose,
  onBookTasting
}) => {
  if (!beverage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FBF8F3] rounded-3xl max-w-2xl w-full border border-[#E8DEC8] shadow-2xl relative overflow-hidden max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#211612] shadow-sm transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Top Hero Image */}
          <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-[#ECE3D4] border border-[#E8DEC8]">
            <img
              src={beverage.image}
              alt={beverage.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-[#211612] shadow-sm">
                {beverage.price}
              </span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C35B34] mb-1">
              <span>{beverage.subtitle}</span>
              <span>·</span>
              <span>{beverage.roastLevel}</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#211612]">
              {beverage.name}
            </h3>
            <p className="text-sm text-[#6E584B] mt-2 leading-relaxed">
              {beverage.description}
            </p>
          </div>

          {/* Terroir & Origin Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F4EFE7] border border-[#E4D8C4] text-xs">
            <div>
              <span className="text-[#8C7667] block text-[10px] uppercase font-semibold">Origin</span>
              <span className="font-semibold text-[#211612]">{beverage.origin}</span>
            </div>
            <div>
              <span className="text-[#8C7667] block text-[10px] uppercase font-semibold">Altitude</span>
              <span className="font-semibold text-[#211612]">{beverage.altitude}</span>
            </div>
            <div>
              <span className="text-[#8C7667] block text-[10px] uppercase font-semibold">Processing</span>
              <span className="font-semibold text-[#211612]">{beverage.process}</span>
            </div>
          </div>

          {/* Flavor Notes */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#7A6354] mb-2">
              Sensory Profile
            </h4>
            <div className="flex flex-wrap gap-2">
              {beverage.flavorNotes.map((note) => (
                <span
                  key={note}
                  className="px-3 py-1 rounded-lg bg-white border border-[#DACBB0] text-xs text-[#211612] font-medium"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Brew Specs if applicable */}
          {beverage.brewSpecs && (
            <div className="p-4 rounded-2xl bg-[#211612] text-white space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#E29547] font-semibold">
                Barista Extraction Recipe
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs pt-1">
                <div>
                  <span className="text-[#A89487] block text-[10px]">Ratio</span>
                  <span className="font-mono font-bold text-white">{beverage.brewSpecs.ratio}</span>
                </div>
                <div>
                  <span className="text-[#A89487] block text-[10px]">Water Temp</span>
                  <span className="font-mono font-bold text-white">{beverage.brewSpecs.temp}</span>
                </div>
                <div>
                  <span className="text-[#A89487] block text-[10px]">Time</span>
                  <span className="font-mono font-bold text-white">{beverage.brewSpecs.time}</span>
                </div>
              </div>
            </div>
          )}

          {/* Modal Actions */}
          <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between gap-4">
            <span className="text-xs text-[#8C7667]">
              Available for table-side service or whole bean bag.
            </span>
            <button
              onClick={() => {
                onClose();
                onBookTasting();
              }}
              className="px-5 py-2.5 rounded-full bg-[#C35B34] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#A54420] transition-colors whitespace-nowrap cursor-pointer"
            >
              Order for Tasting Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
