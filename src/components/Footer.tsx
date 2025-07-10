
import { Heart, Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-display mb-3">Cotton Crate</h3>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-4 max-w-md">
                Premium T-shirt printing for creators, teams, and brands. High-GSM cotton with studio-grade printing technology.
              </p>
              <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 rounded-full px-3 py-1 text-sm">
                <Heart className="w-3 h-3 text-red-400" />
                <span>Made in India with love</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://wa.me/917012939374" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:hello@cottoncrate.com" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "Features", href: "#features" },
                { label: "Gallery", href: "#gallery" },
                { label: "Process", href: "#process" },
                { label: "Contact", href: "#contact" },
                { label: "Create Mockup", href: "/mockup" }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display font-bold">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80 text-sm">
              <div>
                <p className="font-medium text-primary-foreground">Phone</p>
                <p>+91 70129 39374</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Email</p>
                <p>hello@cottoncrate.com</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Response</p>
                <p>1-2 hours typically</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 font-body text-sm">
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
