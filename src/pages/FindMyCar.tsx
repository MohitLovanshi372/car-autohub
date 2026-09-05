import React, { useState } from 'react';
import { CARS_DATA } from '../data/cars';
import { Car, BudgetTier, Purpose, FuelType, TransmissionType, Priority } from '../types/car';
import {
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Zap,
  Gauge,
  Shield,
  Eye,
  Sliders,
  Award
} from 'lucide-react';

interface FindMyCarProps {
  onSelectCar: (carId: string) => void;
}

export const FindMyCar: React.FC<FindMyCarProps> = ({ onSelectCar }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedBudget, setSelectedBudget] = useState<BudgetTier>('₹50L+');
  const [selectedPurpose, setSelectedPurpose] = useState<Purpose>('Performance');
  const [selectedFuel, setSelectedFuel] = useState<FuelType>('Petrol');
  const [selectedTransmission, setSelectedTransmission] = useState<TransmissionType>('Automatic');
  const [selectedPriority, setSelectedPriority] = useState<Priority>('Performance');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const budgetOptions: BudgetTier[] = ['₹5L', '₹10L', '₹20L', '₹50L+'];
  const purposeOptions: Purpose[] = ['Daily commute', 'Family', 'Performance', 'Luxury', 'Adventure'];
  const fuelOptions: FuelType[] = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
  const transmissionOptions: TransmissionType[] = ['Manual', 'Automatic'];
  const priorityOptions: Priority[] = ['Performance', 'Mileage', 'Safety', 'Comfort', 'Technology'];

  // Pure frontend scoring recommendation algorithm
  const calculateMatch = (): { car: Car; matchPercentage: number; explanation: string } => {
    let bestScore = -1;
    let bestCar = CARS_DATA[0];

    CARS_DATA.forEach((car) => {
      let score = 50; // base score

      // Purpose weight (+20)
      if (car.matchProfile.purposes.includes(selectedPurpose)) {
        score += 20;
      }

      // Fuel weight (+15)
      if (car.matchProfile.fuel.includes(selectedFuel)) {
        score += 15;
      }

      // Transmission weight (+10)
      if (car.matchProfile.transmission.includes(selectedTransmission)) {
        score += 10;
      }

      // Priority weight (+12)
      if (car.matchProfile.priorities.includes(selectedPriority)) {
        score += 12;
      }

      // Budget tier match (+8)
      if (car.matchProfile.budget === selectedBudget) {
        score += 8;
      }

      if (score > bestScore) {
        bestScore = score;
        bestCar = car;
      }
    });

    const matchPercentage = Math.min(99, Math.max(88, bestScore));

    const explanation = `Excellent ${matchPercentage}% match for your ${selectedPurpose.toLowerCase()} requirements, ${selectedPriority.toLowerCase()} preference, and ${selectedTransmission.toLowerCase()} ${selectedFuel.toLowerCase()} powertrain preference.`;

    return { car: bestCar, matchPercentage, explanation };
  };

  const matchResult = calculateMatch();

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsCompleted(false);
  };

  return (
    <div className="pt-28 pb-28 min-h-screen bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-950/20 text-red-400 text-xs font-mono uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Algorithmic Concierge</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase">
            FIND THE CAR THAT FITS YOU.
          </h1>

          <p className="text-neutral-400 text-base mt-3 max-w-xl mx-auto font-light">
            Answer 5 tailored questions. Our intelligent evaluation engine analyzes telemetry, ergonomics, and propulsion to recommend your machine.
          </p>
        </div>

        {!isCompleted ? (
          <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-[#0c0c10] shadow-2xl relative overflow-hidden">
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                STEP {currentStep} OF 5
              </span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s === currentStep
                        ? 'w-8 bg-red-500'
                        : s < currentStep
                        ? 'w-4 bg-red-800'
                        : 'w-4 bg-neutral-800'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* STEP 1: BUDGET */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-white uppercase">
                    Step 1: What is your target investment budget?
                  </h2>
                  <p className="text-sm text-neutral-400 mt-1 font-light">
                    Select your acquisition investment range.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      onClick={() => setSelectedBudget(budget)}
                      className={`p-6 rounded-2xl border text-center transition-all ${
                        selectedBudget === budget
                          ? 'border-red-500 bg-red-950/20 shadow-lg shadow-red-950/30'
                          : 'border-white/10 bg-neutral-900/40 hover:bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      <span className="text-2xl font-display font-bold text-white block">
                        {budget}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono mt-1 block">Tier</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: PURPOSE */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-white uppercase">
                    Step 2: What is your primary driving purpose?
                  </h2>
                  <p className="text-sm text-neutral-400 mt-1 font-light">
                    How will you spend most hours behind the steering wheel?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {purposeOptions.map((purpose) => (
                    <button
                      key={purpose}
                      onClick={() => setSelectedPurpose(purpose)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        selectedPurpose === purpose
                          ? 'border-red-500 bg-red-950/20 shadow-lg shadow-red-950/30'
                          : 'border-white/10 bg-neutral-900/40 hover:bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      <span className="text-lg font-display font-bold text-white block">
                        {purpose}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: FUEL */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-white uppercase">
                    Step 3: Preferred powertrain & fuel source?
                  </h2>
                  <p className="text-sm text-neutral-400 mt-1 font-light">
                    Select your preferred propulsion energy architecture.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  {fuelOptions.map((fuel) => (
                    <button
                      key={fuel}
                      onClick={() => setSelectedFuel(fuel)}
                      className={`p-6 rounded-2xl border text-center transition-all ${
                        selectedFuel === fuel
                          ? 'border-red-500 bg-red-950/20 shadow-lg shadow-red-950/30'
                          : 'border-white/10 bg-neutral-900/40 hover:bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      <span className="text-xl font-display font-bold text-white block">
                        {fuel}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: TRANSMISSION */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-white uppercase">
                    Step 4: Manual gated engagement or rapid dual-clutch automatic?
                  </h2>
                  <p className="text-sm text-neutral-400 mt-1 font-light">
                    Choose between tactile mechanical control and effortless split-second paddle shifts.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {transmissionOptions.map((trans) => (
                    <button
                      key={trans}
                      onClick={() => setSelectedTransmission(trans)}
                      className={`p-8 rounded-2xl border text-center transition-all ${
                        selectedTransmission === trans
                          ? 'border-red-500 bg-red-950/20 shadow-lg shadow-red-950/30'
                          : 'border-white/10 bg-neutral-900/40 hover:bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      <span className="text-2xl font-display font-bold text-white block">
                        {trans}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono mt-1 block">
                        {trans === 'Manual' ? 'Gated short-throw mechanical' : 'Dual-clutch paddle-shift'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 5: PRIORITY */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-white uppercase">
                    Step 5: Your single highest vehicle priority?
                  </h2>
                  <p className="text-sm text-neutral-400 mt-1 font-light">
                    What matters most when evaluating your dream automotive companion?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {priorityOptions.map((priority) => (
                    <button
                      key={priority}
                      onClick={() => setSelectedPriority(priority)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        selectedPriority === priority
                          ? 'border-red-500 bg-red-950/20 shadow-lg shadow-red-950/30'
                          : 'border-white/10 bg-neutral-900/40 hover:bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      <span className="text-lg font-display font-bold text-white block">
                        {priority}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Next Action Button */}
            <div className="pt-10 mt-10 border-t border-white/[0.06] flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs font-mono uppercase text-neutral-400 hover:text-white"
                >
                  Previous Step
                </button>
              ) : <div />}

              <button
                onClick={handleNext}
                className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 flex items-center gap-2"
              >
                <span>{currentStep === 5 ? 'COMPUTE MY MATCH' : 'CONTINUE'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* YOUR MATCH RESULTS CARD */
          <div className="p-8 sm:p-12 rounded-3xl border border-red-500/30 bg-gradient-to-b from-[#141014] to-[#08080a] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Ambient Red Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  PRECISION RECOMMENDATION COMPUTED
                </span>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-mono uppercase text-neutral-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={matchResult.car.images[0]}
                  alt={matchResult.car.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/50 text-red-400 font-mono text-xs font-bold mb-3">
                  <Award className="w-3.5 h-3.5" />
                  <span>{matchResult.matchPercentage}% MATCH SCORE</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
                  {matchResult.car.name}
                </h2>

                <p className="text-sm text-neutral-300 mt-3 font-light leading-relaxed">
                  &quot;{matchResult.explanation}&quot;
                </p>

                <p className="text-xs text-neutral-400 mt-2 font-light">
                  {matchResult.car.matchProfile.matchPitch}
                </p>

                <div className="grid grid-cols-3 gap-3 py-4 my-4 border-y border-white/10 text-center font-mono text-xs">
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] block">Price</span>
                    <span className="text-white font-bold text-sm">{matchResult.car.priceDisplay}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] block">Output</span>
                    <span className="text-white font-bold text-sm">{matchResult.car.horsepower} HP</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] block">0–100</span>
                    <span className="text-emerald-400 font-bold text-sm">{matchResult.car.zeroToHundred}s</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onSelectCar(matchResult.car.id)}
                    className="flex-1 py-3 px-6 rounded-full bg-red-600 hover:bg-red-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View & Configure 3D</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
