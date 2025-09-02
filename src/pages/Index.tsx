import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import PopularDestinations from "@/components/PopularDestinations";
import HowItWorks from "@/components/HowItWorks";
import BlogTeaser from "@/components/BlogTeaser";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeatureCards />
      <PopularDestinations />
      <HowItWorks />
      <BlogTeaser />
      <Footer />
    </div>
  );
};

export default Index;
