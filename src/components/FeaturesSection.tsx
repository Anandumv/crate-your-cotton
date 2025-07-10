
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🧵",
      title: "Premium Fabric",
      description: "180-240 GSM cotton sourced from India's finest mills. Soft, durable, and built to last.",
      metric: "180-240 GSM"
    },
    {
      icon: "🎨",
      title: "Studio-Grade Printing",
      description: "Professional DTG printing with vibrant colors that won't fade. Front and back available.",
      metric: "4K Quality"
    },
    {
      icon: "📦",
      title: "Flexible Orders",
      description: "Start with just 10 pieces. Scale to thousands. Perfect for creators and brands.",
      metric: "Min 10 pcs"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Digital mockups in 48 hours. Production and delivery in 5-7 business days.",
      metric: "48hr Mock"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display gradient-text mb-6">
            Why Choose Cotton Crate
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Every detail perfected for the ultimate T-shirt experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              className="hover:scale-105 transition-all duration-300"
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-16">
          {[
            { number: "1000+", label: "Happy Customers" },
            { number: "50K+", label: "T-Shirts Printed" },
            { number: "48hr", label: "Mockup Delivery" },
            { number: "99%", label: "Quality Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-display text-foreground">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
