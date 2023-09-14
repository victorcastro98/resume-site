import React from "react";
import { langs } from "../../lang/Experience";
import { useLanguage } from "../../context";

const Experience: React.FC = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    setExpanded(true);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="text-primary text-4xl ml-10 font-semibold">
        {langs.title[language]}
      </div>
      <div className="w-full h-full flex flex-row gap-5">
        <div
          className={`w-2 bg-gradient-to-b from-transparent to-primary to-20% ${
            expanded ? "h-full" : "h-0"
          } transition-height duration-500`}
        />
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-row gap-3 items-center">
            <div className="text-primary">{langs.text1.date[language]}</div>
            <div className="rounded-full w-5 h-5 bg-primary" />
            <div className="w-[80%]">
              {langs.text1.text1[language]}
              <a
                href="https://qesh.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary cursor-pointer"
              >
                Brand Site
              </a>
              {langs.text1.text2[language]}
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="text-primary">{langs.text2.date[language]}</div>
            <div className="rounded-full w-5 h-5 bg-primary" />
            <div className="w-[80%]">{langs.text2.text[language]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
