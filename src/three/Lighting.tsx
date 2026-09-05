import React from 'react';

interface LightingProps {
  intensity?: number;
}

export const Lighting: React.FC<LightingProps> = ({ intensity = 1.0 }) => {
  return (
    <>
      {/* Ambient Fill */}
      <ambientLight intensity={0.4 * intensity} />

      {/* Main Studio Key Light (Top-Front Right) */}
      <directionalLight
        position={[6, 8, 6]}
        intensity={1.6 * intensity}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-near={0.5}
        shadow-camera-far={25}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />

      {/* Cool Horizon Rim Light (Back Left - defines silhouette curves) */}
      <directionalLight
        position={[-8, 4, -8]}
        intensity={1.2 * intensity}
        color="#88b4ff"
      />

      {/* Warm Side Fill (Right Side) */}
      <directionalLight
        position={[8, 3, -4]}
        intensity={0.7 * intensity}
        color="#fff1e0"
      />

      {/* Front Low Grille Fill */}
      <pointLight
        position={[0, 0.4, 5]}
        intensity={0.6 * intensity}
        color="#e2e8f0"
        distance={8}
      />

      {/* Subtle Ground Underglow bounce */}
      <pointLight
        position={[0, -0.2, 0]}
        intensity={0.5 * intensity}
        color="#e11d48"
        distance={6}
      />
    </>
  );
};
