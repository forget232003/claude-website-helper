import heroImage from "@/assets/hero-memorial.jpg";
import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="נוף זיכרון"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-gradient)", opacity: 0.85 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-accent/40 mb-8">
          <Shield className="w-10 h-10 text-accent" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight mb-6">
          <span className="text-gold-gradient">"בסוף הכל יהיה בסדר"</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto mb-4">
          הרצאות מעוררות השראה להנצחת זכרו של סמ"ר תובל יעקב צנעני ז"ל –
          <br />
          סיפור של גבורה, אחווה ותקווה
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-primary-foreground/60 text-sm mb-10">
          <span>20.11.2003 – 04.12.2023</span>
          <span>•</span>
          <span>לוחם שריון</span>
          <span>•</span>
          <span>עוצבת ברק (188)</span>
          <span>•</span>
          <span>גדוד 53</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
          >
            ✅ הזמן הרצאה עכשיו
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:bg-primary-foreground/10"
          >
            📖 קרא את הסיפור
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
