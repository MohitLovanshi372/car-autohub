import React from 'react';
import { ContactShadows, Environment as DreiEnvironment, Lightformer } from '@react-three/drei';

interface StudioEnvironmentProps {
  showReflectiveFloor?: boolean;
}

export const StudioEnvironment: React.FC<StudioEnvironmentProps> = ({ showReflectiveFloor = true }) => {
  return (
    <>
      {/* Studio procedural environment map without external network requests */}
      <DreiEnvironment resolution={256}>
        <group rotation={[-Math.PI / 4, -0.2, 0]}>
          {/* Ceiling Softbox Key */}
          <Lightformer
            form="rect"
            intensity={4}
            color="#ffffff"
            scale={[12, 5, 1]}
            position={[0, 8, 0]}
            target={[0, 0, 0]}
          />
          {/* Front Left Horizon Rim */}
          <Lightformer
            form="rect"
            intensity={3}
            color="#93c5fd"
            scale={[14, 2, 1]}
            position={[-8, 3, 6]}
            target={[0, 0, 0]}
          />
          {/* Rear Right Accent */}
          <Lightformer
            form="rect"
            intensity={2}
            color="#ffffff"
            scale={[10, 3, 1]}
            position={[8, 3, -6]}
            target={[0, 0, 0]}
          />
          {/* Subtle Warm Accent */}
          <Lightformer
            form="ring"
            intensity={1.5}
            color="#f43f5e"
            scale={4}
            position={[0, 1, -8]}
            target={[0, 0, 0]}
          />
        </group>
      </DreiEnvironment>

      {/* Ground Soft Contact Shadow */}
      <ContactShadows
        position={[0, -0.01, 0]}
        opacity={0.75}
        scale={12}
        blur={1.8}
        far={2.5}
        resolution={1024}
        color="#000000"
      />

      {/* Polished Showroom Floor */}
      {showReflectiveFloor && (
        <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[60, 60]} />
          <meshStandardMaterial
            color="#070708"
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>
      )}

      {/* Center Showroom Spotlight Disk */}
      <mesh position={[0, -0.018, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[2.5, 2.54, 64]} />
        <meshBasicMaterial color="#e11d48" transparent opacity={0.3} />
      </mesh>
    </>
  );
};
