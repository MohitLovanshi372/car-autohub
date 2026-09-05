import React from 'react';
import { Cpu, Compass, Layout, Camera, ShieldCheck, Wifi, ArrowUpRight } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const techCards = [
    {
      icon: Cpu,
      title: 'Adaptive Drive',
      description: 'Continuous 1,000Hz damper sensor evaluation anticipating road imperfections and centrifugal roll angles.',
      stat: '1,000 Hz Sampling'
    },
    {
      icon: Compass,
      title: 'AI Navigation',
      description: 'Neural predictive route planning analyzing weather, battery thermal state, and live autobahn telemetry.',
      stat: 'Sub-second Reroute'
    },
    {
      icon: Layout,
      title: 'Smart Cockpit',
      description: 'Edge-to-edge curved OLED displays with eye-tracking 3D depth and haptic physical tactile feedback.',
      stat: '55" OLED Array'
    },
    {
      icon: Camera,
      title: '360° Camera Matrix',
      description: '8 surround optical sensors generating a real-time virtual drone perspective for millimeter-precise parking.',
      stat: '8x 4K HDR Feeds'
    },
    {
      icon: ShieldCheck,
      title: 'Driver Assist Suite',
      description: 'Level 2+ autonomous cruising, automatic emergency evasive maneuvers, and predictive intersection braking.',
      stat: '360° Protection'
    },
    {
      icon: Wifi,
      title: 'Connected Car Ecosystem',
      description: 'Over-the-air performance firmware upgrades, remote climate precondition, and encrypted smartphone digital key.',
      stat: '5G Hyper-Link'
    }
  ];

  return (
    <section className="py-24 bg-[#08080b] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
              Future Architecture
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase">
            TECHNOLOGY THAT MOVES WITH YOU.
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
            Every circuit and algorithm is tuned to amplify human instinct rather than replace it.
          </p>
        </div>

        {/* 6 Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#121217] to-[#0a0a0d] hover:border-red-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-red-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-neutral-400 mt-2.5 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="font-mono text-red-400 font-semibold">{card.stat}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
