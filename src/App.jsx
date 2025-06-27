import { useEffect } from 'react';
import Navbar from './componets/navbar';
import Home from './pages/home';
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
      <Home />
    </div>
  );
}

export default App;
