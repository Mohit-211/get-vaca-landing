import SearchBar from "./SearchBar";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${heroImage})`,
      }}
    >
      <div className="container mx-auto px-6 text-center z-10 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-bold font-playfair text-white mb-8 leading-tight">
          Find Your Next
          <br />
          <span className="bg-gradient-to-r from-coral via-sunset to-coral bg-clip-text text-transparent">
            Escape
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-inter text-white/95 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Discover stunning destinations, luxury accommodations, and unforgettable experiences crafted for the discerning traveler.
        </p>
        
        <div className="mb-12">
          <SearchBar />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => window.location.href = '/results'}
            className="group bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white font-inter font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-coral/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Start Exploring
            <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <button className="font-inter font-medium text-white/90 hover:text-white transition-colors flex items-center gap-2">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            Watch Our Story
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;