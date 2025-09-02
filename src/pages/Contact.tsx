import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light max-w-2xl mx-auto leading-relaxed">
            We're here to help you plan your perfect trip
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-8">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What can we help you with?"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto px-8 py-3 font-inter font-semibold bg-gradient-to-r from-coral to-sunset hover:from-sunset hover:to-coral text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Details & Map */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <Card className="p-6 hover:shadow-medium transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-0 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-ocean" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-inter text-foreground">Email</h3>
                      <p className="text-muted-foreground">support@getvaca.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-medium transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-0 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-ocean" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-inter text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-medium transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-0 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-ocean" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-inter text-foreground">Office</h3>
                      <p className="text-muted-foreground">
                        123 Acropolis Street<br />
                        Athens, Greece 10558
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                  <p className="font-inter">Interactive Map</p>
                  <p className="text-sm">Athens, Greece Office Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sand/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold font-inter text-foreground hover:no-underline hover:text-ocean">
                  How do I make a booking?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground font-inter">
                  Making a booking with Get Vaca is simple. Search for your destination, select your dates and number of guests, browse available properties, and click "Book Now" on your preferred accommodation. You'll be guided through a secure checkout process where you can enter your payment details and confirm your reservation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold font-inter text-foreground hover:no-underline hover:text-ocean">
                  How do I list my property?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground font-inter">
                  To list your property on Get Vaca, click "List Your Property" in the navigation menu. You'll need to create a host account, provide detailed information about your property including photos, amenities, and availability. Our team will review your listing to ensure it meets our quality standards before it goes live.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold font-inter text-foreground hover:no-underline hover:text-ocean">
                  What payment methods are accepted?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground font-inter">
                  We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment system. You'll receive a confirmation email with your booking details and receipt immediately after payment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold font-inter text-foreground hover:no-underline hover:text-ocean">
                  How can I cancel a booking?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground font-inter">
                  Cancellation policies vary by property and are clearly displayed during booking. You can cancel your reservation through your "My Bookings" section or by contacting our support team. Refund eligibility depends on the property's cancellation policy and how far in advance you cancel. We recommend reviewing the cancellation terms before booking.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;