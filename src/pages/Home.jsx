import React from 'react';
import PlasticPolarBear from '../components/PlasticPolarBear';
import { motion } from 'framer-motion';
import '../App.css'

const Home = () => (
  <div className="home">
    <h1>Help the Polar Bears</h1>
    <h2>Global climate warming melts sea ice which polar bears depend on to hunt, mate, roam and den. </h2>
    <p>
      Donate to Polar Bears International to support their work in protecting polar bears through research, policy, and on-the-ground conservation efforts!
    </p>
    <motion.div className="home-action-button">
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
    <motion.div className="home-action-button" >
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
        className="home-polar-bear-image"
      />
    </div>
    <h2>
      Plastic Pollution hurts them too. Do your part by reducing plastic waste and recycling!
    </h2>
    <PlasticPolarBear />
  </div>
);

export default Home;
