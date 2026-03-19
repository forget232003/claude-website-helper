const stats = [
  { num: "+300", label: "חיילים השתתפו", desc: "לפני כניסה לרצועה" },
  { num: "+15", label: "הרצאות הועברו", desc: "ברחבי הארץ" },
  { num: "100%", label: "המלצות חמות", desc: "מכל הגופים" },
  { num: "∞", label: "השראה וזיכרון", desc: "שנשארים לתמיד" },
];

const StatsSection = () => {
  return (
    <section className="py-[70px] px-6 bg-bg3 text-center">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          ההשפעה שלנו במספרים
        </h2>
        <div className="grid grid-cols-2 gap-5 mt-9">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl py-6 px-4">
              <span className="text-4xl font-black text-primary-foreground block mb-1.5">{s.num}</span>
              <span className="text-sm font-bold text-foreground block mb-1">{s.label}</span>
              <span className="text-xs text-muted-foreground">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
