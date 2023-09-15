import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context";
import { langs } from "../../lang/menu";
import Toggle from "../../assets/images/Toggle.svg";

const ToggleMeneu: React.FC = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const list = [
    { link: "/", title: `${langs.about[language]}` },
    { link: "/skills", title: `${langs.skills[language]}` },
    { link: "/experience", title: `${langs.exp[language]}` },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-full md:hidden absolute left-3 top-3">
      <div
        className={`bg-menu h-[4%] w-[100px] items-center
        justify-center flex cursor-pointer ${
          isMenuOpen ? "rounded-t-md" : "rounded-md"
        }`}
        onClick={toggleMenu}
      >
        <img className="h-[30px]" src={Toggle} alt="Linkedin" />
      </div>

      <div
        className={`bg-menu w-[100px] h-fit flex flex-col rounded-b-md 
        items-center gap-2 justify-center ${
          isMenuOpen ? "md:block" : "hidden md:block"
        }`}
      >
        {list.map(({ link, title }) => (
          <div
            onClick={toggleMenu}
            key={link}
            className={`no-underline p-2 ${
              pathname === link && "text-primary"
            }`}
          >
            <Link to={link}>{title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleMeneu;
