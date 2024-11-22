// removed
import React from 'react';

const PopulationPage = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1>Population Visualisations</h1>
    <h2>This page is still in progress.</h2>
    <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.6' }}>
      I explored <strong>Time Series Forecasting</strong> and <strong> Predictive Modeling</strong> methods by analyzing and forecasting polar bear population dynamics using <strong>Sea Ice Data</strong>. More details can be found on my
      <a
        href="https://github.com/phoebenyi/polar-bear-predictive-modeling"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#0077b6',
          textDecoration: 'none',
          fontWeight: 'bold',
          padding: '5px',
        }}
      >
        <strong>GitHub</strong>
      </a>
page, and the dataset used is publicly available at: 
      <a
        href="https://datadryad.org/stash/dataset/doi:10.5061/dryad.f68m0"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#0077b6',
          textDecoration: 'none',
          fontWeight: 'bold',
          padding: '5px',
        }}
      >
        Dataset on Dryad
      </a>
    </p>
  </div>
);

export default PopulationPage;