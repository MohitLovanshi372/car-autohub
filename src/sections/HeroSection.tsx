import React, { useState } from 'react';
import { ArrowRight, Sliders, Shield, Zap, Sparkles, Box } from 'lucide-react';
import { CarViewer } from '../three/CarViewer';
import { PageRoute, Car3DModelType } from '../types/car';
import { CARS_DATA, COLOR_OPTIONS } from '../data/cars';

interface HeroSectionProps {
  onNavigate: (route: PageRoute) => void;
  onSelectCar: (carId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onSelectCar }) => {
  // Hero flagship vehicle switcher
  const [activeCarId, setActiveCarId] = useState<string>('apex-gt');
  const activeCar = CARS_DATA.find((c) => c.id === activeCarId) || CARS_DATA[0];

  const [selectedColorKey, setSelectedColorKey] = useState<string>(activeCar.signatureColorName);
  const activeColor = COLOR_OPTIONS[selectedColorKey] || COLOR_OPTIONS[activeCar.signatureColorName] || COLOR_OPTIONS['Racing Red'];

  const handleSwitchCar = (carId: string) => {
    setActiveCarId(carId);
    const target = CARS_DATA.find((c) => c.id === carId);
    if (target) {
      setSelectedColorKey(target.signatureColorName);
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#050505]">
      {/* Cinematic Ambient Backdrop Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/[0.07] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-600/[0.04] blur-[140px] pointer-events-none rounded-full" />

      {/* Subtle Background Radial Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Hero Typography Banner */}
        <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/20 bg-red-950/20 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-[11px] font-mono tracking-widest text-red-300 uppercase font-semibold">
              Real-Time 3D Multi-Model Automotive Showcase
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white uppercase leading-[0.95] mb-6">
            DRIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500">BEYOND</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">ORDINARY.</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed mb-6">
            Discover precision machines engineered for those who refuse to follow the ordinary. Realistic 3D simulation with dynamic physics-based clearcoat shaders.
          </p>

          {/* Quick Model Selector Pills on Hero */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {CARS_DATA.slice(0, 4).map((car) => {
              const isSelected = activeCar.id === car.id;
              return (
                <button
                  key={car.id}
                  onClick={() => handleSwitchCar(car.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-red-600/90 text-white border-red-500 shadow-lg shadow-red-600/30'
                      : 'bg-black/60 text-neutral-400 border-white/10 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: car.signatureColor }}
                  />
                  <span>{car.name}</span>
                  <span className="text-[10px] opacity-70">({car.category})</span>
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('cars')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 active:scale-95 flex items-center justify-center gap-2.5"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onSelectCar(activeCar.id)}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white font-display font-bold text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5"
            >
              <Sliders className="w-4 h-4 text-red-400" />
              <span>CONFIGURE {activeCar.name.toUpperCase()}</span>
            </button>
          </div>
        </div>

        {/* 3D Car Viewport Centerpiece */}
        <div className="relative mt-8 sm:mt-10 rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/80 bg-gradient-to-b from-[#0e0e11] to-[#050505]">
          <CarViewer
            modelType={activeCar.modelType}
            modelPath={activeCar.modelPath || '/models/car.glb'}
            colorHex={activeColor.hex}
            wheelType="sport"
            height="h-[460px] sm:h-[580px] lg:h-[660px]"
            autoRotate={true}
            showControls={true}
            fallbackImageUrl={activeCar.images[0]}
            images={activeCar.images}
            carName={activeCar.name}
          />

          {/* Floating Real-Time Color Selector on Hero */}
          <div className="absolute bottom-5 right-5 z-20 hidden sm:flex items-center gap-2 p-2 rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 px-2 font-medium">
              Paint
            </span>
            <div className="flex items-center gap-1.5">
              {Object.entries(COLOR_OPTIONS).slice(0, 5).map(([name, opt]) => (
                <button
                  key={name}
                  onClick={() => setSelectedColorKey(name)}
                  title={name}
                  className={`w-6 h-6 rounded-full transition-transform ${
                    selectedColorKey === name
                      ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-black'
                      : 'hover:scale-110 opacity-75 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: opt.hex }}
                />
              ))}
            </div>
          </div>

          {/* Hero Spec Hologram Overlay */}
          <div className="absolute bottom-5 left-5 z-20 hidden md:flex items-center gap-6 p-3 px-5 rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Model</div>
              <div className="text-sm font-display font-bold text-white">{activeCar.name}</div>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Output</div>
              <div className="text-sm font-display font-bold text-red-400">{activeCar.horsepower} HP</div>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">0–100 km/h</div>
              <div className="text-sm font-display font-bold text-emerald-400">{activeCar.zeroToHundred}s</div>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <button
              onClick={() => onSelectCar(activeCar.id)}
              className="text-xs font-mono text-red-400 hover:text-red-300 font-semibold underline underline-offset-4 cursor-pointer"
            >
              View Full Details →
            </button>
          </div>
        </div>

        {/* Brand Key Highlights Strip */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <div className="text-xl sm:text-2xl font-display font-bold text-white">5 Architectures</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">3D Supercar, Sedan, SUV & EV</div>
          </div>
          <div className="p-3">
            <div className="text-xl sm:text-2xl font-display font-bold text-white">Signature Colors</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">Custom PBR Finishes</div>
          </div>
          <div className="p-3">
            <div className="text-xl sm:text-2xl font-display font-bold text-white">PBR Optics</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">Clearcoat & Glass</div>
          </div>
          <div className="p-3">
            <div className="text-xl sm:text-2xl font-display font-bold text-white">Real Physics</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">Lighting & Reflections</div>
          </div>
        </div>
      </div>
    </section>
  );
};
