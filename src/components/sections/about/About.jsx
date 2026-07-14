import React from "react";
import AboutHeading from "./AboutHeading";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, staggerContainer, staggerItem } from "@/animations/variants";
const About = () => {
  return (
    <section id="about" className="bg-background py-24 px-4 md:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={staggerItem}>
          <AboutHeading />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 items-center">
          <motion.div variants={fadeLeft}>
          <AboutImage />
          </motion.div>
          <motion.div variants={fadeRight}>
          <AboutContent />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
