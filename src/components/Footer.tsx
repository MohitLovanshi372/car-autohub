import React from 'react';
import { PageRoute } from '../types/car';
import { ArrowUpRight, ShieldCheck, Award, Zap } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const links: { label: string; route: PageRoute }[] = [
    { label: 'Explore', route: 'home' },
    { label: 'Cars', route: 'cars' },
    { label: 'Compare', route: 'compare' },
    { label: 'Find My Car', route: 'find-my-car' },
    { label: 'About', route: 'about' }
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden text-neutral-400">
      {/* Subtle background red glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center font-display font-black text-white text-lg shadow-lg shadow-red-600/30">
                  A
                </div>
                <span className="font-display font-black text-2xl tracking-[0.25em] text-white">
                  AUTOHUB
                </span>
              </div>
              <p className="text-xl font-display font-semibold text-neutral-200 mb-3 tracking-wide">
                Drive Beyond Ordinary.
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                A digital automotive experience built around progressive engineering, architectural design, and the raw passion for driving.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Zero Carbon Vision</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-neutral-400" />
                <span>Concierge Support</span>
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      onNavigate(link.route);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-5">
              Follow
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Experience Spec */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-5">
              Engine Spec
            </h4>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-neutral-900/50 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-400">Renderer</span>
                <span className="text-neutral-200 font-mono">Three.js R3F</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">FPS Target</span>
                <span className="text-emerald-400 font-mono">60 FPS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Shaders</span>
                <span className="text-neutral-200 font-mono">PBR Physical</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 AutoHub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Terms of Spec
            </span>
            <span>•</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Studio Configurator
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
