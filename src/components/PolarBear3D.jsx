import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const PolarBearModel = () => {
  const { scene } = useGLTF('/assets/3d-model/polar_bear.glb');
  return <primitive object={scene} scale={0.02} position={[0, -2, 0]} />;
};

const PolarBear3D = () => (
  <Canvas style={{ height: '500px', background: '#cee4f8' }}>
    <ambientLight intensity={1} color="#ffffff" />
    <pointLight intensity={1.5} position={[5, 5, 5]} color="#ffffff" />
    <directionalLight intensity={1} position={[-5, 10, 5]} color="#ffffff" />
    <PolarBearModel />
    <OrbitControls minDistance={3} maxDistance={15} />
  </Canvas>
);

export default PolarBear3D;

