const militaryCards = [
  { icon: "🛡️", title: "עוצבת ברק (188)", desc: "אחת העוצבות המובילות של חיל השריון, בעלת מורשת קרבית מפוארת" },
  { icon: "🎯", title: "גדוד 53", desc: "גדוד הטנקים שבו שירת תובל כתותחן מצטיין ולוחם מסור" },
  { icon: "🏅", title: 'סמ"ר לאחר נפילתו', desc: "הועלה בדרגה כהוקרה על גבורתו ומסירותו בקרב" },
];

const MilitarySection = () => {
  return (
    <section className="py-[70px] px-6 bg-bg2">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground text-center mb-8">
          השירות הצבאי – גאווה ומסירות
        </h2>

        <div className="flex flex-col gap-5 mb-12">
          {militaryCards.map((card) => (
            <div key={card.title} className="bg-card rounded-xl p-6 text-center border border-border">
              <div className="text-4xl mb-2.5">{card.icon}</div>
              <h3 className="text-base font-bold text-primary-foreground mb-1.5">{card.title}</h3>
              <p className="text-sm text-muted-foreground !mb-0">{card.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-black text-primary-foreground text-center mb-5">
          הקרב האחרון – גבורה בחרבות ברזל
        </h3>
        <p className="text-muted-foreground text-[0.97rem] mb-3.5 leading-[1.85]">
          ביום כ"א בכסלו התשפ"ד (4 בדצמבר 2023), במסגרת מלחמת חרבות ברזל, יצא תובל עם צוות הטנק שלו למשימה קרבית ברצועת עזה. הם ידעו שהמשימה מסוכנת, אך הם נחושים להגן על מדינת ישראל.
        </p>
        <p className="text-muted-foreground text-[0.97rem] mb-3.5 leading-[1.85]">
          בקרב הקשה נפגע הטנק של תובל. יחד איתו נפלו שני חבריו הטובים – איתן פיש וויקיר ידידיה שינקולבסקי ז"ל. שלושה צעירים מלאי חיים, חלומות ותקוות, שנתנו את חייהם למען המולדת.
        </p>
        <p className="text-foreground font-bold text-base">
          תובל היה בן 20 בנופלו. צעיר שחי חיים מלאים באהבה, שמחה ומשמעות, והותיר אחריו מורשת של גבורה ותקווה שתמשיך לחיות לעד.
        </p>
      </div>
    </section>
  );
};

export default MilitarySection;
