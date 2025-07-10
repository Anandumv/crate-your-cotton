
import { Badge } from "@/components/ui/badge";
import { Heart, Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold font-satoshi mb-3">Cotton Crate</h3>
              <p className="text-primary-foreground/80 font-inter leading-relaxed mb-4">
                Premium T-shirt printing for creators, teams, and brands. High-GSM cotton with studio-grade printing technology.
              </p>
              <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                <Heart className="w-3 h-3 mr-1 text-red-400" />
                Made in India
              </Badge>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary-foreground/20 transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://wa.me/917012939374" 
                className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary-foreground/20 transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:hello@cottoncrate.com" 
                className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary-foreground/20 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { label: "Features", href: "#features" },
                { label: "Showcase", href: "#showcase" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Contact", href: "#contact" },
                { label: "Create Mockup", href: "/mockup" }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div>
                <p className="font-medium text-primary-foreground">Phone</p>
                <p>+91 70129 39374</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Email</p>
                <p>hello@cottoncrate.com</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Response Time</p>
                <p>1-2 hours during business hours</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 font-inter text-sm">
              © 2024 Cotton Crate. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
