import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Anchor } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeatureCards = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Building2,
      title: "Luxury Hotels",
      description: "Curated collection of world-class hotels and boutique accommodations with exceptional service and amenities.",
      gradient: "from-ocean to-ocean-light"
    },
    {
      icon: Home,
      title: "Private Villas",
      description: "Exclusive vacation rentals and private estates offering privacy, space, and personalized experiences.",
      gradient: "from-coral to-sunset"
    },
    {
      icon: Anchor,
      title: "Charter Yachts",
      description: "Luxury yacht charters for the ultimate maritime adventure with professional crews and premium amenities.",
      gradient: "from-ocean-light to-coral"
    }
  ];

  const handleStartExploring = () => {
    navigate("/results");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-sand/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Exceptional Experiences Await
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
            Choose from our carefully curated collection of premium accommodations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:shadow-coral/10 transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden bg-white/80 backdrop-blur-sm cursor-pointer"
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-foreground group-hover:text-ocean transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-inter flex-grow">
                  {feature.description}
                </p>
                <div className="mt-6">
                  <Button 
                    variant="ghost" 
                    className="text-ocean hover:text-coral hover:bg-coral/5 font-inter font-medium group-hover:translate-x-1 transition-all"
                  >
                    Explore Now 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;