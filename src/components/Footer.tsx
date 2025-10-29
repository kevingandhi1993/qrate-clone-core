const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/74c99a14-b0c5-48e5-83e2-a9340b45084e.png" 
                alt="Stratvision Consulting Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground">Your Trusted Growth Advisor</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#founder" className="text-muted-foreground hover:text-primary transition-colors">Founder</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="https://stratvision.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  kevin@stratvision.org
                </a>
              </li>
              <li>
                <a href="tel:+919833300266" className="hover:text-primary transition-colors">
                  +971 563494288|+91 98333200266 
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company Info</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><strong>Industry:</strong> Business Consulting and Services</li>
              <li><strong>Office Address:</strong> Enam Sambhav,4th Floor,G Block,Bandra Kurla Complex,Mumbai 400051,India</li>
              <li><strong> One Central ,9th Floor ,Trade Centre 2 , Offices 4, Dubai, UAE</strong></li>
              <li><strong>Founded:</strong> 2024</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Stratvision Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
