import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Stratvision is not just your consultant, it is your strategic partner. Driven by entrepreneurial spirit and a problem-solving approach, we deliver solutions to create sustainable business impact. We believe in effective & honest communication and prioritize meaningful partnerships over transactional relationships."
    },
    {
      title: "Business Growth Advisory",
      description: "At Stratvision, we believe in a personalized approach to business growth and optimization. We carefully curate strategies that align with your unique market position, operational capabilities, and growth objectives. We believe in a patient and sensible approach, focusing on long-term value creation and sustainable growth."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive consulting solutions designed to accelerate your business growth and optimize performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-0">
          {services.map((service, index) => (
            <Card key={index} className={`border-0 rounded-none ${index === 0 ? 'bg-background' : 'bg-muted/30'}`}>
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold mb-6 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <Button variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;