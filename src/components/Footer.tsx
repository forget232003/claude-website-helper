import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg3 py-12 px-6 text-center border-t border-border">
      <span className="text-3xl block mb-4 text-gold">★</span>
      <h3 className="text-xl font-extrabold text-primary-foreground mb-2.5">
        {t.footerMemorial}
      </h3>
      <p className="text-sm text-muted-foreground mb-1">{t.footerAge}</p>
      <p className="text-sm text-muted-foreground">{t.footerFriends}</p>
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-1">{t.footerContact}</p>
        <a href="mailto:ravidtzanani6@gmail.com" className="text-sm text-primary hover:underline">
          ravidtzanani6@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
