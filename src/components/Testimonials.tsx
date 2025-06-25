import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { Testimonial } from './types';

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => (
  <section className="card testimonials-section">
    <div className="testimonials-header">
      <h2 className="section-title">See what others say!!</h2>
    </div>
    <TestimonialCarousel testimonials={testimonials} />
  </section>
);

export default Testimonials;