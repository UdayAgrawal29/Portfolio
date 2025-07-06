import React from "react";
import "./ProjectPopup.css";

const ProjectPopup = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-detail">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="popup-left">
          <h2 className="popup-title">{project.title}</h2>
          <p className="popup-desc">{project.description1}</p>

         

          <h4>🛠 Technologies Used</h4>
          <div className="tech-badges">
            {project.technologies?.map((tech, i) => (
              <span key={i} className="tech-chip">{tech}</span>
            ))}
          </div>
        </div>

        <div className="popup-right">
          <img src={project.image} alt={project.title} className="popup-img" />

          <div className="popup-features">
            <h4>🌟 Key Features</h4>
            <ul>
              {project.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
