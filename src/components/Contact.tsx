import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

type FormValues = {
  firstName: string;
  lastName: string;
  company?: string;
  email?: string;
  message?: string;
};

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormValues>({
    defaultValues: { firstName: "", lastName: "", company: "", email: "", message: "" }
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          first_name: values.firstName,
          last_name: values.lastName,
          company: values.company || null,
          email: values.email || null,
          message: values.message || null
        }]);

      if (error) throw error;

      toast({ 
        title: "Message sent", 
        description: "We will get back to you shortly." 
      });
      reset();
    } catch (error) {
      console.error("Contact insert error:", error);
      toast({ 
        title: "Failed to send message", 
        description: "Please try again later.", 
        variant: "destructive" 
      });
    }
  };

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
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-hero-foreground/90">kevin@stratvision.org</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-hero-foreground/90">+91 9833300266</p>
                </div>
                <div>
                  
                  
                </div>
              </div>
            </div>
            
            <Card className="bg-background/10 border-hero-foreground/20">
              <CardHeader>
                <CardTitle className="text-hero-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60" {...register('firstName', { required: true })} />
                    <Input placeholder="Last Name" className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60" {...register('lastName', { required: true })} />
                  </div>
                  <Input placeholder="Email" type="email" className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60" {...register('email')} />
                  <Input placeholder="Company" className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60" {...register('company')} />
                  <Textarea placeholder="How can we help you?" rows={4} className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/60" {...register('message')} />
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;