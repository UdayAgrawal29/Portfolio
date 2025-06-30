import './TechStackTab.css';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiVercel,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";


const stack = [
    // Programming Languages

  { name: "C++", icon: <img src="src\images\cplusplus.svg" alt="C++" width={90} height={90} />},
  { name: "Java", icon: <img src="src\images\java.svg" alt="Java" width={90} height={90} />},
  { name: "Python", icon: <img src="src\images\python.svg" alt="Python" width={90} height={90} />},

  // Frontend

  { name: "JavaScript", icon: <FaJs color="#f0db4f" size={90} /> },
  { name: "HTML", icon: <FaHtml5 color="#e34c26" size={90} /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" size={90} /> },
  { name: "ReactJS", icon: <FaReact color="#61DBFB" size={90} /> },
  // { name: "Tailwind CSS", icon: <SiTailwindcss color="#06b6d4" size={90} /> },
  // { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" size={90} /> },
  // { name: "Vite", icon: <SiVite color="#646CFF" size={90} /> },
  // { name: "Material UI", icon: <SiMaterialui color="#007FFF" size={90} /> },

  // Backend
  { name: "Node JS", icon: <FaNodeJs color="#68a063" size={90} /> },
  { name: "Express", icon: <SiExpress size={90} /> },
  {name: "Django", icon: <img src="src\images\django.svg" alt="Django" width={90} height={90} />},


  // Databases
  { name: "MongoDB", icon: <SiMongodb color="#47A248" size={90} /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={90} /> },

  // ML / AI
  { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" size={90} /> },
  { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" size={90} /> },
  { name: "Scikit-learn", icon: <SiScikitlearn color="#f7931e" size={90} /> },

  // Tools / Hosting
  // { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={90} /> },
  // { name: "Vercel", icon: <SiVercel color="#000000" size={90} /> },
  // { name: "Git", icon: <FaGitAlt color="#F05032" size={90} /> },
  // { name: "GitHub", icon: <FaGithub color="#181717" size={90} /> },
];


function TechStackTab() {
  return (
    <div className="techStackContainer">
      <div className="grid">
        {stack.map((tech, index) => (
          <div className="card" key={index}>
            <span className="icon">{tech.icon}</span>
            <span className="label">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStackTab;



