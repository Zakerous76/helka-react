import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectsSliderImages } from "../constants";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsSliderImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [projectsSliderImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsSliderImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    let intervalId;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    let timeoutId;

    if (!isAutoPlaying) {
      timeoutId = setTimeout(() => {
        resumeAutoPlay();
      }, 5000); // Resume auto-play after 5 seconds of inactivity
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isAutoPlaying]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[36px] shadow-md overflow-hidden ">
      <div
        className="relative"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden my-transition">
          <img
            src={projectsSliderImages[currentIndex].src}
            alt={projectsSliderImages[currentIndex].alt}
            className="w-full h-full object-cover my-transition"
          />
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
          onClick={() => {
            prevSlide();
            pauseAutoPlay();
          }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
          onClick={() => {
            nextSlide();
            pauseAutoPlay();
          }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Title and navigation dots */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm">
          <h2 className="text-white text-2xl font-bold text-center mb-3 my-transition">
            {projectsSliderImages[currentIndex].title}
          </h2>
          <div className="flex justify-center gap-4">
            {projectsSliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  pauseAutoPlay();
                }}
                className={`w-3 h-3 rounded-full my-transition ${
                  currentIndex === index
                    ? "bg-white"
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
