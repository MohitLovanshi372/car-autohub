import React, { useState, useEffect } from 'react';
import { CARS_DATA, COLOR_OPTIONS, WHEEL_OPTIONS } from '../data/cars';
import { CarViewer } from '../three/CarViewer';
import {
  ArrowLeft,
  Zap,
  Gauge,
  Flame,
  Shield,
  Sliders,
  Scale,
  Check,
  Disc,
  Layers,
  Sparkles,
  Share2,
  ChevronRight,
  Compass,
  RotateCcw,
  Box
} from 'lucide-react';
import { PageRoute, Car3DModelType } from '../types/car';

interface CarDetailsProps {
  carId: string;
  onBack: () => void;
  onNavigate: (route: PageRoute) => void;
  onSelectCar?: (carId: string) => void;
  onAddToCompare: (carId: string) => void;
  isCompared: boolean;
}

const MODEL_TYPE_CONFIG: Record<Car3DModelType, { label: string; icon: any; desc: string }> = {
  'gt-supercar': {
    label: 'GT Supercar',
    icon: Zap,
    desc: 'High-downforce aerodynamic chassis with carbon diffuser & wing'
  },
  'luxury-sedan': {
    label: 'Luxury Sedan',
    icon: Sliders,
    desc: 'Executive 4-door long wheelbase with panoramic glass & waterfall grille'
  },
  'performance-suv': {
    label: 'Performance 4x4 SUV',
    icon: Shield,
    desc: 'High ground clearance, oversized all-terrain tires & roof rack'
  },
  'cyber-hypercar': {
    label: 'Cyber Electric Hypercar',
    icon: Sparkles,
    desc: 'Low-slung Le Mans aerodynamic prototype with dorsal aero fin & cyan photonic optics'
  },
  'sport-coupe': {
    label: 'Sport Coupe',
    icon: Flame,
    desc: 'Muscular fastback with power-dome hood & ducktail spoiler'
  }
};

