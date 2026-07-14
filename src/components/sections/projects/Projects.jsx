import React from "react";
import ProjectHeading from "./ProjectHeading";
import ProjectGrid from "./ProjectGrid";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/variants";
const Project = () => {
  return (
    <section className="bg-background py-24 px-4 md:px-6 lg:px-8" id="project">
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.3}}
      className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-16 text-center">
        <motion.div variants={staggerItem}>
        <ProjectHeading />
        </motion.div>
        <motion.div variants={staggerItem}>
        <ProjectGrid />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Project;
