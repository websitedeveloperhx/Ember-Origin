import React, { useState } from 'react';
import { Menu as MenuIcon, X, Flame } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Ritual', href: '#ritual' },
    { label: 'Collection', href: '#collection' },
    { label: 'Community', href: '#community' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#E8DEC8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in editorial face) */}
        <a
          href="#"
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C35B34] rounded-sm"
        >
          <div className="w-9 h-9 rounded-full bg-[#C35B34] text-white flex items-center justify-center shadow-sm group-hover:bg-[#A54420] transition-colors">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-2xl font-bold tracking-tight text-[#211612] leading-none">
              EMBER & ORIGIN
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#7C6353] font-medium mt-0.5">
              Where Fire Meets Coffee
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 clean single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4D3A2F]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#C35B34] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#C35B34]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenReservation}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#211612] hover:bg-[#C35B34] rounded-full transition-all duration-300 shadow-sm active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Reserve Tasting
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#211612] hover:text-[#C35B34] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C35B34] rounded-lg"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF8F3] border-b border-[#E8DEC8] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#211612]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="py-2 border-b border-[#F0E6D5] hover:text-[#C35B34] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  handleNavClick();
                  onOpenReservation();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#C35B34] hover:bg-[#A54420] rounded-xl transition-colors shadow-sm"
              >
                Reserve Tasting Flight
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
