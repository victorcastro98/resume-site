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
      className="md:grid md:grid-cols-4 md:gap-8
     w-full h-full flex flex-col gap-4"
    >
      {list.map((text) => {
        return (
          <div
            className="bg-primary text-gray-200
            flex justify-center items-center md:h-36 md:w-36 rounded-full 
            shadow-[0_0_14px_0_rgba(255,0,122)] hover:translate-x-1 
            transition-transform duration-300
            
            w-full h-fit px-12 py-2"
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
