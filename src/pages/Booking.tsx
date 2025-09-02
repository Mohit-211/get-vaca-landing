import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Shield, Calendar, MapPin, Star } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    country: ""
  });

  // Mock property data (in real app this would come from booking data)
  const property = {
    title: "Luxury Cliffside Villa with Infinity Pool",
    location: "Oia, Santorini, Greece",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80"
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBooking = () => {
    // In a real app, this would process the booking
    alert("Booking confirmed! You will receive a confirmation email shortly.");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-sand/30">
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
            Back to property
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Complete your booking</h1>
                <p className="text-muted-foreground">You're just a few steps away from your dream vacation!</p>
              </div>
              
              {/* Guest Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Guest Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange("cvv", e.target.value)}
                        placeholder="123"
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Label htmlFor="billingAddress">Billing Address</Label>
                    <Input
                      id="billingAddress"
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                      placeholder="123 Main Street"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        placeholder="10001"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        placeholder="United States"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Security Notice */}
              <div className="flex items-start gap-3 p-4 bg-ocean/5 border border-ocean/20 rounded-lg">
                <Shield className="h-5 w-5 text-ocean mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-ocean mb-1">Your payment is secure</div>
                  <div className="text-muted-foreground">
                    We use bank-level encryption and never store your payment information.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Summary */}
            <div className="space-y-6">
              {/* Property Summary */}
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-6">
                    <img 
                      src={property.image}
                      alt={property.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                        <span className="font-medium">{property.rating}</span>
                        <span className="text-muted-foreground text-sm ml-1">({property.reviews})</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  {/* Trip Details */}
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold">Trip Details</h4>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Dates</span>
                      </div>
                      <span className="font-medium">
                        {bookingData?.checkIn} - {bookingData?.checkOut}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Guests</span>
                      <span className="font-medium">{bookingData?.guests || 2}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Nights</span>
                      <span className="font-medium">{bookingData?.nights || 5}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold">Price Breakdown</h4>
                    
                    <div className="flex justify-between">
                      <span>${bookingData?.subtotal ? bookingData.subtotal / (bookingData.nights || 1) : 450} × {bookingData?.nights || 5} nights</span>
                      <span>${bookingData?.subtotal || 2250}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>${bookingData?.serviceFee || 270}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>${bookingData?.taxes || 180}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total (USD)</span>
                      <span>${bookingData?.total || 2700}</span>
                    </div>
                  </div>
                  
                  {/* Confirm Booking Button */}
                  <Button 
                    onClick={handleBooking}
                    size="lg" 
                    className="w-full bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white"
                  >
                    Confirm Booking
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    By clicking "Confirm Booking", you agree to our Terms of Service and Privacy Policy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;