
import { createContext } from 'react';

export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface LanguageContextType {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default LanguageContext;
