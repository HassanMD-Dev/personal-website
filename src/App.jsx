import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillCard from "./components/SkillCard";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
