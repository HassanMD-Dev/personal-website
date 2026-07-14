import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroContent = ({fadeUp}) => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "React Developer",
      "JavaScript Developer",
      "Modern Web Developer",
      "Freelancer"
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  return (
    <motion.div
     className="space-y-6"
     >
      <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-bold">
       Hi! I am Hassan Muhayyudin
        <br />
        {/* <span className="text-primary">Hassan</span> */}
      </h1>

      <p className="text-2xl font-semibold text-primary"><span>And I am </span>{text} |</p>

      <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-8">
        I craft fast, responsive, and user-focused web experiences using React,
        Tailwind CSS, JavaScript, and WordPress.
      </p>
    </motion.div>
  );
};

export default HeroContent;
