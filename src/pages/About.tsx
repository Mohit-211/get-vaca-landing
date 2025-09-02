import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Heart, Zap, Users, Award, Globe } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutCta from "@/assets/about-cta.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light max-w-2xl mx-auto leading-relaxed">
            Your gateway to extraordinary experiences
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={aboutTeam} 
                alt="Our team working together" 
                className="w-full h-auto rounded-2xl shadow-medium"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-8">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-inter leading-relaxed">
                <p>
                  Get Vaca is more than just a booking platform – we're your trusted partner in creating unforgettable travel experiences. Born from a passion for exploration and a vision for seamless travel, we connect adventurous souls with the world's most stunning accommodations.
                </p>
                <p>
                  From luxury beachfront villas to exclusive yacht charters, from boutique hotels to hidden gems, we curate a diverse portfolio of properties that cater to every type of traveler. Our platform combines cutting-edge technology with personalized service to ensure your journey is as smooth as it is memorable.
                </p>
                <p>
                  We believe that great travel experiences should be accessible, secure, and inspiring. That's why we've built a user-friendly platform that prioritizes safety, transparency, and exceptional customer service, making it easy for you to discover and book your perfect getaway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-sand/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-8">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-inter max-w-4xl mx-auto leading-relaxed">
            We believe travel should be simple, inspiring, and accessible. Our mission is to empower travelers and hosts with a seamless platform that transforms the way people discover, book, and experience extraordinary destinations around the world.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground text-center mb-16">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-6 bg-ocean/10 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-ocean" />
                </div>
                <h3 className="text-2xl font-bold font-playfair text-foreground mb-4">
                  Simplicity
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Easy to use, intuitive booking experience that gets you from search to confirmation in just a few clicks. No complexity, just results.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-6 bg-ocean/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-ocean" />
                </div>
                <h3 className="text-2xl font-bold font-playfair text-foreground mb-4">
                  Trust
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Secure payments, verified properties, and transparent pricing. Your safety and peace of mind are our top priorities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-6 bg-ocean/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-ocean" />
                </div>
                <h3 className="text-2xl font-bold font-playfair text-foreground mb-4">
                  Inspiration
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Unique stays and experiences that spark wanderlust. We curate extraordinary properties that create lasting memories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-sand/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground text-center mb-16">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-24 h-24 mx-auto mb-4 bg-ocean/10 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-ocean" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-foreground mb-2">
                  Sarah Chen
                </h3>
                <p className="text-coral font-inter font-medium mb-3">CEO & Founder</p>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  Former travel executive with 15 years in hospitality. Passionate about connecting people with unique experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-24 h-24 mx-auto mb-4 bg-ocean/10 rounded-full flex items-center justify-center">
                  <Globe className="w-12 h-12 text-ocean" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-foreground mb-2">
                  Marcus Rodriguez
                </h3>
                <p className="text-coral font-inter font-medium mb-3">CTO</p>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  Tech innovator building scalable platforms. Expertise in AI, machine learning, and user experience design.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-24 h-24 mx-auto mb-4 bg-ocean/10 rounded-full flex items-center justify-center">
                  <Award className="w-12 h-12 text-ocean" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-foreground mb-2">
                  Emma Thompson
                </h3>
                <p className="text-coral font-inter font-medium mb-3">Head of Operations</p>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  Operations specialist ensuring smooth experiences for travelers and hosts worldwide. Detail-oriented and customer-focused.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-24 h-24 mx-auto mb-4 bg-ocean/10 rounded-full flex items-center justify-center">
                  <Heart className="w-12 h-12 text-ocean" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-foreground mb-2">
                  David Kim
                </h3>
                <p className="text-coral font-inter font-medium mb-3">Head of Design</p>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  Creative visionary crafting beautiful, intuitive experiences. Believes great design should be both functional and inspiring.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="font-inter font-medium border-ocean text-ocean hover:bg-ocean hover:text-white transition-all duration-300"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutCta})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-8">
            Ready for your next adventure?
          </h2>
          <p className="text-xl text-white/90 font-inter mb-12 max-w-2xl mx-auto">
            Join thousands of travelers who trust Get Vaca to create their perfect getaway.
          </p>
          <Link to="/">
            <Button 
              size="lg"
              className="px-12 py-4 text-lg font-inter font-semibold bg-gradient-to-r from-coral to-sunset hover:from-sunset hover:to-coral text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Exploring
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;