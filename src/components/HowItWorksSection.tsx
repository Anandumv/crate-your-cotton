
import { ArrowRight, Upload, Eye, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Upload Your Design",
      description: "Share your PNG/PSD files or describe your vision. Our team helps perfect every detail.",
      icon: Upload
    },
    {
      step: "02", 
      title: "Preview & Approve",
      description: "Receive digital mockups in 48 hours. See exactly how your design looks before printing.",
      icon: Eye
    },
    {
      step: "03",
      title: "Print & Deliver",
      description: "We handle premium printing and fast delivery. Your T-shirts arrive ready to impress.",
      icon: Rocket
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display gradient-text mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            From concept to creation in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full z-0">
                  <div className="w-full h-px bg-border relative">
                    <ArrowRight className="w-4 h-4 text-muted-foreground absolute right-0 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
              )}
              
              <div className="relative z-10 bg-card border rounded-2xl p-8 hover:shadow-premium transition-all duration-300 group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-display font-bold">
                    {step.step}
                  </div>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 rounded-full px-4 py-2 text-sm font-medium border border-amber-200">
            <span>💡</span>
            <span>Need design help? We provide layout and positioning assistance</span>
          </div>
          
          <Button size="lg" className="h-12 px-8 text-base font-semibold rounded-xl shadow-premium hover:shadow-lg transition-all duration-300">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
