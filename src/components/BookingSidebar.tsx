import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Calendar, Users, Star, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BookingSidebarProps {
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  propertyId: number;
}

const BookingSidebar = ({ price, originalPrice, rating, reviews, propertyId }: BookingSidebarProps) => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("2024-03-15");
  const [checkOut, setCheckOut] = useState("2024-03-20");
  const [guests, setGuests] = useState("2");
  
  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const nights = Math.max(1, Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)));
  
  // Calculate costs
  const subtotal = price * nights;
  const serviceFee = Math.round(subtotal * 0.12); // 12% service fee
  const taxes = Math.round(subtotal * 0.08); // 8% taxes
  const total = subtotal + serviceFee + taxes;
  
  const savings = originalPrice ? (originalPrice - price) * nights : 0;

  const handleBookNow = () => {
    const bookingData = {
      propertyId,
      checkIn,
      checkOut,
      guests: parseInt(guests),
      nights,
      subtotal,
      serviceFee,
      taxes,
      total
    };
    
    // In a real app, you'd pass this data via state or context
    navigate('/booking', { state: bookingData });
  };

  return (
    <Card className="sticky top-24 shadow-xl border-0">
      <CardContent className="p-6">
        {/* Price Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl font-bold text-ocean">${price}</span>
            {originalPrice && (
              <span className="text-xl text-muted-foreground line-through">${originalPrice}</span>
            )}
            <span className="text-muted-foreground">/night</span>
          </div>
          
          {savings > 0 && (
            <div className="text-sm text-coral font-medium">
              Save ${savings} on this stay!
            </div>
          )}
          
          <div className="flex items-center gap-1 mt-2">
            <Star className="h-4 w-4 fill-current text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviews} reviews)</span>
          </div>
        </div>

        {/* Booking Form */}
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="checkin" className="text-sm font-medium">Check-in</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="checkout" className="text-sm font-medium">Check-out</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="guests" className="text-sm font-medium">Guests</Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="guests"
                type="number"
                min="1"
                max="16"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span>${price} × {nights} nights</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>${taxes}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        {/* Book Now Button */}
        <Button 
          onClick={handleBookNow}
          size="lg" 
          className="w-full bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white mb-4"
        >
          Book Now
        </Button>
        
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>You won't be charged yet</span>
        </div>
        
        {/* Quick Facts */}
        <div className="mt-6 pt-6 border-t space-y-3">
          <h4 className="font-semibold">Quick Facts</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <div className="font-medium">Free cancellation</div>
              <div className="text-muted-foreground">Before 48 hours</div>
            </div>
            <div>
              <div className="font-medium">Instant booking</div>
              <div className="text-muted-foreground">No approval needed</div>
            </div>
            <div>
              <div className="font-medium">Self check-in</div>
              <div className="text-muted-foreground">Keypad entry</div>
            </div>
            <div>
              <div className="font-medium">24/7 support</div>
              <div className="text-muted-foreground">Always available</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingSidebar;