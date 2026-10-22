import React, { useState, useEffect } from 'react';
import { ASSETS } from '../utils/coffeeData';
import { BREW_PROFILES, calculateBrewWater, formatTimerSeconds } from '../utils/brewingCalculator';
import { BrewMethod } from '../types/coffee';
import { Play, Pause, RotateCcw, Droplets, Flame, Scale, Clock } from 'lucide-react';

export const CoffeeRitual: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<BrewMethod>('pour-over');
  const [coffeeGrams, setCoffeeGrams] = useState<number>(18);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  const currentProfile = BREW_PROFILES[selectedMethod];
  const waterMl = calculateBrewWater(coffeeGrams, currentProfile.defaultRatio);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!timerRunning && timerSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const resetTimer = () => {
    setTimerRunning(false);
    setTimerSeconds(0);
  };

  return (
    <section id="ritual" className="py-20 md:py-28 bg-[#18110D] text-[#F3EDE2] relative overflow-hidden">
      {/* Background glowing ember accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C35B34]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E29547]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Atmospheric Photography & Editorial Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E29547]">
                Mindful Extraction
              </span>
              <span className="w-8 h-px bg-[#E29547]/60" />
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              Your Daily <br />
              <span className="italic font-normal text-[#E29547]">Coffee Ritual.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D4C3B7] leading-relaxed max-w-xl">
              In a rushed world, the morning brew is an invitation to slow down. The aroma of freshly
              ground beans, the blooming cascade as hot spring water meets dark roast, and the rising
              steam—it is a meditation before the day begins.
            </p>

            {/* Photo frame with copper border */}
            <div className="relative rounded-3xl overflow-hidden aspect-16/10 border border-[#3E2A20] shadow-2xl group">
              <img
                src={ASSETS.ritualBrew}
                alt="Slow artisanal pour over coffee brew ritual with copper kettle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#E29547] font-semibold">The Pour-Over Bloom</p>
                  <p className="text-sm text-white/90">93°C Water • 1:16 Ratio • 3-Minute Slow Extraction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Ritual Brew Studio & Timer (6 cols) */}
          <div className="lg:col-span-6 bg-[#241A14] rounded-3xl p-6 sm:p-8 border border-[#3C291F] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#3D2C22] pb-4 mb-6">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-white">Interactive Brew Guide</h3>
                <p className="text-xs text-[#A89487]">Precision ratios calibrated for fire-roasted beans</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#C35B34]/20 border border-[#C35B34]/40 text-[#E29547] text-xs font-medium">
                Live Calculator
              </div>
            </div>

            {/* Method Selectors (Segmented interactive buttons) */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-wider text-[#A89487] font-semibold block mb-2">
                Select Brew Technique
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(['pour-over', 'french-press', 'aeropress', 'espresso', 'cold-brew'] as BrewMethod[]).map(
                  (method) => {
                    const active = selectedMethod === method;
                    return (
                      <button
                        key={method}
                        onClick={() => {
                          setSelectedMethod(method);
                          if (method === 'espresso') setCoffeeGrams(18);
                          else if (coffeeGrams < 15) setCoffeeGrams(18);
                        }}
                        className={`px-3 py-2 text-xs font-medium rounded-xl transition-all capitalize text-left cursor-pointer ${
                          active
                            ? 'bg-[#C35B34] text-white shadow-md'
                            : 'bg-[#1C1410] text-[#B8A498] hover:bg-[#2C1F18] hover:text-white'
                        }`}
                      >
                        {method.replace('-', ' ')}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Ratio & Dose Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1C1410] p-4 rounded-2xl border border-[#332219]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#A89487] font-medium flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-[#E29547]" />
                    Coffee Dry Dose
                  </span>
                  <span className="text-sm font-bold text-white font-mono">{coffeeGrams}g</span>
                </div>
                <input
                  type="range"
                  min={selectedMethod === 'espresso' ? 14 : 12}
                  max={selectedMethod === 'espresso' ? 22 : 45}
                  value={coffeeGrams}
                  onChange={(e) => setCoffeeGrams(Number(e.target.value))}
                  className="w-full accent-[#C35B34] cursor-pointer"
                  aria-label="Coffee dry dose in grams"
                />
              </div>

              <div className="bg-[#1C1410] p-4 rounded-2xl border border-[#332219]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#A89487] font-medium flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-[#E29547]" />
                    Target Water
                  </span>
                  <span className="text-sm font-bold text-[#E29547] font-mono tabular-nums">
                    {waterMl} ml
                  </span>
                </div>
                <div className="text-[11px] text-[#8C7667]">
                  Ratio 1:{currentProfile.defaultRatio} • Temp: {currentProfile.waterTempC}°C
                </div>
              </div>
            </div>

            {/* Brew Profile Specs */}
            <div className="p-4 rounded-2xl bg-[#1C1410] border border-[#332219] mb-6 space-y-2 text-xs">
              <div className="flex justify-between text-[#B8A498]">
                <span>Recommended Grind:</span>
                <span className="text-white font-medium">{currentProfile.grindSize}</span>
              </div>
              <div className="flex justify-between text-[#B8A498]">
                <span>Target Extraction:</span>
                <span className="text-white font-medium font-mono">
                  {formatTimerSeconds(currentProfile.brewTimeSeconds)}
                </span>
              </div>
              <p className="text-[11px] text-[#A89487] pt-2 border-t border-[#2C1E17] leading-relaxed">
                {currentProfile.description}
              </p>
            </div>

            {/* Built-in Extraction Stopwatch */}
            <div className="bg-[#150D0A] p-4 rounded-2xl border border-[#301F17] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#241A14] flex items-center justify-center text-[#E29547]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#8A7568] font-semibold">
                    Extraction Timer
                  </div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">
                    {formatTimerSeconds(timerSeconds)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    timerRunning
                      ? 'bg-[#A54420] text-white hover:bg-[#8B3616]'
                      : 'bg-[#C35B34] text-white hover:bg-[#DF764E]'
                  }`}
                >
                  {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{timerRunning ? 'Pause' : 'Start'}</span>
                </button>
                <button
                  onClick={resetTimer}
                  className="p-2 rounded-xl bg-[#241A14] text-[#A89487] hover:text-white hover:bg-[#34241B] transition-colors cursor-pointer"
                  title="Reset Timer"
                  aria-label="Reset Timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
