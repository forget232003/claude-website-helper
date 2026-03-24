import { useLanguage } from "@/i18n/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 left-4 z-50 bg-card border border-border rounded-full px-4 py-2 text-sm font-bold text-foreground hover:border-primary transition-colors duration-200 backdrop-blur-sm bg-card/80"
      aria-label="Switch language"
    >
      {lang === "he" ? "EN 🇺🇸" : "HE 🇮🇱"}
    </button>
  );
};

export default LanguageSwitcher;
