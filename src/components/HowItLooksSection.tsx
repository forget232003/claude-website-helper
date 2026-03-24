import knessetBg from "@/assets/knesset-bg.jpeg";
import { useLanguage } from "@/i18n/LanguageContext";

const HowItLooksSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-[70px] px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={knessetBg} alt="" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="max-w-[700px] mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          {t.howTitle}
        </h2>

        <div className="flex flex-col gap-6 mb-12">
          {t.howFormats.map((f: any) => (
            <div key={f.title} className="text-center">
              <span className="text-3xl mb-2.5 block">{f.icon}</span>
              <h3 className="text-[0.97rem] font-bold text-primary-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItLooksSection;
