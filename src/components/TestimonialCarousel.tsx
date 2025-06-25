import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from './types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1400) {
        setItemsPerView(3);
      } else if (width >= 1024) {
        setItemsPerView(2);
      } else if (width >= 640) {
        setItemsPerView(1);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && testimonials.length > itemsPerView) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = testimonials.length - itemsPerView;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length, itemsPerView]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - itemsPerView;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const maxIndex = testimonials.length - itemsPerView;
  const canShowControls = testimonials.length > itemsPerView;

  return (
    <div className="testimonial-carousel-container">
      <div className="testimonial-carousel-wrapper">
        {canShowControls && (
          <button
            className="testimonial-nav-button testimonial-nav-prev"
            onClick={goToPrevious}
            aria-label="Previous testimonials"
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
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(testimonials.length / itemsPerView) * 100}%`
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
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {canShowControls && (
        <div className="testimonial-indicators">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`testimonial-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;