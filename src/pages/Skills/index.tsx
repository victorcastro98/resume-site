import React from "react";

const Skills: React.FC = () => {
  const list = [
    "React",
    "TypeScript",
    "react-router-dom",
    "Tailwind",
    "styled-components",
    "CSS",
    "HTML",
    "Figma",
    "JavaScript",
    "Jest",
    "Cypress",
    "Vite",
  ];
  return (
    <div
      className="grid grid-cols-4 gap-8
     w-full h-full"
    >
      {list.map((text) => {
        return (
          <div
            className="bg-primary text-gray-200
            flex justify-center items-center h-36 w-36 rounded-full 
            shadow-[0_0_14px_0_rgba(255,0,122)] hover:translate-x-1 
            transition-transform duration-300"
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
