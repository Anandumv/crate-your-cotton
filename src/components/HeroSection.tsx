
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Check } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetSample = () => {
    window.open('https://wa.me/917012939374?text=Hi! I would like to get a sample from Cotton Crate.', '_blank');
  };

  const handleCreateMockup = () => {
    navigate('/mockup');
  };

  const features = [
    "Premium 180-240 GSM Cotton",
    "Studio-Grade DTG Printing",
    "48hr Mockup Delivery"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Minimal background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Trust indicator */}
          <div className="inline-flex items-center space-x-2 bg-muted rounded-full px-4 py-2 text-sm">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <span className="text-muted-foreground">4.9/5 from 1,000+ customers</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display gradient-text">
              Premium T-Shirts
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">Made Perfect</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-xl leading-relaxed">
              High-GSM cotton meets studio-grade printing. Built for creators, teams, and brands who refuse to compromise on quality.
            </p>
          </div>

          {/* Features list */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="h-12 px-8 text-base font-semibold rounded-xl shadow-premium hover:shadow-lg transition-all duration-300" 
              onClick={handleGetSample}
            >
              Get Free Sample
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-8 text-base font-semibold rounded-xl border-2 hover:bg-muted/50 transition-all duration-300" 
              onClick={handleCreateMockup}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Create Mockup
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center space-x-8 text-sm text-muted-foreground pt-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Min 10 pieces</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>48hr delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>100% cotton</span>
            </div>
          </div>
        </div>
        
        {/* Product showcase */}
        <div className="relative animate-fade-in-up">
          <div className="relative transform hover:scale-105 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl blur-3xl animate-glow"></div>
            <div className="relative bg-gradient-to-br from-card to-muted/10 p-8 rounded-3xl shadow-premium border">
              <img
                src="/src/assets/hero-tshirt.jpg"
                alt="Premium Cotton T-shirt"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          
          {/* Floating quality indicators */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-premium animate-float">
            180-240 GSM
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card border-2 border-border text-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-premium animate-float" style={{ animationDelay: '2s' }}>
            100% Cotton
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
