
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface QuoteFormProps {
  contactName: string;
  setContactName: (value: string) => void;
  quantity: string;
  setQuantity: (value: string) => void;
  requirements: string;
  setRequirements: (value: string) => void;
  onSendToWhatsApp: () => void;
}

const QuoteForm = ({
  contactName,
  setContactName,
  quantity,
  setQuantity,
  requirements,
  setRequirements,
  onSendToWhatsApp
}: QuoteFormProps) => {
  return (
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
      
      <Button onClick={onSendToWhatsApp} className="w-full" size="lg">
        Send Quote Request via WhatsApp
      </Button>
    </div>
  );
};

export default QuoteForm;
