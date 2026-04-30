import lectureSoldiersImg from "@/assets/lecture-soldiers.jpg";
import bloodDonationImg from "@/assets/blood-donation.jpg";
import speechEventImg from "@/assets/speech-event.jpeg";
import mediaInterviewImg from "@/assets/media-interview.jpeg";
import lecturesBg from "@/assets/lectures-bg-soldiers.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = ["👥", "📚", "🎤", "📺"];

const LecturesPreviewSection = () => {
  const { t } = useLanguage();
  const images = [lectureSoldiersImg, bloodDonationImg, speechEventImg, mediaInterviewImg];

  return (
    <section className="relative py-[70px] px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={lecturesBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
      </div>
      <div className="relative z-10 max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8">
          {t.lecturesTitle}
        </h2>

        <div className="flex flex-col gap-7 mb-6">
          {t.lectureItems.map((title: string, i: number) => (
            <div key={i}>
              <div className="flex items-start gap-4">
                <div className="text-3xl min-w-[44px] h-[44px] bg-card rounded-[10px] flex items-center justify-center border border-border">
                  {icons[i]}
                </div>
                <div>
                  <h3 className="text-[0.97rem] font-bold text-white mb-1">{title}</h3>
                </div>
              </div>
              <img
                src={images[i]}
                alt={title}
                className="w-full h-72 object-cover object-center rounded-xl mt-3 border border-border"
              />
            </div>
          ))}
        </div>

        <div className="bg-black/50 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-[0.95rem] text-gray-200 text-center leading-relaxed">
          {t.lecturesFooter}
        </div>
      </div>
    </section>
  );
};

export default LecturesPreviewSection;
