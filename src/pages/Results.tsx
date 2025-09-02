import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";

const Results = () => {
  const mockResults = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Villa with Ocean View",
      location: "Santorini, Greece",
      rating: 4.9,
      price: "$450/night",
      type: "Villa"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      title: "Boutique Hotel Downtown",
      location: "Barcelona, Spain",
      rating: 4.7,
      price: "$280/night",
      type: "Hotel"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Yacht Charter",
      location: "Monaco",
      rating: 5.0,
      price: "$1,200/night",
      type: "Yacht"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Search Results</h1>
            <p className="text-muted-foreground">
              Found {mockResults.length} amazing places for your next escape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockResults.map((result) => (
              <Card key={result.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: `url(${result.image})`}}>
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-sm font-medium">
                      {result.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-ocean transition-colors">
                    {result.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{result.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{result.rating}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-ocean">{result.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
              Load More Results
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;