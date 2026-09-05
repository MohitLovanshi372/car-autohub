import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Zap, Gauge } from 'lucide-react';
import { CARS_DATA } from '../data/cars';
import { Car } from '../types/car';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCar: (carId: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCar
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle search
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCars = CARS_DATA.filter((car) => {
    const q = query.toLowerCase();
    return (
      car.name.toLowerCase().includes(q) ||
      car.brand.toLowerCase().includes(q) ||
      car.category.toLowerCase().includes(q) ||
      car.fuelType.toLowerCase().includes(q) ||
      car.tagline.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0d0d0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by model, category (Sports, SUV, EV), or horsepower..."
            autoFocus
            className="w-full bg-transparent text-white text-base focus:outline-none placeholder-neutral-500 font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-neutral-400 hover:text-white text-xs px-2 py-1 bg-neutral-800 rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-white/5">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div
                key={car.id}
                onClick={() => {
                  onSelectCar(car.id);
                  onClose();
                }}
                className="group p-3 rounded-xl hover:bg-white/[0.04] transition-all cursor-pointer flex items-center gap-4"
              >
                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="w-20 h-14 object-cover rounded-lg border border-white/10 group-hover:border-red-500/50 transition-colors"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-display font-bold text-white group-hover:text-red-400 transition-colors">
                      {car.name}
                    </h4>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-red-600/30 text-red-300 border border-red-500/30 font-semibold">
                      {car.brand}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                      {car.category}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-red-950/60 text-red-400 border border-red-900/40">
                      {car.fuelType}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 truncate mt-0.5">{car.tagline}</p>
                  <div className="flex items-center gap-4 mt-1.5 text-[11px] text-neutral-400 font-mono">
                    <span className="text-neutral-200 font-semibold">{car.priceDisplay}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" />
                      {car.horsepower} HP
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Gauge className="w-3 h-3 text-emerald-400" />
                      {car.zeroToHundred}s (0-100)
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-neutral-500 text-sm">
              No automotive models matched &quot;{query}&quot;. Try &quot;Sports&quot;, &quot;SUV&quot;, or &quot;Electric&quot;.
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-neutral-950 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
          <span>{filteredCars.length} models available</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
