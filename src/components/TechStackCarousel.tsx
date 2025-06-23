import React, { useState } from 'react';
import Carousel from './Carousel';
import { CarouselItem } from './types';

type TechStackCarouselProps = {
  items: CarouselItem[];
};

const TechStackCarousel: React.FC<TechStackCarouselProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(items[0] || null);

  const handleSelectItem = (item: CarouselItem) => {
    setSelectedItem(item);
  };

  return (
    <section className="card carousel-card">
      <h2 className="section-title">Tech Stack</h2>
      <div className="techstack-row">
        <div className="carousel-demo compact">
          <Carousel 
            items={items}
            radius={120}
            autoRotate={true}
            autoRotateSpeed={4000}
            onSelectItem={handleSelectItem}
          />
        </div>
        <div className="techstack-details-list">
          {items.map((item) => (
            <div
              key={item.id}
              className={`techstack-detail-item${selectedItem && selectedItem.id === item.id ? ' selected' : ''}`}
              onClick={() => handleSelectItem(item)}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackCarousel; 