// Import components
import Navigation from './components/Navigation.js';
import { Projects } from './components/Projects.js';
import { Skills } from './components/Skills.js';
import { Experience } from './components/Experience.js';
import FormValidator from './components/FormValidator.js';
import { Certifications } from './components/Certifications.js';

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize navigation
        const navigation = new Navigation();

        // Initialize main sections with error handling
        const projectsContainer = document.querySelector('.projects-grid');
        if (projectsContainer) {
            const projects = new Projects();
        }

        const skillsContainer = document.querySelector('.skills-grid');
        if (skillsContainer) {
            const skills = new Skills();
        }

        const experienceContainer = document.querySelector('.timeline');
        if (experienceContainer) {
            const experience = new Experience();
        }

        // Initialize form validation
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            new FormValidator(contactForm);
        }

        // Initialize certifications
        const certificationsContainer = document.querySelector('.certifications-grid');
        if (certificationsContainer) {
            const certifications = new Certifications();
        }

        // Log successful initialization
        console.log('All components initialized successfully');
    } catch (error) {
        console.error('Error initializing components:', error);
    }
});
