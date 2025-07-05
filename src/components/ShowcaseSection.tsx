import printCloseup from "@/assets/print-closeup.jpg";
import flatlayTees from "@/assets/flatlay-tees.jpg";
import foldedStack from "@/assets/folded-stack.jpg";

const ShowcaseSection = () => {
  const showcaseImages = [
    {
      src: printCloseup,
      alt: "Close-up of DTG printing on premium cotton",
      className: "aspect-square"
    },
    {
      src: flatlayTees,
      alt: "Flat-lay of branded T-shirts",
      className: "aspect-[4/3]"
    },
    {
      src: foldedStack,
      alt: "Folded stack of premium T-shirts",
      className: "aspect-square"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-satoshi text-foreground mb-6">
            Built with Cotton Crate
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover ${image.className} group-hover:scale-105 transition-transform duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;