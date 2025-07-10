
import FeatureCard from "./FeatureCard";
import { Sparkles, Zap, Award, Rocket } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🧵",
      title: "Premium Fabric",
      description: "Only 100% cotton, 180-240 GSM, long-lasting fabrics sourced from India's best mills.",
      highlight: "180-240 GSM",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: "🎨",
      title: "Pro DTG Printing",
      description: "Studio-grade vibrancy, wash-tested, and scalable. Available in both front and back print.",
      highlight: "Studio-grade",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: "📦",
      title: "Low MOQ & Bulk Friendly",
      description: "Order as low as 10. Scale up to 1,000+. We support brand drops & events.",
      highlight: "Min 10 pieces",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: "🚀",
      title: "Fast Turnaround",
      description: "Mockups in 48h, dispatch in 5–7 business days. Pan-India delivery.",
      highlight: "48h mockups",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-40 bg-gradient-to-br from-muted/30 via-background to-sage-green/10 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-sage-green/20 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-warm-beige/30 to-sage-green/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-sage-green/10 text-primary rounded-full px-8 py-4 text-lg font-bold mb-8 border border-primary/20 shadow-lg">
            <Sparkles className="w-6 h-6" />
            <span>Why Choose Cotton Crate</span>
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-6xl lg:text-8xl font-bold font-satoshi text-foreground mb-10 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              What Makes Us
            </span>
            <span className="text-primary block bg-gradient-to-r from-primary via-sage-green to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Better
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium quality meets affordability with our cutting-edge printing technology and premium cotton fabrics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`group hover:scale-110 transition-all duration-500 bg-gradient-to-br ${feature.color} backdrop-blur-sm border-2 hover:border-primary/30 hover:shadow-3xl transform hover:-translate-y-2`}
            />
          ))}
        </div>

        {/* Enhanced stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { number: "1000+", label: "Happy Customers", icon: "👥", color: "from-blue-500 to-cyan-500" },
            { number: "50K+", label: "T-Shirts Printed", icon: "👕", color: "from-purple-500 to-pink-500" },
            { number: "48hr", label: "Mockup Delivery", icon: "⚡", color: "from-green-500 to-emerald-500" },
            { number: "99%", label: "Quality Rating", icon: "⭐", color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105">
              <div className={`text-6xl mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-bold group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-xl text-muted-foreground font-semibold mb-2">{stat.label}</div>
              <div className="text-3xl opacity-60 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
