import { useLanguage } from "@/i18n/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-[70px] px-6 bg-bg2">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          {t.testimonialsTitle}
        </h2>

        {t.testimonials.map((item: any) => (
          <div key={item.name} className="bg-card rounded-xl p-6 mb-5 border border-border relative">
            <span className="text-5xl text-border leading-none absolute top-3.5 left-5">"</span>
            <p className="italic text-foreground text-[0.93rem] mb-3.5">{item.text}</p>
            <div className="flex items-center gap-2.5 mt-3.5">
              <span className="text-xl">{item.icon}</span>
              <div>
                <strong className="text-[0.92rem] text-primary-foreground block">{item.name}</strong>
                {item.sub && <span className="text-xs text-muted-foreground">{item.sub}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
