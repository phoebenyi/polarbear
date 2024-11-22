import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const PlasticPolarBearModel = () => {
  const { scene } = useGLTF('/assets/3d-model/polar_bear_in_plastic_iceberg_transparent.glb');
  return <primitive object={scene} scale={0.1} position={[0, 0, 0]} />;
};

const PlasticPolarBear = () => (
  <Canvas style={{ height: '600px', background: '#cee4f8' }}>
    <ambientLight intensity={1} color="#ffffff" />
    <pointLight intensity={1.5} position={[5, 5, 5]} color="#ffffff" />
    <directionalLight intensity={1} position={[-5, 10, 5]} color="#ffffff" />
    <PlasticPolarBearModel />
    <OrbitControls minDistance={3} maxDistance={15} />
  </Canvas>
);

export default PlasticPolarBear;
