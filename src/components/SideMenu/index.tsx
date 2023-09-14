import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context";
import { langs } from "../../lang/menu";

const SideMenu: React.FC = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const list = [
    { link: "/", title: `${langs.about[language]}` },
    { link: "/skills", title: `${langs.skills[language]}` },
    { link: "/experience", title: `${langs.exp[language]}` },
  ];

  return (
    <div className="bg-menu h-full w-[20%] flex flex-col items-center justify-center">
      <div className="h-full flex flex-col items-center gap-9 justify-center">
        {list.map(({ link, title }) => {
          return (
            <div
              className={`no-underline ${pathname === link && "text-primary"}`}
            >
              <Link to={link}>{title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
