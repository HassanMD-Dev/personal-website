import React from "react";
import projectsData from "../data/ProjectData";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section className="bg-slate-950 py-24 px-8" id="project">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-16 text-center">
        <p className="text-cyan-400 uppercase tracking-widest font-semibold text-sm">
          MY WORK
        </p>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black mt-2">
          Featured Projects
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed mt-4">
          A collection of projects showcasing my frontend development skills
          using React, JavaScript and modern web technologies.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.image}
            categ={project.category}
            title={project.title}
            descr={project.desc}
            tech={project.tech}
            liveDemo={project.LiveDemo}
            gitHub={project.GitHub}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
