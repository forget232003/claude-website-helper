import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
          הזמנת הרצאה
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          להזמנת הרצאה מעוררת השראה על סיפורו של תובל – לבתי ספר, יחידות צבאיות, ארגונים וקהילות – צרו קשר:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:info@tuval-memorial.co.il"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:brightness-110"
          >
            <Mail className="w-5 h-5" />
            שלחו מייל
          </a>
          <a
            href="tel:+972500000000"
            className="inline-flex items-center gap-3 border-2 border-border text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:bg-muted"
          >
            <Phone className="w-5 h-5" />
            התקשרו אלינו
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
