import React from "react";
import heroImg from "../../../assets/hmd1.webp";
import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  fadeRight,
} from "@/animations/variants";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-background min-h-screen py-24 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.div variants={staggerItem}>
            <HeroBadge />
          </motion.div>
          <motion.div variants={staggerItem}>
            <HeroContent />
          </motion.div>
          <motion.div variants={staggerItem}>
            <HeroButtons />
          </motion.div>
          <motion.div variants={staggerItem}>
            <HeroSocials />
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            rotate: 1,
            scale: 1.02,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          }}
          className="relative flex justify-center items-center justify-self-center w-72 md:w-80 lg:w-[380px] aspect-[4/5]"
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.12, 0.22, 0.12],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 bg-primary rounded-full blur-3xl opacity-15  w-72 md:w-80 lg:w-96 aspect-square"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.08, 1, 1.08],
              opacity: [0.22, 0.12, 0.22],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-0 bg-secondary rounded-full blur-3xl opacity-15 w-72 md:w-80 lg:w-96 aspect-square"
          ></motion.div>
          <motion.img
            src={heroImg}
            alt="Portrait of Hassan"
            loading="eager"
            className="relative z-10 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl ring-1 w-full h-full ring-border hover:ring-primary/40 object-cover"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
