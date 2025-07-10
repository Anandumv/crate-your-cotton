
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
      "p-10 rounded-3xl bg-card/80 backdrop-blur-sm shadow-2xl border border-border/50 text-center space-y-8 hover:shadow-3xl transition-all duration-500 group",
      className
    )}>
      <div className="relative">
        <div className="text-6xl mb-6 relative z-10 group-hover:scale-125 transition-transform duration-500">{icon}</div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-sage-green/20 rounded-full w-24 h-24 mx-auto blur-2xl group-hover:blur-xl transition-all duration-500"></div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-satoshi text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground font-inter leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Enhanced decorative border with gradient animation */}
      <div className="w-20 h-1 bg-gradient-to-r from-primary via-sage-green to-primary rounded-full mx-auto group-hover:w-32 transition-all duration-500 animate-gradient bg-[length:200%_200%]"></div>
    </div>
  );
};

export default FeatureCard;
