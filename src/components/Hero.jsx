import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import heroImg from "../assets/hmd1.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words:[
      "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
    "Modern Web Developer"
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed:50,
    delaySpeed:2000
  });
  
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col lg:flex-row justify-center lg:justify-around items-center px-6 sm:px-8 lg:px-16 py-20 gap-12">
      <div className="max-w-[600px] text-center lg:text-left">
        <p className="text-slate-400 text-base uppercase font-medium tracking-wide">
          Hello,I'm{" "}
        </p>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black">
          Hassan Muhayyudin
        </h1>
        <div className="flex items-center justify-center lg:justify-start min-h-[40px] mt-3 mb-2">
         <span className="text-violet-400 font-bold text-xl sm:text-2xl lg:text-3xl">{text} <span className="text-cyan-400 text-xl sm:text-2xl lg:text-3xl">|</span> </span>
        </div>
        <p className="text-slate-400 max-w-[500px] mx-auto lg:mx-0 text-lg leading-relaxed my-4">
          I build responsive, user-friendly and modern web applications using
          React, JavaScript and Tailwind CSS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center md:justify-center lg:justify-start lg:items-start">
          <button className="bg-violet-600 text-white hover:bg-violet-700 px-6 py-3 rounded-4xl border-none cursor-pointer transition-all duration-300">
            View Projects
          </button>
          <button className=" border border-cyan-400 text-cyan-400 bg-transparent px-6 py-3 rounded-4xl cursor-pointer hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 ease-in-out">
            Contact Me
          </button>
        </div>
        <div className="flex gap-6 mt-8 justify-center lg:justify-start">
          <a
            href="https://github.com/HassanMD-Dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-slate-400 text-xl hover:text-violet-400 cursor-pointer hover:scale-110 transition-all duration-300"
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
      </div>
      <div className="relative flex justify-center items-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
        <div className="absolute top-0 left-0 bg-violet-600 rounded-full blur-2xl opacity-25 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]"></div>
        <div className="absolute bottom-0 right-0 bg-cyan-500 rounded-full blur-2xl opacity-15 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]"></div>
        <img
          src={heroImg}
          alt="heroImg"
          className=" relative z-10 shadow-2xl rounded-full border-4 border-violet-500 object-cover w-[300px] h-[300px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Hero;
