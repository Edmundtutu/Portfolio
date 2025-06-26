import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Work } from './types';

type WorksProps = {
  works: (Work & { visitUrl?: string })[];
};

const Works: React.FC<WorksProps> = ({ works }) => (
  <section className="card">
    <h2 className="section-title">My Works</h2>
    <p className="section-description">
      Discover what i have go'en my hands onto. My work captures solutions to multiple real world problems in Health, Education and DevSecOps.
    </p>
    <div className="work-list">
      {works.map((work, index) => (
        <div key={index} className="work-item">
          <div className="work-info">
            <img src={work.icon} alt={work.title} className="work-icon" />
            <div className="work-details">
              <h3>{work.title}</h3>
              <p>{work.subtitle}</p>
            </div>
          </div>
          {work.visitUrl ? (
            <a
              href={work.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit site"
              style={{ display: 'flex', alignItems: 'center' }}
              onClick={e => e.stopPropagation()}
            >
              <ExternalLink size={20} color="#9ca3af" />
            </a>
          ) : (
            <ExternalLink size={20} color="#9ca3af" style={{ opacity: 0.4, cursor: 'not-allowed' }} />
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Works; 