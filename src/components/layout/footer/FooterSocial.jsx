import React from "react";
import socialLinks from "@/data/socialLinks";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSocial = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      {socialLinks.map((social) => (
        <motion.div
          key={social.id}
          whileHover={{ y: -3, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-11 w-11"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <FontAwesomeIcon icon={social.icon} className="text-lg" />
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default FooterSocial;
