import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProfessionSection from "@/components/ProfessionSection";
import TestimonialSection from "@/components/TestimonialSection";
import ClosingSection from "@/components/ClosingSection";
import { professions } from "@/data/professions";
import ShareButtons from '@/components/ShareButtons';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      {professions.map((profession, index) => (
        <ProfessionSection key={profession.id} profession={profession} index={index} />
      ))}
      <TestimonialSection />
      <ClosingSection />
    </main>
  );
};


export default Index;
