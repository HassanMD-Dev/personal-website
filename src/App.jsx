import React from "react";
import Navbar from "./components/layout/Navbar";
import Skills from "./components/sections/skills/Skills";
import Project from "./components/sections/projects/Projects";
import Footer from "./components/layout/footer/Footer";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Contact from "./components/sections/contact/Contact";
import { Toaster } from "react-hot-toast";
import ScrollProgess from "./components/ScrollProgess";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-background min-h-screen px-2">
        <ScrollProgess />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
