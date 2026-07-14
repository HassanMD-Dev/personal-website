import React from "react";

const ProjectHeading = () => {
  return (
    <div
    className="text-center space-y-3">
      <p className="text-sm uppercase tracking-widest font-medium text-primary">Projects</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">Featured Projects</h2>
      <p className="max-w-3xl mx-auto text-base md:text-lg leading-8 text-muted-foreground">
        A selection of frontend projects showcasing my skills in React,
        JavaScript, Tailwind CSS, responsive design, and API integration.
      </p>
    </div>
  );
};

export default ProjectHeading;
