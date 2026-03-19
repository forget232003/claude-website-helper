const lectures = [
  { icon: "👥", title: "הרצאות אל מול אלפי חיילים", desc: "מול 300 חיילים לפני כניסה לעזה" },
  { icon: "📚", title: "מכינה קדם צבאית", desc: "הכנת המלש\"בים לשירות משמעותי" },
  { icon: "❤️", title: "מפגש עם משפחות", desc: "שיח פתוח על אובדן ותקווה" },
];

const LecturesPreviewSection = () => {
  return (
    <section className="py-[70px] px-6 bg-background">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          מההרצאות שלי – רגעים של השראה
        </h2>

        <div className="flex flex-col gap-7 mb-6">
          {lectures.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="text-3xl min-w-[44px] h-[44px] bg-card rounded-[10px] flex items-center justify-center border border-border">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[0.97rem] font-bold text-primary-foreground mb-1">{item.title}</h3>
                <p className="!mb-0 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-5 border border-border text-[0.95rem] text-muted-foreground text-center leading-relaxed">
          בכל הרצאה אני מביא את סיפורו של תובל, את המסרים שהוא הותיר, ואת הכוח להמשיך הלאה עם אמונה שבסוף הכל יהיה בסדר
        </div>
      </div>
    </section>
  );
};

export default LecturesPreviewSection;
