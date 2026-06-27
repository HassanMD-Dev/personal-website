import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center gap-8">
        <p className="text-white text-2xl font-black tracking-tight">
          Hassan Muhayyudin
        </p>
        <p className="text-slate-400 max-w-md leading-relaxed text-center lg:text-left">
          Frontend Developer focused on building modern, responsive and
          user-friendly web applications with React and Tailwind CSS.
        </p>
        <div className="flex gap-5 items-center">
          <a
            href="https://github.com/HassanMD-Dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-slate-400 text-2xl hover:text-violet-400 cursor-pointer hover:scale-110 transition-all duration-300"
              icon={faGithub}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-muhayyudin-239b9a32a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-slate-400 text-xl hover:text-violet-400 cursor-pointer hover:scale-110 transition-all duration-300"
              icon={faLinkedinIn}
            />
          </a>
          <a
            href="mailto:muhayyudinhassan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-slate-400 text-xl hover:text-violet-400 cursor-pointer hover:scale-110 transition-all duration-300"
              icon={faEnvelope}
            />
          </a>
        </div>
        <hr className="my-auto border-t border-slate-800" />
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Hassan Muhayyudin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
