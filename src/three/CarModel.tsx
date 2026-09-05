import React, { useMemo, useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Car3DModelType } from '../types/car';

interface CarModelProps {
  modelType?: Car3DModelType;
  modelPath?: string;
  colorHex?: string;
  wheelType?: 'aero' | 'sport' | 'performance' | 'carbon';
  lightsOn?: boolean;
  wireframe?: boolean;
  autoRotateSpeed?: number;
}

// 1. Procedural Luxury Executive Sedan
export const LuxurySedanGeometry: React.FC<{
  paintMaterial: THREE.Material;
  glassMaterial: THREE.Material;
  rimMaterial: THREE.Material;
  tireMaterial: THREE.Material;
  carbonMaterial: THREE.Material;
  chromeMaterial: THREE.Material;
  lightsOn: boolean;
}> = ({
  paintMaterial,
  glassMaterial,
  rimMaterial,
  tireMaterial,
  carbonMaterial,
  chromeMaterial,
  lightsOn
}) => {
  return (
    <group position={[0, 0.44, 0]}>
      {/* Lower Main Chassis / Sill */}
      <mesh position={[0, 0.22, 0]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[1.98, 0.42, 4.8]} />
      </mesh>

      {/* Front Hood Extension (Long Executive Front) */}
      <mesh position={[0, 0.35, 1.45]} rotation={[-0.04, 0, 0]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[1.92, 0.22, 1.8]} />
      </mesh>

      {/* Executive Waterfall Front Chrome Grille */}
      <mesh position={[0, 0.24, 2.42]} material={chromeMaterial}>
        <boxGeometry args={[1.1, 0.28, 0.08]} />
      </mesh>

      {/* Front Chrome Bumper Lower Lip */}
      <mesh position={[0, 0.08, 2.38]} material={chromeMaterial}>
        <boxGeometry args={[1.88, 0.08, 0.12]} />
      </mesh>

      {/* 4-Door Executive Greenhouse Cabin */}
      <mesh position={[0, 0.72, -0.25]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[1.62, 0.58, 2.7]} />
      </mesh>

      {/* Front Raked Windshield */}
      <mesh position={[0, 0.76, 0.95]} rotation={[-0.52, 0, 0]} material={glassMaterial}>
        <planeGeometry args={[1.52, 0.82]} />
      </mesh>

      {/* Rear Executive Sloped Glass */}
      <mesh position={[0, 0.75, -1.45]} rotation={[0.55, 0, 0]} material={glassMaterial}>
        <planeGeometry args={[1.48, 0.85]} />
      </mesh>

      {/* Side Windows: Left Side */}
      <mesh position={[0.82, 0.72, -0.25]} rotation={[0, Math.PI / 2, 0]} material={glassMaterial}>
        <planeGeometry args={[2.5, 0.45]} />
      </mesh>

      {/* Side Windows: Right Side */}
      <mesh position={[-0.82, 0.72, -0.25]} rotation={[0, -Math.PI / 2, 0]} material={glassMaterial}>
        <planeGeometry args={[2.5, 0.45]} />
      </mesh>

      {/* Panoramic Glass Roof Panel */}
      <mesh position={[0, 1.02, -0.25]} rotation={[-Math.PI / 2, 0, 0]} material={glassMaterial}>
        <planeGeometry args={[1.35, 2.1]} />
      </mesh>

      {/* Rear Trunk Lid */}
      <mesh position={[0, 0.44, -2.0]} rotation={[0.04, 0, 0]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[1.88, 0.28, 0.9]} />
      </mesh>

      {/* Dual Projector Headlights */}
      <mesh position={[0.72, 0.36, 2.38]}>
        <boxGeometry args={[0.38, 0.1, 0.1]} />
        <meshBasicMaterial color={lightsOn ? '#ffffff' : '#334155'} />
      </mesh>
      <mesh position={[-0.72, 0.36, 2.38]}>
        <boxGeometry args={[0.38, 0.1, 0.1]} />
        <meshBasicMaterial color={lightsOn ? '#ffffff' : '#334155'} />
      </mesh>

      {/* Continuous Crystalline Red Taillight Strip */}
      <mesh position={[0, 0.42, -2.42]}>
        <boxGeometry args={[1.85, 0.08, 0.06]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>

      {/* Chrome Quad Exhaust Tips */}
      <mesh position={[0.62, 0.12, -2.42]} rotation={[Math.PI / 2, 0, 0]} material={chromeMaterial}>
        <cylinderGeometry args={[0.06, 0.06, 0.14, 16]} />
      </mesh>
      <mesh position={[-0.62, 0.12, -2.42]} rotation={[Math.PI / 2, 0, 0]} material={chromeMaterial}>
        <cylinderGeometry args={[0.06, 0.06, 0.14, 16]} />
      </mesh>

      {/* 4 Executive Alloy Wheels */}
      {[
        [-1.0, 0.04, 1.5],
        [1.0, 0.04, 1.5],
        [-1.0, 0.04, -1.48],
        [1.0, 0.04, -1.48]
      ].map((pos, idx) => (
        <group key={idx} position={pos as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow material={tireMaterial}>
            <cylinderGeometry args={[0.37, 0.37, 0.26, 32]} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} material={rimMaterial}>
            <cylinderGeometry args={[0.26, 0.26, 0.27, 24]} />
          </mesh>
          <mesh position={[0, 0.15, 0.02]}>
            <boxGeometry args={[0.08, 0.12, 0.08]} />
            <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// 2. Procedural Rugged Performance SUV / 4x4
export const PerformanceSUVGeometry: React.FC<{
  paintMaterial: THREE.Material;
  glassMaterial: THREE.Material;
  rimMaterial: THREE.Material;
  tireMaterial: THREE.Material;
  carbonMaterial: THREE.Material;
  lightsOn: boolean;
}> = ({
  paintMaterial,
  glassMaterial,
  rimMaterial,
  tireMaterial,
  carbonMaterial,
  lightsOn
}) => {
  return (
    <group position={[0, 0.62, 0]}>
      {/* High-Clearance Muscular Lower Body */}
      <mesh position={[0, 0.35, 0]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[2.08, 0.65, 4.6]} />
      </mesh>

      {/* Heavy-Duty Underbody Skid Plate */}
      <mesh position={[0, 0.04, 2.15]} rotation={[0.3, 0, 0]} material={carbonMaterial}>
        <boxGeometry args={[1.5, 0.12, 0.45]} />
      </mesh>

      {/* High Boxy Cabin */}
      <mesh position={[0, 0.98, -0.3]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[1.82, 0.72, 2.8]} />
      </mesh>

      {/* Upright Front Windshield */}
      <mesh position={[0, 0.96, 1.02]} rotation={[-0.42, 0, 0]} material={glassMaterial}>
        <planeGeometry args={[1.72, 0.85]} />
      </mesh>

      {/* Upright Rear Tailgate Window */}
      <mesh position={[0, 0.98, -1.62]} rotation={[0.1, 0, 0]} material={glassMaterial}>
        <planeGeometry args={[1.68, 0.75]} />
      </mesh>

      {/* Side Privacy Windows */}
      <mesh position={[0.92, 0.98, -0.3]} rotation={[0, Math.PI / 2, 0]} material={glassMaterial}>
        <planeGeometry args={[2.6, 0.58]} />
      </mesh>
      <mesh position={[-0.92, 0.98, -0.3]} rotation={[0, -Math.PI / 2, 0]} material={glassMaterial}>
        <planeGeometry args={[2.6, 0.58]} />
      </mesh>

      {/* Expedition Roof Rack */}
      <mesh position={[0, 1.38, -0.3]} material={carbonMaterial}>
        <boxGeometry args={[1.6, 0.08, 2.5]} />
      </mesh>
      {/* Roof Auxiliary LED Light Bar */}
      <mesh position={[0, 1.42, 0.85]}>
        <boxGeometry args={[1.3, 0.08, 0.1]} />
        <meshBasicMaterial color={lightsOn ? '#ffedd5' : '#334155'} />
      </mesh>

      {/* Flared Protective Wheel Arch Cladding */}
      <mesh position={[1.06, 0.28, 1.4]} material={carbonMaterial}>
        <boxGeometry args={[0.14, 0.48, 0.95]} />
      </mesh>
      <mesh position={[-1.06, 0.28, 1.4]} material={carbonMaterial}>
        <boxGeometry args={[0.14, 0.48, 0.95]} />
      </mesh>
      <mesh position={[1.06, 0.28, -1.4]} material={carbonMaterial}>
        <boxGeometry args={[0.14, 0.48, 0.95]} />
      </mesh>
      <mesh position={[-1.06, 0.28, -1.4]} material={carbonMaterial}>
        <boxGeometry args={[0.14, 0.48, 0.95]} />
      </mesh>

      {/* Heavy-Duty Grille & Brush Guard */}
      <mesh position={[0, 0.42, 2.34]} material={carbonMaterial}>
        <boxGeometry args={[1.6, 0.38, 0.15]} />
      </mesh>

      {/* Twin Bi-LED Headlights */}
      <mesh position={[0.72, 0.46, 2.36]}>
        <boxGeometry args={[0.34, 0.16, 0.08]} />
        <meshBasicMaterial color={lightsOn ? '#ffffff' : '#475569'} />
      </mesh>
      <mesh position={[-0.72, 0.46, 2.36]}>
        <boxGeometry args={[0.34, 0.16, 0.08]} />
        <meshBasicMaterial color={lightsOn ? '#ffffff' : '#475569'} />
      </mesh>

      {/* Rear Vertical LED Taillights */}
      <mesh position={[0.9, 0.8, -2.32]}>
        <boxGeometry args={[0.12, 0.6, 0.06]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      <mesh position={[-0.9, 0.8, -2.32]}>
        <boxGeometry args={[0.12, 0.6, 0.06]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>

      {/* 4 Massive Oversized All-Terrain Wheels */}
      {[
        [-1.08, 0.02, 1.4],
        [1.08, 0.02, 1.4],
        [-1.08, 0.02, -1.4],
        [1.08, 0.02, -1.4]
      ].map((pos, idx) => (
        <group key={idx} position={pos as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow material={tireMaterial}>
            <cylinderGeometry args={[0.48, 0.48, 0.36, 32]} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} material={rimMaterial}>
            <cylinderGeometry args={[0.32, 0.32, 0.38, 24]} />
          </mesh>
          <mesh position={[0, 0.18, 0.02]}>
            <boxGeometry args={[0.1, 0.16, 0.1]} />
            <meshStandardMaterial color="#dc2626" metalness={0.6} roughness={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// 3. Procedural Cyber Electric Hypercar
export const CyberHypercarGeometry: React.FC<{
  paintMaterial: THREE.Material;
  glassMaterial: THREE.Material;
  rimMaterial: THREE.Material;
  tireMaterial: THREE.Material;
  carbonMaterial: THREE.Material;
  lightsOn: boolean;
}> = ({
  paintMaterial,
  glassMaterial,
  rimMaterial,
  tireMaterial,
  carbonMaterial,
  lightsOn
}) => {
  return (
    <group position={[0, 0.38, 0]}>
      {/* Low Ultra-Slung Teardrop Chassis */}
      <mesh position={[0, 0.18, 0]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[2.14, 0.32, 4.6]} />
      </mesh>

      {/* Aerodynamic Front Nose Drop */}
      <mesh position={[0, 0.14, 1.7]} rotation={[-0.15, 0, 0]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[1.98, 0.22, 1.6]} />
      </mesh>

      {/* Massive Carbon Front Splitter & Dive Planes */}
      <mesh position={[0, 0.02, 2.4]} material={carbonMaterial}>
        <boxGeometry args={[2.2, 0.04, 0.45]} />
      </mesh>

      {/* Low-Drag Fighter Jet Bubble Canopy */}
      <mesh position={[0, 0.52, -0.15]} castShadow receiveShadow material={glassMaterial}>
        <sphereGeometry args={[0.95, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </mesh>

      {/* Central Aerodynamic Dorsal Fin (Le Mans Prototype Style) */}
      <mesh position={[0, 0.72, -0.9]} rotation={[0, 0, 0]} material={carbonMaterial}>
        <boxGeometry args={[0.04, 0.38, 1.8]} />
      </mesh>

      {/* Active Rear Carbon Aero Wing */}
      <mesh position={[0, 0.76, -2.15]} material={carbonMaterial}>
        <boxGeometry args={[2.08, 0.04, 0.38]} />
      </mesh>
      <mesh position={[0.65, 0.52, -2.1]} material={carbonMaterial}>
        <boxGeometry args={[0.04, 0.48, 0.14]} />
      </mesh>
      <mesh position={[-0.65, 0.52, -2.1]} material={carbonMaterial}>
        <boxGeometry args={[0.04, 0.48, 0.14]} />
      </mesh>

      {/* Enormous Venturi Rear Diffuser Tunnels */}
      <mesh position={[0, 0.08, -2.25]} rotation={[0.2, 0, 0]} material={carbonMaterial}>
        <boxGeometry args={[2.0, 0.18, 0.6]} />
      </mesh>

      {/* Cyber Neon Photonic Light Strips (Cyan) */}
      <mesh position={[0, 0.26, 2.38]}>
        <boxGeometry args={[1.8, 0.04, 0.04]} />
        <meshBasicMaterial color={lightsOn ? '#06b6d4' : '#164e63'} />
      </mesh>
      <mesh position={[0, 0.38, -2.28]}>
        <boxGeometry args={[2.0, 0.04, 0.04]} />
        <meshBasicMaterial color="#06b6d4" />
      </mesh>

      {/* 4 Wide Aero-Disc Turbine Wheels */}
      {[
        [-1.06, 0.05, 1.45],
        [1.06, 0.05, 1.45],
        [-1.06, 0.05, -1.35],
        [1.06, 0.05, -1.35]
      ].map((pos, idx) => (
        <group key={idx} position={pos as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow material={tireMaterial}>
            <cylinderGeometry args={[0.39, 0.39, 0.32, 32]} />
          </mesh>
          {/* Flush Aero Wheel Disc with Cyan Glow Ring */}
          <mesh rotation={[0, 0, Math.PI / 2]} material={rimMaterial}>
            <cylinderGeometry args={[0.3, 0.3, 0.33, 32]} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.26, 0.015, 16, 32]} />
            <meshBasicMaterial color="#06b6d4" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// 4. Procedural Muscular Sports Coupe
export const SportCoupeGeometry: React.FC<{
  paintMaterial: THREE.Material;
  glassMaterial: THREE.Material;
  rimMaterial: THREE.Material;
  tireMaterial: THREE.Material;
  carbonMaterial: THREE.Material;
  lightsOn: boolean;
}> = ({
  paintMaterial,
  glassMaterial,
  rimMaterial,
  tireMaterial,
  carbonMaterial,
  lightsOn
}) => {
  return (
    <group position={[0, 0.42, 0]}>
      {/* Lower Muscular Chassis */}
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[1.94, 0.38, 4.4]} />
      </mesh>

      {/* Long Front Power-Dome Hood */}
      <mesh position={[0, 0.36, 1.25]} rotation={[-0.08, 0, 0]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[1.86, 0.24, 1.9]} />
      </mesh>

      {/* Aggressive Front Air Intakes */}
      <mesh position={[0, 0.16, 2.22]} material={carbonMaterial}>
        <boxGeometry args={[1.8, 0.22, 0.12]} />
      </mesh>

      {/* Set-Back Fastback Cockpit */}
      <mesh position={[0, 0.65, -0.3]} castShadow receiveShadow material={paintMaterial}>
        <boxGeometry args={[1.54, 0.52, 2.1]} />
      </mesh>

      {/* Raked Windshield */}
      <mesh position={[0, 0.68, 0.65]} rotation={[-0.56, 0, 0]} material={glassMaterial}>
        <planeGeometry args={[1.44, 0.78]} />
      </mesh>

      {/* Sloping Fastback Rear Glass */}
      <mesh position={[0, 0.66, -1.2]} rotation={[0.65, 0, 0]} material={glassMaterial}>
        <planeGeometry args={[1.38, 0.85]} />
      </mesh>

      {/* Side Windows */}
      <mesh position={[0.78, 0.65, -0.3]} rotation={[0, Math.PI / 2, 0]} material={glassMaterial}>
        <planeGeometry args={[1.7, 0.38]} />
      </mesh>
      <mesh position={[-0.78, 0.65, -0.3]} rotation={[0, -Math.PI / 2, 0]} material={glassMaterial}>
        <planeGeometry args={[1.7, 0.38]} />
      </mesh>

      {/* Muscular Rear Haunches */}
      <mesh position={[0.96, 0.34, -1.1]} material={paintMaterial}>
        <boxGeometry args={[0.16, 0.38, 1.2]} />
      </mesh>
      <mesh position={[-0.96, 0.34, -1.1]} material={paintMaterial}>
        <boxGeometry args={[0.16, 0.38, 1.2]} />
      </mesh>

      {/* Integrated Ducktail Rear Spoiler */}
      <mesh position={[0, 0.48, -2.12]} rotation={[-0.2, 0, 0]} material={carbonMaterial}>
        <boxGeometry args={[1.82, 0.1, 0.25]} />
      </mesh>

      {/* Dual Exhaust System */}
      <mesh position={[0.55, 0.1, -2.22]} rotation={[Math.PI / 2, 0, 0]} material={carbonMaterial}>
        <cylinderGeometry args={[0.07, 0.07, 0.18, 16]} />
      </mesh>
      <mesh position={[-0.55, 0.1, -2.22]} rotation={[Math.PI / 2, 0, 0]} material={carbonMaterial}>
        <cylinderGeometry args={[0.07, 0.07, 0.18, 16]} />
      </mesh>

      {/* Angular LED Headlights */}
      <mesh position={[0.66, 0.34, 2.18]}>
        <boxGeometry args={[0.36, 0.08, 0.08]} />
        <meshBasicMaterial color={lightsOn ? '#ffffff' : '#334155'} />
      </mesh>
      <mesh position={[-0.66, 0.34, 2.18]}>
        <boxGeometry args={[0.36, 0.08, 0.08]} />
        <meshBasicMaterial color={lightsOn ? '#ffffff' : '#334155'} />
      </mesh>

      {/* Smoked Horizontal Taillight Bar */}
      <mesh position={[0, 0.38, -2.22]}>
        <boxGeometry args={[1.75, 0.07, 0.05]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>

      {/* 4 Staggered Sports Wheels */}
      {[
        [-0.98, 0.05, 1.35],
        [0.98, 0.05, 1.35],
        [-1.02, 0.05, -1.35],
        [1.02, 0.05, -1.35]
      ].map((pos, idx) => (
        <group key={idx} position={pos as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow material={tireMaterial}>
            <cylinderGeometry args={[0.38, 0.38, idx >= 2 ? 0.34 : 0.28, 32]} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} material={rimMaterial}>
            <cylinderGeometry args={[0.27, 0.27, 0.3, 24]} />
          </mesh>
          <mesh position={[0, 0.18, 0.02]}>
            <boxGeometry args={[0.08, 0.14, 0.08]} />
            <meshStandardMaterial color="#f59e0b" metalness={0.7} roughness={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// 5. GLTF GT Supercar with Dynamic Materials and safe error boundary
class GLTFErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    console.warn('GLTF loading caught by boundary, using procedural supercar:', error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const GLTFSupercar: React.FC<{
  modelPath: string;
  paintMaterial: THREE.Material;
  glassMaterial: THREE.Material;
  rimMaterial: THREE.Material;
  tireMaterial: THREE.Material;
  carbonMaterial: THREE.Material;
  chromeMaterial: THREE.Material;
  lightsOn: boolean;
}> = ({
  modelPath,
  paintMaterial,
  glassMaterial,
  rimMaterial,
  tireMaterial,
  carbonMaterial,
  chromeMaterial,
  lightsOn
}) => {
  const gltf = useGLTF(modelPath);
  const scene = useMemo(() => gltf.scene.clone(true), [gltf]);

  // Specialized interior, brake and light materials
  const interiorLeather = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1a1e',
    roughness: 0.8,
    metalness: 0.05
  }), []);

  const interiorDark = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0a0a0c',
    roughness: 0.92,
    metalness: 0.02
  }), []);

  const yellowBadge = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#eab308',
    roughness: 0.25,
    metalness: 0.45
  }), []);

  const brakeRotor = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#94a3b8',
    roughness: 0.25,
    metalness: 0.92
  }), []);

  const grillesPlastic = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#090d16',
    roughness: 0.65,
    metalness: 0.1
  }), []);

  const taillightGlow = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ef4444',
    emissive: new THREE.Color('#dc2626'),
    emissiveIntensity: lightsOn ? 3.0 : 0.3,
    roughness: 0.2
  }), [lightsOn]);

  const headlightLeds = useMemo(() => new THREE.MeshStandardMaterial({
    color: lightsOn ? '#ffffff' : '#94a3b8',
    emissive: lightsOn ? new THREE.Color('#ffffff') : new THREE.Color('#000000'),
    emissiveIntensity: lightsOn ? 2.5 : 0,
    roughness: 0.1,
    metalness: 0.8
  }), [lightsOn]);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const nameLower = mesh.name.toLowerCase();
        const matName = mesh.material && !Array.isArray(mesh.material) ? mesh.material.name.toLowerCase() : '';

        // 1. Exterior body paint
        if (nameLower.includes('body') || matName.includes('body_color') || nameLower === 'blue') {
          mesh.material = paintMaterial;
        }
        // 2. Optical Tinted Glass
        else if (nameLower.includes('glass') || matName.includes('glass') || nameLower === 'lights') {
          mesh.material = glassMaterial;
        }
        // 3. Alloy Rims & Wheels
        else if (nameLower.startsWith('rim_') || nameLower === 'wheel') {
          mesh.material = rimMaterial;
        }
        // 4. Vulcanized Rubber Tires
        else if (nameLower === 'tire' || matName.includes('tires')) {
          mesh.material = tireMaterial;
        }
        // 5. Lightweight Woven Carbon Fiber
        else if (nameLower.includes('carbon') || matName.includes('carbon')) {
          mesh.material = carbonMaterial;
        }
        // 6. Polished Chrome Accents
        else if (nameLower === 'chrome' || matName.includes('chrome')) {
          mesh.material = chromeMaterial;
        }
        // 7. Center Hub Badge & Steering Emblem
        else if (nameLower === 'centre' || nameLower === 'steering_centre' || nameLower === 'yellow_trim') {
          mesh.material = yellowBadge;
        }
        // 8. Performance Brakes
        else if (nameLower === 'brake' || nameLower === 'brakes') {
          mesh.material = brakeRotor;
        }
        // 9. Taillight Red LEDs
        else if (nameLower.includes('lights_red') || nameLower.includes('steering_red_lights') || matName.includes('taillight')) {
          mesh.material = taillightGlow;
        }
        // 10. Headlights & Daytime Running Lights
        else if (nameLower === 'leds' || matName.includes('led')) {
          mesh.material = headlightLeds;
        }
        // 11. Luxury Stitched Interior Leather
        else if (nameLower.includes('leather') || nameLower === 'trim' || nameLower === 'steering_trim') {
          mesh.material = interiorLeather;
        }
        // 12. Cockpit Interior & Carpet
        else if (nameLower.includes('interior') || nameLower === 'carpet' || nameLower.includes('column') || nameLower === 'nuts') {
          mesh.material = interiorDark;
        }
        // 13. Aero Grilles & Plastic
        else if (nameLower === 'grills' || nameLower === 'wipers' || nameLower.includes('plastic')) {
          mesh.material = grillesPlastic;
        }
      }
    });
  }, [
    scene,
    paintMaterial,
    glassMaterial,
    rimMaterial,
    tireMaterial,
    carbonMaterial,
    chromeMaterial,
    lightsOn,
    interiorLeather,
    interiorDark,
    yellowBadge,
    brakeRotor,
    grillesPlastic,
    taillightGlow,
    headlightLeds
  ]);

  // Scale 1.05 with Y-rotation to face the camera forward at dynamic 3/4 angle
  return <primitive object={scene} scale={1.05} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} />;
};

// Procedural Supercar Fallback
export const ProceduralCarFallback: React.FC<{
  colorHex?: string;
  wheelColor?: string;
  lightsOn?: boolean;
}> = ({ colorHex = '#b91c1c', wheelColor = '#383838', lightsOn = true }) => {
  const bodyMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(colorHex),
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95
    });
  }, [colorHex]);

  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0a101d'),
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.8,
      transparent: true,
      opacity: 0.45,
      ior: 1.52
    });
  }, []);

  const carbonMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#141414'),
      roughness: 0.35,
      metalness: 0.4
    });
  }, []);

  const rimMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(wheelColor),
      metalness: 0.9,
      roughness: 0.2
    });
  }, [wheelColor]);

  const tireMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#111111'),
      roughness: 0.85,
      metalness: 0.1
    });
  }, []);

  return (
    <group position={[0, 0.45, 0]}>
      <mesh position={[0, 0.22, 0]} castShadow receiveShadow material={bodyMaterial}>
        <boxGeometry args={[1.9, 0.38, 4.4]} />
      </mesh>
      <mesh position={[0, 0.65, -0.15]} castShadow receiveShadow material={bodyMaterial}>
        <boxGeometry args={[1.48, 0.52, 2.3]} />
      </mesh>
      <mesh position={[0, 0.68, 0.72]} rotation={[-0.55, 0, 0]} material={glassMaterial}>
        <planeGeometry args={[1.4, 0.75]} />
      </mesh>
      <mesh position={[0, 0.68, -1.02]} rotation={[0.65, 0, 0]} material={glassMaterial}>
        <planeGeometry args={[1.36, 0.8]} />
      </mesh>
      <mesh position={[0.75, 0.65, -0.15]} rotation={[0, Math.PI / 2, 0]} material={glassMaterial}>
        <planeGeometry args={[1.8, 0.38]} />
      </mesh>
      <mesh position={[-0.75, 0.65, -0.15]} rotation={[0, -Math.PI / 2, 0]} material={glassMaterial}>
        <planeGeometry args={[1.8, 0.38]} />
      </mesh>
      <mesh position={[0, 0.04, 2.25]} castShadow material={carbonMaterial}>
        <boxGeometry args={[1.94, 0.05, 0.35]} />
      </mesh>
      <mesh position={[0, 0.85, -2.15]} castShadow material={carbonMaterial}>
        <boxGeometry args={[1.8, 0.04, 0.32]} />
      </mesh>
      <mesh position={[0.6, 0.62, -2.12]} castShadow material={carbonMaterial}>
        <boxGeometry args={[0.04, 0.44, 0.12]} />
      </mesh>
      <mesh position={[-0.6, 0.62, -2.12]} castShadow material={carbonMaterial}>
        <boxGeometry args={[0.04, 0.44, 0.12]} />
      </mesh>
      <mesh position={[0.68, 0.35, 2.18]}>
        <boxGeometry args={[0.38, 0.07, 0.08]} />
        <meshBasicMaterial color={lightsOn ? '#ffffff' : '#334155'} />
      </mesh>
      <mesh position={[-0.68, 0.35, 2.18]}>
        <boxGeometry args={[0.38, 0.07, 0.08]} />
        <meshBasicMaterial color={lightsOn ? '#ffffff' : '#334155'} />
      </mesh>
      <mesh position={[0, 0.36, -2.21]}>
        <boxGeometry args={[1.74, 0.06, 0.04]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>

      {[
        [-0.96, 0.05, 1.4],
        [0.96, 0.05, 1.4],
        [-0.96, 0.05, -1.38],
        [0.96, 0.05, -1.38]
      ].map((pos, idx) => (
        <group key={idx} position={pos as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow material={tireMaterial}>
            <cylinderGeometry args={[0.38, 0.38, 0.28, 32]} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} material={rimMaterial}>
            <cylinderGeometry args={[0.27, 0.27, 0.29, 24]} />
          </mesh>
          <mesh position={[0, 0.18, 0.02]}>
            <boxGeometry args={[0.08, 0.12, 0.08]} />
            <meshStandardMaterial color="#dc2626" metalness={0.7} roughness={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// MASTER CAR MODEL COMPONENT
export const CarModel: React.FC<CarModelProps> = ({
  modelType = 'gt-supercar',
  modelPath = '/models/car.glb',
  colorHex = '#b91c1c',
  wheelType = 'sport',
  lightsOn = true,
  wireframe = false,
  autoRotateSpeed = 0
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Wheel color mapping based on selected rim option
  const rimColorHex = useMemo(() => {
    switch (wheelType) {
      case 'carbon':
        return '#171717';
      case 'performance':
        return '#b45309'; // Matte Bronze
      case 'aero':
        return '#383838'; // Dark Anthracite
      case 'sport':
      default:
        return '#d4d4d8'; // Polished Silver Chrome
    }
  }, [wheelType]);

  // Dynamic PBR Automotive Paint Material
  const paintMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(colorHex),
      metalness: 0.88,
      roughness: 0.16,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      reflectivity: 0.9,
      envMapIntensity: 1.5,
      wireframe: wireframe
    });
  }, [colorHex, wireframe]);

  // Realistic Automotive Tinted Glass Material
  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0d1117'),
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.75,
      transparent: true,
      opacity: 0.45,
      ior: 1.52,
      wireframe: wireframe
    });
  }, [wireframe]);

  // Rim Material
  const rimMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(rimColorHex),
      metalness: wheelType === 'carbon' ? 0.3 : 0.95,
      roughness: wheelType === 'carbon' ? 0.4 : 0.15,
      wireframe: wireframe
    });
  }, [rimColorHex, wheelType, wireframe]);

  // Rubber Tire Material
  const tireMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#141416'),
      roughness: 0.88,
      metalness: 0.08,
      wireframe: wireframe
    });
  }, [wireframe]);

  // Carbon Fiber Material
  const carbonMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#18181b'),
      roughness: 0.35,
      metalness: 0.45,
      wireframe: wireframe
    });
  }, [wireframe]);

  // Chrome Trim Material
  const chromeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f4f4f5'),
      metalness: 0.98,
      roughness: 0.08,
      wireframe: wireframe
    });
  }, [wireframe]);

  // Rotation frame hook
  useFrame((_, delta) => {
    if (groupRef.current && autoRotateSpeed !== 0) {
      groupRef.current.rotation.y += delta * autoRotateSpeed;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      {modelType === 'gt-supercar' && (
        <GLTFErrorBoundary
          fallback={
            <ProceduralCarFallback
              colorHex={colorHex}
              wheelColor={rimColorHex}
              lightsOn={lightsOn}
            />
          }
        >
          <React.Suspense
            fallback={
              <ProceduralCarFallback
                colorHex={colorHex}
                wheelColor={rimColorHex}
                lightsOn={lightsOn}
              />
            }
          >
            <GLTFSupercar
              modelPath={modelPath}
              paintMaterial={paintMaterial}
              glassMaterial={glassMaterial}
              rimMaterial={rimMaterial}
              tireMaterial={tireMaterial}
              carbonMaterial={carbonMaterial}
              chromeMaterial={chromeMaterial}
              lightsOn={lightsOn}
            />
          </React.Suspense>
        </GLTFErrorBoundary>
      )}

      {modelType === 'luxury-sedan' && (
        <LuxurySedanGeometry
          paintMaterial={paintMaterial}
          glassMaterial={glassMaterial}
          rimMaterial={rimMaterial}
          tireMaterial={tireMaterial}
          carbonMaterial={carbonMaterial}
          chromeMaterial={chromeMaterial}
          lightsOn={lightsOn}
        />
      )}

      {modelType === 'performance-suv' && (
        <PerformanceSUVGeometry
          paintMaterial={paintMaterial}
          glassMaterial={glassMaterial}
          rimMaterial={rimMaterial}
          tireMaterial={tireMaterial}
          carbonMaterial={carbonMaterial}
          lightsOn={lightsOn}
        />
      )}

      {modelType === 'cyber-hypercar' && (
        <CyberHypercarGeometry
          paintMaterial={paintMaterial}
          glassMaterial={glassMaterial}
          rimMaterial={rimMaterial}
          tireMaterial={tireMaterial}
          carbonMaterial={carbonMaterial}
          lightsOn={lightsOn}
        />
      )}

      {modelType === 'sport-coupe' && (
        <SportCoupeGeometry
          paintMaterial={paintMaterial}
          glassMaterial={glassMaterial}
          rimMaterial={rimMaterial}
          tireMaterial={tireMaterial}
          carbonMaterial={carbonMaterial}
          lightsOn={lightsOn}
        />
      )}
    </group>
  );
};

useGLTF.preload('/models/car.glb');
