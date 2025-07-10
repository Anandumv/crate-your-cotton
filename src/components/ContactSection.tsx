
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, MapPin, Clock, Star } from "lucide-react";

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917012939374?text=Hi! I would like to know more about Cotton Crate services.', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Get instant responses",
      action: "Chat Now",
      color: "text-green-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+91 70129 39374",
      action: "Call Now",
      color: "text-blue-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "hello@cottoncrate.com",
      action: "Send Email", 
      color: "text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-sage-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-semibold">
            <Star className="w-4 h-4 mr-2 text-amber-500" />
            Let's Connect
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold font-satoshi text-foreground mb-8 leading-tight">
            Ready to Start
            <span className="text-primary block">Your Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get in touch with us today and let's bring your T-shirt designs to life with premium quality printing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-satoshi text-foreground mb-8">
                Get in Touch
              </h3>
              
              <div className="grid gap-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-sage-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                          <p className="text-muted-foreground text-sm">{method.description}</p>
                        </div>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="bg-gradient-to-br from-sage-green/10 to-warm-beige/10 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl border-2 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-satoshi">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="T-shirt printing inquiry" className="h-12" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project requirements..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button 
                onClick={handleWhatsApp}
                className="w-full h-12 text-lg font-semibold rounded-xl"
              >
                Send via WhatsApp
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                We typically respond within 1-2 hours during business hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
