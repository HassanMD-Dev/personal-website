import React from "react";
import { motion } from "framer-motion";
const FooterLinks = () => {
  const links = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Projects", href: "#projects" },
    { id: 5, name: "Contact", href: "#contact" },
  ];
  return (
    <nav className="mt-10" aria-label="Footer Navigation">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
        {links.map((link) => (
          <motion.li
            key={link.id}
            whileHover={{ y: -2 , scale: 1.03}}
            transition={{ duration: 0.2 }}
          >
            <a
              href={link.href}
              className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;
