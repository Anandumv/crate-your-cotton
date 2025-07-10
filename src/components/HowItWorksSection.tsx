
import { ArrowRight, Upload, Eye, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Share your design or idea",
      description: "Upload PNG/PSD or tell us what you want. Our team will help you perfect it.",
      icon: Upload,
      color: "text-blue-500"
    },
    {
      step: "02", 
      title: "Receive mockups + samples",
      description: "We generate digital previews within 48 hours or deliver physical samples.",
      icon: Eye,
      color: "text-green-500"
    },
    {
      step: "03",
      title: "Start your drop or order",
      description: "Go live and start wearing or selling. We handle the printing and delivery.",
      icon: Rocket,
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-muted/30 to-sage-green/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold font-satoshi text-foreground mb-8 leading-tight">
            How It
            <span className="text-primary block">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From concept to creation in just three simple steps. We make premium T-shirt printing effortless.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full">
                  <ArrowRight className="w-8 h-8 text-muted-foreground/30 mx-auto" />
                </div>
              )}
              
              <div className="text-center space-y-6 p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-300 group">
                {/* Icon */}
                <div className="relative">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-sage-green/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-satoshi text-foreground leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 rounded-full px-6 py-3 text-sm font-semibold border border-amber-200">
            <span>💡</span>
            <span>Need help designing? We assist in layout + positioning too.</span>
          </div>
          
          <Button size="lg" className="px-8 py-6 text-lg rounded-2xl font-semibold">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
