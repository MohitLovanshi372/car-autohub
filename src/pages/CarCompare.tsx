import React, { useState } from 'react';
import { CARS_DATA } from '../data/cars';
import { Car } from '../types/car';
import { Scale, Plus, X, ArrowRight, Check, Award, Zap, Gauge, Flame, Shield, HelpCircle } from 'lucide-react';

interface CarCompareProps {
  selectedIds: string[];
  onSelectCar: (carId: string) => void;
  onRemoveCompare: (carId: string) => void;
  onAddCompare: (carId: string) => void;
}

export const CarCompare: React.FC<CarCompareProps> = ({
  selectedIds,
  onSelectCar,
  onRemoveCompare,
  onAddCompare
}) => {
  const [selectorSlot, setSelectorSlot] = useState<number | null>(null);

  // Default to first 3 cars if none or only 1 selected
  const displayIds = selectedIds.length > 0 ? selectedIds.slice(0, 3) : ['apex-gt', 'velora-x', 'spectre-ev'];
  const cars: Car[] = displayIds.map((id) => CARS_DATA.find((c) => c.id === id) || CARS_DATA[0]);

  // Determine winners for specs
  const highestHp = Math.max(...cars.map((c) => c.horsepower));
  const highestTorque = Math.max(...cars.map((c) => c.torque));
  const quickestAcc = Math.min(...cars.map((c) => c.zeroToHundred));
  const highestTopSpeed = Math.max(...cars.map((c) => c.topSpeed));
  const lowestPrice = Math.min(...cars.map((c) => c.price));

  return (
    <div className="pt-28 pb-28 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
              Benchmarking Matrix
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase">
            SIDE-BY-SIDE COMPARISON
          </h1>
          <p className="text-neutral-400 text-base mt-3 max-w-xl font-light">
            Compare up to 3 high-performance machines across acceleration, powertrain telemetry, chassis technology, and value.
          </p>
        </div>

        {/* Selected Cars Top Header Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[0, 1, 2].map((slotIndex) => {
            const car = cars[slotIndex];
            if (car) {
              return (
                <div
                  key={car.id}
                  className="group relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0c0c10] p-5 flex flex-col justify-between"
                >
                  <button
                    onClick={() => onRemoveCompare(car.id)}
                    className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-black/60 text-neutral-400 hover:text-white hover:bg-red-600 transition-all"
                    title="Remove from comparison"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-black">
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-red-400 uppercase font-semibold">
                      {car.brand} • {car.category} • {car.fuelType}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mt-1">
                      {car.name}
                    </h3>
                    <div className="text-xl font-display font-bold text-white mt-1">
                      {car.priceDisplay}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center gap-2">
                    <button
                      onClick={() => onSelectCar(car.id)}
                      className="flex-1 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-bold uppercase tracking-wider transition-colors text-center"
                    >
                      3D Configurator
                    </button>
                    <button
                      onClick={() => setSelectorSlot(slotIndex)}
                      className="py-2 px-3 rounded-xl border border-white/10 text-neutral-400 hover:text-white text-xs font-mono transition-colors"
                    >
                      Change
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={slotIndex}
                  onClick={() => setSelectorSlot(slotIndex)}
                  className="rounded-3xl border border-dashed border-white/15 bg-neutral-950/40 p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-red-500/50 hover:bg-neutral-900/30 transition-all min-h-[300px]"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center text-neutral-400 mb-3">
                    <Plus className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-display font-bold text-white uppercase">Add Vehicle</span>
                  <p className="text-xs text-neutral-500 mt-1">Click to select model for comparison</p>
                </div>
              );
            }
          })}
        </div>

        {/* Change Car Picker Modal */}
        {selectorSlot !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <div className="bg-[#0e0e12] border border-white/10 rounded-3xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <h3 className="font-display font-bold text-white text-lg uppercase">
                  Select Vehicle For Comparison
                </h3>
                <button
                  onClick={() => setSelectorSlot(null)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CARS_DATA.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => {
                      onAddCompare(c.id);
                      setSelectorSlot(null);
                    }}
                    className="p-3.5 rounded-2xl border border-white/10 bg-neutral-900/50 hover:border-red-500/50 hover:bg-neutral-800 transition-all cursor-pointer flex items-center gap-3"
                  >
                    <img
                      src={c.images[0]}
                      alt={c.name}
                      className="w-16 h-12 object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-display font-bold text-white text-sm">{c.name}</h4>
                      <p className="text-xs text-neutral-400">{c.brand} • {c.category} • {c.horsepower} HP</p>
                      <span className="text-xs font-bold text-red-400">{c.priceDisplay}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#0c0c10] overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-white/[0.08] flex items-center justify-between">
            <h2 className="text-lg font-display font-bold text-white uppercase flex items-center gap-2">
              <Award className="w-4 h-4 text-red-500" />
              <span>Telemetry & Feature Comparison</span>
            </h2>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
              ★ Gold Badge = Category Leader
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.01]">
                  <th className="p-5 font-mono text-xs uppercase text-neutral-400 w-1/4">Metric</th>
                  {cars.map((car) => (
                    <th key={car.id} className="p-5 font-display font-bold text-white text-base">
                      {car.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {/* Brand / Manufacturer */}
                <tr>
                  <td className="p-5 font-mono text-xs text-neutral-400 uppercase">Manufacturer / Brand</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-5 font-mono text-sm font-semibold text-white">
                      <span className="px-2.5 py-1 rounded-full bg-red-600/30 text-red-300 border border-red-500/30">
                        {car.brand}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Price */}
                <tr>
                  <td className="p-5 font-mono text-xs text-neutral-400 uppercase">MSRP Starting Price</td>
                  {cars.map((car) => {
                    const isBest = car.price === lowestPrice;
                    return (
                      <td key={car.id} className="p-5 font-display font-bold text-base text-white">
                        <span>{car.priceDisplay}</span>
                        {isBest && (
                          <span className="ml-2 inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                            Best Value
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>

                {/* Horsepower */}
                <tr>
                  <td className="p-5 font-mono text-xs text-neutral-400 uppercase">Peak Horsepower</td>
                  {cars.map((car) => {
                    const isBest = car.horsepower === highestHp;
                    return (
                      <td key={car.id} className="p-5 font-display font-bold text-base text-white">
                        <span>{car.horsepower} HP</span>
                        {isBest && (
                          <span className="ml-2 inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-red-950/60 text-red-400 border border-red-800/40">
                            Highest Output
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>

                {/* Torque */}
                <tr>
                  <td className="p-5 font-mono text-xs text-neutral-400 uppercase">Maximum Torque</td>
                  {cars.map((car) => {
                    const isBest = car.torque === highestTorque;
                    return (
                      <td key={car.id} className="p-5 font-display font-bold text-base text-white">
                        <span>{car.torque} Nm</span>
                        {isBest && (
                          <span className="ml-2 inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-950/60 text-amber-400 border border-amber-800/40">
                            Highest Torque
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>

                {/* 0–100 km/h */}
                <tr>
                  <td className="p-5 font-mono text-xs text-neutral-400 uppercase">0–100 km/h Acceleration</td>
                  {cars.map((car) => {
                    const isBest = car.zeroToHundred === quickestAcc;
                    return (
                      <td key={car.id} className="p-5 font-display font-bold text-base text-white">
                        <span>{car.zeroToHundred} Seconds</span>
                        {isBest && (
                          <span className="ml-2 inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                            Quickest 0–100
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>

                {/* Top Speed */}
                <tr>
                  <td className="p-5 font-mono text-xs text-neutral-400 uppercase">Maximum Velocity</td>
                  {cars.map((car) => {
                    const isBest = car.topSpeed === highestTopSpeed;
                    return (
                      <td key={car.id} className="p-5 font-display font-bold text-base text-white">
                        <span>{car.topSpeed} km/h</span>
                        {isBest && (
                          <span className="ml-2 inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                            Top Speed
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>

                {/* Fuel & Transmission */}
                <tr>
                  <td className="p-5 font-mono text-xs text-neutral-400 uppercase">Propulsion & Transmission</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-5 font-mono text-xs text-neutral-200">
                      {car.fuelType} • {car.transmission}
                    </td>
                  ))}
                </tr>

                {/* Range / Efficiency */}
                <tr>
                  <td className="p-5 font-mono text-xs text-neutral-400 uppercase">Tested Range / Efficiency</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-5 font-mono text-xs text-neutral-200">
                      {car.range ? `${car.range} km Total Range` : car.efficiency}
                    </td>
                  ))}
                </tr>

                {/* Safety Rating */}
                <tr>
                  <td className="p-5 font-mono text-xs text-neutral-400 uppercase">Safety Rating</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-5 font-mono text-xs text-neutral-200">
                      {car.safetyRating}
                    </td>
                  ))}
                </tr>

                {/* Distinct Features */}
                <tr>
                  <td className="p-5 font-mono text-xs text-neutral-400 uppercase">Signature Hardware</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-5 text-xs text-neutral-300">
                      <ul className="space-y-1.5">
                        {car.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
