import { Car, CarColorOption, WheelOption } from '../types/car';

export const CARS_DATA: Car[] = [
  {
    id: 'apex-gt',
    name: 'Apex GT',
    brand: 'Apex',
    tagline: 'Pure aerodynamic aggression and unbridled V8 twin-turbocharged fury.',
    category: 'Sports',
    modelType: 'gt-supercar',
    modelPath: '/models/car.glb',
    signatureColor: '#b91c1c',
    signatureColorName: 'Racing Red',
    price: 18500000,
    priceDisplay: '₹1.85 Cr',
    horsepower: 720,
    torque: 800,
    zeroToHundred: 2.9,
    topSpeed: 340,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    efficiency: '7.8 km/l',
    safetyRating: '5-Star Euro NCAP',
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['Racing Red', 'Obsidian Black', 'Pearl White', 'Titanium Silver', 'Midnight Blue'],
    features: [
      'Active Carbon Aero Wing',
      'Titanium Quad Exhaust System',
      'Carbon-Ceramic Matrix Brakes',
      'Telemetry Track Recorder',
      'Magnetorheological Suspension'
    ],
    description: 'The Apex GT represents the pinnacle of track-focused engineering distilled into a street-legal sculpture. Sculpted by wind-tunnel refinement, every curve actively channels airflow for downforce and brake cooling.',
    exteriorDesign: 'Hand-crafted dry carbon weave chassis with sculpted intake nacelles and ultra-thin matrix LED signature lighting. Low-slung front splitter with functional air curtains.',
    techFeatures: [
      {
        title: 'Dynamic Torque Vectoring',
        description: 'Instantaneous electronic differential calculates millisecond wheel slip for surgical corner exit velocity.',
        icon: 'Zap'
      },
      {
        title: 'Active Aero Flaps',
        description: 'Front and rear motorized flaps adjust angles of attack from 0° to 38° under high-g braking.',
        icon: 'Wind'
      },
      {
        title: 'Telemetry HUD Cockpit',
        description: 'Fighter-jet inspired projection displaying lateral G-forces, tire temperatures, and optimum apex shift lights.',
        icon: 'Gauge'
      }
    ],
    matchProfile: {
      budget: '₹50L+',
      purposes: ['Performance'],
      fuel: ['Petrol'],
      transmission: ['Automatic'],
      priorities: ['Performance'],
      matchPitch: 'The ultimate supercar match for track thrills, blistering 0–100 km/h acceleration, and commanding street presence.'
    }
  },
  {
    id: 'bmw-m4-competition',
    name: 'BMW M4 Competition',
    brand: 'BMW',
    tagline: 'Unfiltered M TwinPower Turbo inline-6 dominance and track-honed carbon fiber precision.',
    category: 'Sports',
    modelType: 'gt-supercar',
    modelPath: '/models/car.glb',
    signatureColor: '#0284c7',
    signatureColorName: 'Portimao Blue',
    price: 15300000,
    priceDisplay: '₹1.53 Cr',
    horsepower: 510,
    torque: 650,
    zeroToHundred: 3.5,
    topSpeed: 290,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    efficiency: '10.1 km/l',
    safetyRating: '5-Star Euro NCAP',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['Portimao Blue', 'Isle of Man Green', 'Sao Paulo Yellow', 'Obsidian Black', 'Titanium Silver'],
    features: [
      'M TwinPower Turbo 3.0L Inline-6 Engine',
      'M xDrive AWD with Pure 2WD Drift Mode',
      'Carbon-Fiber Reinforced Plastic (CFRP) Roof',
      'M Compound Brakes with Blue Calipers',
      'Adaptive M Suspension with Active Dampers'
    ],
    description: 'The BMW M4 Competition Coupé sets the benchmark for high-performance sports coupés. Powered by the high-revving 510 hp BMW M TwinPower Turbo engine, it fuses daily usability with blistering race-track agility.',
    exteriorDesign: 'Frameless vertical kidney grille, aerodynamic M exterior mirrors, flared athletic wheel arches, and prominent rear diffuser framing the signature dual twin exhaust tailpipes.',
    techFeatures: [
      {
        title: 'M Setup & Drift Analyzer',
        description: 'Configure engine, chassis, steering, and braking responsiveness individually; track drift duration and yaw angles on the central display.',
        icon: 'Gauge'
      },
      {
        title: 'BMW Curved Display with OS 8.5',
        description: '12.3-inch information display combined seamlessly with a 14.9-inch control display tailored with bespoke M graphics.',
        icon: 'Activity'
      },
      {
        title: 'M Carbon Bucket Seats',
        description: 'Track-ready bucket architecture shaving 9.6 kg, offering supreme lateral bolster support with visible exposed carbon shells.',
        icon: 'Feather'
      }
    ],
    matchProfile: {
      budget: '₹50L+',
      purposes: ['Performance', 'Daily commute'],
      fuel: ['Petrol'],
      transmission: ['Automatic'],
      priorities: ['Performance', 'Technology'],
      matchPitch: 'Legendary BMW M high-performance engineering tailored for dynamic road presence and visceral track capabilities.'
    }
  },
  {
    id: 'tata-harrier-dark',
    name: 'Tata Harrier #Dark',
    brand: 'Tata',
    tagline: 'Born of Land Rover D8 pedigree, commanding OMEGARC posture, and sinister stealth styling.',
    category: 'SUV',
    modelType: 'performance-suv',
    signatureColor: '#0f172a',
    signatureColorName: 'Oberon Black',
    price: 2650000,
    priceDisplay: '₹26.5 Lakh',
    horsepower: 170,
    torque: 350,
    zeroToHundred: 9.8,
    topSpeed: 195,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    range: 920,
    efficiency: '16.8 km/l',
    safetyRating: '5-Star Bharat NCAP (Highest Ever Score)',
    images: [
      'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['Oberon Black', 'Daytona Grey', 'Sunlit Gold', 'Pearl White'],
    features: [
      'OMEGARC Architecture derived from Land Rover D8',
      'Level 2 ADAS Safety Suite (11 Autonomous Functions)',
      '12.3-inch Cinematic Touchscreen with Wireless CarPlay',
      'JBL 9-Speaker Audio with Subwoofer & Advanced DSP',
      'Terrain Response Modes (Normal, Rough, Wet)'
    ],
    description: 'The Tata Harrier #Dark edition commands undivided street authority. Built on the legendary Land Rover D8 derived OMEGARC architecture, it offers class-leading 5-star crash safety and velvet-smooth long-distance touring comfort.',
    exteriorDesign: 'Monochromatic Oberon Black exterior with piano black grille inserts, connected bi-LED projector headlamps, aerodynamic roof spoiler, and 19-inch diamond-cut alloy wheels.',
    techFeatures: [
      {
        title: '360° 3D Surround Camera & Blind View',
        description: 'Multi-perspective high-definition cameras project seamless overhead terrain and activate blind-spot feeds on indicator engagement.',
        icon: 'Eye'
      },
      {
        title: 'Ventilated Front Seats with Memory',
        description: 'Perforated Benecke-Kaliko leatherette seating with 3-stage active seat cooling and electronic driver memory positioning.',
        icon: 'Wind'
      },
      {
        title: 'Electronic Stability Program (ESP 9.3+)',
        description: 'Includes Corner Stability Control, Hill Hold, Hill Descent Control, and Off-Road ABS for unflinching stability.',
        icon: 'Shield'
      }
    ],
    matchProfile: {
      budget: '₹20L',
      purposes: ['Family', 'Adventure', 'Daily commute'],
      fuel: ['Diesel'],
      transmission: ['Automatic'],
      priorities: ['Safety', 'Comfort'],
      matchPitch: 'The undisputed flagship Indian SUV for robust safety, Land Rover suspension heritage, and dominating road presence.'
    }
  },
  {
    id: 'hyundai-ioniq-5',
    name: 'Hyundai Ioniq 5',
    brand: 'Hyundai',
    tagline: 'Futuristic Parametric Pixel aesthetics, ultra-fast 800V charging, and expansive smart lounge cabin.',
    category: 'Electric',
    modelType: 'cyber-hypercar',
    signatureColor: '#d97706',
    signatureColorName: 'Gravity Gold Matte',
    price: 4650000,
    priceDisplay: '₹46.5 Lakh',
    horsepower: 305,
    torque: 605,
    zeroToHundred: 5.2,
    topSpeed: 185,
    fuelType: 'Electric',
    transmission: 'Automatic',
    range: 631,
    efficiency: '14.2 kWh/100km',
    safetyRating: '5-Star Euro NCAP',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['Gravity Gold Matte', 'Cyber Cyan', 'Pearl White', 'Obsidian Black'],
    features: [
      '800V Ultra-Rapid Architecture (10% to 80% in 18 mins)',
      'Vehicle-to-Load (V2L) Power Supply up to 3.6 kW',
      'Relaxation Front Comfort Seats with Calf Supports',
      'Augmented Reality (AR) Heads-Up Display',
      'Hyundai SmartSense Level 2 ADAS Suite'
    ],
    description: 'The Hyundai Ioniq 5 is a revolutionary electric vehicle crowned World Car of the Year. Built upon the bespoke E-GMP modular electric platform, it transforms automotive travel into an expansive, sustainable mobile lounge.',
    exteriorDesign: 'Sharp clamshell bonnet, signature Parametric Pixel LED headlamps and taillights, flush automated door handles, and aero-optimized 20-inch geometric wheels.',
    techFeatures: [
      {
        title: 'Universal Island & Flat Floor',
        description: 'Sliding center console moves up to 140 mm backward, providing unprecedented cockpit flexibility and walk-through space.',
        icon: 'Sliders'
      },
      {
        title: 'Vehicle-to-Load (V2L) Bi-directional',
        description: 'Power high-wattage electric appliances, laptops, camping gear, or even rescue charge other electric vehicles with 230V AC output.',
        icon: 'Zap'
      },
      {
        title: 'Augmented Reality HUD',
        description: 'Turns the windshield into a 44-inch virtual projection overlaying navigational guidance arrows directly onto road surfaces.',
        icon: 'Eye'
      }
    ],
    matchProfile: {
      budget: '₹50L+',
      purposes: ['Daily commute', 'Family', 'Luxury'],
      fuel: ['Electric'],
      transmission: ['Automatic'],
      priorities: ['Technology', 'Comfort', 'Mileage'],
      matchPitch: 'Pioneering electric crossover with 800V rapid charging, whisper-quiet cabin space, and cutting-edge tech.'
    }
  },
  {
    id: 'velora-x',
    name: 'Velora X',
    brand: 'Velora',
    tagline: 'First-class aeronautical luxury fused with all-terrain intelligent AWD capability.',
    category: 'Sedan',
    modelType: 'luxury-sedan',
    signatureColor: '#1e3a8a',
    signatureColorName: 'Midnight Blue',
    price: 12500000,
    priceDisplay: '₹1.25 Cr',
    horsepower: 580,
    torque: 850,
    zeroToHundred: 3.9,
    topSpeed: 290,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    range: 820,
    efficiency: '14.2 km/l',
    safetyRating: '5-Star Euro NCAP',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['Midnight Blue', 'Obsidian Black', 'Pearl White', 'Titanium Silver'],
    features: [
      'Executive Rear Lounge with Recline',
      'Active Height-Variable Air Suspension',
      'Bespoke Burmester 3D Soundstage',
      'Quad-Zone Autonomous Climate Concierge',
      'Night Vision Pedestrian Detection'
    ],
    description: 'The Velora X redefines executive luxury saloons. It marries twin-turbo power with silent hybrid cruising, double-laminated acoustic glass, and an ultra-smooth long-wheelbase ride.',
    exteriorDesign: 'Sleek monolithic silhouette featuring hidden flush door handles, illuminated waterfall chrome cascade grille, and 22-inch forged alloy multi-spoke wheels.',
    techFeatures: [
      {
        title: 'Magic Carpet Ride Control',
        description: 'Forward stereoscopic cameras scan road imperfections 15 meters ahead, adjusting damping milliseconds before impact.',
        icon: 'Eye'
      },
      {
        title: 'Whisper-Quiet Acoustic Glass',
        description: 'Double laminated acoustic glazing paired with active speaker noise cancellation drops interior cabin noise by 18 dB.',
        icon: 'VolumeX'
      },
      {
        title: 'Executive Panoramic Sky Roof',
        description: 'Electrochromic glass adjusts transparency from 1% to 100% opacity with individual left/right quadrant controls.',
        icon: 'Sun'
      }
    ],
    matchProfile: {
      budget: '₹50L+',
      purposes: ['Family', 'Luxury', 'Daily commute'],
      fuel: ['Hybrid', 'Petrol'],
      transmission: ['Automatic'],
      priorities: ['Comfort', 'Safety', 'Technology'],
      matchPitch: 'First-class luxury sedan engineered for executive chauffeur comfort, whisper-quiet highway cruising, and distinguished presence.'
    }
  },
  {
    id: 'strada-rs',
    name: 'Strada RS',
    brand: 'Strada',
    tagline: 'The uncompromising performance coupe engineered to dominate mountain switchbacks.',
    category: 'Sports',
    modelType: 'sport-coupe',
    signatureColor: '#71717a',
    signatureColorName: 'Titanium Silver',
    price: 8800000,
    priceDisplay: '₹88 Lakh',
    horsepower: 505,
    torque: 650,
    zeroToHundred: 3.6,
    topSpeed: 305,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    efficiency: '9.4 km/l',
    safetyRating: '5-Star Global NCAP',
    images: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['Titanium Silver', 'Obsidian Black', 'Racing Red', 'Midnight Blue'],
    features: [
      'Sport Differential with Drift Mode',
      'Alcantara & Carbon Fiber Interior',
      'Valved Sport Exhaust System',
      'HUD with G-Meter and Lap Timer',
      'Adaptive Matrix Laser Headlights'
    ],
    description: 'Combining athletic poise with race-bred adrenaline, Strada RS delivers a true 50:50 weight distribution and precise hydraulic-like steering feel.',
    exteriorDesign: 'Flared muscular wheel arches, functional front fender heat extractors, integrated carbon boot-lid ducktail spoiler, and quad oval gloss-black exhaust tips.',
    techFeatures: [
      {
        title: 'Launch Control Pro',
        description: 'Optimizes clutch engagement and boost pre-charging for repeatable neck-snapping 3.6s launches.',
        icon: 'Gauge'
      },
      {
        title: 'Laser Matrix Illumination',
        description: 'Cuts through darkness up to 600 meters while dynamically masking oncoming traffic beams.',
        icon: 'Sun'
      },
      {
        title: 'Adaptive Chassis Control',
        description: 'Switches effortlessly from daily supple city commuter to razor-sharp track weapon at the press of a steering dial.',
        icon: 'Sliders'
      }
    ],
    matchProfile: {
      budget: '₹50L+',
      purposes: ['Daily commute', 'Performance'],
      fuel: ['Petrol'],
      transmission: ['Automatic'],
      priorities: ['Performance', 'Technology'],
      matchPitch: 'Precision coupe tailored for high-speed highway touring, exhilarating dynamics, and daily professional elegance.'
    }
  },
  {
    id: 'titan-x',
    name: 'Titan X',
    brand: 'Titan',
    tagline: 'Commanding power and expedition-grade armor for uncompromising explorers.',
    category: 'SUV',
    modelType: 'performance-suv',
    signatureColor: '#14532d',
    signatureColorName: 'British Racing Green',
    price: 9400000,
    priceDisplay: '₹94 Lakh',
    horsepower: 440,
    torque: 700,
    zeroToHundred: 5.2,
    topSpeed: 240,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    range: 950,
    efficiency: '12.8 km/l',
    safetyRating: '5-Star Euro NCAP',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['British Racing Green', 'Obsidian Black', 'Titanium Silver', 'Pearl White'],
    features: [
      'Triple Locking Differentials',
      'Wading Sensor up to 900mm',
      'Reinforced Underbody Skid Plates',
      'Roof Expedition Rack System',
      'Auxiliary Off-Road Lightbar'
    ],
    description: 'Titan X is built for rugged territories without compromising bespoke cabin opulence. It tackles steep gradients, desert dunes, and frozen terrain with serene composure.',
    exteriorDesign: 'Boxy geometric 4x4 architecture with high ground clearance, oversized all-terrain tires, roof rack LED lights, and heavy-duty protective rocker rails.',
    techFeatures: [
      {
        title: 'ClearSight Transparent Hood',
        description: 'Virtual under-car camera displays terrain directly beneath the engine on the center console.',
        icon: 'Camera'
      },
      {
        title: 'High-Articulation Suspension',
        description: 'Provides over 320mm of wheel travel to keep all four contact patches grounded on jagged rock scrambles.',
        icon: 'Layers'
      },
      {
        title: 'Heavy Duty Winch & Recovery',
        description: 'Integrated 4.5-ton remote-controlled recovery winch tucked into front chassis crossmember.',
        icon: 'Shield'
      }
    ],
    matchProfile: {
      budget: '₹50L+',
      purposes: ['Adventure', 'Family'],
      fuel: ['Diesel'],
      transmission: ['Automatic'],
      priorities: ['Safety', 'Comfort'],
      matchPitch: 'The quintessential expedition machine for cross-country exploration, maximum towing, and impregnable safety.'
    }
  },
  {
    id: 'spectre-ev',
    name: 'Spectre EV',
    brand: 'Spectre',
    tagline: 'Silent hyper-acceleration and futuristic aerodynamic architectural minimalism.',
    category: 'Electric',
    modelType: 'cyber-hypercar',
    signatureColor: '#06b6d4',
    signatureColorName: 'Cyber Cyan',
    price: 14500000,
    priceDisplay: '₹1.45 Cr',
    horsepower: 780,
    torque: 1050,
    zeroToHundred: 2.4,
    topSpeed: 320,
    fuelType: 'Electric',
    transmission: 'Automatic',
    range: 650,
    efficiency: '16.5 kWh/100km',
    safetyRating: '5-Star NHTSA & Euro NCAP',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['Cyber Cyan', 'Pearl White', 'Obsidian Black', 'Galactic Violet'],
    features: [
      '800V Ultra-Fast Architecture (10-80% in 16 mins)',
      'Tri-Motor All-Wheel Drive with Torque Vectoring',
      'Pillar-to-Pillar 55-inch OLED Hyperscreen',
      'Level 3 Autonomous Driving Hardware',
      'Zero-Drag Flush Aerodynamic Wheels'
    ],
    description: 'Spectre EV represents the next paradigm of automotive velocity. Instant torque propels occupants with aerospace-grade silence, accompanied by an intelligent spatial audio soundscape.',
    exteriorDesign: 'Ultra-low coefficient of drag (0.20 Cd) fastback profile with active aero dorsal fin, bubble canopy, and continuous lightband photonic optics.',
    techFeatures: [
      {
        title: '800V Hyper-Charge System',
        description: 'Adds up to 350 km of driving range in just 10 minutes at 350kW DC rapid charging stations.',
        icon: 'Zap'
      },
      {
        title: 'Autonomous Pilot Pro',
        description: 'Dual LiDAR, 12 ultrasonic sensors, and 8 high-definition surround cameras enable hands-free highway lane changes.',
        icon: 'Radio'
      },
      {
        title: 'Predictive Range Optimizer',
        description: 'Integrates live topography, ambient temperature, and headwind telemetry to forecast battery reserve to within 1%.',
        icon: 'Cpu'
      }
    ],
    matchProfile: {
      budget: '₹50L+',
      purposes: ['Performance', 'Daily commute', 'Luxury'],
      fuel: ['Electric'],
      transmission: ['Automatic'],
      priorities: ['Technology', 'Performance', 'Comfort'],
      matchPitch: 'Unmatched 2.4s hypercar acceleration combined with zero emissions, class-leading range, and avant-garde cabin screens.'
    }
  },
  {
    id: 'lumina-coupe',
    name: 'Lumina Coupe',
    brand: 'Lumina',
    tagline: 'Timeless Grand Touring proportions with handcrafted leather and an analog soul.',
    category: 'Luxury',
    modelType: 'sport-coupe',
    signatureColor: '#d97706',
    signatureColorName: 'Tuscan Gold',
    price: 16500000,
    priceDisplay: '₹1.65 Cr',
    horsepower: 630,
    torque: 760,
    zeroToHundred: 3.4,
    topSpeed: 330,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    efficiency: '8.5 km/l',
    safetyRating: '5-Star Euro NCAP',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['Tuscan Gold', 'Midnight Blue', 'Pearl White', 'Obsidian Black'],
    features: [
      'Bespoke Hand-Stitched Semi-Aniline Leather',
      'Starlight Fiber-Optic Headliner',
      'Dual-Chamber Air Suspension',
      'Analog Chronograph Center Clock',
      'Electrochromic Tinting Glass Roof'
    ],
    description: 'Designed for cross-continental grand touring, the Lumina Coupe effortlessly eats miles with supreme acoustic dampening and a silky twin-turbocharged V12 powerplant.',
    exteriorDesign: 'Long sweeping bonnet, muscular rear haunches, polished aluminum brightwork, and illuminated crystal front badge.',
    techFeatures: [
      {
        title: 'Active Anti-Roll Stabilization',
        description: '48V electric motors counter cornering centrifugal forces to keep the passenger cabin completely horizontal.',
        icon: 'Activity'
      },
      {
        title: 'Bespoke Soundstage 360',
        description: '24 audiophile transducers crafted with diamond domes deliver concert-hall spatial clarity at 1,800 watts.',
        icon: 'Music'
      },
      {
        title: 'Thermal Night Vision',
        description: 'Infrared front sensors highlight wild animals and pedestrians beyond the reach of standard high beams.',
        icon: 'Eye'
      }
    ],
    matchProfile: {
      budget: '₹50L+',
      purposes: ['Luxury', 'Daily commute'],
      fuel: ['Petrol'],
      transmission: ['Automatic'],
      priorities: ['Comfort', 'Safety'],
      matchPitch: 'The epitome of high-society automotive luxury, peerless craftsmanship, and effortless continent-crossing speed.'
    }
  },
  {
    id: 'vortex-rs',
    name: 'Vortex RS',
    brand: 'Vortex',
    tagline: 'Lightweight mid-engine balance and manual gated precision for the true purist.',
    category: 'Sports',
    modelType: 'gt-supercar',
    modelPath: '/models/car.glb',
    signatureColor: '#7c3aed',
    signatureColorName: 'Galactic Violet',
    price: 7200000,
    priceDisplay: '₹72 Lakh',
    horsepower: 480,
    torque: 520,
    zeroToHundred: 3.8,
    topSpeed: 310,
    fuelType: 'Petrol',
    transmission: 'Manual',
    efficiency: '9.8 km/l',
    safetyRating: '5-Star Global NCAP',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['Galactic Violet', 'Racing Red', 'Titanium Silver', 'Obsidian Black'],
    features: [
      '6-Speed Short-Throw Gated Manual Shifter',
      'Mechanical Limited-Slip Differential',
      'Dry-Sump Lubricated Flat-6 Engine',
      'Carbon-Fiber Bucket Shell Seats',
      'Forged Monoblock Center-Lock Wheels'
    ],
    description: 'Built strictly for driving enthusiasts who crave physical engagement. No artificial steering filters, no excessive digital screens—just mechanical perfection and an 8,500 RPM redline.',
    exteriorDesign: 'Compact mid-engine stance with ducktail rear spoiler, roof snorkel air intake, and exposed rear suspension linkages.',
    techFeatures: [
      {
        title: 'Auto-Blip Rev Match',
        description: 'Optional electronic downshift throttle blip executes flawless heel-and-toe downshifts under heavy braking.',
        icon: 'Repeat'
      },
      {
        title: 'Mechanical LSD',
        description: 'Torsen helical differential locks instantly during power oversteer for controllable drift angles.',
        icon: 'Compass'
      },
      {
        title: 'Ultra-Lightweight Polycarbonate',
        description: 'Thin-wall glass and composite body panels shed 180 kg over standard road cars for a 1,280 kg dry curb weight.',
        icon: 'Feather'
      }
    ],
    matchProfile: {
      budget: '₹50L+',
      purposes: ['Performance', 'Daily commute'],
      fuel: ['Petrol'],
      transmission: ['Manual'],
      priorities: ['Performance'],
      matchPitch: 'Built for manual transmission purists who prioritize steering feedback, mechanical symphony, and canyon-carving balance.'
    }
  },
  {
    id: 'chronos-suv',
    name: 'Chronos Hybrid',
    brand: 'Chronos',
    tagline: 'Versatile luxury executive elegance with plug-in hybrid electric city efficiency.',
    category: 'Sedan',
    modelType: 'luxury-sedan',
    signatureColor: '#f0f2f5',
    signatureColorName: 'Pearl White',
    price: 4800000,
    priceDisplay: '₹48 Lakh',
    horsepower: 360,
    torque: 540,
    zeroToHundred: 4.8,
    topSpeed: 250,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    range: 780,
    efficiency: '21.5 km/l',
    safetyRating: '5-Star Bharat NCAP & Euro NCAP',
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=85'
    ],
    colors: ['Pearl White', 'Obsidian Black', 'Midnight Blue', 'Titanium Silver'],
    features: [
      'Plug-In Hybrid 85km Pure Electric City Range',
      'Panoramic Sunroof with Solar Charging',
      'ADAS Level 2+ Adaptive Highway Assist',
      '360° Surround View with Curb Protection',
      'Executive Heated & Ventilated Massage Seats'
    ],
    description: 'The Chronos Hybrid solves every executive need: whisper-quiet zero-emission morning city commutes paired with boundless weekend road-trip range and benchmark crash protection.',
    exteriorDesign: 'Aerodynamic satin chrome cascade styling, full-width crystalline taillight bar, and aerodynamic 20-inch diamond-cut wheels.',
    techFeatures: [
      {
        title: 'Dual-Power Drive',
        description: 'Intelligent powertrain manager blends 2.0L turbocharged engine with dual electric drive units seamlessly.',
        icon: 'Zap'
      },
      {
        title: 'Cabin Air Ionizer & PM2.5',
        description: 'Hospital-grade HEPA filtration purifies 99.97% of cabin air particulates in under 3 minutes.',
        icon: 'Wind'
      },
      {
        title: '360° Bird-Eye Maneuvering',
        description: '4 high-resolution wide-angle cameras generate an overhead 3D view with virtual distance guides for effortless parking.',
        icon: 'Eye'
      }
    ],
    matchProfile: {
      budget: '₹20L',
      purposes: ['Family', 'Daily commute', 'Luxury'],
      fuel: ['Hybrid'],
      transmission: ['Automatic'],
      priorities: ['Mileage', 'Safety', 'Comfort'],
      matchPitch: 'Outstanding balance of hybrid fuel mileage, executive comfort, top-tier safety ratings, and modern family practicality.'
    }
  }
];

