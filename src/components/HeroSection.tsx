import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetSample = () => {
    window.open('https://wa.me/917012939374?text=Hi! I would like to get a sample from Cotton Crate.', '_blank');
  };

  const handleContactUs = () => {
    window.open('https://wa.me/917012939374?text=Hi! I would like to know more about Cotton Crate services.', '_blank');
  };

  const handleCreateMockup = () => {
    navigate('/mockup');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold font-satoshi text-foreground leading-tight">
              Your Designs.
              <br />
              <span className="text-primary">Our Cotton.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-md">
              High-GSM, super-soft T-shirts with studio-grade printing for creators, teams, and early brands.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6" onClick={handleGetSample}>
              Get a Sample
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={handleContactUs}>
              Contact Us
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" onClick={handleCreateMockup}>
              Create Mockup
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10 transform rotate-6 hover:rotate-3 transition-transform duration-700">
            <img
              src="/src/assets/hero-tshirt.jpg"
              alt="Premium Cotton T-shirt"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-6 scale-95"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
