import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FunFactsPage from './pages/FunFactsPage';
import PopulationPage from './pages/PopulationPage';
import AboutMePage from './pages/AboutMePage';
import Metadata from './components/Metadata'; // Import centralized metadata component

function App() {
  return (
    <div style={{ backgroundColor: '#e0f7fa', minHeight: '100vh', padding: '0', margin: '0' }}>
      <Router>
        <Metadata /> {/* Centralized metadata for all routes */}
        <Navbar />
        <div style={{ padding: '20px' }}> {/* Padding for content below navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fun-facts" element={<FunFactsPage />} />
            <Route path="/population" element={<PopulationPage />} />
            <Route path="/about-me" element={<AboutMePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
