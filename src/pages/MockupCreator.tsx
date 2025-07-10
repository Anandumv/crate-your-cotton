
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MockupCreator = () => {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState('');
  const [requirements, setRequirements] = useState('');
  const [contactName, setContactName] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendToWhatsApp = () => {
    let message = `Hi! I would like to get a quote for my design mockup.\n\n`;
    
    if (contactName) {
      message += `Name: ${contactName}\n`;
    }
    
    if (quantity) {
      message += `Quantity needed: ${quantity}\n`;
    }
    
    if (requirements) {
      message += `Additional requirements: ${requirements}\n`;
    }
    
    message += `\nI have uploaded my design and would like to discuss printing options.`;
    
    window.open(`https://wa.me/917012939374?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={handleGoBack}
          className="mb-6 hover:bg-muted/50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold font-satoshi text-foreground mb-4">
            Create Your <span className="text-primary">Mockup</span>
          </h1>
          <p className="text-xl text-muted-foreground font-inter">
            Upload your design and see how it looks on our premium cotton T-shirts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="border-2 border-dashed border-muted rounded-xl p-10 text-center bg-muted/5 hover:bg-muted/10 transition-colors">
              <Upload className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
              <Label htmlFor="design-upload" className="cursor-pointer">
                <div className="space-y-3">
                  <p className="text-xl font-medium">Upload Your Design</p>
                  <p className="text-sm text-muted-foreground">
                    PNG files only. Max 10MB. Best results with 300 DPI.
                  </p>
                </div>
              </Label>
              <Input
                id="design-upload"
                type="file"
                accept=".png,image/png"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button className="mt-6" size="lg" asChild>
                <Label htmlFor="design-upload" className="cursor-pointer">
                  Choose File
                </Label>
              </Button>
            </div>

            {uploadedImage && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Your Design:</h3>
                <div className="border rounded-xl p-6 bg-muted/5">
                  <img
                    src={uploadedImage}
                    alt="Uploaded design"
                    className="max-w-full h-auto max-h-48 mx-auto rounded-lg shadow-sm"
                  />
                </div>
                
                {/* Quote Form */}
                <div className="space-y-6 border rounded-xl p-8 bg-gradient-to-br from-muted/10 to-muted/5 shadow-sm">
                  <h4 className="text-lg font-medium">Get Your Quote</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Your Name</Label>
                    <Input
                      id="contact-name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Enter your name"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity Needed</Label>
                    <Input
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g., 50 pieces"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Additional Requirements</Label>
                    <Textarea
                      id="requirements"
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder="Size preferences, colors, delivery timeline, etc."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button onClick={handleSendToWhatsApp} className="w-full" size="lg">
                    Send Quote Request via WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Mockup Preview Section */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium text-center">Preview on Premium T-shirt:</h3>
            <div className="relative bg-gradient-to-br from-sage-green/20 to-warm-beige/20 rounded-3xl p-12 flex items-center justify-center min-h-[600px] shadow-lg">
              {/* Enhanced T-shirt Design */}
              <div className="relative transform scale-110">
                {/* T-shirt Shadow */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 opacity-20">
                  <div className="w-80 h-96 bg-gray-800 rounded-t-[120px] rounded-b-2xl"></div>
                </div>
                
                {/* Main T-shirt */}
                <div className="relative w-80 h-96 bg-white rounded-t-[120px] rounded-b-2xl shadow-2xl overflow-hidden border border-gray-100">
                  {/* T-shirt texture/fabric effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-60"></div>
                  
                  {/* Collar */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gray-100 rounded-b-full border-b border-gray-200"></div>
                  
                  {/* Left Sleeve */}
                  <div className="absolute -left-8 top-16 w-16 h-24 bg-white rounded-full transform -rotate-12 shadow-lg border border-gray-100"></div>
                  
                  {/* Right Sleeve */}
                  <div className="absolute -right-8 top-16 w-16 h-24 bg-white rounded-full transform rotate-12 shadow-lg border border-gray-100"></div>
                  
                  {/* Design placement area with subtle texture */}
                  <div className="absolute inset-x-12 top-20 bottom-20 flex items-center justify-center bg-white/80 rounded-2xl border border-gray-100/50">
                    {uploadedImage ? (
                      <div className="relative">
                        {/* Design with realistic fabric integration */}
                        <img
                          src={uploadedImage}
                          alt="Design mockup"
                          className="max-w-full max-h-full object-contain drop-shadow-sm"
                          style={{ 
                            maxWidth: '180px', 
                            maxHeight: '180px',
                            filter: 'contrast(0.95) brightness(0.98)'
                          }}
                        />
                        {/* Subtle fabric texture overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent mix-blend-soft-light"></div>
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground space-y-3">
                        <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center">
                          <Upload className="w-8 h-8" />
                        </div>
                        <p className="text-sm font-medium">Your design will appear here</p>
                        <p className="text-xs">Upload to see the magic!</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Subtle seam lines */}
                  <div className="absolute left-12 top-20 bottom-20 w-px bg-gray-200/50"></div>
                  <div className="absolute right-12 top-20 bottom-20 w-px bg-gray-200/50"></div>
                </div>
              </div>
            </div>
            
            {!uploadedImage && (
              <div className="text-center space-y-2">
                <p className="text-muted-foreground font-medium">
                  Upload a design to see the mockup preview
                </p>
                <p className="text-sm text-muted-foreground">
                  See how your design looks on our premium cotton T-shirts
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Info Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          <div className="text-center p-6 rounded-xl bg-muted/10">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">HD</span>
            </div>
            <h4 className="font-medium mb-2">High Resolution</h4>
            <p className="text-sm text-muted-foreground">
              Upload 300 DPI designs for best print quality and crisp details
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-muted/10">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">DTG</span>
            </div>
            <h4 className="font-medium mb-2">DTG Printing</h4>
            <p className="text-sm text-muted-foreground">
              Studio-grade direct-to-garment printing for vibrant colors
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-muted/10">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">100%</span>
            </div>
            <h4 className="font-medium mb-2">Premium Cotton</h4>
            <p className="text-sm text-muted-foreground">
              180-240 GSM, 100% cotton for lasting comfort and durability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupCreator;
