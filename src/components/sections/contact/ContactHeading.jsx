import React from "react";
import { motion } from "framer-motion";
const ContactHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-3 text-center"
    >
      <p className="text-sm uppercase tracking-widest font-medium text-primary">
        Contact
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
        Let's Build Something Great Together.
      </h2>
      <p className="max-w-2xl mx-auto text-muted-foreground leading-7 text-base md:text-lg">
        I'm currently available for freelance projects and frontend development
        opportunities. If you have an idea, a project, or just want to connect,
        I'd love to hear from you.
      </p>
    </motion.div>
  );
};

export default ContactHeading;
