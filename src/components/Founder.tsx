const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Founder</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-foreground mb-6">About the Founder</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  [Add founder's biography here - their background, experience, and vision for StratVision Consulting]
                </p>
                <p>
                  [Include their professional journey, key achievements, and what drives their passion for helping businesses grow and transform]
                </p>
                <p>
                  [Mention their expertise in strategic consulting, business transformation, and commitment to delivering exceptional results for clients]
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-80 h-80 bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary/40 rounded-full"></div>
                  </div>
                  <p className="text-sm">Add Founder's Photo Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;