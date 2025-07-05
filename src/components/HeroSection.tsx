import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tshirt.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold font-satoshi text-foreground leading-tight">
                Your Designs.
                <br />
                <span className="text-muted-foreground">Our Cotton.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-lg">
                High-GSM, super-soft T-shirts with studio-grade printing for creators, teams, and early brands.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 font-medium">
                Get a Sample
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-medium">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative bg-gradient-warm rounded-3xl p-8 shadow-soft">
              <img
                src={heroImage}
                alt="Premium cotton T-shirt"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;