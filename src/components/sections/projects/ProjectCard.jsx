import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ projects, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className=" bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 ease-out h-full flex flex-col shadow-sm hover:shadow-lg hover:border-primary/50"
    >
      <div className="overflow-hidden aspect-[16/10]">
        <motion.img
          whileHover={{
            scale: 1.08,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          src={projects.image}
          alt={projects.title}
          loading="lazy"
          className="object-cover w-full h-full ease-out"
        />
      </div>
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <p className="text-xs font-medium text-primary uppercase tracking-widest">
          {projects.category}
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          {projects.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-7">
          {projects.description}
        </p>
        <div className="flex flex-wrap gap-4">
          {projects.technologies.map((item, index) => (
            <motion.p
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground text-xs px-3 py-1 font-medium rounded-full transition-all duration-200"
              key={index}
            >
              {item}
            </motion.p>
          ))}
        </div>
        <div className="w-full flex gap-3 mt-auto pt-6 ">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1"
          >
            <Button
              variant="default"
              className="h-11 rounded-xl cursor-pointer"
              onClick={() => window.open(projects.liveUrl, "_blank")}
            >
              Live Demo{" "}
              <FontAwesomeIcon icon={faExternalLink} className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1"
          >
            <Button
              variant="outline"
              className="rounded-xl h-11 cursor-pointer"
              onClick={() => window.open(projects.githubUrl, "_blank")}
            >
              GitHub <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
