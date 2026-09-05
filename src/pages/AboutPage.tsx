import React from 'react';
import { Sparkles, Gauge, Compass, ShieldCheck, ArrowRight, Award, Cpu, Eye } from 'lucide-react';
import { PageRoute } from '../types/car';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-28 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/20 bg-red-950/20 text-red-400 text-xs font-mono uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Automotive Vanguard</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase leading-[1.05]">
            ENGINEERING PASSION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">
              MEETS DIGITAL REALITY.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 mt-6 font-light leading-relaxed">
            AutoHub was founded on a singular obsession: to build a digital automotive showroom that feels as tangible, visceral, and uncompromising as sitting in the carbon bucket of a 700-horsepower machine.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl bg-black">
            <img
              src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=85"
              alt="Engineering Precision"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
              The Digital Showroom
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase leading-snug">
              WHY 3D MATTERS IN MODERN AUTOMOTIVE EXPLORATION
            </h2>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Traditional online dealerships rely on static flat photos taken under unflattering fluorescent showroom bulbs. AutoHub harnesses real-time WebGL rendering, physics-based metallic clearcoat shaders, and millimeter-accurate 3D geometries to let you inspect every aerodynamic vane and wheel offset under dynamic studio lighting.
            </p>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Whether comparing high-speed autobahn sedans or configuring bespoke racing liveries, every pixel is calibrated for emotional connection.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('cars')}
                className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-display font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 flex items-center gap-2"
              >
                <span>Explore The Fleet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Technical Architecture Strip */}
        <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-[#0c0c10] mb-20">
          <h3 className="text-2xl font-display font-bold text-white uppercase text-center mb-10">
            TECHNOLOGICAL FOUNDATION
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-white text-lg mb-2">Three.js + R3F Engine</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Direct GPU pipeline integration delivering 60 FPS viewport manipulation, studio lighting passes, and realistic soft contact shadow mapping.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-amber-600/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-white text-lg mb-2">PBR Clearcoat Shaders</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Two-layer automotive paint simulation mimicking real clearcoat reflection index, metallic flake roughness, and tinted cockpit glass transmission.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-white text-lg mb-2">Frontend Heuristic Matching</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Instant 5-factor weighted recommendation algorithm aligning driver budget, propulsion preferences, and priorities with precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
