import React, { useState, useEffect, useRef } from 'react';
import { Testimonial } from './types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const LARGE_SCREEN_WIDTH = 1024;

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const autoPlayRef = useRef<number>();

  // Responsive screen detection
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= LARGE_SCREEN_WIDTH);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play for small screens only
  useEffect(() => {
    if (!isLargeScreen && isAutoPlaying && testimonials.length > 1) {
      autoPlayRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, testimonials.length, isLargeScreen]);

  // Large screens: show all testimonials in a row, no carousel
  if (isLargeScreen) {
    return (
      <div className="testimonial-carousel-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'row', gap: '2rem', justifyContent: 'center', alignItems: 'stretch', flexWrap: 'nowrap', overflowX: 'auto' }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide" style={{ minWidth: 0, flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', background: 'none', boxShadow: 'none', border: 'none' }}>
            <div className="testimonial-role-badge" style={{ marginBottom: '1rem' }}>{testimonial.role}</div>
            <div className="testimonial-content" style={{ textAlign: 'center', background: 'none', boxShadow: 'none', padding: 0 }}>
              <p className="testimonial-feedback" style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
                "{testimonial.feedback}"
              </p>
              <span className="testimonial-name" style={{ fontWeight: 600 }}>— {testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Small screens: carousel effect
  return (
    <div className="testimonial-carousel-container" style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
      <div className="testimonial-carousel-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0 }}>
        <div
          className="testimonial-carousel"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          style={{ flex: 1, minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-slide"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                opacity: index === currentIndex ? 1 : 0,
                zIndex: index === currentIndex ? 1 : 0,
                transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
                pointerEvents: index === currentIndex ? 'auto' : 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 1rem',
                background: 'none',
                boxShadow: 'none',
                border: 'none',
              }}
            >
              <div className="testimonial-role-badge" style={{ marginBottom: '1rem' }}>{testimonial.role}</div>
              <div className="testimonial-content" style={{ textAlign: 'center', background: 'none', boxShadow: 'none', padding: 0 }}>
                <p className="testimonial-feedback" style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
                  "{testimonial.feedback}"
                </p>
                <span className="testimonial-name" style={{ fontWeight: 600 }}>— {testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {testimonials.length > 1 && (
        <div className="testimonial-indicators" style={{ marginTop: '1.5rem' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-indicator${index === currentIndex ? ' active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              style={{ transition: 'background 0.2s' }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;