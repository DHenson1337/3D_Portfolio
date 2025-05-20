import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      {/* Main light - warm white for natural lighting */}
      <spotLight
        position={[2, 5, 6]}
        intensity={200}
        angle={0.15}
        penumbra={0.2}
        color="#FFF5E1" // Warm white light
      />

      {/* Window light - natural daylight */}
      <spotLight
        position={[4, 5, 4]}
        intensity={15}
        angle={0.3}
        penumbra={0.5}
        color="#E8F1FF" // Slightly cool daylight
      />

      {/* Accent light - subtle blue for cyberpunk feel */}
      <spotLight
        position={[-3, 5, 5]}
        intensity={10}
        angle={0.4}
        penumbra={1}
        color="#4CC9F0" // Gentle blue accent
      />

      {/* Area light from screens - cyan tech glow */}
      <primitive
        object={new THREE.RectAreaLight("#00EEFF", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={1}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      {/* Ambient fill light */}
      <pointLight position={[0, 1, 0]} intensity={4} color="#FFFFFF" />

      {/* Subtle blue ambient from tech */}
      <pointLight position={[1, 2, -2]} intensity={15} color="#0077B6" />
    </>
  );
};

export default HeroLights;
