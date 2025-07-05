const TrustedBySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground font-inter mb-8">
            Trusted by startups, creators, and community builders
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder logos - would be replaced with actual client logos */}
            <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-xs font-medium">STARTUP</span>
            </div>
            <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-xs font-medium">CREATOR</span>
            </div>
            <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-xs font-medium">BRAND</span>
            </div>
            <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-xs font-medium">TEAM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;