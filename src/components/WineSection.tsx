import { useLanguage } from "@/i18n/LanguageContext";
import wineRose from "@/assets/wine-rose.png";
import wineRed from "@/assets/wine-red.png";
import wineWhite from "@/assets/wine-white.png";

const WINE_URL = "https://wineandfriends.co.il/product/%d7%9e%d7%90%d7%a8%d7%96-%d7%99%d7%99%d7%9f-%d7%9c%d7%96%d7%9b%d7%a8-%d7%aa%d7%95%d7%91%d7%9c-%d7%a6%d7%a0%d7%a2%d7%a0%d7%99/";

const wines = [
  { image: wineRed, label: "יין אדום", labelEn: "Red Wine" },
  { image: wineRose, label: "רוזה", labelEn: "Rosé" },
  { image: wineWhite, label: "יין לבן", labelEn: "White Wine" },
];

const WineSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="py-[70px] px-6 bg-bg3">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-3">
          {t.wineTitle}
        </h2>
        <p className="text-center text-muted-foreground mb-10">{t.wineSubtitle}</p>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {wines.map((wine) => (
            <a
              key={wine.label}
              href={WINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="bg-card rounded-xl border border-border p-4 transition-all duration-200 group-hover:border-primary group-hover:-translate-y-1 w-full flex items-center justify-center">
                <img
                  src={wine.image}
                  alt={lang === "he" ? wine.label : wine.labelEn}
                  className="h-52 md:h-64 object-contain"
                />
              </div>
              <span className="text-sm font-bold text-foreground mt-3">
                {lang === "he" ? wine.label : wine.labelEn}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg text-base font-bold transition-all duration-200 hover:bg-primary hover:-translate-y-0.5"
          >
            {t.wineCta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WineSection;
