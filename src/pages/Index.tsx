import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;