import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { X, Menu, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { isLoggedIn, logout } = useAuth();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHeroPage = ["/", "/property-details"].includes(location.pathname);

  useEffect(() => {
    if (!isHeroPage) {
      setIsScrolled(false);
      return;
    }
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHeroPage]);

  const navbarClasses = isHeroPage
    ? isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
      : "bg-white/10 backdrop-blur-sm border-b border-white/20"
    : "bg-white shadow-md border-b border-gray-200";

  const linkClasses = (path: string) => {
    const base = "font-inter font-medium transition-colors";
    const active =
      location.pathname === path
        ? "text-ocean font-semibold"
        : isHeroPage && !isScrolled
        ? "text-white/90 hover:text-white"
        : "text-foreground hover:text-ocean";
    return `${base} ${active}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/public/logo.png"
            alt="Get Vaca Logo"
            className="h-auto w-20"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClasses("/about")}>
            About Us
          </Link>
          <Link to="/blog" className={linkClasses("/blog")}>
            Blog
          </Link>
          <Link to="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>

          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <Link to="/auth">
                <Button
                  className={`font-inter font-medium transition-all ${
                    isHeroPage
                      ? isScrolled
                        ? "border border-ocean text-ocean bg-transparent hover:bg-ocean hover:text-white"
                        : "border border-white text-white bg-transparent hover:bg-white hover:text-ocean"
                      : "border border-ocean text-ocean bg-transparent hover:bg-ocean hover:text-white"
                  }`}
                >
                  Sign In
                </Button>
              </Link>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <Button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 bg-ocean text-white hover:bg-ocean-light"
                >
                  <User className="w-4 h-4" />
                  <span>Account</span>
                </Button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md border border-gray-100">
                    <Link
                      to="/my-bookings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Bookings
                    </Link>
                    <Link
                      to="/my-profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            <Link to="/list-property">
              <Button className="font-inter font-medium bg-gradient-to-r from-coral to-sunset hover:from-sunset hover:to-coral text-white shadow-lg hover:shadow-xl transition-all duration-300">
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
            className={isHeroPage && !isScrolled ? "text-white" : "text-ocean"}
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
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img
                  src="/public/logo.png"
                  alt="Get Vaca Logo"
                  className="h-7 w-auto"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Links */}
              <div className="flex-1 flex flex-col justify-center px-6">
                <nav className="space-y-2">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About Us" },
                    { to: "/blog", label: "Blog" },
                    { to: "/contact", label: "Contact" },
                    !isLoggedIn && { to: "/auth", label: "Sign In" },
                  ]
                    .filter(Boolean)
                    .map((link) => (
                      <Link
                        key={link!.to}
                        to={link!.to}
                        className={`block py-4 px-4 text-lg font-inter font-medium rounded-lg transition-all duration-200 touch-manipulation ${
                          location.pathname === link!.to
                            ? "text-ocean font-semibold bg-gray-50"
                            : "text-gray-800 hover:text-ocean hover:bg-gray-50"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link!.label}
                      </Link>
                    ))}
                </nav>
              </div>

              {/* CTA */}
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
