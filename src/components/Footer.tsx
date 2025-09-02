import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold">
              Get Vaca
            </Link>
            <p className="text-primary-foreground/80 mt-2">
              Your gateway to extraordinary experiences
            </p>
          </div>
          
          <div className="flex space-x-8">
            <Link 
              to="/about" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/privacy" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Get Vaca. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;