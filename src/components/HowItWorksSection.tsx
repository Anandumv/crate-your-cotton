const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Share your design or idea",
      description: "Upload PNG/PSD or tell us what you want."
    },
    {
      step: "02",
      title: "Receive mockups + samples",
      description: "We generate digital previews or deliver samples."
    },
    {
      step: "03",
      title: "Start your drop or order",
      description: "Go live and start wearing or selling."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-satoshi text-foreground mb-6">
            How It Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold font-satoshi">
                {step.step}
              </div>
              <h3 className="text-xl font-bold font-satoshi text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-inter italic">
            Need help designing? We assist in layout + positioning too.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;