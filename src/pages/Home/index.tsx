import React from "react";
import image from "../../assets/images/foto1.jpg";
import Linkedin from "../../assets/images/Linkedin.svg";
import Whatsapp from "../../assets/images/Whatsapp.svg";
import SpeechBubble from "../../components/SpeechBubble";
import { langs } from "../../lang/Home";
import { useLanguage } from "../../context";

const Home: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col md:flex-row gap-5 h-full items-center">
      <div className="flex flex-col justify-between h-[70%]">
        <div className="flex flex-col gap-5">
          <div className="text-4xl font-semibold text-primary">
            {langs.text.text1[language]}
          </div>
          <div className="text-lg w-[100%] md:w-[90%]">
            {langs.text.text2[language]}
            <span className="text-primary">Victor Castro de Carvalho</span>
            {langs.text.text3[language]}
            <span className="text-primary">Front End</span>
            {langs.text.text4[language]}
            <span className="text-primary">{langs.text.text5[language]}</span>
            {langs.text.text6[language]}{" "}
            <span className="text-primary">{langs.text.text7[language]}</span>.
          </div>
        </div>
        <div className="flex flex-col self-end gap-3">
          <SpeechBubble text={langs.bubble[language]} />
          <div className="flex flex-row  self-center gap-3">
            <a
              href={`https://api.whatsapp.com/send?phone=${"5531993966037"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="cursor-pointer" src={Whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-castro-b13110189/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="cursor-pointer" src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>
      </div>
      <img
        src={image}
        alt="eu"
        className="hidden md:block w-[40%] h-[90%] rounded-lg hover:translate-x-1 
        transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};

export default Home;
