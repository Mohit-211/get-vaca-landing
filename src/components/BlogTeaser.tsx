import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogTeaser = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "10 Hidden Gems in the Greek Islands",
      excerpt: "Discover secluded beaches, charming villages, and luxury accommodations away from the crowds in these pristine Greek island destinations.",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=600&q=80",
      readTime: "5 min read",
      category: "Destinations"
    },
    {
      id: 2,
      title: "The Art of Luxury Yacht Chartering",
      excerpt: "Everything you need to know about chartering a private yacht, from selecting the perfect vessel to planning your dream itinerary.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      readTime: "8 min read",
      category: "Yachts"
    },
    {
      id: 3,
      title: "Villa vs Hotel: Making the Right Choice",
      excerpt: "Compare the benefits of private villa rentals versus luxury hotels to help you choose the perfect accommodation for your next getaway.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
      readTime: "6 min read",
      category: "Travel Tips"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Travel Stories & Inspiration
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
            Expert insights, travel guides, and inspiring stories from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="group hover:shadow-2xl hover:shadow-coral/10 transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden bg-white cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-ocean font-inter font-medium text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-inter mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-3 group-hover:text-ocean transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-ocean group-hover:text-coral transition-colors font-inter font-medium text-sm">
                  <span>Read More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate("/blog")}
            variant="outline"
            size="lg"
            className="border-2 border-ocean text-ocean hover:bg-ocean hover:text-white font-inter font-medium px-8 py-3 rounded-full transition-all duration-300"
          >
            Visit Our Blog
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;