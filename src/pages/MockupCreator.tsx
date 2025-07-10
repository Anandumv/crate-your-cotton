
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UploadSection from "@/components/mockup/UploadSection";
import QuoteForm from "@/components/mockup/QuoteForm";
import TshirtPreview from "@/components/mockup/TshirtPreview";
import InfoSection from "@/components/mockup/InfoSection";
import { useWhatsApp } from "@/hooks/useWhatsApp";

const MockupCreator = () => {
  const navigate = useNavigate();
  const { sendQuoteRequest } = useWhatsApp();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState('');
  const [requirements, setRequirements] = useState('');
  const [contactName, setContactName] = useState('');

  const handleSendToWhatsApp = () => {
    sendQuoteRequest({ contactName, quantity, requirements });
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
            <UploadSection 
              onFileUpload={setUploadedImage} 
              uploadedImage={uploadedImage} 
            />

            {uploadedImage && (
              <QuoteForm
                contactName={contactName}
                setContactName={setContactName}
                quantity={quantity}
                setQuantity={setQuantity}
                requirements={requirements}
                setRequirements={setRequirements}
                onSendToWhatsApp={handleSendToWhatsApp}
              />
            )}
          </div>

          {/* Mockup Preview Section */}
          <TshirtPreview uploadedImage={uploadedImage} />
        </div>

        <InfoSection />
      </div>
    </div>
  );
};

export default MockupCreator;
