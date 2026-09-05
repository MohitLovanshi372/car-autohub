import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { PageRoute } from '../types/car';

interface CtaSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/[0.08]">
      {/* Dramatic Car Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=90"
          alt="Dramatic Car Background"
          className="w-full h-full object-cover object-center brightness-[0.25] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-950/30 text-red-400 text-xs font-mono uppercase tracking-widest font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>Your Journey Awaits</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase leading-[1.05]">
          READY TO FIND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">
            YOUR NEXT DRIVE?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 mt-6 font-light max-w-xl mx-auto leading-relaxed">
          Step into our interactive 3D digital showroom or take our intelligent recommendation quiz to discover your precision match.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={() => {
              onNavigate('cars');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-600/30 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>EXPLORE CARS</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              onNavigate('find-my-car');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-black/60 hover:bg-white/10 text-white font-display font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-red-400" />
            <span>FIND MY CAR</span>
          </button>
        </div>
      </div>
    </section>
  );
};
