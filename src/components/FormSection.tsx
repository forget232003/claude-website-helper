import { useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://formsubmit.co/ajax/ravidtzanani6@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          _subject: `פנייה חדשה מ${formData.name} – הזמנת הרצאה`,
        }),
      });
      setSubmitted(true);
    } catch {
      // fallback to WhatsApp
      const text = `שלום, אני ${formData.name} מ${formData.organization || "—"}. אשמח להזמין הרצאה.\nטלפון: ${formData.phone}\nאימייל: ${formData.email}\n${formData.message}`;
      window.open(`https://wa.me/972503112243?text=${encodeURIComponent(text)}`, "_blank");
    }
  };

  return (
    <section id="form" className="py-[70px] px-6 bg-bg2">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-2xl font-black text-primary-foreground text-center mb-2">הזמן הרצאה</h2>
        {submitted ? (
          <div className="text-center py-12">
            <span className="text-4xl block mb-4">✅</span>
            <h3 className="text-xl font-bold text-primary-foreground mb-2">הפנייה נשלחה בהצלחה!</h3>
            <p className="text-muted-foreground">נחזור אליכם בהקדם האפשרי</p>
          </div>
        ) : (
          <>
            <p className="text-center text-muted-foreground mb-7">מלאו את הפרטים ונחזור אליכם בהקדם האפשרי</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  שם מלא <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="השם שלכם"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-foreground text-[0.95rem] outline-none transition-colors duration-200 focus:border-primary placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  טלפון <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="050-000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-foreground text-[0.95rem] outline-none transition-colors duration-200 focus:border-primary placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">אימייל</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-foreground text-[0.95rem] outline-none transition-colors duration-200 focus:border-primary placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">שם הארגון/מוסד</label>
                <input
                  type="text"
                  placeholder="שם הארגון"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-foreground text-[0.95rem] outline-none transition-colors duration-200 focus:border-primary placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">הודעה</label>
                <textarea
                  placeholder="ספרו לנו על האירוע שלכם..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-3.5 py-3 text-foreground text-[0.95rem] outline-none transition-colors duration-200 focus:border-primary placeholder:text-muted-foreground h-28 resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground py-4 rounded-lg text-base font-bold transition-colors duration-200 hover:bg-primary mt-1"
              >
                שלח פנייה להזמנת הרצאה
              </button>
            </form>

            <div className="mt-7 text-center">
              <p className="text-sm text-muted-foreground mb-3">צרו קשר ישירות:</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a
                  href="https://wa.me/972503112243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card border border-[#25d36633] rounded-lg px-4 py-2.5 text-sm font-semibold text-[#25d366] transition-colors duration-200 hover:border-[#25d366]"
                >
                  💬 WhatsApp: 050-311-2243
                </a>
                <a
                  href="https://instagram.com/ravid_.t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card border border-[#e1306c33] rounded-lg px-4 py-2.5 text-sm font-semibold text-[#e1306c] transition-colors duration-200 hover:border-[#e1306c]"
                >
                  📸 ravid_.t
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FormSection;
