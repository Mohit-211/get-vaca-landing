import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Users, Search, Filter } from "lucide-react";
import { useState, useEffect } from "react";

const StickySearchBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [location, setLocation] = useState("Santorini, Greece");
  const [checkIn, setCheckIn] = useState("2024-03-15");
  const [checkOut, setCheckOut] = useState("2024-03-20");
  const [guests, setGuests] = useState("2");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-40 transition-all duration-300 ${
      isSticky ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <Card className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-0">
          <div className="p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Where to?"
                    className="pl-10 border-border bg-transparent"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="date"
                      className="pl-10 border-border bg-transparent text-sm"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="date"
                      className="pl-10 border-border bg-transparent text-sm"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="number"
                    placeholder="Guests"
                    min="1"
                    className="pl-10 border-border bg-transparent"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="border-muted">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button size="lg" className="bg-ocean hover:bg-ocean-light px-6">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StickySearchBar;