import { useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

function App() {
  useEffect(() => {
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
  <section id="contact">
    <Contact />
  </section>
</div>

  );
}

export default App;
