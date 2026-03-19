const StorySection = () => {
  return (
    <section id="story" className="py-[70px] px-6 bg-background">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          סיפורו של תובל – גיבור שלא ישכח
        </h2>

        <h3 className="text-lg font-bold text-primary mb-3.5 text-right">הנער שהפך ללוחם</h3>
        <p className="text-muted-foreground text-[0.97rem] mb-3.5 leading-[1.85]">
          תובל יעקב צנעני נולד בקריית גת ביום כ' בחשוון תשס"ד (20.11.2003). כבר מגיל צעיר בלט באישיותו המיוחדת – נער עם חיוך מדבק, לב רחב ונכונות תמידית לעזור לזולת.
        </p>
        <p className="text-muted-foreground text-[0.97rem] mb-3.5 leading-[1.85]">
          בבית הספר היה תובל תלמיד אהוב על חבריו ומוריו. הוא האמין שבסוף הכל יהיה בסדר – משפט שהפך להיות המוטו שלו בחיים ושלווה אותו בכל צעד.
        </p>
        <p className="text-muted-foreground text-[0.97rem] mb-3.5 leading-[1.85]">
          כשהגיע זמנו להתגייס, לא היה לתובל ספק – הוא רצה להיות לוחם, להגן על המדינה ועל האנשים שהוא אוהב. הוא בחר בחיל השריון, שם הפך לתותחן מצטיין בטנק מרכבה.
        </p>

        <div className="border-r-[3px] border-secondary py-5 px-5 pr-5 pl-4 my-7 bg-card rounded-l-lg">
          <p className="italic text-base text-foreground font-medium !mb-0">
            "תובל לימד אותנו שגבורה אמיתית היא לא רק בשדה הקרב, אלא ביכולת לחיות גם ברגעים הקשים ולהאמין שבסוף הכל יהיה בסדר"
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
