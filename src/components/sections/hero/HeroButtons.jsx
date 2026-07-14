import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <Button
          className={"rounded-xl gap-2 font-semibold"}
          variant="default"
          size="lg"
          asChild
        >
          <a className="flex gap-2 items-center" href="#contact">
            Hire Me <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <Button
          asChild
          className={"rounded-xl gap-2 font-semibold"}
          variant="outline"
          size="lg"
        >
          <a
            className="flex gap-2 items-center"
            href="/hassanResume.pdf"
            download={"Hassan_MD_Resume.pdf"}
          >
            Download Resume <Download className="h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroButtons;
