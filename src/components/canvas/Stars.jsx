import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';

const PointField = () => {
  const pointsRef = useRef();
  const reduceMotion = useReducedMotion();
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
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

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useFrame((state) => {
    if (!pointsRef.current || reduceMotion) return;
    const time = state.clock.elapsedTime;
    pointsRef.current.rotation.y = Math.sin(time * 0.25) * 0.11;
    pointsRef.current.rotation.x = Math.cos(time * 0.19) * 0.06;
    pointsRef.current.position.x = Math.sin(time * 0.21) * 0.2;
    pointsRef.current.position.y = Math.cos(time * 0.14) * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={field} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={darkMode ? '#a5d8cb' : '#3d665c'}
        size={3}
        sizeAttenuation={false}
        opacity={darkMode ? 0.72 : 0.62}
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