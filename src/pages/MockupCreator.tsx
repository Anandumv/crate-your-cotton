
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

const MockupCreator = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

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

  const handleGetQuote = () => {
    window.open('https://wa.me/917012939374?text=Hi! I would like to get a quote for my design mockup.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold font-satoshi text-foreground mb-4">
            Create Your <span className="text-primary">Mockup</span>
          </h1>
          <p className="text-xl text-muted-foreground font-inter">
            Upload your design and see how it looks on our premium cotton T-shirts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <Label htmlFor="design-upload" className="cursor-pointer">
                <div className="space-y-2">
                  <p className="text-lg font-medium">Upload Your Design</p>
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
              <Button className="mt-4" asChild>
                <Label htmlFor="design-upload" className="cursor-pointer">
                  Choose File
                </Label>
              </Button>
            </div>

            {uploadedImage && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Your Design:</h3>
                <div className="border rounded-lg p-4 bg-muted/20">
                  <img
                    src={uploadedImage}
                    alt="Uploaded design"
                    className="max-w-full h-auto max-h-48 mx-auto"
                  />
                </div>
                <Button onClick={handleGetQuote} className="w-full" size="lg">
                  Get Quote for This Design
                </Button>
              </div>
            )}
          </div>

          {/* Mockup Preview Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-center">Preview on T-shirt:</h3>
            <div className="relative bg-muted/10 rounded-2xl p-8 flex items-center justify-center min-h-[500px]">
              {/* T-shirt Base */}
              <div className="relative">
                <div className="w-80 h-96 bg-white rounded-t-full rounded-b-lg shadow-lg relative overflow-hidden">
                  {/* T-shirt shape styling */}
                  <div className="absolute inset-x-8 top-8 bottom-16 bg-white rounded-lg">
                    {/* Design overlay area */}
                    <div className="absolute inset-4 flex items-center justify-center">
                      {uploadedImage ? (
                        <img
                          src={uploadedImage}
                          alt="Design mockup"
                          className="max-w-full max-h-full object-contain"
                          style={{ maxWidth: '200px', maxHeight: '200px' }}
                        />
                      ) : (
                        <div className="text-center text-muted-foreground">
                          <p className="text-sm">Your design will appear here</p>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* T-shirt collar */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-100 rounded-b-full"></div>
                  {/* T-shirt sleeves */}
                  <div className="absolute -left-6 top-12 w-12 h-20 bg-white rounded-full transform -rotate-12"></div>
                  <div className="absolute -right-6 top-12 w-12 h-20 bg-white rounded-full transform rotate-12"></div>
                </div>
              </div>
            </div>
            
            {!uploadedImage && (
              <div className="text-center">
                <p className="text-muted-foreground">
                  Upload a design to see the mockup preview
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className="font-medium mb-2">High Resolution</h4>
            <p className="text-sm text-muted-foreground">
              Upload 300 DPI designs for best print quality
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-medium mb-2">DTG Printing</h4>
            <p className="text-sm text-muted-foreground">
              Studio-grade direct-to-garment printing technology
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-medium mb-2">Premium Cotton</h4>
            <p className="text-sm text-muted-foreground">
              180-240 GSM, 100% cotton for lasting comfort
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupCreator;
