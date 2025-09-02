import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/10 backdrop-blur-sm border-b border-white/20'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className={`text-2xl font-bold font-playfair transition-colors ${
          isScrolled ? 'text-ocean' : 'text-white'
        }`}>
          Get Vaca
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`font-inter font-medium transition-colors ${
            isScrolled ? 'text-foreground hover:text-ocean' : 'text-white/90 hover:text-white'
          }`}>
            Home
          </Link>
          <Link to="/about" className={`font-inter font-medium transition-colors ${
            isScrolled ? 'text-foreground hover:text-ocean' : 'text-white/90 hover:text-white'
          }`}>
            About Us
          </Link>
          <Link to="/blog" className={`font-inter font-medium transition-colors ${
            isScrolled ? 'text-foreground hover:text-ocean' : 'text-white/90 hover:text-white'
          }`}>
            Blog
          </Link>
          <Link to="/contact" className={`font-inter font-medium transition-colors ${
            isScrolled ? 'text-foreground hover:text-ocean' : 'text-white/90 hover:text-white'
          }`}>
            Contact
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button 
                variant="outline" 
                className={`font-inter font-medium transition-all ${
                  isScrolled 
                    ? 'border-ocean text-ocean hover:bg-ocean hover:text-white' 
                    : 'text-white border-white/30 hover:bg-white/10'
                }`}
              >
                Sign In
              </Button>
            </Link>
            
            <Link to="/list-property">
              <Button className={`font-inter font-medium bg-gradient-to-r from-coral to-sunset hover:from-sunset hover:to-coral text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                List Your Property
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsMobileMenuOpen(true)}
            className={isScrolled ? 'text-ocean' : 'text-white'}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Slide-in Menu */}
          <div className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <span className="text-xl font-bold font-playfair text-ocean">Get Vaca</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-ocean"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 flex flex-col py-6">
                <Link 
                  to="/" 
                  className="px-6 py-4 font-inter font-medium text-foreground hover:text-ocean hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="px-6 py-4 font-inter font-medium text-foreground hover:text-ocean hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/blog" 
                  className="px-6 py-4 font-inter font-medium text-foreground hover:text-ocean hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-4 font-inter font-medium text-foreground hover:text-ocean hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/auth" 
                  className="px-6 py-4 font-inter font-medium text-foreground hover:text-ocean hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                
                {/* CTA Button */}
                <div className="mt-4 px-6">
                  <Link to="/list-property" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full font-inter font-medium bg-gradient-to-r from-coral to-sunset hover:from-sunset hover:to-coral text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      List Your Property
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;