import { useLanguage } from "@/i18n/LanguageContext";
import israelFlag from "@/assets/israel-flag.jpg";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-[70px] px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={israelFlag} alt="דגל ישראל" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8">
          {t.testimonialsTitle}
        </h2>

        {t.testimonials.map((item: any) => (
          <div key={item.name} className="bg-black/40 rounded-xl p-6 mb-5 border border-white/10 relative">
            <span className="text-5xl text-white/20 leading-none absolute top-3.5 left-5">"</span>
            <p className="italic text-gray-200 text-[0.93rem] mb-3.5">{item.text}</p>
            <div className="flex items-center gap-2.5 mt-3.5">
              <span className="text-xl">{item.icon}</span>
              <div>
                <strong className="text-[0.92rem] text-white block">{item.name}</strong>
                {item.sub && <span className="text-xs text-gray-400">{item.sub}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
