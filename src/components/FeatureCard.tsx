
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-8 rounded-3xl bg-card shadow-soft border border-border/50 text-center space-y-6 hover:shadow-xl transition-all duration-300",
      className
    )}>
      <div className="relative">
        <div className="text-5xl mb-4 relative z-10">{icon}</div>
        <div className="absolute inset-0 bg-primary/10 rounded-full w-20 h-20 mx-auto blur-xl"></div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold font-satoshi text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground font-inter leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Decorative border */}
      <div className="w-16 h-1 bg-gradient-to-r from-primary to-sage-green rounded-full mx-auto"></div>
    </div>
  );
};

export default FeatureCard;
