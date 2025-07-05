
const TrustedBySection = () => {
  const buyers = [
    "BUSHIRT",
    "GANAPATHY SILKS", 
    "HONEY GIRLS",
    "FAZYO BY KALYAN SILKS",
    "YM INC"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground font-inter mb-8">
            Trusted by brands and businesses
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {buyers.map((buyer, index) => (
              <div key={index} className="min-w-32 h-12 bg-muted rounded-lg flex items-center justify-center px-4">
                <span className="text-xs font-medium text-center">{buyer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
