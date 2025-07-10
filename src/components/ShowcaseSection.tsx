
import printCloseup from "@/assets/print-closeup.jpg";
import flatlayTees from "@/assets/flatlay-tees.jpg";
import foldedStack from "@/assets/folded-stack.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShowcaseSection = () => {
  const navigate = useNavigate();

  const showcaseImages = [
    {
      src: printCloseup,
      alt: "Close-up of DTG printing detail",
      label: "Print Quality"
    },
    {
      src: flatlayTees,
      alt: "Flat-lay of premium T-shirts",
      label: "Premium Cotton"
    },
    {
      src: foldedStack,
      alt: "Stack of folded T-shirts",
      label: "Perfect Finish"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display gradient-text mb-6">
            See the Quality
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Every T-shirt showcases our commitment to premium materials and expert craftsmanship
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {showcaseImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-muted/50 hover:shadow-premium transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border rounded-lg px-3 py-2">
                <span className="text-sm font-semibold text-foreground">{image.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-muted/30 rounded-2xl p-12 border">
          <h3 className="text-2xl font-display text-foreground mb-4">
            Ready to bring your designs to life?
          </h3>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            Upload your design and see how it looks on our premium T-shirts
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/mockup')}
            className="h-12 px-8 text-base font-semibold rounded-xl shadow-premium hover:shadow-lg transition-all duration-300"
          >
            Create Your Mockup
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
