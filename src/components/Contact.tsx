import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-hero text-hero-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-hero-foreground/90">
              Ready to unlock your business potential? Let's discuss how we can help you achieve sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Stratvision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Website</h4>
                  <p className="text-hero-foreground/90">stratvision.org</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-hero-foreground/90">+919833300266</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Headquarters</h4>
                  <p className="text-hero-foreground/90">
                    Mumbai, Maharashtra, India<br />
                    Dubai, UAE
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Industry</h4>
                  <p className="text-hero-foreground/90">Business Consulting and Services</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Founded</h4>
                  <p className="text-hero-foreground/90">2024</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-background/10 border-hero-foreground/20">
              <CardHeader>
                <CardTitle className="text-hero-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60" />
                  <Input placeholder="Last Name" className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60" />
                </div>
                <Input placeholder="Email" className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60" />
                <Input placeholder="Company" className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60" />
                <Textarea 
                  placeholder="How can we help you?" 
                  rows={4}
                  className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;