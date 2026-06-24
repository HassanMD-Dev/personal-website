import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      id: "1",
      name: "Skills",
    },
    {
      id: "2",
      name: "Projects",
    },
    {
      id: "3",
      name: "Contact",
    },
  ];
  return (
    <nav className="relative sticky top-0 mx-auto px-6 bg-slate-950/30 backdrop-blur-xl border border-white/10 max-w-7xl h-[80px] flex justify-between items-center rounded-2xl z-50">
      <div className="flex justify-end items-center h-[40px]">
        <h1 className="text-white text-3xl font-bold ">Hassan</h1>
        <span className="text-violet-500 text-3xl">.</span>
      </div>
      <ul className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-slate-400 text-base font-medium hover:text-violet-400 cursor-pointer hover:-translate-y-0.5 transition-all duration-200 ease-out active:text-violet-400"
          >
            {link.name}
          </li>
        ))}
      </ul>
      {open && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-slate-950/90 backdrop-blur-xl flex flex-col items-center gap-6 py-6 rounded-b-2xl">
          {navLinks.map((link) => (
            <li
              className="text-slate-400 text-base hover:text-violet-400 cursor-pointer text-center"
              onClick={() => setOpen(false)}
              key={link.id}
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={open ? faXmark : faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
