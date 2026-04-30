import { useLanguage } from "@/i18n/LanguageContext";
import statsBg from "@/assets/stats-bg-soldier.jpg";

const StatsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-[70px] px-6 text-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={statsBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
      </div>
      <div className="relative z-10 max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8">
          {t.statsTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-9">
          {t.stats.map((s: any) => (
            <div key={s.label} className="bg-black/40 border border-white/20 rounded-xl py-6 px-4 backdrop-blur-sm">
              <span className="text-4xl font-black text-gold block mb-1.5">{s.num}</span>
              <span className="text-sm font-bold text-white block mb-1">{s.label}</span>
              {s.desc && <span className="text-xs text-gray-300">{s.desc}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