export const CarDetails: React.FC<CarDetailsProps> = ({
  carId,
  onBack,
  onNavigate,
  onSelectCar,
  onAddToCompare,
  isCompared
}) => {
  const car = CARS_DATA.find((c) => c.id === carId) || CARS_DATA[0];

  // Configurator state initialized from specific car defaults
  const [selectedColorKey, setSelectedColorKey] = useState<string>(car.signatureColorName || 'Racing Red');
  const [selectedModelType, setSelectedModelType] = useState<Car3DModelType>(car.modelType || 'gt-supercar');
  const [selectedWheelId, setSelectedWheelId] = useState<'aero' | 'sport' | 'performance' | 'carbon'>('sport');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [configCopied, setConfigCopied] = useState(false);

  // Synchronize dynamic model and signature color whenever the selected car changes
  useEffect(() => {
    setSelectedColorKey(car.signatureColorName || 'Racing Red');
    setSelectedModelType(car.modelType || 'gt-supercar');
    setActiveGalleryIndex(0);
  }, [car.id, car.signatureColorName, car.modelType]);

  const activeColor = COLOR_OPTIONS[selectedColorKey] || COLOR_OPTIONS[car.signatureColorName] || COLOR_OPTIONS['Racing Red'];
  const activeWheel = WHEEL_OPTIONS.find((w) => w.id === selectedWheelId) || WHEEL_OPTIONS[0];

  const handleShareConfig = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(window.location.href);
      setConfigCopied(true);
      setTimeout(() => setConfigCopied(false), 2000);
    }
  };

  const handleResetToCarDefaults = () => {
    setSelectedColorKey(car.signatureColorName);
    setSelectedModelType(car.modelType);
    setSelectedWheelId('sport');
  };

  const otherCars = CARS_DATA.filter((c) => c.id !== car.id);

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between py-4 mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Collection</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onAddToCompare(car.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border flex items-center gap-2 transition-all ${
                isCompared
                  ? 'bg-red-600 text-white border-red-500'
                  : 'bg-neutral-900 text-neutral-300 border-white/10 hover:bg-neutral-800'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{isCompared ? 'Added to Compare' : 'Compare This Car'}</span>
            </button>

            <button
              onClick={handleShareConfig}
              className="p-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="Share Specification"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {configCopied && (
              <span className="text-xs text-emerald-400 font-mono animate-in fade-in">Link Copied!</span>
            )}
          </div>
        </div>

        {/* Title Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-red-600 text-white shadow-sm">
              {car.brand}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-neutral-900 text-neutral-300 border border-white/10">
              {car.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-red-950/60 text-red-400 border border-red-900/40">
              {car.fuelType}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-white/5 text-neutral-300 border border-white/10">
              3D Architecture: {MODEL_TYPE_CONFIG[selectedModelType]?.label}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {car.transmission} Transmission
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase">
                {car.name}
              </h1>
              <p className="text-lg text-neutral-400 mt-2 font-light max-w-2xl">
                {car.tagline}
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs font-mono uppercase text-neutral-400 block">Base Price</span>
              <span className="text-3xl sm:text-4xl font-display font-bold text-white">
                {car.priceDisplay}
              </span>
            </div>
          </div>
        </div>

        {/* 3D Model Architecture & Color Status Bar */}
        <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#0c0c10] mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-5 h-5 rounded-full border border-white/30 flex-shrink-0 shadow-md"
              style={{ backgroundColor: activeColor.hex }}
            />
            <div className="text-xs font-mono">
              <span className="text-neutral-400">Current 3D View: </span>
              <span className="text-white font-bold">{car.name}</span>
              <span className="text-neutral-400"> in </span>
              <span className="text-red-400 font-semibold">{selectedColorKey}</span>
              <span className="text-neutral-500"> ({MODEL_TYPE_CONFIG[selectedModelType]?.label})</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 uppercase mr-1 hidden sm:inline">
              Switch 3D Body Style:
            </span>
            {(['gt-supercar', 'luxury-sedan', 'performance-suv', 'cyber-hypercar', 'sport-coupe'] as Car3DModelType[]).map((type) => {
              const info = MODEL_TYPE_CONFIG[type];
              const isCurrent = selectedModelType === type;
              return (
                <button
                  key={type}
                  onClick={() => setSelectedModelType(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/30'
                      : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/5'
                  }`}
                  title={info.desc}
                >
                  <Box className="w-3 h-3" />
                  <span>{info.label.split(' ')[0]}</span>
                </button>
              );
            })}
            <button
              onClick={handleResetToCarDefaults}
              className="p-1.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white transition-colors"
              title="Reset to Model Defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3D CAR VIEWER VIEWPORT */}
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/80 bg-gradient-to-b from-[#101014] to-[#060608] mb-16">
          <CarViewer
            modelType={selectedModelType}
            modelPath={car.modelPath || '/models/car.glb'}
            colorHex={activeColor.hex}
            wheelType={selectedWheelId}
            height="h-[480px] sm:h-[620px] lg:h-[700px]"
            showControls={true}
            autoRotate={false}
            fallbackImageUrl={car.images[0]}
            images={car.images}
            carName={car.name}
          />
        </div>

        {/* 3D COLOR & WHEEL CONFIGURATOR */}
        <div id="configurator" className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#0b0b0e] mb-20 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block mb-1">
                Interactive Studio Configurator
              </span>
              <h2 className="text-3xl font-display font-bold text-white uppercase">
                PERSONALIZE YOUR SPECIFICATION.
              </h2>
            </div>
            <div className="text-sm font-mono text-neutral-400">
              Paint: <span className="text-white font-bold">{selectedColorKey}</span> • Wheel:{' '}
              <span className="text-neutral-200">{activeWheel.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Color Configurator */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-500" />
                <span>Automotive Paint Palette ({Object.keys(COLOR_OPTIONS).length} Finishes)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                {Object.entries(COLOR_OPTIONS).map(([name, opt]) => {
                  const isSelected = selectedColorKey === name;
                  const isCarSignature = car.signatureColorName === name;
                  return (
                    <button
                      key={name}
                      onClick={() => setSelectedColorKey(name)}
                      className={`p-3.5 rounded-2xl border text-left flex items-center gap-3.5 transition-all ${
                        isSelected
                          ? 'border-red-500 bg-red-950/20 shadow-lg shadow-red-950/30'
                          : 'border-white/[0.06] bg-neutral-900/50 hover:bg-neutral-800 hover:border-white/15'
                      }`}
                    >
                      <div
                        className="w-9 h-9 rounded-full border border-white/20 shadow-inner flex-shrink-0"
                        style={{ backgroundColor: opt.hex }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-display font-bold text-white flex items-center justify-between">
                          <span className="truncate">{name}</span>
                          <div className="flex items-center gap-1">
                            {isCarSignature && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-red-600/30 text-red-400 border border-red-500/30">
                                Signature
                              </span>
                            )}
                            {isSelected && <Check className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-neutral-400 truncate mt-0.5">{opt.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Wheel Configurator */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-4 flex items-center gap-2">
                <Disc className="w-4 h-4 text-red-500" />
                <span>Forged Alloy Wheel Packages</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHEEL_OPTIONS.map((wheel) => {
                  const isSelected = selectedWheelId === wheel.id;
                  return (
                    <button
                      key={wheel.id}
                      onClick={() => setSelectedWheelId(wheel.id as any)}
                      className={`p-3.5 rounded-2xl border text-left flex items-center gap-3.5 transition-all ${
                        isSelected
                          ? 'border-red-500 bg-red-950/20 shadow-lg shadow-red-950/30'
                          : 'border-white/[0.06] bg-neutral-900/50 hover:bg-neutral-800 hover:border-white/15'
                      }`}
                    >
                      <div
                        className="w-9 h-9 rounded-full border border-white/20 shadow-inner flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: wheel.rimColor || '#d4d4d8' }}
                      >
                        <Disc className="w-5 h-5 text-white/70" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-display font-bold text-white flex items-center justify-between">
                          <span>{wheel.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-red-400" />}
                        </div>
                        <p className="text-[11px] text-neutral-400 truncate mt-0.5">{wheel.spec}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 3D Chassis Architecture Explainer */}
              <div className="mt-6 p-4 rounded-2xl border border-white/[0.06] bg-neutral-900/30">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase text-neutral-300 font-semibold">
                  <Box className="w-4 h-4 text-red-500" />
                  <span>Chassis Architecture: {MODEL_TYPE_CONFIG[selectedModelType]?.label}</span>
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {MODEL_TYPE_CONFIG[selectedModelType]?.desc}. High-precision PBR multi-coat lacquer, tinted optical glass, and active lighting shaders respond live in the 3D viewport.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PERFORMANCE METRICS BENTO GRID */}
        <div className="mb-20">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block mb-1">
              Telemetry & Output
            </span>
            <h2 className="text-3xl font-display font-bold text-white uppercase">
              ENGINEERING BENCHMARKS.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c10]">
              <div className="flex items-center gap-2 text-neutral-400 mb-2">
                <Flame className="w-4 h-4 text-red-500" />
                <span className="text-xs font-mono uppercase">Horsepower</span>
              </div>
              <div className="text-3xl sm:text-4xl font-display font-black text-white">
                {car.horsepower}
                <span className="text-sm font-normal text-neutral-400 ml-1">HP</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c10]">
              <div className="flex items-center gap-2 text-neutral-400 mb-2">
                <Gauge className="w-4 h-4 text-red-500" />
                <span className="text-xs font-mono uppercase">0–100 km/h</span>
              </div>
              <div className="text-3xl sm:text-4xl font-display font-black text-white">
                {car.zeroToHundred}
                <span className="text-sm font-normal text-neutral-400 ml-1">sec</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c10]">
              <div className="flex items-center gap-2 text-neutral-400 mb-2">
                <Zap className="w-4 h-4 text-red-500" />
                <span className="text-xs font-mono uppercase">Top Speed</span>
              </div>
              <div className="text-3xl sm:text-4xl font-display font-black text-white">
                {car.topSpeed}
                <span className="text-sm font-normal text-neutral-400 ml-1">km/h</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c10]">
              <div className="flex items-center gap-2 text-neutral-400 mb-2">
                <Shield className="w-4 h-4 text-red-500" />
                <span className="text-xs font-mono uppercase">Safety Rating</span>
              </div>
              <div className="text-xl sm:text-2xl font-display font-bold text-white truncate">
                {car.safetyRating.split(' ')[0]}
              </div>
              <div className="text-[11px] text-neutral-400 font-mono mt-1">
                {car.safetyRating}
              </div>
            </div>
          </div>
        </div>

        {/* HIGH RESOLUTION REAL PHOTOGRAPHY GALLERY */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block mb-1">
                Exterior & Interior Visuals
              </span>
              <h3 className="text-2xl font-display font-bold text-white uppercase">
                GALLERY & PERSPECTIVES
              </h3>
            </div>
            <div className="text-xs font-mono text-neutral-400">
              Image {activeGalleryIndex + 1} of {car.images.length}
            </div>
          </div>

          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-white/[0.08] mb-4 bg-black">
            <img
              src={car.images[activeGalleryIndex]}
              alt={`${car.name} High Resolution View`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {car.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                  activeGalleryIndex === idx
                    ? 'border-red-500 ring-2 ring-red-500/40'
                    : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* EXPLORE OTHER 3D MODELS IN COLLECTION */}
        {onSelectCar && otherCars.length > 0 && (
          <div className="mb-20">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block mb-1">
                Fleet Collection
              </span>
              <h3 className="text-2xl font-display font-bold text-white uppercase">
                TEST OTHER 3D MODELS & ARCHITECTURES
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherCars.slice(0, 4).map((otherCar) => (
                <div
                  key={otherCar.id}
                  onClick={() => onSelectCar(otherCar.id)}
                  className="p-5 rounded-2xl border border-white/[0.06] bg-[#0a0a0d] hover:bg-neutral-900/60 hover:border-red-500/40 transition-all cursor-pointer group"
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-neutral-950">
                    <img
                      src={otherCar.images[0]}
                      alt={otherCar.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 backdrop-blur-md text-white border border-white/10">
                      {otherCar.category}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-display font-bold text-white group-hover:text-red-400 transition-colors">
                      {otherCar.name}
                    </h4>
                    <div
                      className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: otherCar.signatureColor }}
                      title={`Signature: ${otherCar.signatureColorName}`}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>{otherCar.priceDisplay}</span>
                    <span className="text-red-400 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      View 3D <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final Reservation CTA */}
        <div className="p-10 rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-950/40 via-[#100c0e] to-black text-center relative overflow-hidden">
          <h3 className="text-3xl font-display font-black text-white uppercase mb-3">
            READY TO ORDER YOUR {car.name.toUpperCase()}?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto font-light mb-8">
            Your customized build configuration ({selectedColorKey} paint with {activeWheel.name} forged wheels on {MODEL_TYPE_CONFIG[selectedModelType]?.label}) is configured and ready for VIP delivery allocation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                alert(`VIP Build Allocation reserved for ${car.name} in ${selectedColorKey} with ${activeWheel.name} on ${MODEL_TYPE_CONFIG[selectedModelType]?.label}. An AutoHub concierge will prepare your handover.`);
              }}
              className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-red-600/30 active:scale-95"
            >
              Reserve VIP Allocation
            </button>
            <button
              onClick={() => onNavigate('compare')}
              className="px-8 py-3.5 rounded-full border border-white/20 bg-black/40 hover:bg-white/10 text-white font-display font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all active:scale-95"
            >
              Compare With Others
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
