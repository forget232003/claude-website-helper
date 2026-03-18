const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-foreground text-center mb-16">
          סיפורו של תובל – <span className="text-gold-gradient">גיבור שלא ישכח</span>
        </h2>

        <div className="space-y-8">
          <div className="bg-card rounded-xl border border-border p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <h3 className="text-2xl font-bold text-foreground mb-4">הנער שהפך ללוחם</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-right">
              <p>
                תובל יעקב צנעני נולד בקריית גת ביום כ' בחשוון תשס"ד (20.11.2003). כבר מגיל צעיר בלט באישיותו המיוחדת – נער עם חיוך מדבק, לב רחב ונכונות תמידית לעזור לזולת.
              </p>
              <p>
                בבית הספר היה תובל תלמיד אהוב על חבריו ומוריו. הוא האמין שבסוף הכל יהיה בסדר – משפט שהפך להיות המוטו שלו בחיים ושלווה אותו בכל צעד.
              </p>
              <p>
                כשהגיע זמנו להתגייס, לא היה לתובל ספק – הוא רצה להיות לוחם, להגן על המדינה ועל האנשים שהוא אוהב. הוא בחר בחיל השריון, שם הפך לתותחן מצטיין בטנק מרכבה.
              </p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="relative bg-secondary rounded-xl p-8 border-r-4 border-accent">
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed text-right italic">
              "תובל לימד אותנו שגבורה אמיתית היא לא רק בשדה הקרב, אלא ביכולת לחיות גם ברגעים הקשים ולהאמין שבסוף הכל יהיה בסדר"
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
