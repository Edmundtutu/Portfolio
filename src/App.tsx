import React, { useState } from 'react';
import { Home, Sparkles, FolderOpen, Phone } from 'lucide-react';
import Hero from './components/Hero';
import TechStackCarousel from './components/TechStackCarousel';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import HireModal from './components/HireModal';
import Tooltip from './components/Tooltip';
import { profile, works, carouselItems, testimonials } from './data/profile';

function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="nav-links">
            <button 
              onClick={() => scrollToSection('hero')}
              className="nav-icon-button"
              title="Home"
            >
              <Home size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('tech-stack')}
              className="nav-icon-button"
              title="Tech Stack"
            >
              <Sparkles size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="nav-icon-button"
              title="Projects"
            >
              <FolderOpen size={20} />
            </button>
            <Tooltip content="+256763977921" position="bottom">
              <button className="nav-icon-button" title="Phone">
                <Phone size={20} />
              </button>
            </Tooltip>
          </div>
          <button 
            className="hire-button"
            onClick={() => setIsHireModalOpen(true)}
          >
            Hire Me
          </button>
        </div>
      </nav>
      
      <main>
        <div className="container">
          <section id="hero">
            <Hero {...profile} />
          </section>
          
          <section id="tech-stack">
            <TechStackCarousel items={carouselItems} />
          </section>
          
          <section id="projects">
            <Works works={works} />
          </section>
          
          <section id="testimonials">
            <Testimonials testimonials={testimonials} />
          </section>
        </div>
      </main>

      <HireModal 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)} 
      />
    </div>
  );
}

export default App;