import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ projectsSliderImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(""); // Track slide direction

  const nextSlide = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsSliderImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsSliderImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const pauseAutoPlay = () => setIsAutoPlaying(false);

  const resumeAutoPlay = () => setIsAutoPlaying(true);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[36px] shadow-md overflow-hidden ">
      <div
        className="relative"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        {/* Image container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <div>
            {projectsSliderImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute w-full h-full object-cover${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                } transition-opacity duration-700`}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Title and navigation dots */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm">
          <h2 className="text-white text-2xl font-bold text-center mb-3">
            {projectsSliderImages[currentIndex].title}
          </h2>
          <div className="flex justify-center gap-4">
            {projectsSliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
