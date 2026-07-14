import { Button } from "@/components/ui/button";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialLinks from "../../../data/socialLinks";
import { motion } from "framer-motion";

const HeroSocials = () => {
  return (
    <motion.div className="flex items-center gap-4">
      {SocialLinks.map((social) => (
        <Button
          key={social.id}
          variant="ghost"
          size="icon"
          asChild
          className={
            "rounded-full text-muted-foreground hover:text-primary transition-colors h-11 w-11"
          }
        >
          <motion.a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <FontAwesomeIcon icon={social.icon} className="text-xl" />
          </motion.a>
        </Button>
      ))}
    </motion.div>
  );
};

export default HeroSocials;
