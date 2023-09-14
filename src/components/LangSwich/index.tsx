import React from "react";
import { useLanguage } from "../../context";

const LangSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleTheme = () => {
    setLanguage(language === "ENG" ? "PT" : "ENG");
  };

  return (
    <div
      onClick={toggleTheme}
      className={`mr-14 cursor-pointer w-[50px] flex items-center
      justify-center h-fit rounded-full bg-primary`}
    >
      <div className={"text-gray-200"}>{language === "ENG" ? "ENG" : "PT"}</div>
    </div>
  );
};

export default LangSwitch;
