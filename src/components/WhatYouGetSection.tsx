const contentItems = [
  { icon: "🔥", title: "סיפור אישי נוגע ללב", desc: "אני מספר על תובל, על ילדות שלנו יחד, על החלומות שלו ועל הדרך שבחר. סיפור שמחבר את השומעים לדמות אמיתית ומעוררת הזדהות עמוקה." },
  { icon: "✨", title: "ערכים ומסרים לחיים", desc: "מתוך הסיפור עולים ערכים של אחווה, מסירות, אהבת המולדת, והכי חשוב – היכולת לראות את הטוב גם ברגעים הקשים." },
  { icon: "🤍", title: "כלים להתמודדות", desc: "אני משתף כיצד המשפחה שלנו מתמודדת עם האובדן, איך הופכים כאב לחיוך וממשיכים קדימה עם זיכרון ותקווה." },
];

const audienceItems = [
  { title: "לחיילים ומלש\"בים", desc: "חיזוק לקראת השירות, הבנת המשמעות של להיות לוחם, והכוח של אחווה צבאית" },
  { title: "לתלמידים ונוער", desc: "השראה לחיים, חשיבות הערכים, ואיך כל אחד יכול להשפיע ולתרום למדינה" },
  { title: "לעובדי היטק וחברות", desc: "פרספקטיבה על החיים, חשיבות המשפחה והקהילה, ואיך לחיות עם משמעות" },
  { title: "למנהיגים ומקבלי החלטות", desc: "הבנת המחיר האנושי, חשיבות התמיכה במשפחות השכולות, ומנהיגות בעתות משבר" },
];

const WhatYouGetSection = () => {
  return (
    <section className="py-[70px] px-6 bg-bg2">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          ההרצאות שלי – מה תקבלו?
        </h2>

        <h3 className="text-lg font-bold text-primary mb-3.5 text-right">תוכן ההרצאה</h3>
        <div className="flex flex-col gap-5 mb-9">
          {contentItems.map((item) => (
            <div key={item.title} className="flex gap-3.5 items-start">
              <div className="text-xl min-w-[32px] mt-0.5">{item.icon}</div>
              <div>
                <h3 className="text-[0.97rem] font-bold text-primary-foreground mb-1">{item.title}</h3>
                <p className="!mb-0 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold text-primary mb-3.5 text-right">התאמה לכל קהל</h3>
        <div className="flex flex-col gap-4">
          {audienceItems.map((item) => (
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
