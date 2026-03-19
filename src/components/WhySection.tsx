const whyReasons = [
  "כי בעולם שרץ קדימה, לפעמים צריך לעצור ולזכור מה באמת חשוב.",
  "כי סיפורו של תובל הוא סיפור של כולנו – על אהבה, על אומץ, ועל היכולת להאמין.",
  "כי כל אחד מאיתנו צריך לשמוע שגם ברגעים הכי קשים, בסוף הכל יהיה בסדר.",
];

const WhySection = () => {
  return (
    <section className="py-[70px] px-6 bg-background">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          למה להזמין את ההרצאה הזו?
        </h2>

        <div className="flex flex-col gap-4 my-6 mb-8">
          {whyReasons.map((reason, i) => (
            <div
              key={i}
              className="bg-card rounded-[10px] p-4 border-r-[3px] border-secondary text-[0.95rem] text-foreground"
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
            💬 הזמן הרצאה עכשיו
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
