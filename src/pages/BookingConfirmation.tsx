import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Calendar, MapPin, Star, Download, Mail, Home, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const confirmationData = location.state;

  useEffect(() => {
    // If no confirmation data, redirect to home
    if (!confirmationData) {
      navigate("/");
    }
  }, [confirmationData, navigate]);

  if (!confirmationData) {
    return null;
  }

  const { bookingId, property, bookingDetails, confirmationDate } = confirmationData;
  const confirmationDateFormatted = new Date(confirmationDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handlePrintConfirmation = () => {
    window.print();
  };

  const handleEmailConfirmation = () => {
    // In a real app, this would send an email
    alert("Confirmation email sent to " + bookingDetails.email);
  };

  return (
    <div className="min-h-screen bg-sand/30">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-ocean to-ocean-light rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Booking Confirmed!</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Your reservation has been successfully processed
            </p>
            <Badge className="bg-ocean text-white px-4 py-2 text-lg">
              Booking ID: {bookingId}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Confirmation Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Information */}
              <Card className="border-ocean/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-ocean">Your Reservation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mb-6">
                    <img 
                      src={property.image}
                      alt={property.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2">{property.title}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{property.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                        <span className="font-medium">{property.rating}</span>
                        <span className="text-muted-foreground ml-1">({property.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-ocean">Check-in</h4>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{bookingDetails.checkIn}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">After 3:00 PM</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-ocean">Check-out</h4>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{bookingDetails.checkOut}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Before 11:00 AM</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-ocean">Guests</h4>
                      <span>{bookingDetails.guests} {bookingDetails.guests === "1" ? "guest" : "guests"}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-ocean">Duration</h4>
                      <span>{bookingDetails.nights} {bookingDetails.nights === 1 ? "night" : "nights"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guest Information */}
              <Card className="border-ocean/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-ocean">Guest Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Primary Guest</h4>
                      <p className="text-foreground">{bookingDetails.fullName}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-1">Contact Email</h4>
                      <p className="text-foreground">{bookingDetails.email}</p>
                    </div>
                    
                    {bookingDetails.phone && (
                      <div>
                        <h4 className="font-semibold mb-1">Phone Number</h4>
                        <p className="text-foreground">{bookingDetails.phone}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Important Information */}
              <Card className="border-ocean/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-ocean">Important Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-ocean/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-ocean">Check-in Instructions</h4>
                    <p className="text-sm text-muted-foreground">
                      You'll receive detailed check-in instructions 24 hours before your arrival. 
                      The property offers self check-in with a secure keypad entry system.
                    </p>
                  </div>
                  
                  <div className="bg-sand p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                    <p className="text-sm text-muted-foreground">
                      Free cancellation until 48 hours before check-in. 
                      After that, you'll be charged for the first night.
                    </p>
                  </div>
                  
                  <div className="bg-coral/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-coral">House Rules</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Check-in: 3:00 PM - 10:00 PM</li>
                      <li>• Checkout: 11:00 AM</li>
                      <li>• No smoking</li>
                      <li>• No parties or events</li>
                      <li>• Maximum {bookingDetails.guests} guests</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary & Actions */}
            <div className="space-y-6">
              {/* Price Summary */}
              <Card className="border-ocean/20 shadow-lg sticky top-24">
                <CardHeader>
                  <CardTitle className="text-ocean">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Confirmed on {confirmationDateFormatted}
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>${property.pricePerNight} × {bookingDetails.nights} nights</span>
                      <span>${bookingDetails.subtotal}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>${bookingDetails.serviceFee}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Taxes & fees</span>
                      <span>${bookingDetails.taxes}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-bold text-lg text-ocean">
                      <span>Total Paid</span>
                      <span>${bookingDetails.total}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button 
                      onClick={handleEmailConfirmation}
                      variant="outline" 
                      className="w-full border-ocean text-ocean hover:bg-ocean hover:text-white"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Confirmation
                    </Button>
                    
                    <Button 
                      onClick={handlePrintConfirmation}
                      variant="outline"
                      className="w-full"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download/Print
                    </Button>
                    
                    <Button 
                      onClick={() => navigate("/")}
                      className="w-full bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white"
                    >
                      <Home className="h-4 w-4 mr-2" />
                      Back to Home
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Support Contact */}
              <Card className="border-ocean/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-ocean">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Have questions about your booking? We're here to help 24/7.
                  </p>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Support: +1 (555) 123-4567
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Email: support@getvaca.com
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingConfirmation;