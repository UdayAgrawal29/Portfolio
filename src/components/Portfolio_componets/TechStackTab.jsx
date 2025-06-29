import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiVercel,
} from "react-icons/si";

import './TechStackTab.css'

const stack = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" size={40} /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" size={40} /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06b6d4" size={40} /> },
  { name: "ReactJS", icon: <FaReact color="#61DBFB" size={40} /> },
  { name: "Vite", icon: <SiVite color="#646CFF" size={40} /> },
  { name: "Node JS", icon: <FaNodeJs color="#68a063" size={40} /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" size={40} /> },
  { name: "Vercel", icon: <SiVercel color="#000000" size={40} /> },

];


function TechStackTab() {
  return (
    <div className="techStackContainer">
      <div className="grid">
        {stack.map((tech, index) => (
          <div className="card" key={index}>
            {tech.icon}
            <span className="label">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStackTab;



