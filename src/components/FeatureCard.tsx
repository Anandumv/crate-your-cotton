
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  metric?: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, metric, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-8 rounded-2xl bg-card border hover:shadow-premium transition-all duration-300 group",
      className
    )}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-4xl">{icon}</div>
          {metric && (
            <div className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-md">
              {metric}
            </div>
          )}
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
