import tankFiring from "@/assets/tank-firing.jpeg";
import tuvalGdud from "@/assets/tuval-gdud53.jpeg";
import tuvalSamar from "@/assets/tuval-samar.jpeg";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = ["🛡️", "🎯", "🏅"];

const MilitarySection = () => {
  const { t } = useLanguage();
  const images = [tankFiring, tuvalGdud, tuvalSamar];

  return (
    <section className="py-[70px] px-6 bg-bg2">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          {t.militaryTitle}
        </h2>

        <div className="flex flex-col gap-5 mb-12">
          {t.militaryCards.map((card: any, i: number) => (
            <div key={card.title} className="bg-card rounded-xl overflow-hidden border border-border">
              <img src={images[i]} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <div className="text-4xl mb-2.5">{icons[i]}</div>
                <h3 className="text-base font-bold text-primary-foreground mb-1.5">{card.title}</h3>
                <p className="text-sm text-muted-foreground !mb-0">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-primary-foreground text-center mb-5">
          {t.battleTitle}
        </h3>
        <p className="text-muted-foreground text-[0.97rem] mb-3.5 leading-[1.85]">{t.battleP1}</p>
        <p className="text-muted-foreground text-[0.97rem] mb-3.5 leading-[1.85]">{t.battleP2}</p>
        <p className="text-foreground font-bold text-base">{t.battleP3}</p>
      </div>
    </section>
  );
};

export default MilitarySection;
