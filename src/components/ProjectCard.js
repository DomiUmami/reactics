import React from "react";
import "../styles/Cards.css";


export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <button className="card-view" onClick={null}>
        View
         </button>
      <h2 className="card-title">{project.name}</h2>
      <p className="card-description">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        View Project
      </a>
    </div>
  );
}