import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { FeaturedCarsSection } from '../sections/FeaturedCarsSection';
import { PerformanceSection } from '../sections/PerformanceSection';
import { TechnologySection } from '../sections/TechnologySection';
import { ImmersiveSection } from '../sections/ImmersiveSection';
import { AboutSection } from '../sections/AboutSection';
import { CtaSection } from '../sections/CtaSection';
import { PageRoute } from '../types/car';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onSelectCar: (carId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectCar }) => {
  return (
    <div className="w-full">
      {/* 1. Fullscreen Cinematic 3D Hero */}
      <HeroSection onNavigate={onNavigate} onSelectCar={onSelectCar} />

      {/* 2. Featured Cars Showcase */}
      <FeaturedCarsSection
        onSelectCar={onSelectCar}
        onExploreAll={() => onNavigate('cars')}
      />

      {/* 3. Performance & Dynamic Numbers */}
      <PerformanceSection />

      {/* 4. Technology Cards */}
      <TechnologySection />

      {/* 5. Immersive Detail Showcase */}
      <ImmersiveSection onNavigate={onNavigate} onSelectCar={onSelectCar} />

      {/* 6. About Manifesto & Pillars */}
      <AboutSection />

      {/* 7. Final Call to Action */}
      <CtaSection onNavigate={onNavigate} />
    </div>
  );
};
