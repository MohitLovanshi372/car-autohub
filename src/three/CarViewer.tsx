import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { CarModel, ProceduralCarFallback } from './CarModel';
import { Lighting } from './Lighting';
import { StudioEnvironment } from './Environment';
import {
  Maximize2,
  Minimize2,
  RotateCcw,
  Lightbulb,
  Eye,
  Box,
  Image as ImageIcon,
  Upload,
  Camera,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import { Car3DModelType } from '../types/car';

interface CarViewerProps {
  modelType?: Car3DModelType;
  modelPath?: string;
  colorHex?: string;
  wheelType?: 'aero' | 'sport' | 'performance' | 'carbon';
  interactive?: boolean;
  autoRotate?: boolean;
  height?: string;
  showControls?: boolean;
  className?: string;
  fallbackImageUrl?: string;
  images?: string[];
  carName?: string;
  initialMode?: '3d' | 'image';
  viewAngle?: 'exterior' | 'side' | 'front' | 'rear';
}

class ViewerErrorBoundary extends React.Component<{
  fallbackImageUrl?: string;
  colorHex?: string;
  children: React.ReactNode;
}, { hasError: boolean }> {
  constructor(props: { fallbackImageUrl?: string; colorHex?: string; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-[#070708] rounded-2xl overflow-hidden p-6 text-center">
          {this.props.fallbackImageUrl ? (
            <img
              src={this.props.fallbackImageUrl}
              alt="Automotive Preview"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          ) : null}
          <div className="relative z-10 glass-panel p-6 rounded-xl max-w-md bg-black/80 backdrop-blur-xl border border-white/10">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-2">
              Studio Photography Mode
            </span>
            <h4 className="text-lg font-bold text-white mb-2">Ultra-HD GT Visual</h4>
            <p className="text-sm text-neutral-400 mb-4">
              High-resolution photographic capture of the vehicle specification.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-semibold uppercase tracking-wider"
            >
              Retry 3D View
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export const CarViewer: React.FC<CarViewerProps> = ({
  modelType = 'gt-supercar',
  modelPath = '/models/car.glb',
  colorHex = '#b91c1c',
  wheelType = 'sport',
  interactive = true,
  autoRotate = false,
  height = 'h-[500px] md:h-[650px]',
  showControls = true,
  className = '',
  fallbackImageUrl = 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
  images,
  carName = 'Apex GT',
  initialMode = '3d',
  viewAngle = 'exterior'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Gallery list of images (fallback to fallbackImageUrl or default GT image)
  const imageList = images && images.length > 0 ? images : [fallbackImageUrl];

  const [viewerMode, setViewerMode] = useState<'3d' | 'image'>(initialMode);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lightsOn, setLightsOn] = useState(true);
  const [isRotating, setIsRotating] = useState(autoRotate);
  const [imageZoom, setImageZoom] = useState(false);

  // Synchronize when images change
  useEffect(() => {
    setActiveImageIndex(0);
  }, [images]);

  // Handle custom image upload (if user wants to use their own GT image)
  const handleCustomImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomImage(event.target.result as string);
          setViewerMode('image');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Camera presets for 3D mode
  const handleSetView = (view: 'three-quarter' | 'side' | 'front' | 'rear') => {
    if (!controlsRef.current) return;
    const controls = controlsRef.current;
    switch (view) {
      case 'three-quarter':
        controls.object.position.set(4.2, 1.8, 4.6);
        break;
      case 'side':
        controls.object.position.set(6.2, 1.2, 0);
        break;
      case 'front':
        controls.object.position.set(0, 1.1, 5.8);
        break;
      case 'rear':
        controls.object.position.set(0, 1.4, -5.8);
        break;
    }
    controls.target.set(0, 0.4, 0);
    controls.update();
  };

  const handleResetCamera = () => {
    handleSetView('three-quarter');
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const activeDisplayImage = customImage || imageList[activeImageIndex] || fallbackImageUrl;

  return (
    <ViewerErrorBoundary fallbackImageUrl={fallbackImageUrl} colorHex={colorHex}>
      <div
        ref={containerRef}
        className={`relative w-full ${isFullscreen ? 'fixed inset-0 z-50 h-screen bg-[#050505]' : height} select-none overflow-hidden rounded-2xl bg-radial from-[#121214] to-[#050505] ${className}`}
      >
        {/* Hidden File Input for Custom / Own GT Image */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleCustomImageUpload}
          accept="image/*"
          className="hidden"
        />

        {/* 3D WEBGL CANVAS VIEW */}
        {viewerMode === '3d' ? (
          <Canvas
            shadows
            dpr={[1, 2]}
            gl={{
              antialias: true,
              powerPreference: 'high-performance',
              stencil: false,
              depth: true
            }}
            camera={{ position: [4.2, 1.8, 4.6], fov: 40 }}
          >
            <color attach="background" args={['#070709']} />
            <fog attach="fog" args={['#070709', 8, 26]} />

            <Lighting intensity={lightsOn ? 1.0 : 0.35} />
            <StudioEnvironment showReflectiveFloor={true} />

            <Suspense
              fallback={
                <ProceduralCarFallback
                  colorHex={colorHex}
                  lightsOn={lightsOn}
                  wheelColor={wheelType === 'carbon' ? '#171717' : wheelType === 'performance' ? '#b45309' : '#d4d4d8'}
                />
              }
            >
              <CarModel
                modelType={modelType}
                modelPath={modelPath}
                colorHex={colorHex}
                wheelType={wheelType}
                lightsOn={lightsOn}
                autoRotateSpeed={isRotating ? 0.6 : 0}
              />
            </Suspense>

            <OrbitControls
              ref={controlsRef}
              enabled={interactive}
              enablePan={false}
              enableZoom={interactive}
              minDistance={2.8}
              maxDistance={9.5}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2 - 0.02}
              dampingFactor={0.06}
              enableDamping
              autoRotate={isRotating}
              autoRotateSpeed={0.8}
              target={[0, 0.35, 0]}
            />
          </Canvas>
        ) : (
          /* REAL HIGH-DEFINITION GT IMAGE VIEW */
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-[#0e0e12] via-[#08080a] to-[#040405] overflow-hidden">
            {/* Ambient Background Glow matching vehicle paint */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[150px] opacity-25 rounded-full pointer-events-none transition-colors duration-700"
              style={{ backgroundColor: colorHex }}
            />

            {/* Main High-Res GT Image */}
            <div
              className={`relative z-10 w-full h-full flex items-center justify-center p-6 cursor-pointer transition-transform duration-500 ${
                imageZoom ? 'scale-110' : 'scale-100'
              }`}
              onClick={() => setImageZoom(!imageZoom)}
              title="Click to toggle image zoom"
            >
              <img
                src={activeDisplayImage}
                alt={`${carName} High Resolution GT Image`}
                className="max-h-[85%] max-w-[95%] object-contain rounded-2xl shadow-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Angle Navigation Arrows if multiple photos */}
            {imageList.length > 1 && !customImage && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : imageList.length - 1));
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition-all"
                  title="Previous Angle"
                  aria-label="Previous Angle"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev < imageList.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition-all"
                  title="Next Angle"
                  aria-label="Next Angle"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Bottom Multi-Angle Thumbnails Bar in Image Mode */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 p-1.5 rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl">
              {imageList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCustomImage(null);
                    setActiveImageIndex(idx);
                  }}
                  className={`relative w-12 h-8 rounded-lg overflow-hidden border transition-all ${
                    !customImage && activeImageIndex === idx
                      ? 'border-red-500 ring-1 ring-red-500 scale-105 opacity-100'
                      : 'border-white/10 opacity-50 hover:opacity-90'
                  }`}
                  title={`Perspective 0${idx + 1}`}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}

              {/* Upload / Use Own GT Image Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
                  customImage
                    ? 'border-red-500 bg-red-950/40 text-red-300'
                    : 'border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white'
                }`}
                title="Upload or use your own GT image file"
              >
                <Upload className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">{customImage ? 'Custom GT Active' : 'Own GT Image'}</span>
              </button>
            </div>
          </div>
        )}

        {/* TOP BAR: MODE SWITCHER (3D vs GT IMAGE) & STATUS */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          {/* Primary View Switcher: 3D View vs GT Image */}
          <div className="flex items-center p-1 rounded-xl border border-white/15 bg-black/80 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setViewerMode('3d')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
                viewerMode === '3d'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Simulation</span>
            </button>

            <button
              onClick={() => setViewerMode('image')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
                viewerMode === 'image'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>GT Studio Image</span>
            </button>
          </div>

          {/* Active Car & Color Indicator */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colorHex }} />
            <span className="text-xs font-mono text-neutral-300">
              {carName}
            </span>
          </div>
        </div>

        {/* TOP RIGHT INTERACTIVE OVERLAY CONTROLS */}
        {showControls && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            {viewerMode === '3d' ? (
              <>
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  title={isRotating ? 'Pause Rotation' : 'Auto Rotate'}
                  aria-label={isRotating ? 'Pause Rotation' : 'Auto Rotate'}
                  className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                    isRotating
                      ? 'bg-red-600/30 text-white border-red-500/40'
                      : 'bg-black/60 text-neutral-300 border-white/10 hover:bg-neutral-800/80 hover:text-white'
                  }`}
                >
                  <RotateCcw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                </button>

                <button
                  onClick={() => setLightsOn(!lightsOn)}
                  title={lightsOn ? 'Matrix Headlights Active' : 'Headlights Off'}
                  aria-label={lightsOn ? 'Matrix Headlights Active' : 'Headlights Off'}
                  className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                    lightsOn
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                      : 'bg-black/60 text-neutral-400 border-white/10 hover:bg-neutral-800/80 hover:text-white'
                  }`}
                >
                  <Lightbulb className="w-4 h-4" />
                </button>

                <button
                  onClick={handleResetCamera}
                  title="Reset Camera Angle"
                  aria-label="Reset Camera Angle"
                  className="p-2.5 rounded-xl border border-white/10 bg-black/60 text-neutral-300 hover:bg-neutral-800/80 hover:text-white backdrop-blur-md transition-all"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload Your Own GT Image"
                  aria-label="Upload Your Own GT Image"
                  className="p-2.5 rounded-xl border border-white/10 bg-black/60 text-neutral-300 hover:bg-neutral-800/80 hover:text-white backdrop-blur-md transition-all flex items-center gap-1.5 text-xs font-mono"
                >
                  <Upload className="w-4 h-4 text-red-400" />
                  <span className="hidden sm:inline">Use Own GT Image</span>
                </button>

                <button
                  onClick={() => setImageZoom(!imageZoom)}
                  title="Zoom Image"
                  aria-label="Zoom Image"
                  className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                    imageZoom
                      ? 'bg-red-600/30 text-white border-red-500/40'
                      : 'bg-black/60 text-neutral-300 border-white/10 hover:bg-neutral-800/80 hover:text-white'
                  }`}
                >
                  <Camera className="w-4 h-4" />
                </button>
              </>
            )}

            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen View'}
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen View'}
              className="p-2.5 rounded-xl border border-white/10 bg-black/60 text-neutral-300 hover:bg-neutral-800/80 hover:text-white backdrop-blur-md transition-all"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* 3D CAMERA QUICK ANGLE PRESETS BAR (in 3D mode) */}
        {showControls && viewerMode === '3d' && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 p-1.5 rounded-full border border-white/10 bg-black/70 backdrop-blur-lg">
            <button
              onClick={() => handleSetView('three-quarter')}
              className="px-3 py-1 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              3/4 Angle
            </button>
            <button
              onClick={() => handleSetView('side')}
              className="px-3 py-1 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Profile
            </button>
            <button
              onClick={() => handleSetView('front')}
              className="px-3 py-1 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Front
            </button>
            <button
              onClick={() => handleSetView('rear')}
              className="px-3 py-1 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Rear
            </button>
          </div>
        )}

        {/* Status Hint */}
        <div className="absolute bottom-4 left-5 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-wider text-neutral-400/80 z-10">
          {viewerMode === '3d' ? (
            <>
              <span>DRAG TO ORBIT</span>
              <span>•</span>
              <span>SCROLL TO ZOOM</span>
            </>
          ) : (
            <>
              <span className="text-red-400 font-semibold">ULTRA-HD GT PHOTOGRAPHY</span>
              <span>•</span>
              <span>CLICK TO TOGGLE ZOOM</span>
            </>
          )}
        </div>
      </div>
    </ViewerErrorBoundary>
  );
};
