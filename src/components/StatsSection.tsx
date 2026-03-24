import { useLanguage } from "@/i18n/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-[70px] px-6 bg-bg3 text-center">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          {t.statsTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-9">
          {t.stats.map((s: any) => (
            <div key={s.label} className="bg-card border border-border rounded-xl py-6 px-4">
              <span className="text-4xl font-black text-primary-foreground block mb-1.5">{s.num}</span>
              <span className="text-sm font-bold text-foreground block mb-1">{s.label}</span>
              {s.desc && <span className="text-xs text-muted-foreground">{s.desc}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
