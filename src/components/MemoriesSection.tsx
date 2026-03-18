import { Heart, Users, Star } from "lucide-react";

const memories = [
  {
    icon: Heart,
    title: "לב של זהב",
    text: "תובל תמיד היה הראשון להושיט יד. לא משנה מה, הוא היה שם בשביל כולם.",
  },
  {
    icon: Users,
    title: "אחווה אמיתית",
    text: "בצבא הוא הפך למקור כוח ותמיכה לכל חבריו ביחידה. הם ידעו שעליו אפשר לסמוך.",
  },
  {
    icon: Star,
    title: "לוחם מצטיין",
    text: "תובל הוכיח את עצמו כלוחם מסור ומקצועי, שקט אך נחוש, שתמיד עשה מעבר למצופה.",
  },
];

const MemoriesSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-16">
          זיכרונות מתובל
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {memories.map((memory) => (
            <div
              key={memory.title}
              className="bg-background rounded-xl border border-border p-8 text-center transition-all duration-200 hover:-translate-y-1"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
                <memory.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{memory.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{memory.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
