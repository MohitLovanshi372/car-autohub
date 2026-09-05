import React from 'react';
import { Sparkles, Gauge, Compass, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Innovation',
      desc: 'Pioneering next-generation electric and hybrid propulsion architecture without diluting driver involvement.'
    },
    {
      icon: Gauge,
      title: 'Performance',
      desc: 'Sub-3-second acceleration, 50:50 balance dynamics, and rigorous wind-tunnel validation.'
    },
    {
      icon: Compass,
      title: 'Design',
      desc: 'A pure design ethos where form is dictated by aerodynamic downforce and architectural elegance.'
    },
    {
      icon: ShieldCheck,
      title: 'Technology',
      desc: 'Real-time 3D simulation, sensor telemetry, and intelligent driver assistance hardware.'
    }
  ];

  return (
    <section className="py-24 bg-[#08080a] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
              The Manifesto
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            ABOUT AUTOHUB
          </h2>

          <p className="text-lg sm:text-xl text-neutral-300 mt-6 font-light leading-relaxed">
            AutoHub is a digital automotive experience built around design, technology and the passion for driving.
          </p>

          <p className="text-sm text-neutral-400 mt-3 font-light leading-relaxed max-w-xl mx-auto">
            We bridge the boundary between cutting-edge automotive manufacturing and digital interactive simulation, letting enthusiasts configure, compare, and feel machines before they hit the tarmac.
          </p>
        </div>

        {/* 4 Brand Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#111116] to-[#08080a] hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 mt-2.5 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
