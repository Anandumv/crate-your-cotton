
const InfoSection = () => {
  return (
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
  );
};

export default InfoSection;
