
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Sparkles } from "lucide-react";

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-warm px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sage-green/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-warm-beige/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Premium Cotton T-Shirts</span>
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>

          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold font-satoshi text-foreground leading-[0.9] tracking-tight">
              Your Designs.
              <br />
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Our Cotton.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-inter leading-relaxed max-w-xl">
              High-GSM, super-soft T-shirts with studio-grade printing for creators, teams, and early brands.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 rounded-2xl font-semibold group shadow-lg hover:shadow-xl transition-all duration-300" 
              onClick={handleGetSample}
            >
              Get a Sample
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-7 rounded-2xl font-semibold border-2 hover:bg-accent/50 transition-all duration-300" 
              onClick={handleContactUs}
            >
              Contact Us
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-10 py-7 rounded-2xl font-semibold bg-sage-green/20 hover:bg-sage-green/30 transition-all duration-300" 
              onClick={handleCreateMockup}
            >
              Create Mockup
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Low MOQ</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out">
            <div className="bg-gradient-to-br from-white to-sage-green/10 p-8 rounded-3xl shadow-2xl border border-border/20">
              <img
                src="/src/assets/hero-tshirt.jpg"
                alt="Premium Cotton T-shirt"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
            180-240 GSM
          </div>
          <div className="absolute -bottom-6 -left-6 bg-sage-green text-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            100% Cotton
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
