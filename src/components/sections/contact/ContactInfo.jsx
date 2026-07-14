import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-10"
    >
      <div className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Email
        </p>
        <a
          aria-label="Send an email to Hassan"
          href="mailto:muhayyudinhassan@gmail.com"
          className="text-lg md:text-xl font-semibold text-foreground hover:text-primary transition-colors duration-300 break-all"
        >
          muhayyudinhassan@gmail.com
        </a>
        <p className="text-muted-foreground leading-7">
          Feel free to reach out for freelance projects, collaborations, or
          frontend development opportunities.
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Location
        </p>
        <p className="text-lg font-semibold text-foreground">
          Islamabad, Pakistan
        </p>
        <p className="text-muted-foreground leading-7">
          Available for remote work worldwide.
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Availability
        </p>
        <p className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
          Available for Freelance
        </p>
        <p className="text-muted-foreground leading-7">
          Currently accepting new freelance projects and frontend development
          opportunities.
        </p>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Socials
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/HassanMD-Dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <FontAwesomeIcon
              className="text-2xl text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer hover:-translate-y-1"
              icon={faGithub}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/hassanmuhayyudin-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <FontAwesomeIcon
              className="text-2xl text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer hover:-translate-y-1"
              icon={faLinkedin}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
