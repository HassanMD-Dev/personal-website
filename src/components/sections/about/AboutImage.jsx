import React from "react";
import AboutImg from "../../../assets/hmd1.webp";
import { motion } from "framer-motion";
const AboutImage = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-md rounded-3xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={AboutImg}
        loading="lazy"
        alt="Portrait of Hassan"
        className="w-full mx-auto object-cover"
      />
    </motion.div>
  );
};

export default AboutImage;
