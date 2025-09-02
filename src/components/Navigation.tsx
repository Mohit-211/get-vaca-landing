import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            className={isScrolled ? 'text-ocean' : 'text-white'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;