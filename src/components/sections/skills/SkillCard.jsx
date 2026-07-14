import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SkillCard = ({ skills, variants }) => {
  return (
    <motion.article
      variants={variants}
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ "--icon-color": skills.color }}
      className="h-full group rounded-2xl shadow-md hover:shadow-xl border border-border overflow-hidden bg-card p-6 transition-all duration-200 hover:border-primary/60"
    >
      <div className="flex flex-col items-center text-center gap-5">
        <motion.div
          whileHover={{
            scale: 1.15,
            rotate: 5,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <FontAwesomeIcon
            className="text-primary text-4xl transition-all duration-300 group-hover:text-[var(--icon-color)]"
            icon={skills.icon}
          />
        </motion.div>
        <h2 className="font-semibold text-lg text-foreground">{skills.name}</h2>
        <p className="text-sm leading-6 text-muted-foreground">
          {skills.description}
        </p>
      </div>
    </motion.article>
  );
};

export default SkillCard;
