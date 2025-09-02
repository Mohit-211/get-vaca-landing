import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, MapPin, Star, Home, BookOpen, Sparkles } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const confirmationData = location.state;
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // If no confirmation data, redirect to home
    if (!confirmationData) {
      navigate("/");
      return;
    }

    // Show success toast
    toast({
      title: "Booking Confirmed! 🎉",
      description: "Get ready for an amazing vacation experience!",
    });

    // Hide confetti after animation
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, [confirmationData, navigate, toast]);

  if (!confirmationData) {
    return null;
  }

  const { bookingId, property, bookingDetails } = confirmationData;

  // Calculate nights
  const checkInDate = new Date(bookingDetails.checkIn);
  const checkOutDate = new Date(bookingDetails.checkOut);
  const nights = Math.max(1, Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean/5 via-background to-coral/5 relative overflow-hidden">
      <Navigation />
      
      {/* Confetti Background Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-bounce absolute top-20 left-10 text-coral">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="animate-bounce absolute top-32 right-16 text-ocean" style={{ animationDelay: '0.5s' }}>
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="animate-bounce absolute top-48 left-1/4 text-sunset" style={{ animationDelay: '1s' }}>
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="animate-bounce absolute top-40 right-1/4 text-coral" style={{ animationDelay: '1.5s' }}>
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="animate-bounce absolute top-60 left-20 text-ocean" style={{ animationDelay: '2s' }}>
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="animate-bounce absolute top-28 right-32 text-sunset" style={{ animationDelay: '0.8s' }}>
            <Sparkles className="h-5 w-5" />
          </div>
        </div>
      )}
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            {/* Success Icon with Animation */}
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-ocean to-ocean-light rounded-full flex items-center justify-center mx-auto animate-scale-in shadow-2xl">
                <CheckCircle className="h-16 w-16 text-white animate-pulse" />
              </div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-ocean/30 rounded-full animate-ping"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                <div className="w-40 h-40 border-2 border-ocean/20 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-ocean via-ocean-light to-coral bg-clip-text text-transparent mb-4 animate-fade-in">
              Your booking is confirmed!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Pack your bags! Your dream vacation awaits.
            </p>
            
            <div className="text-lg font-medium text-ocean animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Booking ID: {bookingId}
            </div>
          </div>

          {/* Booking Summary Card */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <CardContent className="p-8">
                <div className="flex gap-6 mb-8">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="w-24 h-24 rounded-xl object-cover shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="text-lg">{property.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-current text-yellow-400 mr-2" />
                      <span className="text-lg font-medium">{property.rating}</span>
                      <span className="text-muted-foreground ml-2">({property.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Booking Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-sand rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-ocean mr-2" />
                      <span className="font-semibold text-ocean">Check-in</span>
                    </div>
                    <div className="text-lg font-medium">{formatDate(bookingDetails.checkIn)}</div>
                    <div className="text-sm text-muted-foreground">After 3:00 PM</div>
                  </div>
                  
                  <div className="bg-sand rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-ocean mr-2" />
                      <span className="font-semibold text-ocean">Check-out</span>
                    </div>
                    <div className="text-lg font-medium">{formatDate(bookingDetails.checkOut)}</div>
                    <div className="text-sm text-muted-foreground">Before 11:00 AM</div>
                  </div>
                  
                  <div className="bg-sand rounded-lg p-4">
                    <div className="font-semibold text-ocean mb-2">Guests</div>
                    <div className="text-lg font-medium">
                      {bookingDetails.guests} {parseInt(bookingDetails.guests) === 1 ? 'Guest' : 'Guests'}
                    </div>
                  </div>
                  
                  <div className="bg-sand rounded-lg p-4">
                    <div className="font-semibold text-ocean mb-2">Duration</div>
                    <div className="text-lg font-medium">
                      {nights} {nights === 1 ? 'Night' : 'Nights'}
                    </div>
                  </div>
                </div>

                {/* Total Price */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-ocean/10 to-coral/10 rounded-xl p-6 border border-ocean/20">
                    <div className="text-sm text-muted-foreground mb-2">Total Amount Paid</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-ocean to-coral bg-clip-text text-transparent">
                      ${bookingDetails.total}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">USD • All fees included</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <Button 
              onClick={() => navigate("/")}
              size="lg"
              className="bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Home className="h-5 w-5 mr-3" />
              Back to Homepage
            </Button>
            
            <Button 
              onClick={() => navigate("/my-bookings")}
              variant="outline"
              size="lg"
              className="border-2 border-ocean text-ocean hover:bg-ocean hover:text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <BookOpen className="h-5 w-5 mr-3" />
              View My Bookings
            </Button>
          </div>

          {/* Celebration Message */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <div className="max-w-lg mx-auto">
              <div className="text-lg text-muted-foreground mb-4">
                🎉 Get ready for an unforgettable experience! 🎉
              </div>
              <p className="text-sm text-muted-foreground">
                You'll receive a confirmation email with check-in instructions shortly.
                Have questions? Our 24/7 support team is here to help.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingConfirmation;