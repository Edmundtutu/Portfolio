import React, { useState } from 'react';
import { MessageSquare, Copy } from 'lucide-react';

type HeroProps = {
  name: string;
  role: string;
  description: string;
  image: string;
  email: string;
};

const Hero: React.FC<HeroProps> = ({ name, role, description, image, email }) => {
  const [copied, setCopied] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/256753977921', '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('edmundtutuma@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="card">
      <div className="hero">
        <div className="hero-content">
          <div className="role">{role}</div>
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
          <div className="hero-buttons">
            <button className="button button-primary" onClick={handleWhatsApp}>
              <MessageSquare size={20} />
              Let's talk
            </button>
            <button className="button button-secondary" onClick={handleCopy}>
              <Copy size={20} />
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>
        <img
          src={image}
          alt="Profile"
          className="profile-image"
        />
      </div>
    </section>
  );
};

export default Hero; 