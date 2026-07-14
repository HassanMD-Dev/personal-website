import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/variants";
import FooterBrand from "./FooterBrand";
import FooterSocial from "./FooterSocial";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16"
      >
        <motion.div variants={staggerItem}>
          <FooterBrand />
        </motion.div>

        <motion.div variants={staggerItem}>
          <FooterSocial />
        </motion.div>

        <motion.div variants={staggerItem}>
          <FooterLinks />
        </motion.div>

        <div className="my-10 h-px w-full bg-border" />

        <motion.div variants={staggerItem}>
          <FooterBottom />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
