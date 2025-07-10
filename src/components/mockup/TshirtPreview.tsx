
import { Upload } from "lucide-react";

interface TshirtPreviewProps {
  uploadedImage: string | null;
}

const TshirtPreview = ({ uploadedImage }: TshirtPreviewProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-display text-foreground mb-2">Live Preview</h3>
        <p className="text-muted-foreground font-body">See your design on premium cotton</p>
      </div>
      
      <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-12 flex items-center justify-center min-h-[600px] border">
        <div className="relative transform hover:scale-105 transition-transform duration-500">
          {/* T-shirt Design */}
          <div className="relative w-80 h-96 bg-white rounded-t-[120px] rounded-b-2xl shadow-premium overflow-hidden border">
            {/* T-shirt texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/30"></div>
            
            {/* Collar */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gray-100/80 rounded-b-full"></div>
            
            {/* Sleeves */}
            <div className="absolute -left-8 top-16 w-16 h-24 bg-white rounded-full transform -rotate-12 shadow-lg border"></div>
            <div className="absolute -right-8 top-16 w-16 h-24 bg-white rounded-full transform rotate-12 shadow-lg border"></div>
            
            {/* Design area */}
            <div className="absolute inset-x-12 top-20 bottom-20 flex items-center justify-center bg-white/60 rounded-xl border border-gray-100/50">
              {uploadedImage ? (
                <div className="relative max-w-[180px] max-h-[180px]">
                  <img
                    src={uploadedImage}
                    alt="Your design"
                    className="max-w-full max-h-full object-contain drop-shadow-sm"
                    style={{ 
                      filter: 'contrast(0.98) brightness(0.99)'
                    }}
                  />
                </div>
              ) : (
                <div className="text-center text-muted-foreground space-y-3">
                  <div className="w-16 h-16 mx-auto bg-muted rounded-xl flex items-center justify-center">
                    <Upload className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Your design appears here</p>
                    <p className="text-xs">Upload to see the preview</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Quality indicators */}
          <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-xs font-semibold shadow-lg">
            Premium
          </div>
          <div className="absolute -bottom-3 -left-3 bg-card border text-foreground px-3 py-1 rounded-lg text-xs font-semibold shadow-lg">
            180 GSM
          </div>
        </div>
      </div>
      
      {!uploadedImage && (
        <div className="text-center space-y-2 bg-muted/30 rounded-xl p-6 border">
          <p className="text-muted-foreground font-medium">
            Upload your design to see the magic happen
          </p>
          <p className="text-sm text-muted-foreground">
            Professional mockup on premium cotton T-shirts
          </p>
        </div>
      )}
    </div>
  );
};

export default TshirtPreview;
