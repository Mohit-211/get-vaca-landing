import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
    navigate("/results");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-2 bg-white/95 backdrop-blur-sm shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Where to?"
            className="pl-10 border-none bg-transparent text-foreground placeholder:text-muted-foreground"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="date"
            placeholder="Check-in"
            className="pl-10 border-none bg-transparent text-foreground"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="date"
            placeholder="Check-out"
            className="pl-10 border-none bg-transparent text-foreground"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="number"
              placeholder="Guests"
              min="1"
              className="pl-10 border-none bg-transparent text-foreground"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleSearch}
            className="bg-ocean hover:bg-ocean-light text-white px-6"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SearchBar;