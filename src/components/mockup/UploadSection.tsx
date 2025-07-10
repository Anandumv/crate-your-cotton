
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

interface UploadSectionProps {
  onFileUpload: (file: string) => void;
  uploadedImage: string | null;
}

const UploadSection = ({ onFileUpload, uploadedImage }: UploadSectionProps) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onFileUpload(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
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
        </div>
      )}
    </div>
  );
};

export default UploadSection;
