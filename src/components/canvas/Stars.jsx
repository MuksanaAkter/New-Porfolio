import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';

const PointField = () => {
  const pointsRef = useRef();
  const reduceMotion = useReducedMotion();
  const [field] = useState(() => {
    const pointCount = window.innerWidth < 640 ? 150 : 320;
    const aspect = Math.max(window.innerWidth / window.innerHeight, 0.6);
    const spreadX = Math.min(8, 4.1 * aspect);
    const positions = new Float32Array(pointCount * 3);

    for (let index = 0; index < pointCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * spreadX * 2;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 8.2;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    return positions;
  });

  useFrame((state) => {
    if (!pointsRef.current || reduceMotion) return;
    const time = state.clock.elapsedTime;
    pointsRef.current.rotation.y = Math.sin(time * 0.12) * 0.09;
    pointsRef.current.rotation.x = Math.cos(time * 0.09) * 0.05;
    pointsRef.current.position.x = Math.sin(time * 0.1) * 0.16;
    pointsRef.current.position.y = Math.cos(time * 0.07) * 0.08;
  });

  return (
    <Points ref={pointsRef} positions={field} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#789e96"
        size={2.7}
        sizeAttenuation={false}
        opacity={0.76}
        depthWrite={false}
      />
    </Points>
  );
};

const StarsCanvas = () => (
  <div className="stars-canvas" aria-hidden="true">
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
    >
      <Suspense fallback={null}>
        <PointField />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;