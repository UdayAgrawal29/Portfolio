import { useEffect, useState } from 'react';
import Glow_Back from './components/glow_background';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/About';

import './App.css';

function App() {
  const handleMouseMove = (e) => {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    document.body.appendChild(dot);

    setTimeout(() => {
      dot.remove();
    }, 600); 
  };

  useEffect(() => {

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="main">
      <Glow_Back/>
      <Navbar />
      <Home />
      <About />
      <About />
      <About />
    </div>
  );
}

export default App;
