import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Coffee, CheckCircle2, Flame } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [partySize, setPartySize] = useState('2 Guests');
  const [timeSlot, setTimeSlot] = useState('10:00 AM — Morning Cupping');
  const [flightType, setFlightType] = useState('Single-Origin Terroir Trio');
  const [guestName, setGuestName] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setGuestName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FBF8F3] rounded-3xl max-w-lg w-full border border-[#E8DEC8] shadow-2xl relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-[#ECE3D4] text-[#211612] transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {isConfirmed ? (
            <div className="text-center py-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#58644A]/15 text-[#58644A] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C35B34]">
                Reservation Confirmed
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#211612] mt-1 mb-2">
                We Look Forward to Welcoming You, {guestName}.
              </h3>
              <p className="text-sm text-[#665042] max-w-sm mx-auto mb-6">
                Your table for <strong>{partySize}</strong> at <strong>{timeSlot}</strong> has been
                held. Selected flight: <em>{flightType}</em>.
              </p>
              <div className="p-4 rounded-2xl bg-[#F4EFE7] border border-[#E4D8C4] text-xs text-[#7A6354] mb-6">
                Demo notice: This is a fictional portfolio experience. No actual restaurant reservation was booked.
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#211612] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C35B34] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-4 h-4 text-[#C35B34]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C35B34]">
                  Tasting Room Cupping
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#211612] mb-2">
                Book a Tasting Table
              </h3>
              <p className="text-xs sm:text-sm text-[#7A6354] mb-6 leading-relaxed">
                Join our baristas for guided single-origin flights, brew demonstrations, and pastry pairings.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#5A453A] block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Clara Montgomery"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DACBB0] text-[#211612] text-xs focus:outline-none focus:border-[#C35B34]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#5A453A] block mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#C35B34]" />
                      Party Size
                    </label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DACBB0] text-[#211612] text-xs focus:outline-none focus:border-[#C35B34]"
                    >
                      <option>1 Guest (Solo Bar)</option>
                      <option>2 Guests</option>
                      <option>3–4 Guests (Booth)</option>
                      <option>5–8 Guests (Roaster Table)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#5A453A] block mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C35B34]" />
                      Session Time
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DACBB0] text-[#211612] text-xs focus:outline-none focus:border-[#C35B34]"
                    >
                      <option>09:00 AM — Morning Quiet Pour</option>
                      <option>10:00 AM — Morning Cupping</option>
                      <option>01:30 PM — Midday Brew Lab</option>
                      <option>03:00 PM — Afternoon Cupping</option>
                      <option>05:30 PM — Twilight Roast Tasting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#5A453A] block mb-1.5 flex items-center gap-1.5">
                    <Coffee className="w-3.5 h-3.5 text-[#C35B34]" />
                    Featured Experience
                  </label>
                  <select
                    value={flightType}
                    onChange={(e) => setFlightType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DACBB0] text-[#211612] text-xs focus:outline-none focus:border-[#C35B34]"
                  >
                    <option>Single-Origin Terroir Trio (3 Micro-lots)</option>
                    <option>Ember Fire Roast vs Washed Clean Comparative</option>
                    <option>Espresso & Pastry Pairing Experience</option>
                    <option>Kyoto Cold Brew Flight (3 Extractions)</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#C35B34] hover:bg-[#A54420] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                  >
                    Confirm Tasting Reservation
                  </button>
                  <p className="text-[10px] text-center text-[#968274] mt-2">
                    Instant confirmation. No credit card required for concept tasting booking.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
