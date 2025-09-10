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
              <h3 className="text-2xl font-bold text-foreground mb-6">Kevin Gandhi - Founder & Managing Partner</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Kevin Gandhi is the founder of StratVision Consulting, with over 10 years of experience in management consulting, business transformation, and digital strategy across India and Southeast Asia. After completing his MBA from the Indian Institute of Management Bangalore and qualifying as a Chartered Accountant, Kevin began his consulting career and quickly established himself as a strategy expert, working with leading firms such as EY-Parthenon, Goldman Sachs, Deloitte, and PwC.
                </p>
                <p>
                  In 2019, Kevin founded StratVision Consulting, a boutique firm specializing in management consulting for clients ranging from fast-growing startups to established global brands. Under his leadership, StratVision has delivered high-impact results in market entry, business growth, process optimization, and commercial due diligence, earning a reputation for hands-on leadership and sustainable value creation throughout Asia-Pacific.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-blue-500">
                <img 
                  src="/lovable-uploads/8c804212-06d5-4dc6-a19e-b9ec5f395b82.png"
                  alt="Kevin Gandhi - Founder & Managing Partner of StratVision Consulting"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;