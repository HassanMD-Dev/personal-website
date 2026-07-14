import { Button } from "@/components/ui/button";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ResumeButton from "./ResumeButton";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const MobileMenu = ({ open, setOpen, links }) => {
  return (
    <div className="relative md:hidden">
      <Button onClick={() => setOpen(!open)} variant="ghost" size="icon">
        <FontAwesomeIcon icon={open ? faXmark : faBars} />
      </Button>
      <AnimatePresence>
      {open && (
        <motion.ul
        initial={{
          opacity:0,
          y:-10,
          scale:0.98
        }}
        animate={{
          opacity:1,
          y:0,
          scale:1
        }}
        exit={{
          opacity:0,
          y:-10,
          scale:0.98
        }}
        transition={{
          duration:0.25,
          ease:"easeOut"
        }}
        className="absolute w-64 top-16 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-xl p-5 right-0 flex flex-col gap-6">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-muted-foreground hover:text-foreground active:text-primary font-medium transition-colors duration-200"
            >
              <a onClick={() => setOpen(false)} href={link.linkId}>{link.name}</a>
            </li>
          ))}
          <li className="pt-2 border-t border-border">
            <ResumeButton className="w-full" />
          </li>
        </motion.ul>
      )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
