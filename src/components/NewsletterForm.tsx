import React, { useState } from 'react';
import { validateEmail } from '../utils/brewingCalculator';
import { Mail, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. guest@emberorigin.coffee)');
      return;
    }

    setStatus('success');
    setErrorMessage('');
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FBF8F3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#211612] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-[#3A2820]">
          {/* Subtle decorative coffee bean silhouettes */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#C35B34]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#E29547]/15 rounded-full blur-3xl pointer-events-none" />

          {/* SVG Coffee Bean Shapes in background */}
          <svg
            className="absolute top-4 right-8 w-28 h-28 text-white/5 pointer-events-none"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 10 C 25 10 10 35 10 60 C 10 80 30 90 50 90 C 75 90 90 70 90 40 C 90 20 75 10 50 10 Z M 50 20 C 53 35 47 65 50 80" stroke="currentColor" strokeWidth="4" />
          </svg>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E29547] text-xs font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tasting Club & Roasters Dispatch</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
              Join In & Get 15% Off.
            </h2>

            <p className="text-sm sm:text-base text-[#D4C3B7] mb-8 leading-relaxed max-w-lg mx-auto">
              Subscribe for first access to single-origin micro-lot releases, brew recipes, and
              private tasting flight invitations.
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-2xl bg-[#32231B] border border-[#58644A] text-left animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-[#79D48C] mb-2 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Welcome to the Ember & Origin Tasting Club</span>
                </div>
                <p className="text-xs text-[#D8C7BC] leading-relaxed">
                  Demo form notice: <strong className="text-white">No email was sent or stored</strong>.
                  Your concept coupon code is <code className="bg-[#1C1410] px-2 py-0.5 rounded text-[#E29547] font-mono">EMBER15</code>.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setEmail('');
                  }}
                  className="mt-4 text-xs text-[#E29547] hover:underline"
                >
                  Reset demo input
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                  <div className="relative w-full">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7667]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter your email address"
                      className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#160E0A] border border-[#443126] text-white text-xs placeholder:text-[#7A6658] focus:outline-none focus:border-[#C35B34] focus:ring-1 focus:ring-[#C35B34] transition-colors"
                      aria-label="Email address for coffee newsletter"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C35B34] hover:bg-[#DF764E] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {status === 'error' && (
                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#FF8566] mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <p className="text-[11px] text-[#8C7667] pt-2">
                  Concept portfolio demonstration. No personal marketing data is collected or transmitted.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
