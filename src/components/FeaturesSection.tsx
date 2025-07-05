import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🧵",
      title: "Premium Fabric",
      description: "Only 100% cotton, 180-240 GSM, long-lasting fabrics sourced from India's best mills."
    },
    {
      icon: "🎨",
      title: "Pro DTG Printing",
      description: "Studio-grade vibrancy, wash-tested, and scalable. Available in both front and back print."
    },
    {
      icon: "📦",
      title: "Low MOQ & Bulk Friendly",
      description: "Order as low as 10. Scale up to 1,000+. We support brand drops & events."
    },
    {
      icon: "🚀",
      title: "Fast Turnaround",
      description: "Mockups in 48h, dispatch in 5–7 business days. Pan-India delivery."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-satoshi text-foreground mb-6">
            What Makes Us Better
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;