const formats = [
  { icon: "🕐", title: "45–60 דקות", desc: "משך ההרצאה מותאם לקהל ולצרכים שלכם" },
  { icon: "👥", title: "אינטראקטיבי", desc: "שיח פתוח, שאלות ותשובות, ושיתוף חוויות" },
  { icon: "🎯", title: "מותאם אישית", desc: "כל הרצאה מותאמת לקהל היעד ולמטרות שלכם" },
];

const HowItLooksSection = () => {
  return (
    <section className="py-[70px] px-6 bg-background">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          איך נראית ההרצאה?
        </h2>

        <div className="flex flex-col gap-6 mb-12">
          {formats.map((f) => (
            <div key={f.title} className="text-center">
              <span className="text-3xl mb-2.5 block">{f.icon}</span>
              <h3 className="text-[0.97rem] font-bold text-primary-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItLooksSection;
