import React from 'react';
import PolarBear3D from '../components/PolarBear3D';
import { motion } from 'framer-motion';


const FunFactsPage = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1>Learn More about Polar Bears!</h1>
    <PolarBear3D />
      <h2>Polar bears can swim for hours at a time.</h2>
      <li>Their skin is actually black, not white!</li>
      <li>Polar bears are excellent hunters.</li>
  </div>
);

export default FunFactsPage;
