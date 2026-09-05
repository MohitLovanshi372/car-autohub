import React from 'react';
import { Gauge, Zap, Wind, Award, Flame } from 'lucide-react';

export const PerformanceSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#050505] relative overflow-hidden border-t border-white/[0.06]">
      {/* Dynamic Background Speedline Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/15 via-transparent to-red-950/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-950/20 text-red-400 text-xs font-mono uppercase tracking-widest font-semibold mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Benchmark Physics</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase">
            ENGINEERED FOR THE THRILL.
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg mt-4 font-light leading-relaxed">
            Every millimeter is calculated to master aerodynamic resistance, channel downforce, and translate raw horsepower into instantaneous momentum.
          </p>
        </div>

        {/* Large Animated Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Stat 1 */}
          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#111115] to-[#070709] relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl pointer-events-none group-hover:bg-red-600/10 transition-colors" />
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-4">
              Acceleration Telemetry
            </span>
            <div className="text-6xl sm:text-7xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-red-400 leading-none">
              3.2s
            </div>
            <div className="text-sm font-mono tracking-widest text-neutral-400 uppercase font-semibold mt-3">
              0–100 KM/H
            </div>
            <p className="text-xs text-neutral-400 mt-4 leading-relaxed font-light">
              Dual-motor electric and twin-turbo configurations provide instantaneous launch control without wheel slip.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#111115] to-[#070709] relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-colors" />
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-4">
              Power Output
            </span>
            <div className="text-6xl sm:text-7xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-amber-400 leading-none">
              680
            </div>
            <div className="text-sm font-mono tracking-widest text-neutral-400 uppercase font-semibold mt-3">
              HORSEPOWER
            </div>
            <p className="text-xs text-neutral-400 mt-4 leading-relaxed font-light">
              High-revving powertrain architecture paired with intelligent 48V boost turbines for instantaneous response.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#111115] to-[#070709] relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-4">
              Aerodynamic Velocity
            </span>
            <div className="text-6xl sm:text-7xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-cyan-400 leading-none">
              320
            </div>
            <div className="text-sm font-mono tracking-widest text-neutral-400 uppercase font-semibold mt-3">
              KM/H TOP SPEED
            </div>
            <p className="text-xs text-neutral-400 mt-4 leading-relaxed font-light">
              Active aerodynamic diffusers and downforce stabilization wings ensure calm high-speed autobahn control.
            </p>
          </div>
        </div>

        {/* Telemetry Visual Ribbon */}
        <div className="p-6 rounded-2xl border border-white/[0.08] bg-neutral-950/60 backdrop-blur-md flex flex-wrap items-center justify-around gap-6 text-neutral-400 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>0.20 Cd Aerodynamic Drag</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-emerald-400" />
            <span>50:50 Axle Weight Distribution</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-cyan-400" />
            <span>450 kg Peak Downforce</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-red-400" />
            <span>Track-Ready Cooling Loops</span>
          </div>
        </div>
      </div>
    </section>
  );
};
