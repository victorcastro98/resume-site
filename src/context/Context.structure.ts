export interface IProviderProps {
  children: React.ReactNode;
}

export interface IContext {
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
}

export type LanguageType = 'ENG' | 'PT' 