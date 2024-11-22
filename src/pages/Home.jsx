import React from 'react';
import PlasticPolarBear from '../components/PlasticPolarBear';
import { motion } from 'framer-motion';

const Home = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1>Help the Polar Bears</h1>
    <h2>Global climate warming melts sea ice which polar bears depend on to hunt, mate, roam and den. </h2>
    <p>
      Donate to Polar Bears International to support their work in protecting polar bears through research, policy, and on-the-ground conservation efforts!
    </p>
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{
        width: '500px',
        margin: '20px auto',
        padding: '10px',
        cursor: 'pointer',
        background: '#cee4f8',
        display: 'inline-block',
        borderRadius: '8px',
      }}
    >
      <a
        href="https://polarbearsinternational.org/act-now/take-action/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: '#000' }}
      >
        Take Action
      </a>
    </motion.div>
    <p>
      Adopt a Polar Bear through World Wildlife Fund (WWF) protect polar bears in the Arctic and help fund their vital work around the world!
    </p>
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{
        width: '500px',
        margin: '20px auto',
        padding: '10px',
        cursor: 'pointer',
        background: '#cee4f8',
        display: 'inline-block',
        borderRadius: '8px',
      }}
    >
      <a
        href="https://support.wwf.org.uk/adopt-a-polar-bear"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: '#000' }}
      >
        Adopt a Polar Bear
      </a>
    </motion.div>
    <div>
    <img
      src="/assets/images/p1.jpg"
      alt="Polar Bear"
      style={{ width: '600px', borderRadius: '10px' }}
    />
    </div>
    <h2>
      Plastic Pollution hurts them too. Do your part by reducing plastic waste and recycling!
    </h2>
    <PlasticPolarBear />
  </div>
);

export default Home;
