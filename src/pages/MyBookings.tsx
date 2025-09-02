import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  MapPin, 
  Star, 
  Search, 
  Filter,
  Eye,
  Download,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MyBookings = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock bookings data
  const mockBookings = [
    {
      id: "BK789ABC123",
      property: {
        title: "Luxury Cliffside Villa with Infinity Pool",
        location: "Oia, Santorini, Greece",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80",
        rating: 4.9,
        reviews: 127
      },
      checkIn: "2024-03-15",
      checkOut: "2024-03-20",
      guests: 2,
      nights: 5,
      totalPaid: 2700,
      status: "confirmed",
      bookingDate: "2024-02-15"
    },
    {
      id: "BK456DEF789",
      property: {
        title: "Modern Beach House with Private Access",
        location: "Malibu, California",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=400&q=80",
        rating: 4.8,
        reviews: 156
      },
      checkIn: "2024-01-10",
      checkOut: "2024-01-17",
      guests: 4,
      nights: 7,
      totalPaid: 4550,
      status: "completed",
      bookingDate: "2023-12-20"
    },
    {
      id: "BK123GHI456",
      property: {
        title: "Tuscan Countryside Villa Estate",
        location: "Tuscany, Italy",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80",
        rating: 4.7,
        reviews: 112
      },
      checkIn: "2024-06-20",
      checkOut: "2024-06-27",
      guests: 6,
      nights: 7,
      totalPaid: 3150,
      status: "upcoming",
      bookingDate: "2024-02-28"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-4 w-4 text-ocean" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "upcoming":
        return <Clock className="h-4 w-4 text-coral" />;
      case "cancelled":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      confirmed: "bg-ocean/10 text-ocean",
      completed: "bg-green-100 text-green-700",
      upcoming: "bg-coral/10 text-coral",
      cancelled: "bg-destructive/10 text-destructive"
    };

    return (
      <Badge className={variants[status as keyof typeof variants] || "bg-muted text-muted-foreground"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredBookings = mockBookings.filter(booking => {
    const matchesSearch = booking.property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === "all" || booking.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-sand/30">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">My Bookings</h1>
            <p className="text-xl text-muted-foreground">
              Manage your past and upcoming reservations
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8 border-ocean/20">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search by property name, location, or booking ID..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant={filterStatus === "all" ? "default" : "outline"}
                    onClick={() => setFilterStatus("all")}
                    className="whitespace-nowrap"
                  >
                    All Bookings
                  </Button>
                  <Button
                    variant={filterStatus === "upcoming" ? "default" : "outline"}
                    onClick={() => setFilterStatus("upcoming")}
                    className="whitespace-nowrap"
                  >
                    Upcoming
                  </Button>
                  <Button
                    variant={filterStatus === "completed" ? "default" : "outline"}
                    onClick={() => setFilterStatus("completed")}
                    className="whitespace-nowrap"
                  >
                    Completed
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bookings List */}
          <div className="space-y-6">
            {filteredBookings.length === 0 ? (
              <Card className="border-ocean/20">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No bookings found</h3>
                  <p className="text-muted-foreground mb-6">
                    {searchQuery || filterStatus !== "all" 
                      ? "Try adjusting your search or filter criteria."
                      : "You haven't made any bookings yet. Start planning your next adventure!"
                    }
                  </p>
                  <Button 
                    onClick={() => navigate("/")}
                    className="bg-ocean hover:bg-ocean-light text-white"
                  >
                    Explore Properties
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredBookings.map((booking) => (
                <Card key={booking.id} className="border-ocean/20 shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Property Image */}
                      <div className="lg:w-48 flex-shrink-0">
                        <img
                          src={booking.property.image}
                          alt={booking.property.title}
                          className="w-full h-48 lg:h-32 object-cover rounded-lg shadow-md"
                        />
                      </div>

                      {/* Booking Details */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {booking.property.title}
                            </h3>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{booking.property.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                              <span className="font-medium">{booking.property.rating}</span>
                              <span className="text-muted-foreground text-sm ml-1">({booking.property.reviews})</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {getStatusIcon(booking.status)}
                            {getStatusBadge(booking.status)}
                          </div>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground block mb-1">Booking ID</span>
                            <span className="font-medium">{booking.id}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block mb-1">Check-in</span>
                            <span className="font-medium">{formatDate(booking.checkIn)}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block mb-1">Check-out</span>
                            <span className="font-medium">{formatDate(booking.checkOut)}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block mb-1">Total Paid</span>
                            <span className="font-medium text-ocean">${booking.totalPaid}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-ocean text-ocean hover:bg-ocean hover:text-white"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          
                          <Button
                            variant="outline"
                            size="sm"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Receipt
                          </Button>
                          
                          {booking.status === "upcoming" && (
                            <Button
                              variant="outline"
                              size="sm"
                            >
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Contact Host
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Summary Stats */}
          {filteredBookings.length > 0 && (
            <Card className="mt-8 border-ocean/20">
              <CardHeader>
                <CardTitle className="text-ocean">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-ocean mb-2">
                      {mockBookings.length}
                    </div>
                    <div className="text-muted-foreground">Total Bookings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-coral mb-2">
                      {mockBookings.filter(b => b.status === "upcoming").length}
                    </div>
                    <div className="text-muted-foreground">Upcoming Trips</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sunset mb-2">
                      ${mockBookings.reduce((sum, b) => sum + b.totalPaid, 0).toLocaleString()}
                    </div>
                    <div className="text-muted-foreground">Total Spent</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyBookings;