import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import blogPostHero from "@/assets/blog-post-hero.jpg";
import authorMaria from "@/assets/author-maria.jpg";
import blogRelated1 from "@/assets/blog-related-1.jpg";
import blogRelated2 from "@/assets/blog-related-2.jpg";
import blogRelated3 from "@/assets/blog-related-3.jpg";

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    comment: ""
  });

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Comment Submitted!",
      description: "Thank you for your comment. It will be reviewed before publishing.",
    });
    
    setCommentData({
      name: "",
      email: "",
      comment: ""
    });
  };

  const handleShare = (platform: string) => {
    toast({
      title: "Share link copied!",
      description: `Ready to share on ${platform}`,
    });
  };

  const relatedArticles = [
    {
      id: 2,
      title: "Top 10 Luxury Villas in Santorini",
      image: blogRelated1,
      category: "Aegean"
    },
    {
      id: 3,
      title: "Best Traditional Restaurants in Greece",
      image: blogRelated2,
      category: "Greece"
    },
    {
      id: 4,
      title: "Hidden Beaches You Must Visit",
      image: blogRelated3,
      category: "Tips & Guides"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blogPostHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="relative z-10 w-full px-6 pb-16">
          <div className="container mx-auto max-w-4xl">
            <Badge className="mb-4 bg-ocean text-white">
              Aegean
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
              The Ultimate Guide to Santorini: Hidden Gems and Must-See Spots
            </h1>
            <div className="flex items-center text-white/90 space-x-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="font-inter">Maria Komnenos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="font-inter">March 15, 2024</span>
              </div>
              <span className="font-inter">8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              <div className="font-inter text-muted-foreground leading-relaxed">
                
                <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-6">Introduction</h2>
                <p className="mb-6">
                  Santorini, the crown jewel of the Aegean Sea, has captivated travelers for decades with its iconic blue-domed churches, dramatic cliff-side villages, and breathtaking sunsets. While many visitors stick to the well-trodden paths of Oia and Fira, this enchanting island holds countless secrets waiting to be discovered by the adventurous traveler.
                </p>
                <p className="mb-8">
                  In this comprehensive guide, we'll take you beyond the tourist crowds to uncover Santorini's hidden gems, from secluded beaches accessible only by boat to family-run tavernas where locals gather for authentic island cuisine. Whether you're planning your first visit or returning to explore deeper, this guide will transform your Santorini experience from ordinary to extraordinary.
                </p>

                <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-6">Highlights of the Destination</h2>
                <p className="mb-4">
                  Santorini offers an incredible diversity of experiences that extend far beyond its famous sunsets. Here are the must-see highlights that showcase the island's unique character:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li><strong>Akrotiri Archaeological Site:</strong> Explore the remarkably preserved Minoan city, often called the "Pompeii of the Aegean"</li>
                  <li><strong>Red Beach (Kokkini Paralia):</strong> Marvel at the dramatic red volcanic cliffs that create one of the world's most unique beaches</li>
                  <li><strong>Pyrgos Village:</strong> Discover traditional Cycladic architecture in this charming hilltop settlement</li>
                  <li><strong>Amoudi Bay:</strong> Experience cliff diving and fresh seafood in this picturesque fishing harbor</li>
                  <li><strong>Wine Tasting Tours:</strong> Sample Assyrtiko wines at family-owned wineries like Santo Wines and Venetsanos</li>
                </ul>
                <p className="mb-8">
                  Each of these destinations offers a different perspective on Santorini's rich history and natural beauty, providing photo opportunities and memories that will last a lifetime.
                </p>

                <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-6">Tips for Travelers</h2>
                <p className="mb-4">
                  To make the most of your Santorini adventure, consider these insider tips from locals and seasoned travelers:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li><strong>Best Time to Visit:</strong> April-May and September-October offer perfect weather with fewer crowds</li>
                  <li><strong>Transportation:</strong> Rent an ATV or small car to access hidden beaches and villages</li>
                  <li><strong>Sunset Viewing:</strong> Skip crowded Oia and head to Imerovigli for equally stunning views</li>
                  <li><strong>Dining:</strong> Make reservations at least 24 hours in advance, especially for sunset dinner spots</li>
                  <li><strong>Photography:</strong> Golden hour (1 hour before sunset) provides the most magical lighting</li>
                  <li><strong>Swimming:</strong> Bring water shoes for the volcanic beaches with rocky shores</li>
                </ul>
                <p className="mb-8">
                  Remember that Santorini's beauty is fragile – always respect local customs, dispose of waste properly, and support local businesses to help preserve this paradise for future generations.
                </p>

                <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-6">Why Choose Get Vaca</h2>
                <p className="mb-6">
                  Planning the perfect Santorini getaway requires local expertise and trusted connections. Get Vaca has cultivated relationships with the island's finest properties, from boutique cave hotels carved into the volcanic cliffs to luxury villas with private infinity pools overlooking the caldera.
                </p>
                <p className="mb-6">
                  Our curated selection ensures that every accommodation meets our rigorous standards for comfort, authenticity, and breathtaking views. Whether you're seeking a romantic retreat for two or a spacious villa for a group celebration, our local experts can guide you to the perfect home base for your Santorini adventure.
                </p>
                <p className="mb-8">
                  With Get Vaca, you're not just booking accommodation – you're gaining access to insider knowledge, personalized recommendations, and 24/7 support to ensure your Santorini experience exceeds every expectation. Let us help you create memories that will last a lifetime in one of the world's most magical destinations.
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Sharing Section */}
              <Card className="p-6 border-0 bg-white">
                <h3 className="text-lg font-bold font-playfair text-foreground mb-4 flex items-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Article
                </h3>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("Facebook")}
                    className="flex-1 text-blue-600 border-blue-200 hover:bg-blue-50"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("Twitter")}
                    className="flex-1 text-sky-500 border-sky-200 hover:bg-sky-50"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("LinkedIn")}
                    className="flex-1 text-blue-700 border-blue-200 hover:bg-blue-50"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </Card>

              {/* Quick Navigation */}
              <Card className="p-6 border-0 bg-white">
                <h3 className="text-lg font-bold font-playfair text-foreground mb-4">Jump to Section</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-sm text-ocean hover:text-ocean-light transition-colors">
                    Introduction
                  </a>
                  <a href="#highlights" className="block text-sm text-ocean hover:text-ocean-light transition-colors">
                    Highlights of the Destination
                  </a>
                  <a href="#tips" className="block text-sm text-ocean hover:text-ocean-light transition-colors">
                    Tips for Travelers
                  </a>
                  <a href="#getvaca" className="block text-sm text-ocean hover:text-ocean-light transition-colors">
                    Why Choose Get Vaca
                  </a>
                </nav>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Author Box */}
      <section className="py-12 bg-sand/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="p-8 border-0 bg-white">
            <div className="flex items-start space-x-6">
              <img
                src={authorMaria}
                alt="Maria Komnenos"
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold font-playfair text-foreground mb-2">
                  Maria Komnenos
                </h3>
                <p className="text-coral font-inter font-medium mb-3">
                  Travel Writer & Local Expert
                </p>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Maria is a native of the Greek islands with over a decade of experience in travel writing. She specializes in uncovering hidden gems and authentic experiences across the Aegean and Ionian seas. When she's not exploring remote beaches or interviewing local fishermen, you can find her sharing stories at traditional tavernas with fellow travelers.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold font-playfair text-foreground mb-8 flex items-center">
            <MessageCircle className="w-8 h-8 mr-3" />
            Leave a Comment
          </h2>
          
          <Card className="p-8 border-0 bg-white">
            <form onSubmit={handleCommentSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={commentData.name}
                    onChange={handleCommentChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={commentData.email}
                    onChange={handleCommentChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="comment" className="text-sm font-medium text-foreground mb-2 block">
                  Comment *
                </Label>
                <Textarea
                  id="comment"
                  name="comment"
                  value={commentData.comment}
                  onChange={handleCommentChange}
                  placeholder="Share your thoughts about this article..."
                  required
                  className="min-h-[120px]"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="px-8 py-3 font-inter font-semibold bg-gradient-to-r from-coral to-sunset hover:from-sunset hover:to-coral text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Post Comment
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-sand/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold font-playfair text-foreground text-center mb-12">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {relatedArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-medium transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-ocean text-white">
                    {article.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-playfair text-foreground group-hover:text-ocean transition-colors mb-3">
                    {article.title}
                  </h3>
                  <Link to={`/blog/${article.id}`}>
                    <Button variant="ghost" className="text-ocean hover:text-ocean hover:bg-ocean/10 p-0 h-auto font-medium">
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 font-inter font-medium border-ocean text-ocean hover:bg-ocean hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;