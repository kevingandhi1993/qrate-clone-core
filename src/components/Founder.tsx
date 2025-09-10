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
                  From 2010 to 2015, Kevin gained extensive experience in strategy consulting, focusing on revenue growth, cost optimization, and business transformation for clients in sectors such as consumer goods, tech, retail, and finance. In 2015, he relocated to Singapore, where he continued to advise top multinational organizations, leading projects in operational efficiency, digital transformation, and due diligence across APAC markets.
                </p>
                <p>
                  In 2019, Kevin founded StratVision Consulting, a boutique firm specializing in management consulting for clients ranging from fast-growing startups to established global brands. Under his leadership, StratVision has delivered high-impact results in market entry, business growth, process optimization, and commercial due diligence, earning a reputation for hands-on leadership and sustainable value creation throughout Asia-Pacific.
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