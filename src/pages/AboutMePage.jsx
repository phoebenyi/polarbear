import React from 'react';

const AboutMePage = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1>About Me</h1>
    <div>
    <img
      src="/assets/images/cat.jpg"
      alt="Phoebe"
      style={{ width: '600px', borderRadius: '10px' }}
    />
    </div>
    <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.6' }}>
      Hello~ I'm <strong>Phoebe</strong>, the creator of this website and a student at 
      <strong> Singapore Management University</strong>. I am passionate about Data Science, Software Engineering, 
      Cute Animals (like cats and polar bears!), and Environmental Sustainability.
    </p>
    <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.6' }}>
      This site is a personal project I created to learn more about <strong>React</strong>, <strong>Three.js</strong>, and 
      <strong> Vercel</strong> while aiming to inspire people to take action for polar bears and our environment. Additionally, I got to explore <strong>Time Series Forecasting</strong> and <strong> Predictive Modeling</strong> methods by analyzing and forecasting polar bear population dynamics using <strong>Sea Ice Data</strong>. The visualizations and insights are shared in the
      <a
        href="/Population.jsx"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#0077b6',
          textDecoration: 'none',
          fontWeight: 'bold',
          padding: '5px',
        }}
      >
        <strong>Population</strong>
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
    <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.6' }}>
      I hope you enjoy exploring the site and learning more about these amazing creatures as well as the challenges 
      they face due to climate change!
    </p>
  </div>
);

export default AboutMePage;
