import projects from './data/projects.js';
import skills from './data/skills.js';
import { fadeIn, fadeOut } from './utils/animations.js';
import { debounce, throttle } from './utils/helpers.js';
import FormValidator from './components/FormValidator.js';
import Navigation from './components/Navigation.js';
import Notification from './components/Notification.js';

// Populate Projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="./.${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">View Project</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Populate Skills
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-name">${skill}</div>
        `;
        skillsGrid.appendChild(skillItem);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        new FormValidator(contactForm);
    }
    populateProjects();
    populateSkills();
});

export default Navigation;
