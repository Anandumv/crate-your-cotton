interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 border border-border">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold font-satoshi text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground font-inter leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;