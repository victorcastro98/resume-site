import React from "react";
import ThemeSwich from "../ThemeSwich";
import LangSwitch from "../LangSwich";

const Header: React.FC = () => {
  return (
    <div className="h-[7%] w-full flex flex-col items-end justify-center px-10">
      <LangSwitch />
      <ThemeSwich />
    </div>
  );
};

export default Header;
