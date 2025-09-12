const Header = () => {

  return <header className="bg-background border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/lovable-uploads/74c99a14-b0c5-48e5-83e2-a9340b45084e.png" alt="Stratvision Consulting Logo" className="h-12 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>
        
      </nav>
    </header>;
};
export default Header;