import React from 'react'
import projectsData from "../../../data/ProjectData";
import ProjectCard from "./ProjectCard";
import { staggerItem } from '@/animations/variants';

const ProjectGrid = () => {
  return (
    <div
    className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              projects={project}
            />
        ))}
      </div>
  )
}

export default ProjectGrid
