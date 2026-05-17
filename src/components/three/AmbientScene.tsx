import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';

/**
 * Pleasant, calm 3D ambient backdrop — soft floating blobs + subtle sparkles.
 * No characters, no harsh wireframes. Sits behind all content site-wide.
 */
const SoftBlob = ({
  position,
  color,
  scale = 1,
  speed = 1.2,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) => (
  <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.4}>
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.35}
        roughness={0.25}
        metalness={0.4}
        distort={0.45}
        speed={1.6}
        transparent
        opacity={0.55}
      />
    </mesh>
  </Float>
);

const AmbientScene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#0a0a14']} />
          <fog attach="fog" args={['#0a0a14', 10, 22]} />

          <ambientLight intensity={0.5} />
          <pointLight position={[6, 5, 5]} intensity={1.1} color="#00f0ff" />
          <pointLight position={[-6, -3, 2]} intensity={0.9} color="#0066ff" />
          <pointLight position={[0, -5, 3]} intensity={0.5} color="#ff6b35" />

          <SoftBlob position={[-3.8, 1.6, -2]} color="#00f0ff" scale={1.4} speed={1} />
          <SoftBlob position={[4, -1.4, -3]} color="#0066ff" scale={1.8} speed={0.9} />
          <SoftBlob position={[-2.5, -2.2, -4]} color="#ff6b35" scale={1.1} speed={1.3} />
          <SoftBlob position={[3.2, 2.4, -5]} color="#00f0ff" scale={1} speed={1.1} />
          <SoftBlob position={[0, 0, -7]} color="#0066ff" scale={2.2} speed={0.7} />

          <Sparkles count={80} scale={[14, 10, 8]} size={2.4} speed={0.4} color="#9ee9ff" opacity={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AmbientScene;
