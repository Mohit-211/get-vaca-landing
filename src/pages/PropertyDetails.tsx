import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Users, Bed, Bath, Wifi, Car, Waves, Coffee } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock property data - in real app this would come from API
  const property = {
    id: 1,
    title: "Luxury Cliffside Villa with Infinity Pool",
    location: "Oia, Santorini, Greece",
    rating: 4.9,
    reviews: 127,
    price: 450,
    originalPrice: 520,
    type: "Villa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Experience the ultimate Greek island getaway in this stunning whitewashed villa perched on Santorini's famous cliffs. With breathtaking views of the Aegean Sea and unforgettable sunsets, this property offers the perfect blend of luxury and authentic Greek charm.",
    amenities: ["Free WiFi", "Private Pool", "Parking", "Kitchen", "Air Conditioning", "Sea View"],
    host: {
      name: "Maria",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b129?auto=format&fit=crop&w=150&q=80",
      verified: true,
      joinDate: "2019"
    }
  };

  const amenityIcons = {
    "Free WiFi": Wifi,
    "Private Pool": Waves,
    "Parking": Car,
    "Kitchen": Coffee,
    "Air Conditioning": Coffee,
    "Sea View": MapPin
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-sand"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to results
          </Button>
          
          {/* Property Header */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <Badge className="bg-accent text-accent-foreground mb-2">
                  {property.type}
                </Badge>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="ml-1">({property.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              
              <Card className="p-6 sticky top-24 z-10">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-ocean">${property.price}</span>
                    {property.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">${property.originalPrice}</span>
                    )}
                    <span className="text-muted-foreground">/night</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white mb-3"
                >
                  Reserve Now
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  You won't be charged yet
                </p>
              </Card>
            </div>
          </div>
          
          {/* Property Images */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12 rounded-2xl overflow-hidden">
            <div className="lg:col-span-2">
              <img 
                src={property.images[0]} 
                alt={property.title}
                className="w-full h-96 lg:h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {property.images.slice(1).map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Info */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
                <div className="flex gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{property.guests} guests</span>
                  </div>
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 mr-2" />
                    <span>{property.bedrooms} bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2" />
                    <span>{property.bathrooms} bathrooms</span>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">{property.description}</p>
              </div>
              
              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Coffee;
                    return (
                      <div key={index} className="flex items-center">
                        <IconComponent className="h-5 w-5 mr-3 text-muted-foreground" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Host Info */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Meet your host</h2>
                <div className="flex items-center gap-4 p-6 bg-sand rounded-xl">
                  <img 
                    src={property.host.avatar} 
                    alt={property.host.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{property.host.name}</h3>
                    <p className="text-muted-foreground">Host since {property.host.joinDate}</p>
                    {property.host.verified && (
                      <Badge variant="secondary" className="mt-1">
                        ✓ Verified Host
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar - Booking Card for Mobile */}
            <div className="lg:hidden">
              <Card className="p-6">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-ocean">${property.price}</span>
                    {property.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">${property.originalPrice}</span>
                    )}
                    <span className="text-muted-foreground">/night</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white mb-3"
                >
                  Reserve Now
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  You won't be charged yet
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyDetails;