import React, { useState, useMemo } from 'react';
import { CARS_DATA } from '../data/cars';
import { Car, CarCategory, FuelType } from '../types/car';
import { Search, SlidersHorizontal, ArrowUpDown, Zap, Gauge, Eye, Scale, Sparkles, Filter } from 'lucide-react';

interface CarsExplorerProps {
  onSelectCar: (carId: string) => void;
  onAddToCompare: (carId: string) => void;
  selectedForCompare: string[];
}

export const CarsExplorer: React.FC<CarsExplorerProps> = ({
  onSelectCar,
  onAddToCompare,
  selectedForCompare
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeBrand, setActiveBrand] = useState<string>('All');
  const [activeFuel, setActiveFuel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'hp-desc' | 'acc-asc'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(20000000); // 2 Cr max

  const brands = ['All', 'BMW', 'Tata', 'Hyundai', 'Apex', 'Velora', 'Strada', 'Titan', 'Spectre'];
  const categories = ['All', 'Sports', 'Sedan', 'SUV', 'Luxury', 'Electric'];
  const fuelTypes = ['All', 'Petrol', 'Diesel', 'Hybrid', 'Electric'];

  // Filter and sort logic
  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      // Brand filter
      if (activeBrand !== 'All' && car.brand !== activeBrand) {
        return false;
      }
      // Category filter
      if (activeCategory !== 'All' && car.category !== activeCategory) {
        return false;
      }
      // Fuel filter
      if (activeFuel !== 'All' && car.fuelType !== activeFuel) {
        return false;
      }
      // Max price
      if (car.price > maxPrice) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          car.name.toLowerCase().includes(q) ||
          car.brand.toLowerCase().includes(q) ||
          car.tagline.toLowerCase().includes(q) ||
          car.category.toLowerCase().includes(q) ||
          car.features.some((f) => f.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'hp-desc') return b.horsepower - a.horsepower;
      if (sortBy === 'acc-asc') return a.zeroToHundred - b.zeroToHundred;
      return 0; // featured default
    });
  }, [activeBrand, activeCategory, activeFuel, maxPrice, searchQuery, sortBy]);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Title */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
              The Vault
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase">
            EXPLORE THE COLLECTION
          </h1>
          <p className="text-neutral-400 text-base mt-3 max-w-xl font-light">
            Discover precision vehicles engineered for those who demand benchmark dynamics, bespoke interior luxury, and advanced 3D configurability.
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="p-4 sm:p-6 rounded-3xl border border-white/[0.08] bg-[#0c0c0f] mb-10 space-y-5">
          {/* Top Row: Search & Sort */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, engines, aerodynamics, features..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white px-2 py-1 bg-neutral-800 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-neutral-400 hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort cars collection"
                className="px-4 py-3 rounded-2xl bg-neutral-900 border border-white/10 text-neutral-200 text-sm focus:outline-none focus:border-red-500 cursor-pointer font-sans"
              >
                <option value="featured">Sort: Curated Featured</option>
                <option value="hp-desc">Sort: Highest Horsepower</option>
                <option value="acc-asc">Sort: Quickest 0–100 km/h</option>
                <option value="price-asc">Sort: Price (Low to High)</option>
                <option value="price-desc">Sort: Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Brand Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mr-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Marque:</span>
            </span>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeBrand === brand
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-400/30 font-bold'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Fuel Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mr-2 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>Propulsion:</span>
            </span>
            {fuelTypes.map((fuel) => (
              <button
                key={fuel}
                onClick={() => setActiveFuel(fuel)}
                className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
                  activeFuel === fuel
                    ? 'bg-white text-black font-bold'
                    : 'bg-white/[0.03] text-neutral-400 hover:text-white border border-white/5'
                }`}
              >
                {fuel}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Current Active Filters Summary */}
        <div className="flex items-center justify-between mb-6 text-xs text-neutral-400 font-mono">
          <span>SHOWING {filteredCars.length} OF {CARS_DATA.length} PRECISION VEHICLES</span>
          {selectedForCompare.length > 0 && (
            <span className="text-red-400 font-semibold">
              {selectedForCompare.length}/3 CARS SELECTED FOR COMPARISON
            </span>
          )}
        </div>

        {/* Main Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => {
              const isSelectedForCompare = selectedForCompare.includes(car.id);
              return (
                <div
                  key={car.id}
                  className="group rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-b from-[#111116] to-[#08080a] hover:border-red-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/20 flex flex-col justify-between"
                >
                  {/* Image with Tag Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-black/30" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-bold bg-red-600/90 text-white shadow-sm">
                        {car.brand}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-black/70 backdrop-blur-md text-white border border-white/10">
                        {car.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <button
                        onClick={() => onAddToCompare(car.id)}
                        className={`p-2 rounded-xl backdrop-blur-md border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                          isSelectedForCompare
                            ? 'bg-red-600 text-white border-red-500'
                            : 'bg-black/60 text-neutral-300 border-white/10 hover:bg-neutral-800'
                        }`}
                        title={isSelectedForCompare ? 'Remove from compare' : 'Add to compare'}
                      >
                        <Scale className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">
                          {isSelectedForCompare ? 'Added' : 'Compare'}
                        </span>
                      </button>
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <span className="text-xl font-display font-bold text-white">
                        {car.priceDisplay}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                          {car.name}
                        </h3>
                        <span className="text-xs font-mono text-red-400">
                          {car.fuelType}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-1.5 line-clamp-2 leading-relaxed font-light">
                        {car.tagline}
                      </p>
                    </div>

                    {/* Quick Specs Strip */}
                    <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-white/[0.06] text-center font-mono text-xs">
                      <div>
                        <span className="text-[10px] text-neutral-500 block uppercase">HP</span>
                        <span className="font-bold text-white text-sm">{car.horsepower}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-neutral-500 block uppercase">0–100</span>
                        <span className="font-bold text-white text-sm">{car.zeroToHundred}s</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-neutral-500 block uppercase">Top Speed</span>
                        <span className="font-bold text-white text-sm">{car.topSpeed}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectCar(car.id)}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-24 text-center border border-white/[0.06] rounded-3xl bg-neutral-950 p-8">
            <p className="text-neutral-400 text-base mb-4">
              No vehicles found matching your specific filter criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveFuel('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-red-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
