import { useState } from "react";
import ProjectTab from "../components/Portfolio_componets/ProjectTab";
import CertificateTab from "../components/Portfolio_componets/CertificateTab";
import TechStackTab from "../components/Portfolio_componets/TechStackTab";
import "./Portfolio.css"; 

import { Award } from "lucide-react";
import { Code2 } from "lucide-react";
import {Cpu } from "lucide-react"

function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="portfolio-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
        <Code2 size={32} color="#ffffff" />

          Projects
        </button>

        <button
          className={`tab-button ${
              activeTab === "certificates" ? "active" : ""
            }`}
          onClick={() => setActiveTab("certificates")}
        >
            <Award size={32} color="#ffffff" />
          Certificates
        </button>

        <button
          className={`tab-button ${activeTab === "tech" ? "active" : ""}`}
          onClick={() => setActiveTab("tech")}
        >
            <Cpu size={32} color="#ffffff" />
          Tech Stack
        </button>
      </div>

      <div className="tab-content">
        {/* {activeTab === "projects" && <ProjectTab />} */}
        {activeTab === "certificates" && <CertificateTab />}
        {activeTab === "tech" && <TechStackTab />}
      </div>
    </div>
  );
}

export default Portfolio;
