import React, { useState } from "react";
import "./ProjectTab.css";
import { ExternalLink } from "lucide-react";
import ProjectPopup from "./ProjectPopup";


const projectList = [
  {
    title: "DevaOCR",
    description: "AI-powered system for recognizing handwritten Devanagari script.",
    description1:`
                  DevaOCR is a deep learning-based system built using Microsoft's TrOCR model 
                  to recognize handwritten Hindi text. It converts scanned or photographed manuscripts 
                  into editable digital text. A dataset of 90,000+ Hindi characters and synthetic 
                  manuscript-style images was used to fine-tune the model for high accuracy.
                  `,
    image: "images/Project/Projects/DevaOCR.png",
    demoLink: "https://huggingface.co/spaces/UdayAgrawal29/handwritten-devanagari-text-recognition",
    technologies: ["Python", "TrOCR", "Hugging Face", "PIL", "Deep Learning"],
    features: [
      "Hindi handwritten text recognition",
      "Character and word-level predictions",
      "Custom dataset & synthetic data",
      "TrOCR fine-tuning for Hindi"
    ],
  },
  {
    title: "VISTA",
    description: "AI-driven multilingual system for enhancing museum experiences",
    description1: 
                  `VISTA is an AI-enhanced multilingual system developed for the Smart India Hackathon.
                  It is designed to streamline museum operations and enrich visitor experience using smart multilingual
                  interfaces, digital kiosks, and AI-backed content delivery. It bridges the language gap and makes cultural
                  content more accessible and interactive for all visitors.`,

    image: "images/Project/Projects/VISTA.png", 
    demoLink: "#",
    technologies: ["HTMLt", "CSS", "JS", "DJANGO"],
    features: [
      "Multilingual content delivery",
      "AI-based visitor interaction",
      "Museum management support",
      "Smart kiosk integration"
    ],
  },
  {
    title: "TradeInsight",
    description: "Web platform providing trading patterns and indicators.",
    description1: 

                `TradeInsight is a financial insights platform that analyzes stock data 
                to deliver useful trading patterns and indicators. It helps users make informed 
                decisions through dynamic chart visualizations, technical signal detection, and 
                real-time trend identification. The tool is especially useful for retail traders
                and beginner investors.`,

    image: "images/Project/Projects/TradeInsight.png",
    demoLink: "#",
    technologies: ["JavaScript", "React", "QuickChart.io", "Finnhub API", "WebSocket"],
    features: [
      "Live stock market data",
      "Real-time graph rendering",
      "Trading patterns & technical indicators",
      "Clean, responsive UI"
    ],
  },
];


const ProjectTab = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="proj_grid">
        {projectList.map((proj, index) => (
          <div className="proj_card" key={index}>
            <img src={proj.image} alt={proj.title} className="proj_image" />
            <h3 className="proj_title">{proj.title}</h3>
            <p className="proj_descrip">{proj.description}</p>

            <div className="proj_links">
              <div className="demo-placeholder">
                {proj.demoLink ? (
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-link"
                  >
                    Link <ExternalLink size={18} color="#60a5fa" />
                  </a>
                ) : (
                  <div style={{ width: "80px" }}></div>
                )}
              </div>

              <button className="details-button" onClick={() => setSelectedProject(proj)}>
                Details →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}


    </>
  );
};

export default ProjectTab;
