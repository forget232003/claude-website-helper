import tankFiring from "@/assets/tank-firing.jpeg";
import tuvalGdud from "@/assets/tuval-gdud53.jpeg";
import tuvalSamar from "@/assets/tuval-samar.jpeg";
import militaryBg from "@/assets/military-bg-flag.webp";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = ["🛡️", "🎯", "🏅"];

const MilitarySection = () => {
  const { t } = useLanguage();
  const images = [tankFiring, tuvalGdud, tuvalSamar];

  return (
    <section className="relative py-[70px] px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={militaryBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="relative z-10 max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8">
          {t.militaryTitle}
        </h2>

        <div className="flex flex-col gap-5 mb-12">
          {t.militaryCards.map((card: any, i: number) => (
            <div key={card.title} className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              <img src={images[i]} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <div className="text-4xl mb-2.5">{icons[i]}</div>
                <h3 className="text-base font-bold text-white mb-1.5">{card.title}</h3>
                <p className="text-sm text-gray-300 !mb-0">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-white text-center mb-5">
          {t.battleTitle}
        </h3>
        <p className="text-gray-200 text-[0.97rem] mb-3.5 leading-[1.85]">{t.battleP1}</p>
        <p className="text-gray-200 text-[0.97rem] mb-3.5 leading-[1.85]">{t.battleP2}</p>
        <p className="text-white font-bold text-base">{t.battleP3}</p>
      </div>
    </section>
  );
};

export default MilitarySection;
