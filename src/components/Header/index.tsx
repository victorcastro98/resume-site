import React from "react";
import ThemeSwich from "../ThemeSwich";
import LangSwitch from "../LangSwich";
import ToggleMeneu from "../ToggleMenu";

const Header: React.FC = () => {
  return (
    <div className="h-[7%] w-full flex flex-col items-end justify-center px-10">
      <ToggleMeneu />
      <LangSwitch />
      <ThemeSwich />
    </div>
  );
};

export default Header;
