// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Cv from './components/Cv';
// import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
