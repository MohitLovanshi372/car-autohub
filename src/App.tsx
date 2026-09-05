import React, { useState, useEffect } from 'react';
import { PageRoute } from './types/car';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickSearchModal } from './components/QuickSearchModal';
import { HomePage } from './pages/HomePage';
import { CarsExplorer } from './pages/CarsExplorer';
import { CarDetails } from './pages/CarDetails';
import { CarCompare } from './pages/CarCompare';
import { FindMyCar } from './pages/FindMyCar';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activeCarId, setActiveCarId] = useState<string>('apex-gt');
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>(['apex-gt', 'velora-x']);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Parse URL hash on initial load or popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('/cars/')) {
        const id = hash.replace('/cars/', '');
        setActiveCarId(id);
        setCurrentRoute('details');
      } else if (hash === '/cars' || hash === 'cars') {
        setCurrentRoute('cars');
      } else if (hash === '/compare' || hash === 'compare') {
        setCurrentRoute('compare');
      } else if (hash === '/find-my-car' || hash === 'find-my-car') {
        setCurrentRoute('find-my-car');
      } else if (hash === '/about' || hash === 'about') {
        setCurrentRoute('about');
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: PageRoute, carId?: string) => {
    setCurrentRoute(route);
    if (carId) {
      setActiveCarId(carId);
      window.location.hash = `/cars/${carId}`;
    } else {
      window.location.hash = route === 'home' ? '' : `/${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCar = (carId: string) => {
    navigateTo('details', carId);
  };

  const handleToggleCompare = (carId: string) => {
    if (selectedForCompare.includes(carId)) {
      setSelectedForCompare(selectedForCompare.filter((id) => id !== carId));
    } else {
      if (selectedForCompare.length >= 3) {
        // replace last
        setSelectedForCompare([...selectedForCompare.slice(1), carId]);
      } else {
        setSelectedForCompare([...selectedForCompare, carId]);
      }
    }
  };

  const handleRemoveCompare = (carId: string) => {
    setSelectedForCompare(selectedForCompare.filter((id) => id !== carId));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F3F4F6] flex flex-col justify-between selection:bg-red-600 selection:text-white">
      {/* 1. Global Transparent / Glass Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={(route) => navigateTo(route)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 2. Page Router Views */}
      <main className="flex-1 w-full">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={(route) => navigateTo(route)}
            onSelectCar={handleSelectCar}
          />
        )}

        {currentRoute === 'cars' && (
          <CarsExplorer
            onSelectCar={handleSelectCar}
            onAddToCompare={handleToggleCompare}
            selectedForCompare={selectedForCompare}
          />
        )}

        {currentRoute === 'details' && (
          <CarDetails
            carId={activeCarId}
            onBack={() => navigateTo('cars')}
            onNavigate={(route) => navigateTo(route)}
            onSelectCar={handleSelectCar}
            onAddToCompare={handleToggleCompare}
            isCompared={selectedForCompare.includes(activeCarId)}
          />
        )}

        {currentRoute === 'compare' && (
          <CarCompare
            selectedIds={selectedForCompare}
            onSelectCar={handleSelectCar}
            onRemoveCompare={handleRemoveCompare}
            onAddCompare={(id) => {
              if (!selectedForCompare.includes(id)) {
                setSelectedForCompare([...selectedForCompare.slice(0, 2), id]);
              }
            }}
          />
        )}

        {currentRoute === 'find-my-car' && (
          <FindMyCar onSelectCar={handleSelectCar} />
        )}

        {currentRoute === 'about' && (
          <AboutPage onNavigate={(route) => navigateTo(route)} />
        )}
      </main>

      {/* 3. Global Luxury Automotive Footer */}
      <Footer onNavigate={(route) => navigateTo(route)} />

      {/* 4. Quick Search Dialog */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCar={handleSelectCar}
      />
    </div>
  );
}

