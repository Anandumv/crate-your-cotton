
import { Badge } from "@/components/ui/badge";
import { Star, Users, TrendingUp, Award } from "lucide-react";

const TrustedBySection = () => {
  const brands = [
    "Loopwear", "StartupCo", "CreativeStudio", "TechBrand", "DesignHouse"
  ];

  const achievements = [
    {
      icon: Users,
      number: "1000+",
      label: "Happy Customers",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      number: "50K+",
      label: "T-Shirts Delivered",
      color: "text-green-500"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Customer Rating",
      color: "text-amber-500"
    },
    {
      icon: Award,
      number: "99%",
      label: "Quality Score",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted by brands */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-semibold">
            <Star className="w-4 h-4 mr-2 text-amber-500" />
            Trusted by Brands
          </Badge>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-card rounded-xl shadow-sm border border-border/50 font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground font-inter">
            Join hundreds of creators and brands who trust Cotton Crate
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-sage-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                {achievement.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
