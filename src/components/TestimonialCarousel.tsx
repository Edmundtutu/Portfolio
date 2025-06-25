import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from './types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Fixed items per view - always show 1 item to avoid responsive issues
  const itemsPerView = 1;

  // Auto-play functionality with slower speed
  useEffect(() => {
    if (isAutoPlaying && testimonials.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = testimonials.length - 1;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 6000); // Increased from 4000ms to 6000ms for slower speed
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - 1;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 8000); // Longer pause after manual interaction
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - 1;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 8000); // Longer pause after manual interaction
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Longer pause after manual interaction
  };

  const canShowControls = testimonials.length > 1;

  return (
    <div className="testimonial-carousel-container">
      <div className="testimonial-carousel-wrapper">
        {canShowControls && (
          <button
            className="testimonial-nav-button testimonial-nav-prev"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div 
          ref={carouselRef}
          className="testimonial-carousel"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div 
            className="testimonial-carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${testimonials.length * 100}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-carousel-item"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="testimonial-card">
                  <div className="testimonial-role-badge">
                    {testimonial.role}
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                    <span className="testimonial-name">— {testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {canShowControls && (
          <button
            className="testimonial-nav-button testimonial-nav-next"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {canShowControls && (
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;