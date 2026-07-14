import React, { useState, useEffect } from "react";
import NavLink from "../../data/Navigation";
import NavLinks from "./navbar/NavLinks";
import Logo from "./navbar/Logo";
import ResumeButton from "./navbar/ResumeButton";
import ThemeToggle from "./navbar/ThemeToggle";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <nav className="sticky top-4 mx-auto px-4 md:px-6 lg:px-8 bg-background/80 backdrop-blur-xl border border-border max-w-7xl h-20 flex justify-between items-center rounded-2xl z-50">
      <Logo />
      <NavLinks links={NavLink} activeSection={activeSection} />
      <div className="flex gap-2 md:gap-4 items-center">
        <ThemeToggle />
        <ResumeButton className={"hidden md:flex"} />
      </div>
      <MobileMenu open={open} setOpen={setOpen} links={NavLink} />
    </nav>
  );
};

export default Navbar;
