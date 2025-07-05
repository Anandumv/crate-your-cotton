import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-satoshi text-foreground mb-6">
            Let's Print Something Awesome.
          </h2>
        </div>
        
        <div className="bg-card rounded-3xl p-8 shadow-soft">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Type of merch
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="creator-drop">Creator Drop</SelectItem>
                  <SelectItem value="startup-team">Startup Team</SelectItem>
                  <SelectItem value="event-tee">Event Tee</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                File Upload (optional)
              </label>
              <Input
                type="file"
                accept=".png,.jpg,.jpeg,.psd"
                className="w-full"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="flex-1">
                Send Inquiry
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                WhatsApp Us
              </Button>
            </div>
          </form>
          
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground font-inter">
              Email us directly: <a href="mailto:hello@cottoncrate.in" className="text-primary font-medium">hello@cottoncrate.in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;