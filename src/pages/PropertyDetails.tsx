import Navigation from "@/components/Navigation";
import ImageCarousel from "@/components/ImageCarousel";
import BookingSidebar from "@/components/BookingSidebar";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import MapComponent from "@/components/MapComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Star, MapPin, Users, Bed, Bath, Wifi, Car, Waves, Coffee, Utensils, Dumbbell, Tv, Wind } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock property data - in real app this would come from API
  const property = {
    id: parseInt(id || "1"),
    title: "Luxury Cliffside Villa with Infinity Pool",
    location: "Oia, Santorini, Greece",
    fullAddress: "Oia 847 02, Santorini, Cyclades, Greece",
    rating: 4.9,
    reviews: 127,
    price: 450,
    originalPrice: 520,
    type: "Villa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    description: {
      intro: "Experience the ultimate Greek island getaway in this stunning whitewashed villa perched on Santorini's famous cliffs. With breathtaking views of the Aegean Sea and unforgettable sunsets, this property offers the perfect blend of luxury and authentic Greek charm.",
      details: "This exceptional villa features traditional Cycladic architecture with modern luxury amenities. The infinity pool appears to merge seamlessly with the horizon, creating an illusion of swimming in the sky. Each room is thoughtfully designed with local materials and contemporary furnishings.",
      location: "Located in the picturesque village of Oia, you'll be within walking distance of world-renowned restaurants, charming cafes, and boutique shops. The famous Oia sunset viewpoint is just a 5-minute stroll away.",
      experience: "Wake up to panoramic sea views, spend your days lounging by the infinity pool, and end each evening watching the world's most spectacular sunsets from your private terrace. This is more than accommodation – it's a transformative experience."
    },
    amenities: [
      "Free WiFi", "Private Infinity Pool", "Free Parking", "Full Kitchen", 
      "Air Conditioning", "Sea View", "Breakfast Included", "Fitness Center",
      "Smart TV", "Ocean Breeze Terrace"
    ],
    coordinates: {
      latitude: 36.4618,
      longitude: 25.3753
    },
    host: {
      name: "Maria Papadakis",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b129?auto=format&fit=crop&w=150&q=80",
      verified: true,
      joinDate: "2019",
      description: "Born and raised in Santorini, I'm passionate about sharing the magic of my island with travelers from around the world."
    }
  };

  const amenityIcons = {
    "Free WiFi": Wifi,
    "Private Infinity Pool": Waves,
    "Free Parking": Car,
    "Full Kitchen": Utensils,
    "Air Conditioning": Wind,
    "Sea View": MapPin,
    "Breakfast Included": Coffee,
    "Fitness Center": Dumbbell,
    "Smart TV": Tv,
    "Ocean Breeze Terrace": Wind
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 pb-12">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-sand"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to results
          </Button>
          
          {/* Image Carousel */}
          <ImageCarousel images={property.images} title={property.title} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Header */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {property.type}
                  </Badge>
                  <Badge variant="outline" className="border-ocean text-ocean">
                    Verified
                  </Badge>
                </div>
                
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {property.title}
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">{property.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-current text-yellow-400 mr-1" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="text-muted-foreground ml-1">({property.reviews} reviews)</span>
                  </div>
                </div>
                
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
              </div>
              
              <Separator />
              
              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">About this place</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>{property.description.intro}</p>
                  <p>{property.description.details}</p>
                  <p>{property.description.location}</p>
                  <p>{property.description.experience}</p>
                </div>
              </div>
              
              <Separator />
              
              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">What this place offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Coffee;
                    return (
                      <div key={index} className="flex items-center p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                        <IconComponent className="h-5 w-5 mr-3 text-ocean" />
                        <span className="font-medium">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <Separator />
              
              {/* Availability Calendar */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Availability</h2>
                <AvailabilityCalendar />
              </div>
              
              <Separator />
              
              {/* Map */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Location</h2>
                <MapComponent 
                  location={property.fullAddress}
                  latitude={property.coordinates.latitude}
                  longitude={property.coordinates.longitude}
                />
              </div>
              
              <Separator />
              
              {/* Host Info */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Meet your host</h2>
                <Card className="border-0 bg-sand">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <img 
                        src={property.host.avatar} 
                        alt={property.host.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl mb-2">{property.host.name}</h3>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-muted-foreground">Host since {property.host.joinDate}</span>
                          {property.host.verified && (
                            <Badge variant="secondary" className="bg-ocean/10 text-ocean">
                              ✓ Verified Host
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {property.host.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Booking Sidebar */}
            <div className="lg:block">
              <BookingSidebar 
                price={property.price}
                originalPrice={property.originalPrice}
                rating={property.rating}
                reviews={property.reviews}
                propertyId={property.id}
              />
            </div>
          </div>
          
          {/* Mobile Booking Bar */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-ocean">${property.price}</span>
                    <span className="text-muted-foreground">/night</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span className="font-medium text-sm">{property.rating}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => navigate('/booking')}
                  className="bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white px-6"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyDetails;