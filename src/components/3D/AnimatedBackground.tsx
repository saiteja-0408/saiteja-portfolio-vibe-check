import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { inSphere } from 'maath/random';

interface ParticleFieldProps {
  count?: number;
}

const ParticleField = ({ count = 5000 }: ParticleFieldProps) => {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    inSphere(positions, { radius: 1.5 });
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f0f0f0"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField count={3000} />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground; 