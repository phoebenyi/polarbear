import React from 'react';
import PolarBear3D from '../components/PolarBear3D';
import { motion } from 'framer-motion';


const FunFactsPage = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1>Learn More about Polar Bears</h1>
    <h2>Drag and Move the Polar Bear Around!</h2>
    <PolarBear3D />
    <h2>This page is still in progress.</h2>
    <ol>
      <li>Polar bears can swim for hours at a time.</li>
      <li>Their skin is actually black, not white!</li>
      <li>Polar bears are excellent hunters.</li>
      </ol>
  </div>
);

export default FunFactsPage;
