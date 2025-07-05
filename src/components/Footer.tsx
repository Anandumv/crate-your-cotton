const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-satoshi">Cotton Crate</h3>
            <p className="text-primary-foreground/80 font-inter">
              Made in India. Crafted with Cotton.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#features" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Features
              </a>
              <a href="#showcase" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Samples
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 font-inter text-sm">
            © 2024 Cotton Crate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;