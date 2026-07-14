import React from "react";

import SkillHeading from "./SkillHeading";
import SkillGrid from "./SkillGrid";

const Skills = () => {
  return (
    <section className="bg-background" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <SkillHeading />
        <SkillGrid />
      </div>
    </section>
  );
};

export default Skills;
