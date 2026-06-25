import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SkillCard = ({ icon, title, desc, categ }) => {
  return (
    <article className="bg-slate-800 border border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:border-violet-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/10 hover:cursor-pointer">
      <div className="flex flex-col justify-center items-center text-center h-full">
        <div>
          <div className="mb-5 text-violet-400 text-5xl flex justify-center items-center">
            <FontAwesomeIcon icon={icon} />
          </div>
          <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-[220px]">
            {desc}
          </p>
          <span className="bg-slate-700 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
            {categ}
          </span>
        </div>
      </div>
    </article>
  );
};

export default SkillCard;
