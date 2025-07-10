
import FeatureCard from "./FeatureCard";
import { Sparkles } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🧵",
      title: "Premium Fabric",
      description: "Only 100% cotton, 180-240 GSM, long-lasting fabrics sourced from India's best mills.",
      highlight: "180-240 GSM"
    },
    {
      icon: "🎨",
      title: "Pro DTG Printing",
      description: "Studio-grade vibrancy, wash-tested, and scalable. Available in both front and back print.",
      highlight: "Studio-grade"
    },
    {
      icon: "📦",
      title: "Low MOQ & Bulk Friendly",
      description: "Order as low as 10. Scale up to 1,000+. We support brand drops & events.",
      highlight: "Min 10 pieces"
    },
    {
      icon: "🚀",
      title: "Fast Turnaround",
      description: "Mockups in 48h, dispatch in 5–7 business days. Pan-India delivery.",
      highlight: "48h mockups"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage-green/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-warm-beige/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-6 py-2 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Why Choose Cotton Crate</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold font-satoshi text-foreground mb-8 leading-tight">
            What Makes Us
            <span className="text-primary block">Better</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Premium quality meets affordability with our cutting-edge printing technology and premium cotton fabrics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20 hover:shadow-2xl"
            />
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "1000+", label: "Happy Customers" },
            { number: "50K+", label: "T-Shirts Printed" },
            { number: "48hr", label: "Mockup Delivery" },
            { number: "99%", label: "Quality Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
