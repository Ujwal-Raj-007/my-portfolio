import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    { name: "Portfolio Website", link: "#", desc: "React + CSS Portfolio" },
    { name: "Todo App", link: "#", desc: "Task manager with MERN" },
    { name: "E-commerce", link: "#", desc: "Shopping site using MERN stack" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectList.map((p, index) => (
          <div className="card" key={index}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
