import { useEffect } from 'react';
import Glow_Back from './components/glow_background';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = document.createElement('div');
      dot.className = 'cursor-trail';
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      document.body.appendChild(dot);

      // Remove the dot after animation ends
      setTimeout(() => {
        dot.remove();
      }, 600); // same duration as animation
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
      <Portfolio/>
    </div>
  );
}

export default App;
