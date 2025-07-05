
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TrustedBySection from "@/components/TrustedBySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <ShowcaseSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
