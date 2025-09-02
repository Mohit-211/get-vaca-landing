import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageCarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel = ({ images, title }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Main Carousel */}
      <div className="relative w-full h-96 md:h-[500px] mb-8 rounded-2xl overflow-hidden group">
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </Button>
          </>
        )}

        {/* Show All Photos Button */}
        <Dialog open={showAllPhotos} onOpenChange={setShowAllPhotos}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="absolute bottom-4 right-4 bg-white/90 hover:bg-white backdrop-blur-sm"
            >
              <Grid3X3 className="h-4 w-4 mr-2" />
              Show all photos
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => {
                    goToImage(index);
                    setShowAllPhotos(false);
                  }}
                />
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail Grid for Desktop */}
      <div className="hidden md:grid grid-cols-5 gap-2 mb-8">
        {images.slice(0, 5).map((image, index) => (
          <Card
            key={index}
            className={`cursor-pointer overflow-hidden transition-all ${
              index === currentIndex ? "ring-2 ring-ocean" : "hover:ring-1 hover:ring-muted"
            }`}
            onClick={() => goToImage(index)}
          >
            <img
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              className="w-full h-20 object-cover"
            />
          </Card>
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;