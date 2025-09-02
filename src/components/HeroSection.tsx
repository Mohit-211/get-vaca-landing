import SearchBar from "./SearchBar";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${heroImage})`,
      }}
    >
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Find Your Next
          <br />
          <span className="bg-gradient-to-r from-coral to-sunset bg-clip-text text-transparent">
            Escape
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Discover stunning destinations, luxury accommodations, and unforgettable experiences
        </p>
        
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;