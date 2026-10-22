import React from 'react';
import { COMMUNITY_NOTES } from '../utils/coffeeData';
import { Star, MessageSquareQuote } from 'lucide-react';

export const CommunityNotes: React.FC = () => {
  return (
    <section id="community" className="py-20 md:py-28 bg-[#F4EFE7]/70 border-t border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C35B34]">
              Community Perspectives
            </span>
            <span className="w-6 h-px bg-[#C35B34]" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211612] tracking-tight">
            The Little Things People Love.
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6354] mt-2">
            Illustrative sample guest notes from our fictional tasting room community.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMMUNITY_NOTES.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-3xl p-7 border border-[#E4D8C4] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-[#E29547]">
                  {[...Array(note.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#5A453A] leading-relaxed italic mb-6">
                  "{note.content}"
                </p>
              </div>

              {/* Author & Favorite */}
              <div className="pt-4 border-t border-[#F0E6D5] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#211612]">
                    {note.author}
                  </h3>
                  <p className="text-xs text-[#8A7568]">
                    {note.role} • {note.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-semibold text-[#C35B34] block">
                    Favorite
                  </span>
                  <span className="text-xs font-medium text-[#211612]">
                    {note.favoriteItem}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on portfolio concept */}
        <div className="mt-12 text-center text-[11px] text-[#968274] max-w-md mx-auto">
          Sample customer perspectives crafted for portfolio demonstration. No fabricated commercial claims.
        </div>
      </div>
    </section>
  );
};
