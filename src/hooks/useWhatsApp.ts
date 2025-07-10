
interface WhatsAppMessageData {
  contactName: string;
  quantity: string;
  requirements: string;
}

export const useWhatsApp = () => {
  const sendQuoteRequest = ({ contactName, quantity, requirements }: WhatsAppMessageData) => {
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

  return { sendQuoteRequest };
};