export const COLOR_OPTIONS: { [key: string]: { name: string; hex: string; desc: string } } = {
  'Racing Red': { name: 'Racing Red', hex: '#b91c1c', desc: 'Signature high-intensity competition lacquer' },
  'Obsidian Black': { name: 'Obsidian Black', hex: '#0f0f12', desc: 'Deep cosmic stealth black with micro-flake mica' },
  'Pearl White': { name: 'Pearl White', hex: '#f0f2f5', desc: 'Iridescent multi-coat tri-stage pearl white' },
  'Titanium Silver': { name: 'Titanium Silver', hex: '#71717a', desc: 'Industrial aerospace brushed titanium sheen' },
  'Midnight Blue': { name: 'Midnight Blue', hex: '#1e3a8a', desc: 'Rich nocturnal sapphire with deep ocean reflections' },
  'Cyber Cyan': { name: 'Cyber Cyan', hex: '#06b6d4', desc: 'Electric high-voltage turquoise neon finish' },
  'British Racing Green': { name: 'British Racing Green', hex: '#14532d', desc: 'Heritage deep lustrous emerald gloss' },
  'Tuscan Gold': { name: 'Tuscan Gold', hex: '#d97706', desc: 'Warm sunset amber metallic flake' },
  'Galactic Violet': { name: 'Galactic Violet', hex: '#7c3aed', desc: 'Cosmic deep ultraviolet pearl effect' },
  'Portimao Blue': { name: 'Portimao Blue', hex: '#0284c7', desc: 'Signature BMW M dynamic deep electric azure' },
  'Isle of Man Green': { name: 'Isle of Man Green', hex: '#065f46', desc: 'Deep BMW M racing emerald metallic with gold pearl' },
  'Sao Paulo Yellow': { name: 'Sao Paulo Yellow', hex: '#eab308', desc: 'High-voltage track performance optic yellow' },
  'Oberon Black': { name: 'Oberon Black', hex: '#0f172a', desc: 'Signature Tata #Dark stealth satin midnight shadow' },
  'Daytona Grey': { name: 'Daytona Grey', hex: '#4b5563', desc: 'Sinister architectural graphite metallic' },
  'Sunlit Gold': { name: 'Sunlit Gold', hex: '#d97706', desc: 'Lustrous Tata flagship amber copper flake' },
  'Gravity Gold Matte': { name: 'Gravity Gold Matte', hex: '#c29b38', desc: 'Futuristic satin champagne gold parametric finish' }
};

export const WHEEL_OPTIONS: WheelOption[] = [
  { id: 'aero', name: 'Aero Turbine', spec: '20" Forged Turbine Vane', priceDiff: 0, rimColor: '#383838' },
  { id: 'sport', name: 'Sport Multi-Spoke', spec: '21" Lightweight Flow-Formed', priceDiff: 150000, rimColor: '#d4d4d8' },
  { id: 'performance', name: 'Performance Star', spec: '21" Monoblock Matte Bronze', priceDiff: 280000, rimColor: '#b45309' },
  { id: 'carbon', name: 'Carbon Composite', spec: '22" Full Carbon Barrel & Face', priceDiff: 550000, rimColor: '#171717' }
];
