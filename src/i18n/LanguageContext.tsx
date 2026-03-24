import { createContext, useContext, useState, ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "he",
  t: translations.he,
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("he");
  const t = translations[lang];

  const toggleLang = () => setLang((prev) => (prev === "he" ? "en" : "he"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      <div dir={t.dir}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
