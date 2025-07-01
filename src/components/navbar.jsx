import React, { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["home", "about", "portfolio"];
      let currentSection = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar_container ${scrolled ? "scrolled" : ""}`}>
      <button className="tagline"><img src='src/images/star-removebg-preview.png'/> Ready to Innovate</button>
      <div className="nav_links">
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#portfolio"
          className={activeSection === "portfolio" ? "active" : ""}
        >
          Portfolio
        </a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}


export default Navbar;
