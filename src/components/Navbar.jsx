import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#0077b6',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    <h1 style={{ margin: 0 }}>Help the Polar Bears</h1>
    <div style={{ display: 'flex', gap: '15px' }}>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        Home
      </Link>
      <Link
        to="/fun-facts"
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        Fun Facts
      </Link>
      <Link
        to="/population"
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        Population
      </Link>
      <Link
        to="/about-me"
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        About Me
      </Link>
    </div>
  </nav>
);

export default Navbar;
