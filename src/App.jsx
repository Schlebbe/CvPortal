import { useState } from 'react';
import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Cv from './components/Cv';
import EasterEggModal from './components/EasterEggModal';
import Footer from './components/Footer';

function App() {
  const colors = ['#1e3a8a', '#4c1d95', '#0f172a', '#0ea5e9', '#7c3aed']; // cosmic theme colors
  const [colorIndex, setColorIndex] = useState(0);
  const [bgColor, setBgColor] = useState(''); // current background

  const handleAstronautClick = () => {
    const nextColor = colors[colorIndex];
    setBgColor(nextColor);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio handleAstronautClick={handleAstronautClick} bgColor={bgColor} />} />
        <Route path="/about" element={<About handleAstronautClick={handleAstronautClick} bgColor={bgColor} />} />
        <Route path="/cv" element={<Cv handleAstronautClick={handleAstronautClick} bgColor={bgColor} />} />
      </Routes>

      <EasterEggModal />

      <Footer />
    </HashRouter>
  )
}

export default App
