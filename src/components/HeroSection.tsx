import hativa188 from "@/assets/hativa188.png";
import plugatGolan from "@/assets/plugat-golan.png";
import sufaBadge from "@/assets/sufa-badge.png";
import tuvalHero from "@/assets/tuval-hero.png";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 relative overflow-hidden bg-background"
    >
      {/* Background image of Tuval */}
      <div className="absolute inset-0">
        <img src={tuvalHero} alt="תובל" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a5aee' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-28 h-28 rounded-full border-2 border-border bg-card/80 flex items-center justify-center overflow-hidden">
            <img src={hativa188} alt="סמל חטיבה 188" className="w-20 h-20 object-contain" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full border-2 border-border bg-card/80 flex items-center justify-center overflow-hidden">
            <img src={plugatGolan} alt="פלוגת גולן" className="w-12 h-12 object-contain" />
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-border bg-card/80 flex items-center justify-center overflow-hidden">
            <img src={sufaBadge} alt="סמל סופה" className="w-12 h-12 object-contain" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-5">
          "בסוף הכל יהיה בסדר"
        </h1>

        <p className="text-base text-muted-foreground max-w-md mx-auto mb-5 leading-relaxed">
          הרצאות מעוררות השראה להנצחת זכרו של סמ"ר תובל יעקב צנעני ז"ל –
          <br />
          סיפור של גבורה, אחווה ותקווה
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground mb-9">
          <span className="text-gold">20.11.2003 – 04.12.2023</span>
          <span className="text-border">•</span>
          <span>לוחם שריון</span>
          <span className="text-border">•</span>
          <span>עוצבת ברק (188)</span>
          <span className="text-border">•</span>
          <span>גדוד 53</span>
        </div>

        <div className="flex flex-wrap gap-3.5 justify-center">
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg text-base font-bold transition-all duration-200 hover:bg-primary hover:-translate-y-0.5"
          >
            ✅ הזמן הרצאה עכשיו
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 bg-transparent text-foreground border border-border px-7 py-3.5 rounded-lg text-base font-semibold transition-all duration-200 hover:border-primary"
          >
            📖 קרא את הסיפור
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
