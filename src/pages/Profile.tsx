import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { User } from "lucide-react";

const Profile = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-ocean/5 via-background to-coral/5">
      {/* Navbar */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 pt-28 pb-20 container mx-auto px-6">
        <h1 className="text-4xl font-bold font-playfair text-ocean mb-10 text-center">
          My Profile
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Profile Card */}
          <Card className="col-span-1 shadow-lg border-0">
            <CardHeader className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-ocean/10 flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-ocean" />
              </div>
              <CardTitle className="text-2xl font-semibold">John Doe</CardTitle>
              <p className="text-muted-foreground text-sm">demo@getvaca.com</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-3">
              <Button className="w-full bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-ocean text-white">
                Edit Profile Picture
              </Button>
              <Button
                variant="outline"
                className="w-full border-ocean text-ocean hover:bg-ocean hover:text-white"
                onClick={logout}
              >
                Logout
              </Button>
            </CardContent>
          </Card>

          {/* Right: Details Form */}
          <Card className="col-span-2 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-ocean">
                Account Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="demo@getvaca.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+91 9876543210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <Button className="bg-gradient-to-r from-coral to-sunset hover:from-sunset hover:to-coral text-white">
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
