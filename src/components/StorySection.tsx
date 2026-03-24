import { useLanguage } from "@/i18n/LanguageContext";

const StorySection = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-[70px] px-6 bg-background">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          {t.storyTitle}
        </h2>

        <h3 className="text-lg font-bold text-primary mb-3.5 text-right">{t.storyH3}</h3>
        <p className="text-muted-foreground text-[0.97rem] mb-3.5 leading-[1.85]">{t.storyP1}</p>
        <p className="text-muted-foreground text-[0.97rem] mb-3.5 leading-[1.85]">{t.storyP2}</p>
        <p className="text-muted-foreground text-[0.97rem] mb-3.5 leading-[1.85]">{t.storyP3}</p>

        <div className="border-r-[3px] border-secondary py-5 px-5 pr-5 pl-4 my-7 bg-card rounded-l-lg">
          <p className="italic text-base text-foreground font-medium !mb-0">{t.storyQuote}</p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
