import React, { useEffect } from "react";
import Descrip from "../components/About_components/descripion";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import './About.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // only animate once when it scrolls into view
    });
  }, []);

  return (
    <div className="About_Container">
      <h1
        style={{
          background: 'linear-gradient(90deg, #a446ff, #6a60ff)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          textAlign: 'center',
          fontSize: '3.5rem'
        }}
      >
        About me
      </h1>


      <h2
        style={{ color: 'gray', textAlign: 'center' }}
      >
        Transforming ideas into digital experiences
      </h2>



      <Descrip/>
        
    </div>
  );
}

export default About;
