import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ListingCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  description: string;
  type: string;
  isNew?: boolean;
  isFavorited?: boolean;
}

const ListingCard = ({ 
  id, 
  image, 
  title, 
  location, 
  rating, 
  reviews,
  price, 
  originalPrice,
  description, 
  type,
  isNew,
  isFavorited: initialFavorited
}: ListingCardProps) => {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(initialFavorited || false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleBookNow = () => {
    navigate(`/property/${id}`);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in bg-white">
      <div className="relative">
        <div className="relative h-64 overflow-hidden bg-sand">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-sand animate-pulse" />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-accent text-accent-foreground font-medium">
            {type}
          </Badge>
          {isNew && (
            <Badge className="bg-coral text-white font-medium">
              New
            </Badge>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-200 ${
            isFavorited ? 'text-coral' : 'text-muted-foreground hover:text-coral'
          }`}
          onClick={toggleFavorite}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-3 text-foreground group-hover:text-ocean transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-ocean">${price}</span>
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">${originalPrice}</span>
            )}
            <span className="text-sm text-muted-foreground">/night</span>
          </div>
          
          <Button 
            onClick={handleBookNow}
            className="bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingCard;