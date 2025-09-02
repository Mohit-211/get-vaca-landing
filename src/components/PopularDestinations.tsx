import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import IbizaImg from "@/assets/ibiza-spain.jpg";
import CapriImg from "@/assets/capri-italy.jpg";

// inside your data array

const PopularDestinations = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      properties: "120+ properties",
    },
    {
      id: 2,
      name: "Mykonos, Greece",
      image:
        "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=800&q=80",
      properties: "85+ properties",
    },
    {
      id: 3,
      name: "Ibiza, Spain",
      image: IbizaImg,
      properties: "95+ properties",
    },
    {
      id: 4,
      name: "Capri, Italy",
      image: CapriImg,
      properties: "60+ properties",
    },
  ];

  const handleDestinationClick = (destination: string) => {
    navigate("/results", { state: { destination } });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
            Explore the world's most sought-after luxury travel destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group cursor-pointer overflow-hidden border-0 bg-transparent hover:shadow-2xl hover:shadow-ocean/10 transition-all duration-500 hover:-translate-y-2"
              onClick={() => handleDestinationClick(destination.name)}
            >
              <div className="relative h-80 overflow-hidden rounded-2xl">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-300"></div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-playfair font-semibold text-white mb-2 group-hover:text-coral transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-white/90 font-inter text-sm mb-3">
                    {destination.properties}
                  </p>
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="font-inter text-sm font-medium">
                      Explore Now
                    </span>
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-coral/50 rounded-2xl transition-all duration-300"></div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/results")}
            className="font-inter font-medium text-ocean hover:text-coral transition-colors flex items-center gap-2 mx-auto"
          >
            View All Destinations
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
