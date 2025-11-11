import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Slide {
  image: string;
  link: string;
}

interface HeroSliderProps {
  slides?: Slide[];
  onNavigate?: (page: string) => void;
}

export function HeroSlider({
  slides: customSlides,
  onNavigate,
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default slides nếu không có customSlides
  const defaultSlides: Slide[] = [
    {
      image:
        "https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      link: "/products",
    },
    {
      image:
        "https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      link: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      link: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      link: "/products",
    },
  ];

  const slides = customSlides || defaultSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev: any) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev: any) => (prev + 1) % slides.length);
  };

  const handleSlideClick = () => {
    const currentSlideData = slides[currentSlide];
    if (onNavigate && currentSlideData.link) {
      // Convert link to page name
      const page = currentSlideData.link.replace("/", "") || "home";
      onNavigate(page);
    }
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <button
          key={index}
          onClick={handleSlideClick}
          className={`absolute inset-0 transition-opacity duration-1000 cursor-pointer ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <ImageWithFallback
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </button>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
