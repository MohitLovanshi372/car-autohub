import React, { useState, useEffect } from 'react';
import { Search, User, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types/car';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Explore', route: 'home' },
    { label: 'Cars', route: 'cars' },
    { label: 'Compare', route: 'compare' },
    { label: 'Find My Car', route: 'find-my-car' },
    { label: 'About', route: 'about' }
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50'
            : 'py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2.5 text-left transition-transform duration-200 active:scale-95"
            aria-label="AUTOHUB Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center font-display font-black text-white text-base shadow-lg shadow-red-600/30">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-[0.2em] text-white group-hover:text-red-400 transition-colors">
                AUTOHUB
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 -mt-1">
                Beyond Ordinary
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 border border-white/[0.06] bg-black/40 backdrop-blur-md">
            {navItems.map((item) => {
              const active = currentRoute === item.route;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.route)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    active
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-red-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Search cars (Cmd+K)"
              aria-label="Search cars"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Profile / Concierge Icon */}
            <button
              onClick={() => handleNavClick('find-my-car')}
              className="hidden sm:flex p-2.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Personalized Match Concierge"
              aria-label="Find My Car"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Main Primary CTA */}
            <button
              onClick={() => handleNavClick('cars')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-display font-bold uppercase tracking-wider rounded-full bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/25 transition-all duration-200 hover:shadow-red-600/40 active:scale-95"
            >
              <span>EXPLORE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Fullscreen Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-display font-black text-white">
                A
              </div>
              <span className="font-display font-extrabold text-xl tracking-[0.2em] text-white">
                AUTOHUB
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-5 my-auto">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.route)}
                className="flex items-center justify-between text-2xl font-display font-bold text-left text-neutral-200 hover:text-red-500 transition-colors py-2 border-b border-white/5"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-5 h-5 text-neutral-500" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-3 px-4 rounded-xl border border-white/10 bg-neutral-900 text-sm font-medium text-neutral-300 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search Cars by Model or Spec</span>
            </button>
            <button
              onClick={() => handleNavClick('cars')}
              className="w-full py-3 px-4 rounded-xl bg-red-600 text-sm font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
