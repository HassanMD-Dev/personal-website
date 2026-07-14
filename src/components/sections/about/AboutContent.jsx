import React from "react";
import {
  CheckCircle2,
  Code2,
  MonitorSmartphone,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Code2 className="h-5 w-5 text-primary" />,
    title: "React Development",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5 text-primary" />,
    title: "Responsive Design",
  },
  {
    icon: <Zap className="h-5 w-5 text-primary" />,
    title: "Performance Focus",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
    title: "Clean Code",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const AboutContent = () => {
  return (
    <div className="space-y-8">
      <p className="text-muted-foreground leading-8 text-base md:text-lg">
        I'm Hassan, a frontend developer passionate about building modern,
        responsive, and user-friendly web applications. I enjoy transforming
        ideas into clean and engaging digital experiences using React,
        JavaScript, Tailwind CSS, and WordPress.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 gap-4"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              y: -3,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm hover:border-primary/40 hover:shadow-lg"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              transition={{ duration: 0.2 }}
            >
              {feature.icon}
            </motion.div>

            <span className="font-medium text-foreground">
              {feature.title}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <p className="text-muted-foreground leading-8 text-base md:text-lg">
        I'm continuously improving my skills by building real-world projects,
        exploring modern UI/UX practices, and writing clean, maintainable code.
        My goal is to create fast, accessible, and high-quality websites that
        provide an excellent user experience.
      </p>
    </div>
  );
};

export default AboutContent;