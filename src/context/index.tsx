import React from "react";

import { IContext, IProviderProps, LanguageType } from "./Context.structure";

const LanguageContext = React.createContext({} as IContext);

function LanguageProvider({ children }: IProviderProps) {
  const [language, setLanguage] = React.useState("ENG" as LanguageType);

  return (
    <LanguageContext.Provider
      value={React.useMemo(
        () => ({
          language,
          setLanguage,
        }),
        [language, setLanguage]
      )}
    >
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
}

export { LanguageProvider, useLanguage };
