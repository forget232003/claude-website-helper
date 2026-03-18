import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import MemoriesSection from "@/components/MemoriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StorySection />
      <MemoriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
