import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About StratVision Consulting</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              StratVision Consulting is a management consulting firm dedicated to driving strategic growth and transformation for businesses across sectors. We are based in Mumbai and Dubai.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We partner with clients to unlock value in corporate strategy, business transformation, and investment advisory - serving clients from startups to conglomerates.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With a strong foundation in research, benchmarking, and actionable insights, StratVision supports leaders in making confident decisions, scaling operations, and navigating change.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">Our expertise spans:</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Crafting growth strategies for companies to scale sustainably and implementing it</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Helping clients implement Sustainable and carbon neutral practices, comply with ESG / ISO norms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Turning around businesses to maximize profitability for equity investors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Optimizing organizational structures, processes and operating models to maximize efficiency</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Offering strategic review of portfolio companies and recommend initiatives to extract maximum value from investment business</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Conducting Commercial Due Diligence for investments by PE / VC / Family offices</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-primary font-medium">
              Do reach out for your consulting requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;