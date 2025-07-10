
import printCloseup from "@/assets/print-closeup.jpg";
import flatlayTees from "@/assets/flatlay-tees.jpg";
import foldedStack from "@/assets/folded-stack.jpg";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const ShowcaseSection = () => {
  const showcaseImages = [
    {
      src: printCloseup,
      alt: "Close-up of DTG printing on premium cotton",
      className: "aspect-square",
      badge: "DTG Printing"
    },
    {
      src: flatlayTees,
      alt: "Flat-lay of branded T-shirts",
      className: "aspect-[4/3]",
      badge: "Brand Ready"
    },
    {
      src: foldedStack,
      alt: "Folded stack of premium T-shirts",
      className: "aspect-square",
      badge: "Premium Quality"
    }
  ];

  return (
    <section className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-semibold">
            <Star className="w-4 h-4 mr-2 text-amber-500" />
            Gallery
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold font-satoshi text-foreground mb-8 leading-tight">
            Built with
            <span className="text-primary block">Cotton Crate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See the quality and craftsmanship that goes into every single T-shirt we produce.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-muted/20"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover ${image.className} group-hover:scale-110 transition-transform duration-700`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {image.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see your designs come to life?
          </p>
          <Badge variant="secondary" className="px-6 py-3 text-base font-semibold">
            Upload your design and create a mockup
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
