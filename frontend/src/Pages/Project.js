import React, { useState } from "react";
import "../styles/Project.css";

const projects = [
  {
    id: 1,
    name: "BrainBusters",
    description: "An aptitude testing website with categorized questions.",
    features: ["Categorized questions", "User authentication", "Leaderboard"],
    technologies: ["React.js", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    name: "Besant Technology Website",
    description: "A professional website for Besant Technologies.",
    features: ["Modern design", "Responsive layout", "React components"],
    technologies: ["React.js", "Bootstrap"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    name: "Weather Forecast App",
    description: "A weather forecasting app showing real-time data.",
    features: ["Real-time weather", "Search by location", "Responsive UI"],
    technologies: ["React.js", "OpenWeather API"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 4,
    name: "Certificate Generator",
    description: "A Python-based app for issuing certificates.",
    features: ["Dynamic certificate creation", "PDF export"],
    technologies: ["Python", "Flask"],
    demoLink: "#",
    codeLink: "#",
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Explore My Work</h1>
      <div className="circular-layout">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-node"
            onClick={() => handleOpenModal(project)}
          >
            {project.name}
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            <h3>Features</h3>
            <ul>
              {selectedProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3>Technologies</h3>
            <p>{selectedProject.technologies.join(", ")}</p>
            <div className="modal-buttons">
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
    