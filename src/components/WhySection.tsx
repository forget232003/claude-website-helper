import { useLanguage } from "@/i18n/LanguageContext";
import soldierLandscape from "@/assets/soldier-landscape.jpg";

const WhySection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-[70px] px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={soldierLandscape} alt="חייל משקיף על הנוף" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8">
          {t.whyTitle}
        </h2>

        <div className="flex flex-col gap-4 my-6 mb-8">
          {t.whyReasons.map((reason: string, i: number) => (
            <div
              key={i}
              className="bg-black/40 rounded-[10px] p-4 border-r-[3px] border-secondary text-[0.95rem] text-gray-200"
            >
              {reason}
            </div>
          ))}
        </div>

        <div className="text-center mt-2">
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg text-base font-bold transition-all duration-200 hover:bg-primary hover:-translate-y-0.5"
          >
            {t.whyCta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
