import { useLanguage } from "@/i18n/LanguageContext";
import helmetBird from "@/assets/helmet-bird.jpg";

const StorySection = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="relative py-[70px] px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={helmetBird} alt="ציפור על קסדה בטנק" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8">
          {t.storyTitle}
        </h2>

        <h3 className="text-lg font-bold text-secondary mb-3.5 text-right">{t.storyH3}</h3>
        <p className="text-gray-200 text-[0.97rem] mb-3.5 leading-[1.85]">{t.storyP1}</p>
        <p className="text-gray-200 text-[0.97rem] mb-3.5 leading-[1.85]">{t.storyP2}</p>
        <p className="text-gray-200 text-[0.97rem] mb-3.5 leading-[1.85]">{t.storyP3}</p>

        <div className="border-r-[3px] border-secondary py-5 px-5 pr-5 pl-4 my-7 bg-black/40 rounded-l-lg">
          <p className="italic text-base text-white font-medium !mb-0">{t.storyQuote}</p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
