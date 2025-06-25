import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { Testimonial } from './types';

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => (
  <section className="card testimonials-section">
    <div className="testimonials-header">
      <h2 className="section-title">What others say!!</h2>
      <p className="section-description">
        Some of the digital products that I have built, explore and try it now
      </p>
    </div>
    <TestimonialCarousel testimonials={testimonials} />
  </section>
);

export default Testimonials;