
import printCloseup from "@/assets/print-closeup.jpg";
import flatlayTees from "@/assets/flatlay-tees.jpg";
import foldedStack from "@/assets/folded-stack.jpg";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles, Eye } from "lucide-react";

const ShowcaseSection = () => {
  const showcaseImages = [
    {
      src: printCloseup,
      alt: "Close-up of DTG printing on premium cotton",
      className: "aspect-square",
      badge: "DTG Printing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      src: flatlayTees,
      alt: "Flat-lay of branded T-shirts",
      className: "aspect-[4/3]",
      badge: "Brand Ready",
      color: "from-purple-500 to-pink-500"
    },
    {
      src: foldedStack,
      alt: "Folded stack of premium T-shirts",
      className: "aspect-square",
      badge: "Premium Quality",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-40 bg-gradient-to-br from-background via-sage-green/5 to-warm-beige/10 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-sage-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-warm-beige/20 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <Badge variant="outline" className="mb-8 px-6 py-3 text-lg font-bold border-2 border-primary/20 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm shadow-lg">
            <Star className="w-5 h-5 mr-3 text-amber-500" />
            <span className="bg-gradient-to-r from-primary to-sage-green bg-clip-text text-transparent">Gallery</span>
            <Sparkles className="w-5 h-5 ml-3 text-primary" />
          </Badge>
          <h2 className="text-6xl lg:text-8xl font-bold font-satoshi text-foreground mb-10 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Built with
            </span>
            <span className="text-primary block bg-gradient-to-r from-primary via-sage-green to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] mt-4">
              Cotton Crate
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See the quality and craftsmanship that goes into every single T-shirt we produce.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {showcaseImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 bg-gradient-to-br from-card to-muted/20 transform hover:scale-105 hover:-rotate-1"
            >
              <div className="relative overflow-hidden rounded-3xl">
                {/* Enhanced glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${image.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover ${image.className} group-hover:scale-115 transition-transform duration-700 relative z-10`}
                />
                
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Enhanced badge */}
                <div className={`absolute top-6 left-6 bg-gradient-to-r ${image.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                  {image.badge}
                </div>

                {/* View icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-4 shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced call to action */}
        <div className="text-center bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm rounded-3xl p-12 border border-border/50 shadow-2xl">
          <p className="text-2xl text-muted-foreground mb-8 font-medium">
            Ready to see your designs come to life?
          </p>
          <Badge variant="secondary" className="px-10 py-4 text-xl font-bold bg-gradient-to-r from-primary to-sage-green text-primary-foreground hover:from-sage-green hover:to-primary transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-xl">
            <Sparkles className="w-6 h-6 mr-3" />
            Upload your design and create a mockup
            <Star className="w-6 h-6 ml-3" />
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
