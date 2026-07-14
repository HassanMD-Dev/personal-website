import React from 'react'
import projectsData from "../../../data/ProjectData";
import ProjectCard from "./ProjectCard";
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/animations/variants';

const ProjectGrid = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{once:true, amount:0.3}}
    className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              projects={project}
              variants={staggerItem}
            />
        ))}
      </motion.div>
  )
}

export default ProjectGrid
