import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, Shield, Calendar, MapPin, Star, Lock, CheckCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: bookingData?.checkIn || "2024-03-15",
    checkOut: bookingData?.checkOut || "2024-03-20",
    guests: bookingData?.guests?.toString() || "2",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
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
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80",
    pricePerNight: bookingData?.subtotal ? bookingData.subtotal / (bookingData.nights || 1) : 450
  };

  // Calculate costs from booking data or use defaults
  const nights = bookingData?.nights || 5;
  const subtotal = bookingData?.subtotal || (property.pricePerNight * nights);
  const serviceFee = bookingData?.serviceFee || Math.round(subtotal * 0.12);
  const taxes = bookingData?.taxes || Math.round(subtotal * 0.08);
  const total = bookingData?.total || (subtotal + serviceFee + taxes);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleConfirmBooking = () => {
    // In a real app, this would process the booking with payment
    const confirmationData = {
      bookingId: 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      property,
      bookingDetails: {
        ...formData,
        nights,
        subtotal,
        serviceFee,
        taxes,
        total
      },
      confirmationDate: new Date().toISOString()
    };
    
    navigate("/booking-confirmation", { state: confirmationData });
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-ocean rounded-full flex items-center justify-center">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">Secure Booking</h1>
                    <p className="text-muted-foreground">Complete your reservation with confidence</p>
                  </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-ocean">
                    <Shield className="h-4 w-4" />
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ocean">
                    <CheckCircle className="h-4 w-4" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ocean">
                    <Lock className="h-4 w-4" />
                    <span>Data Protected</span>
                  </div>
                </div>
              </div>
              
              {/* Guest Information */}
              <Card className="border-ocean/20 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-ocean">Guest Information</CardTitle>
                  <p className="text-sm text-muted-foreground">Please provide your details for the reservation</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="John Doe"
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john.doe@example.com"
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkin" className="text-sm font-medium">Check-in Date *</Label>
                      <div className="relative mt-1">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="checkin"
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) => handleInputChange("checkIn", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="checkout" className="text-sm font-medium">Check-out Date *</Label>
                      <div className="relative mt-1">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="checkout"
                          type="date"
                          value={formData.checkOut}
                          onChange={(e) => handleInputChange("checkOut", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="guests" className="text-sm font-medium">Number of Guests *</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="16"
                      value={formData.guests}
                      onChange={(e) => handleInputChange("guests", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Payment Information - MOCK ONLY */}
              <Card className="border-ocean/20 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-ocean">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-coral text-coral text-xs">
                      DEMO MODE
                    </Badge>
                    <p className="text-sm text-muted-foreground">Mock payment fields for demonstration</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardholderName" className="text-sm font-medium">Cardholder Name</Label>
                    <Input
                      id="cardholderName"
                      value={formData.cardholderName}
                      onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                      placeholder="John Doe"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cardNumber" className="text-sm font-medium">Card Number</Label>
                    <Input
                      id="cardNumber"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                      placeholder="4242 4242 4242 4242"
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate" className="text-sm font-medium">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                        placeholder="MM/YY"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-sm font-medium">CVV</Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange("cvv", e.target.value)}
                        placeholder="123"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Label htmlFor="billingAddress" className="text-sm font-medium">Billing Address</Label>
                    <Input
                      id="billingAddress"
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                      placeholder="123 Main Street"
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="New York"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode" className="text-sm font-medium">Zip Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        placeholder="10001"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country" className="text-sm font-medium">Country</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        placeholder="United States"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Security Notice */}
              <div className="flex items-start gap-3 p-4 bg-ocean/5 border border-ocean/20 rounded-lg">
                <Shield className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-ocean mb-1">Your information is secure</div>
                  <div className="text-muted-foreground">
                    We use bank-level encryption and never store sensitive payment information. 
                    This is a demonstration form with mock payment processing.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Summary */}
            <div className="space-y-6">
              <Card className="sticky top-24 border-ocean/20 shadow-xl">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6 text-ocean">Booking Summary</h2>
                  
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
                        <span className="text-muted-foreground text-sm ml-1">({property.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  {/* Trip Details */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-ocean">Trip Details</h4>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Check-in</span>
                      </div>
                      <span className="font-medium">{formData.checkIn}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Check-out</span>
                      </div>
                      <span className="font-medium">{formData.checkOut}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Guests</span>
                      <span className="font-medium">{formData.guests}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Nights</span>
                      <span className="font-medium">{nights}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-ocean">Price Details</h4>
                    
                    <div className="flex justify-between">
                      <span>${property.pricePerNight} × {nights} nights</span>
                      <span>${subtotal}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>${serviceFee}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Taxes & fees</span>
                      <span>${taxes}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-bold text-lg text-ocean">
                      <span>Total (USD)</span>
                      <span>${total}</span>
                    </div>
                  </div>
                  
                  {/* Confirm Booking Button */}
                  <Button 
                    onClick={handleConfirmBooking}
                    size="lg" 
                    className="w-full bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white shadow-lg"
                    disabled={!formData.fullName || !formData.email}
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Confirm Booking
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    By confirming, you agree to our Terms of Service and Privacy Policy.
                  </p>
                  
                  {/* Trust Badges */}
                  <div className="mt-6 pt-4 border-t">
                    <div className="grid grid-cols-3 gap-4 text-center text-xs">
                      <div className="flex flex-col items-center gap-1">
                        <Shield className="h-4 w-4 text-ocean" />
                        <span className="text-muted-foreground">Secure</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-ocean" />
                        <span className="text-muted-foreground">Verified</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Lock className="h-4 w-4 text-ocean" />
                        <span className="text-muted-foreground">Protected</span>
                      </div>
                    </div>
                  </div>
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