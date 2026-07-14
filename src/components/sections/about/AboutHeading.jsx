import React from "react";
import { motion } from "framer-motion";
const AboutHeading = () => {
  return (
    <motion.div
      className="space-y-3 text-center"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-primary">
        About Me
      </p>
      <h2 className="max-w-4xl mx-auto mb-8 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
        Building modern, responsive, and user-focused web experiences.
      </h2>
    </motion.div>
  );
};

export default AboutHeading;
