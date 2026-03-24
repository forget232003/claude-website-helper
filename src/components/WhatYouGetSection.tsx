import { useLanguage } from "@/i18n/LanguageContext";

const WhatYouGetSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-[70px] px-6 bg-bg2">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          {t.whatTitle}
        </h2>

        <h3 className="text-lg font-bold text-primary mb-3.5 text-right">{t.whatContentTitle}</h3>
        <div className="flex flex-col gap-5 mb-9">
          {t.whatContent.map((item: any) => (
            <div key={item.title} className="flex gap-3.5 items-start">
              <div className="text-xl min-w-[32px] mt-0.5">{item.icon}</div>
              <div>
                <h3 className="text-[0.97rem] font-bold text-primary-foreground mb-1">{item.title}</h3>
                <p className="!mb-0 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold text-primary mb-3.5 text-right">{t.whatAudienceTitle}</h3>
        <div className="flex flex-col gap-4">
          {t.whatAudience.map((item: any) => (
            <div key={item.title} className="bg-card rounded-[10px] p-4 border border-border">
              <h3 className="text-[0.95rem] font-bold text-primary-foreground mb-1">{item.title}</h3>
              <p className="!mb-0 text-[0.85rem] text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
