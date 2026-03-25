import { useLanguage } from "@/i18n/LanguageContext";
import wineRose from "@/assets/wine-rose.png";
import wineRed from "@/assets/wine-red.png";
import wineWhite from "@/assets/wine-white.png";
import wineTrio from "@/assets/wine-trio.png";

const wines = [
  { image: wineRed, label: "יין אדום", labelEn: "Red Wine", url: "https://wineandfriends.co.il/product/%D7%99%D7%99%D7%9F-%D7%90%D7%93%D7%95%D7%9D-%D7%9C%D7%96%D7%9B%D7%A8-%D7%AA%D7%95%D7%91%D7%9C-%D7%A6%D7%A0%D7%A2%D7%A0%D7%99/" },
  { image: wineRose, label: "רוזה", labelEn: "Rosé", url: "https://wineandfriends.co.il/product/%d7%a8%d7%95%d7%96%d7%94-%d7%9c%d7%96%d7%9b%d7%a8-%d7%aa%d7%95%d7%91%d7%9c-%d7%a6%d7%a0%d7%a2%d7%a0%d7%99/" },
  { image: wineWhite, label: "יין לבן", labelEn: "White Wine", url: "https://wineandfriends.co.il/product/%d7%99%d7%99%d7%9f-%d7%91%d7%9c%d7%a0%d7%93-%d7%9c%d7%91%d7%9f-%d7%9c%d7%96%d7%9b%d7%a8-%d7%aa%d7%95%d7%91%d7%9c-%d7%a6%d7%a0%d7%a2%d7%a0%d7%99/" },
];

const TRIO_URL = "https://wineandfriends.co.il/product/%d7%9e%d7%90%d7%a8%d7%96-%d7%99%d7%99%d7%9f-%d7%9c%d7%96%d7%9b%d7%a8-%d7%aa%d7%95%d7%91%d7%9c-%d7%a6%d7%a0%d7%a2%d7%a0%d7%99/";

const WineSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="py-[70px] px-6 bg-bg3">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-3">
          {t.wineTitle}
        </h2>
        <p className="text-center text-muted-foreground mb-10">{t.wineSubtitle}</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {wines.map((wine) => (
            <a
              key={wine.label}
              href={wine.url}
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

        <a
          href={TRIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center mb-10"
        >
          <div className="bg-card rounded-xl border border-border p-4 transition-all duration-200 group-hover:border-primary group-hover:-translate-y-1 w-full max-w-[320px] mx-auto flex items-center justify-center">
            <img
              src={wineTrio}
              alt={lang === "he" ? "מארז שלישייה" : "Trio Package"}
              className="h-52 md:h-64 object-contain"
            />
          </div>
          <span className="text-sm font-bold text-foreground mt-3">
            {lang === "he" ? "מארז שלישייה" : "Trio Package"}
          </span>
        </a>

        <div className="text-center">
          <a
            href={TRIO_URL}
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
