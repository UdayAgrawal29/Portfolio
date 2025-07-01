import { useEffect } from 'react';
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
  <section id="home">
    <Home />
  </section>
  <section id="about">
    <About />
  </section>
  <section id="portfolio">
    <Portfolio />
  </section>
</div>

  );
}

export default App;
