import React, { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["home", "about", "portfolio", "contact"];
      let currentSection = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2){
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar_container ${scrolled ? "scrolled" : ""}`}>
      <button
        className="tagline"
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <img src="images/star-removebg-preview.png" alt="star" /> Open To Work
      </button>

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
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>
      
      </div>
    </div>
  );
}


export default Navbar;
