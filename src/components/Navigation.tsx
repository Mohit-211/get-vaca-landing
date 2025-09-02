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
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Slide-in Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-full max-w-xs bg-white shadow-2xl animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="text-xl font-bold font-playfair text-ocean">Get Vaca</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Navigation Links - Centered Content */}
              <div className="flex-1 flex flex-col justify-center px-6">
                <nav className="space-y-2">
                  <Link 
                    to="/" 
                    className="block py-4 px-4 text-lg font-inter font-medium text-gray-800 hover:text-ocean hover:bg-gray-50 rounded-lg transition-all duration-200 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    className="block py-4 px-4 text-lg font-inter font-medium text-gray-800 hover:text-ocean hover:bg-gray-50 rounded-lg transition-all duration-200 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block py-4 px-4 text-lg font-inter font-medium text-gray-800 hover:text-ocean hover:bg-gray-50 rounded-lg transition-all duration-200 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block py-4 px-4 text-lg font-inter font-medium text-gray-800 hover:text-ocean hover:bg-gray-50 rounded-lg transition-all duration-200 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link 
                    to="/auth" 
                    className="block py-4 px-4 text-lg font-inter font-medium text-gray-800 hover:text-ocean hover:bg-gray-50 rounded-lg transition-all duration-200 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </nav>
              </div>
                
              {/* Bottom CTA Button */}
              <div className="p-6">
                <Link 
                  to="/list-property" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button 
                    size="lg"
                    className="w-full py-4 text-lg font-inter font-semibold bg-gradient-to-r from-coral to-sunset hover:from-sunset hover:to-coral text-white shadow-lg rounded-xl transition-all duration-300 touch-manipulation active:scale-[0.98]"
                  >
                    List Your Property
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;