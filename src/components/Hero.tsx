import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative bg-hero text-hero-foreground min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          We provide tailored solutions that create 
          <span className="block text-primary">long-term value for you.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-hero-foreground/90 max-w-3xl mx-auto">
          Your trusted growth advisor delivering strategic consulting services that drive sustainable business impact.
        </p>
        <a href="#contact" className="inline-block">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get in Touch
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;