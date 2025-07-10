
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Zap } from "lucide-react";

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-sage-green/5 to-warm-beige/10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-sage-green/30 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-warm-beige/40 to-sage-green/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12 animate-fade-in">
          {/* Enhanced badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-sage-green rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="bg-gradient-to-r from-primary to-sage-green bg-clip-text text-transparent font-bold">Premium Cotton T-Shirts</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-amber-600 font-medium">4.9/5</span>
            </div>
          </div>

          <div className="space-y-10">
            <h1 className="text-7xl lg:text-9xl font-bold font-satoshi text-foreground leading-[0.85] tracking-tight">
              <span className="block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Your Designs.
              </span>
              <span className="block bg-gradient-to-r from-primary via-sage-green to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] mt-4">
                Our Cotton.
              </span>
            </h1>
            <p className="text-2xl lg:text-3xl text-muted-foreground font-inter leading-relaxed max-w-2xl bg-gradient-to-r from-muted-foreground to-muted-foreground/80 bg-clip-text text-transparent">
              High-GSM, super-soft T-shirts with studio-grade printing for creators, teams, and early brands.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 rounded-2xl font-bold group shadow-2xl hover:shadow-3xl bg-gradient-to-r from-primary to-sage-green hover:from-sage-green hover:to-primary transition-all duration-500 transform hover:scale-105" 
              onClick={handleGetSample}
            >
              <Zap className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Get a Sample
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-8 rounded-2xl font-bold border-2 border-primary/20 hover:border-primary/40 bg-card/50 backdrop-blur-sm hover:bg-accent/80 transition-all duration-300 transform hover:scale-105" 
              onClick={handleContactUs}
            >
              Contact Us
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-xl px-12 py-8 rounded-2xl font-bold bg-gradient-to-r from-sage-green/30 to-warm-beige/30 hover:from-sage-green/40 hover:to-warm-beige/40 backdrop-blur-sm transition-all duration-300 transform hover:scale-105" 
              onClick={handleCreateMockup}
            >
              Create Mockup
            </Button>
          </div>

          {/* Enhanced trust indicators */}
          <div className="flex items-center space-x-10 text-base">
            {[
              { label: "Fast Delivery", color: "bg-green-500", icon: "⚡" },
              { label: "Low MOQ", color: "bg-blue-500", icon: "📦" },
              { label: "Premium Quality", color: "bg-purple-500", icon: "⭐" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className={`w-3 h-3 ${item.color} rounded-full animate-pulse shadow-lg`}></div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                  {item.icon} {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative animate-fade-in">
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-sage-green/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-white via-sage-green/5 to-warm-beige/10 p-10 rounded-3xl shadow-2xl border border-border/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-3xl"></div>
              <img
                src="/src/assets/hero-tshirt.jpg"
                alt="Premium Cotton T-shirt"
                className="w-full h-auto rounded-2xl shadow-xl relative z-10"
              />
            </div>
          </div>
          
          {/* Enhanced floating elements */}
          <div className="absolute -top-8 -right-8 bg-gradient-to-r from-primary to-sage-green text-primary-foreground px-6 py-4 rounded-2xl text-lg font-bold shadow-2xl animate-bounce border border-primary/20">
            <span className="block text-sm opacity-80">Premium</span>
            180-240 GSM
          </div>
          <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-sage-green to-warm-beige text-foreground px-6 py-4 rounded-2xl text-lg font-bold shadow-2xl animate-pulse border border-sage-green/20">
            <span className="block text-sm opacity-80">100%</span>
            Cotton
          </div>
          
          {/* Additional decorative elements */}
          <div className="absolute top-1/4 -left-6 w-12 h-12 bg-gradient-to-r from-primary to-sage-green rounded-full blur-sm opacity-60 animate-ping"></div>
          <div className="absolute bottom-1/4 -right-6 w-8 h-8 bg-gradient-to-r from-sage-green to-warm-beige rounded-full blur-sm opacity-60 animate-ping delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
