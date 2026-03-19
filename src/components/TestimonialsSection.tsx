const testimonials = [
  {
    text: "ממליץ בחום, הרצאה מרתקת, נותנת כוח וערכים כל פעם מחדש. רביד מצליח להעביר את הסיפור של אחיו בצורה שנוגעת בכל אחד מהחיילים. ההרצאה משאירה אותם עם מוטיבציה וכוח להמשיך במשימה החשובה שלהם.",
    icon: "👥",
    name: "משפחת ברק גדוד 53 פלוגת גולן",
  },
  {
    text: "המלצה חמה – הרצאה מעוררת השראה שנוגעת בלב ומשאירה חותם עמוק. רביד מביא את סיפורו האישי בצורה כנה ופתוחה שגורמת לכל אחד לחשוב על החיים שלו, על מה חשוב באמת ועל הכוח שיש בכל אחד מאיתנו להשפיע.",
    icon: "🏅",
    name: "פורום הגבורה",
    sub: 'ארגון למען לוחמי צה"ל',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-[70px] px-6 bg-bg2">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          מה אומרים על ההרצאות?
        </h2>

        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-6 mb-5 border border-border relative">
            <span className="text-5xl text-border leading-none absolute top-3.5 left-5">"</span>
            <p className="italic text-foreground text-[0.93rem] mb-3.5">{t.text}</p>
            <div className="flex items-center gap-2.5 mt-3.5">
              <span className="text-xl">{t.icon}</span>
              <div>
                <strong className="text-[0.92rem] text-primary-foreground block">{t.name}</strong>
                {t.sub && <span className="text-xs text-muted-foreground">{t.sub}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
