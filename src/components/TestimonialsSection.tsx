const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul",
      role: "Founder at Loopwear",
      text: "We got our merch printed for our product launch. The quality was 10/10 and the delivery was super fast.",
      avatar: "R"
    },
    {
      name: "Priya",
      role: "Creator & Influencer",
      text: "Cotton Crate made my merch dreams come true. The fabric quality is incredible and fans love it!",
      avatar: "P"
    },
    {
      name: "Arjun",
      role: "Startup Co-founder",
      text: "Perfect for our team merch. Low MOQ meant we could test designs before scaling up.",
      avatar: "A"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-soft">
              <p className="text-foreground font-inter leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;