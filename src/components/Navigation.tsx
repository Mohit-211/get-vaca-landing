import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          Get Vaca
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/90 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/blog" className="text-white/90 hover:text-white transition-colors">
            Blog
          </Link>
          <Link to="/auth">
            <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;