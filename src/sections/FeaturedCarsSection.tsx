import React from 'react';
import { CARS_DATA } from '../data/cars';
import { ArrowRight, Zap, Gauge, Flame, Eye, Sliders } from 'lucide-react';
import { Car } from '../types/car';

interface FeaturedCarsSectionProps {
  onSelectCar: (carId: string) => void;
  onExploreAll: () => void;
}

export const FeaturedCarsSection: React.FC<FeaturedCarsSectionProps> = ({
  onSelectCar,
  onExploreAll
}) => {
  // Select top 4 standout vehicles
  const featuredCars = CARS_DATA.slice(0, 4);

  return (
    <section className="py-24 bg-[#08080a] relative overflow-hidden border-t border-white/[0.05]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
                Curated Showcase
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase">
              BUILT TO BE REMEMBERED.
            </h2>
            <p className="text-base text-neutral-400 mt-3 max-w-xl font-light">
              Explore machines designed around performance, technology and personality.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="group flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-neutral-300 hover:text-red-400 transition-colors self-start md:self-auto"
          >
            <span>VIEW COMPLETE COLLECTION ({CARS_DATA.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCars.map((car: Car) => (
            <div
              key={car.id}
              className="group relative rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-b from-[#121216] to-[#0a0a0d] hover:border-red-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-red-950/30 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-transparent to-black/40" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-red-600/90 text-white shadow-sm">
                      {car.brand}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10">
                      {car.category}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-red-950/70 backdrop-blur-md text-red-400 border border-red-800/40">
                    {car.fuelType}
                  </span>
                </div>

                {/* Price Display */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs uppercase font-mono text-neutral-400 block">Starting from</span>
                  <span className="text-2xl font-display font-bold text-white">
                    {car.priceDisplay}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2 line-clamp-2 leading-relaxed font-light">
                    {car.tagline}
                  </p>
                </div>

                {/* Specs Pill Grid */}
                <div className="grid grid-cols-3 gap-3 py-5 my-5 border-y border-white/[0.06]">
                  <div className="text-center p-2 rounded-xl bg-white/[0.02]">
                    <div className="flex items-center justify-center gap-1 text-xs text-neutral-400 font-mono">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>POWER</span>
                    </div>
                    <div className="text-base font-display font-bold text-white mt-1">
                      {car.horsepower} <span className="text-xs font-normal text-neutral-400">HP</span>
                    </div>
                  </div>

                  <div className="text-center p-2 rounded-xl bg-white/[0.02]">
                    <div className="flex items-center justify-center gap-1 text-xs text-neutral-400 font-mono">
                      <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                      <span>0–100</span>
                    </div>
                    <div className="text-base font-display font-bold text-white mt-1">
                      {car.zeroToHundred} <span className="text-xs font-normal text-neutral-400">sec</span>
                    </div>
                  </div>

                  <div className="text-center p-2 rounded-xl bg-white/[0.02]">
                    <div className="flex items-center justify-center gap-1 text-xs text-neutral-400 font-mono">
                      <Flame className="w-3.5 h-3.5 text-red-400" />
                      <span>SPEED</span>
                    </div>
                    <div className="text-base font-display font-bold text-white mt-1">
                      {car.topSpeed} <span className="text-xs font-normal text-neutral-400">km/h</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectCar(car.id)}
                    className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 active:scale-98"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onSelectCar(car.id)}
                    className="py-3 px-4 rounded-xl border border-white/10 hover:border-white/25 bg-white/[0.04] text-neutral-300 hover:text-white text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5"
                    title="Launch 3D Configurator"
                  >
                    <Sliders className="w-3.5 h-3.5 text-red-400" />
                    <span>3D Spec</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
