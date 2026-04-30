import { useLanguage } from "@/i18n/LanguageContext";
import tankFriends from "@/assets/tank-friends.jpg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative py-12 px-6 text-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={tankFriends} alt="תובל, איתן ויקיר ז״ל" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10">
        <span className="text-3xl block mb-4 text-gold">★</span>
        <h3 className="text-xl font-extrabold text-white mb-2.5">
          {t.footerMemorial}
        </h3>
        <p className="text-sm text-gray-300 mb-1">{t.footerAge}</p>
        <p className="text-sm text-gray-300">{t.footerFriends}</p>
        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-sm text-gray-400 mb-1">{t.footerContact}</p>
          <a href="mailto:ravidtzanani6@gmail.com" className="text-sm text-secondary hover:underline">
            ravidtzanani6@gmail.com
          </a>
          <div className="mt-4">
            <a href="#copyright" className="text-sm text-gold hover:underline font-semibold">
              {t.copyrightLink}
            </a>
            <p id="copyright" className="text-xs text-gray-400 mt-2 max-w-xl mx-auto">
              {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
