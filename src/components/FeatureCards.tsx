import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Anchor } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeatureCards = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Building2,
      title: "Hotels",
      description: "Luxury hotels and boutique accommodations worldwide",
      gradient: "from-ocean to-ocean-light"
    },
    {
      icon: Home,
      title: "Villas",
      description: "Private villas and vacation rentals for your perfect getaway",
      gradient: "from-coral to-sunset"
    },
    {
      icon: Anchor,
      title: "Yachts",
      description: "Charter luxury yachts for the ultimate maritime experience",
      gradient: "from-ocean-light to-coral"
    }
  ];

  const handleStartExploring = () => {
    navigate("/results");
  };

  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleStartExploring}
            size="lg"
            className="bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Exploring
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;