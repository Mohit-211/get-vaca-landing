import Navigation from "@/components/Navigation";
import StickySearchBar from "@/components/StickySearchBar";
import ListingCard from "@/components/ListingCard";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const Results = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const mockResults = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Cliffside Villa with Infinity Pool",
      location: "Santorini, Greece",
      rating: 4.9,
      reviews: 127,
      price: 450,
      originalPrice: 520,
      description: "Stunning whitewashed villa perched on the famous Santorini cliffs with breathtaking views of the Aegean Sea and unforgettable sunsets.",
      type: "Villa",
      isNew: true,
      isFavorited: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      title: "Boutique Rooftop Hotel in Gothic Quarter",
      location: "Barcelona, Spain",
      rating: 4.7,
      reviews: 89,
      price: 280,
      description: "Charming boutique hotel in the heart of Barcelona's historic Gothic Quarter with modern amenities and traditional Catalan design elements.",
      type: "Hotel",
      isFavorited: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      title: "Premium Yacht Charter Experience",
      location: "Monaco",
      rating: 5.0,
      reviews: 34,
      price: 1200,
      description: "Luxurious 80ft yacht with professional crew, perfect for exploring the French Riviera in absolute comfort and style.",
      type: "Yacht",
      isFavorited: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
      title: "Modern Beach House with Private Access",
      location: "Malibu, California",
      rating: 4.8,
      reviews: 156,
      price: 650,
      originalPrice: 750,
      description: "Contemporary beachfront house with direct ocean access, panoramic views, and luxury amenities for the perfect coastal retreat.",
      type: "Villa",
      isFavorited: false
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      title: "Historic Boutique Hotel & Spa",
      location: "Kyoto, Japan",
      rating: 4.6,
      reviews: 203,
      price: 380,
      description: "Traditional Japanese ryokan reimagined as a luxury hotel, featuring authentic tatami rooms and a world-class onsen spa.",
      type: "Hotel",
      isNew: true,
      isFavorited: true
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      title: "Sailing Yacht Adventure Charter",
      location: "British Virgin Islands",
      rating: 4.9,
      reviews: 67,
      price: 950,
      description: "Classic sailing yacht experience through crystal-clear Caribbean waters with snorkeling, fishing, and island hopping adventures.",
      type: "Yacht",
      isFavorited: false
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Mountain Lodge Retreat",
      location: "Aspen, Colorado",
      rating: 4.8,
      reviews: 94,
      price: 580,
      description: "Exclusive mountain lodge with ski-in/ski-out access, cozy fireplaces, and stunning Rocky Mountain views year-round.",
      type: "Hotel",
      isFavorited: false
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      title: "Tuscan Countryside Villa Estate",
      location: "Tuscany, Italy",
      rating: 4.7,
      reviews: 112,
      price: 420,
      originalPrice: 480,
      description: "Restored 18th-century villa surrounded by rolling hills, vineyards, and olive groves in the heart of Tuscany's wine country.",
      type: "Villa",
      isFavorited: true
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      title: "Ultra-Modern City Penthouse",
      location: "Dubai, UAE",
      rating: 4.9,
      reviews: 78,
      price: 720,
      description: "Spectacular penthouse with panoramic city and ocean views, infinity pool, and access to world-class dining and shopping.",
      type: "Hotel",
      isNew: true,
      isFavorited: false
    }
  ];

  const gridCols = viewMode === 'grid' 
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
    : 'grid-cols-1 lg:grid-cols-2';

  return (
    <div className="min-h-screen bg-sand/30">
      <Navigation />
      
      {/* Sticky Search Bar */}
      <div className="pt-20">
        <StickySearchBar />
      </div>
      
      <main className="pb-12">
        <div className="container mx-auto px-6">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {mockResults.length} places to stay
              </h1>
              <p className="text-muted-foreground">
                Found amazing properties for your dates in Santorini, Greece
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg p-1 bg-white">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="px-3"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="px-3"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Button variant="outline" className="whitespace-nowrap">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Sort & Filter
              </Button>
            </div>
          </div>
          
          {/* Results Grid */}
          <div className={`grid ${gridCols} gap-8 mb-12`}>
            {mockResults.map((result, index) => (
              <div key={result.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ListingCard {...result} />
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-ocean text-ocean hover:bg-ocean hover:text-white px-8 py-3 rounded-full"
            >
              Load More Results
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;