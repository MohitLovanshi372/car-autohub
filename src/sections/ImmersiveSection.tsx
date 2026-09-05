import React from 'react';
import { ArrowRight, Sliders, Shield, Eye } from 'lucide-react';
import { PageRoute } from '../types/car';

interface ImmersiveSectionProps {
  onNavigate: (route: PageRoute) => void;
  onSelectCar: (carId: string) => void;
}

export const ImmersiveSection: React.FC<ImmersiveSectionProps> = ({ onNavigate, onSelectCar }) => {
  return (
    <section className="relative py-36 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      {/* Massive Cinematic Car Imagery Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2400&q=90"
          alt="High Performance Detail"
          className="w-full h-full object-cover object-center brightness-40 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic vignette gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[11px] font-mono tracking-widest text-neutral-300 uppercase font-semibold">
              Masterclass in Craftsmanship
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl font-display font-black text-white tracking-tight uppercase leading-[0.98]">
            EVERY DETAIL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              MATTERS.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 mt-6 font-light leading-relaxed max-w-2xl mx-auto">
            From the tactile feedback of solid forged aluminum rotary dials to hand-stitched semi-aniline leathers and acoustic active isolation chambers. We do not build appliances. We sculpt visceral emotional journeys.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button
              onClick={() => onSelectCar('apex-gt')}
              className="px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl active:scale-95 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>Inspect Apex GT</span>
            </button>

            <button
              onClick={() => onNavigate('find-my-car')}
              className="px-8 py-4 rounded-full border border-white/20 bg-black/60 hover:bg-white/10 text-white font-display font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              <Sliders className="w-4 h-4 text-red-400" />
              <span>Find My Car Match</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
