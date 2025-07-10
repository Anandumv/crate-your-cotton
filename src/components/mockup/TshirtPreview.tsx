
import { Upload } from "lucide-react";

interface TshirtPreviewProps {
  uploadedImage: string | null;
}

const TshirtPreview = ({ uploadedImage }: TshirtPreviewProps) => {
  return (
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
  );
};

export default TshirtPreview;
