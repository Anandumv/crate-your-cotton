
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul",
      role: "Founder at Loopwear",
      text: "We got our merch printed for our product launch. The quality was 10/10 and the delivery was super fast.",
      avatar: "R",
      rating: 5
    },
    {
      name: "Priya",
      role: "Creator & Influencer",
      text: "Cotton Crate made my merch dreams come true. The fabric quality is incredible and fans love it!",
      avatar: "P",
      rating: 5
    },
    {
      name: "Arjun",
      role: "Startup Co-founder",
      text: "Perfect for our team merch. Low MOQ meant we could test designs before scaling up.",
      avatar: "A",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-background to-sage-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-semibold">
            <Star className="w-4 h-4 mr-2 text-amber-500" />
            Customer Reviews
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold font-satoshi text-foreground mb-8 leading-tight">
            What Our
            <span className="text-primary block">Customers Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              {/* Quote decoration */}
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/20 z-0" />
              
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-xl transition-all duration-300 relative z-10 h-full">
                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <p className="text-foreground font-inter leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our happy customers?
          </p>
          <Badge variant="secondary" className="px-6 py-3 text-base font-semibold cursor-pointer hover:bg-secondary/80 transition-colors">
            Start Your Project Today
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
