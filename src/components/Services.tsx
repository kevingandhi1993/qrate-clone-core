import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  TrendingUp, 
  Leaf, 
  Target, 
  Settings, 
  PieChart, 
  Search,
  Building2,
  Globe,
  Zap
} from "lucide-react";
import consultingStrategy from "@/assets/consulting-strategy.jpg";
import digitalTransformation from "@/assets/digital-transformation.jpg";
import businessGrowth from "@/assets/business-growth.jpg";

const Services = () => {
  const expertiseAreas = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI & Analytics Solutions",
      description: "Implement customised AI solutions to automate your sales and operations; leverage Analytics and Insights for better decision making"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Strategy",
      description: "Crafting growth strategies for companies to scale sustainably and implementing it"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "ESG & Sustainability",
      description: "Helping clients implement Sustainable and carbon neutral practices, comply with ESG / ISO norms"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Business Turnaround",
      description: "Turning around businesses to maximize profitability for equity investors"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Process Optimization",
      description: "Optimizing organizational structures, processes and operating models to maximize efficiency"
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Portfolio Review",
      description: "Offering strategic review of portfolio companies and recommend initiatives to extract maximum value from investment business"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Due Diligence",
      description: "Conducting Commercial Due Diligence for investments by PE / VC / Family offices"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About StratVision Consulting</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4"></div>
        </div>
        
        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Introduction Cards */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-primary" />
                <Badge variant="secondary" className="px-4 py-2">Global Presence</Badge>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Driving Strategic Growth</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                StratVision Consulting is a management consulting firm dedicated to driving strategic growth and transformation for businesses across sectors. We are based in Mumbai and Dubai.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Mumbai & Dubai</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={consultingStrategy} 
                alt="Strategic consulting visualization" 
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover-scale"
              />
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 md:order-1 animate-scale-in">
              <img 
                src={digitalTransformation} 
                alt="Business transformation concept" 
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover-scale"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2 animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
                <Badge variant="secondary" className="px-4 py-2">Innovation Focused</Badge>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Unlocking Value Through Partnership</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner with clients to unlock value in corporate strategy, business transformation, and investment advisory - serving clients from startups to conglomerates.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in research, benchmarking, and actionable insights, StratVision supports leaders in making confident decisions, scaling operations, and navigating change.
              </p>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Expertise Spans</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From AI implementation to sustainable practices, we deliver comprehensive solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 border hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                          {area.icon}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                          {area.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl"></div>
            <Card className="relative border-primary/20 bg-gradient-to-r from-card to-card/80">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={businessGrowth} 
                    alt="Business growth visualization" 
                    className="w-24 h-24 rounded-full object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">Ready to Transform Your Business?</h3>
                <p className="text-lg text-primary font-medium max-w-2xl mx-auto">
                  Do reach out for your consulting requirements. Let's unlock your organization's full potential together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;