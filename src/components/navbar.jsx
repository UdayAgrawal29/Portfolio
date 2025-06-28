import React, { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`navbar_container ${scrolled ? "scrolled" : ""}`}>
      <button className="tagline">🚀 Ready to Innovate</button>
      <div className="nav_links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
