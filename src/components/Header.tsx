import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { LogOut, User } from "lucide-react";

const Header = () => {
  const { user, signOut, loading } = useAuth();

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
        
        <div className="flex items-center space-x-4">
          {loading ? (
            <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
          ) : user ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-foreground">
                <User className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={signOut}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="default" size="sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>
        
      </nav>
    </header>;
};
export default Header;