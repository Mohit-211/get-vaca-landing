import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import blogHero from "@/assets/blog-hero.jpg";
import blogSantorini from "@/assets/blog-santorini.jpg";
import blogYacht from "@/assets/blog-yacht.jpg";
import blogMykonos from "@/assets/blog-mykonos.jpg";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  
  const categories = ["All", "Greece", "Ionian", "Aegean", "Yachting", "Tips & Guides"];
  
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Santorini: Hidden Gems and Must-See Spots",
      excerpt: "Discover the breathtaking beauty of Santorini beyond the crowds. From secret viewpoints to authentic local tavernas, explore the island like a true insider.",
      image: blogSantorini,
      category: "Aegean",
      author: "Maria Komnenos",
      date: "March 15, 2024",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Luxury Yacht Charter: Your Complete Guide to the Greek Islands",
      excerpt: "Everything you need to know about chartering a yacht in Greece. From choosing the right vessel to planning your perfect itinerary across the islands.",
      image: blogYacht,
      category: "Yachting",
      author: "Captain Andreas",
      date: "March 12, 2024",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Mykonos After Dark: The Island's Best Nightlife Experiences",
      excerpt: "From beach clubs to rooftop bars, discover where locals and celebrities alike party under the Aegean stars on this legendary island.",
      image: blogMykonos,
      category: "Aegean",
      author: "Dimitris Stavros",
      date: "March 10, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Island Hopping in the Ionian: A 7-Day Perfect Itinerary",
      excerpt: "Explore Corfu, Kefalonia, and Zakynthos with our carefully crafted week-long journey through the emerald waters of the Ionian Sea.",
      image: blogSantorini,
      category: "Ionian",
      author: "Elena Papadaki",
      date: "March 8, 2024",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Packing Smart: Essential Items for Your Greek Island Vacation",
      excerpt: "Don't overpack or forget the essentials. Our comprehensive packing guide ensures you're prepared for sun, sea, and everything in between.",
      image: blogYacht,
      category: "Tips & Guides",
      author: "Travel Team",
      date: "March 5, 2024",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Traditional Greek Cuisine: A Foodie's Guide to Island Delicacies",
      excerpt: "From fresh seafood to local wines, discover the authentic flavors that make Greek island cuisine a feast for all the senses.",
      image: blogMykonos,
      category: "Greece",
      author: "Chef Kostas",
      date: "March 2, 2024",
      readTime: "9 min read"
    }
  ];

  const popularPosts = [
    { title: "Best Time to Visit Greek Islands", category: "Tips & Guides" },
    { title: "Luxury Villas vs Hotels: Which to Choose", category: "Tips & Guides" },
    { title: "Swimming in the Blue Caves of Zakynthos", category: "Ionian" }
  ];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blogHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
            Travel Stories & Inspiration
          </h1>
          <p className="text-lg md:text-xl font-inter font-light max-w-2xl mx-auto leading-relaxed">
            Discover destinations, tips, and guides for your next getaway
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-ocean text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {paginatedPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-medium transition-all duration-300 border-0 bg-white overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-ocean text-white">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold font-playfair text-foreground mb-3 group-hover:text-ocean transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-inter mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="ghost" className="text-ocean hover:text-ocean hover:bg-ocean/10 p-0 h-auto font-medium">
                          Read More →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
                
                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 ${currentPage === page ? "bg-ocean text-white" : ""}`}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card className="p-6 border-0 bg-white">
              <CardHeader className="p-0 mb-4">
                <h3 className="text-lg font-bold font-playfair text-foreground">Search</h3>
              </CardHeader>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
            </Card>

            {/* Popular Posts */}
            <Card className="p-6 border-0 bg-white">
              <CardHeader className="p-0 mb-6">
                <h3 className="text-lg font-bold font-playfair text-foreground">Popular Posts</h3>
              </CardHeader>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="w-12 h-12 bg-ocean/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-ocean font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium font-inter text-foreground group-hover:text-ocean transition-colors text-sm leading-snug">
                        {post.title}
                      </h4>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card className="p-6 border-0 bg-gradient-to-br from-ocean/5 to-coral/5">
              <CardHeader className="p-0 mb-4">
                <h3 className="text-lg font-bold font-playfair text-foreground">Newsletter</h3>
                <p className="text-sm text-muted-foreground font-inter">
                  Get the latest travel tips and destination guides delivered to your inbox.
                </p>
              </CardHeader>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white"
                />
                <Button className="w-full bg-gradient-to-r from-coral to-sunset hover:from-sunset hover:to-coral text-white font-medium">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;