import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import MilitarySection from "@/components/MilitarySection";
import LecturesPreviewSection from "@/components/LecturesPreviewSection";
import StatsSection from "@/components/StatsSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import HowItLooksSection from "@/components/HowItLooksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhySection from "@/components/WhySection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StorySection />
      <MilitarySection />
      <LecturesPreviewSection />
      <StatsSection />
      <WhatYouGetSection />
      <HowItLooksSection />
      <TestimonialsSection />
      <WhySection />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Index;
