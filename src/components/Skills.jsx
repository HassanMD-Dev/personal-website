import React from "react";
import skillList from "../data/SkillData";
import SkillCard from "./SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <section className="bg-slate-900" id="skill">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-24 text-center">
        <h3 className="text-cyan-400 uppercase tracking-widest font-semibold text-sm">
          Tech Stack
        </h3>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black mt-2">
          Skills & Technologies
        </h1>
        <p className="text-slate-400 max-w-2xl leading-relaxed mt-4 mx-auto">
          Technologies and tools I use to build modern, responsive and
          user-friendly web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 ">
          {skillList.map((list) => (
            <SkillCard
              key={list.id}
              icon={list.icon}
              title={list.title}
              desc={list.desc}
              categ={list.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
