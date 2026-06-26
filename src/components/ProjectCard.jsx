import React from "react";

const ProjectCard = ({ img, categ, title, descr, tech}) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-violet-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/10 hover:cursor-pointer">
      <div className="h-56">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full hover:scale-105 transition-all duration-200 hover:cursor-pointer"
        />
      </div>
      <div className="p-6 flex flex-col">
        <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">{categ}</p>
        <h1 className="text-white text-2xl font-bold mt-3">{title}</h1>
        <p className="text-slate-400 text-sm leading-relaxed mt-3">{descr}</p>
        <div className="flex flex-wrap gap-2 mt-5">
            {tech.map((item, index) => (
            <p className="bg-slate-700 text-cyan-400 text-xs px-3 py-1.5 rounded-full" key={index}>{item}</p>
            ))}
        </div>
        <div className="flex gap-3 mt-6">
          <button className="bg-violet-600 hover:bg-violet-700 text-white border-none px-4 py-2 rounded-xl hover:cursor-pointer">
            Live Demo
          </button>
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-4 py-2 rounded-xl hover:cursor-pointer transition-all duration-200">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
