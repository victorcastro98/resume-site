import React, { useState } from "react";

const ThemeSwitch: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  React.useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkMode) {
      setIsDarkTheme(true);
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkTheme ? "dark" : "light"
    );
    console.log("theme", document.documentElement);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      onClick={toggleTheme}
      className={`absolute w-8 h-4 rounded-full bg-text ${
        isDarkTheme ? "bg-primary" : "bg-gray-200"
      }`}
    >
      <div
        className={`relative w-4 h-4 rounded-full shadow-md transform ${
          isDarkTheme ? "translate-x-4 bg-white" : "translate-x-0 bg-primary"
        } transition-transform duration-300`}
      />
    </div>
  );
};

export default ThemeSwitch;
