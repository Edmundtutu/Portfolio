import { experiences } from '../data/experiences.js';

export class Experience {
    constructor() {
        this.experiences = experiences;
        this.timelineContainer = document.querySelector('.timeline');
        this.init();
    }

    createExperienceItem(experience, index) {
        const delay = index * 100;
        return `
            <div class="timeline-item" data-aos="fade-right" data-aos-delay="${delay}">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>${experience.title}</h3>
                    <p class="company">${experience.company}</p>
                    <p class="date">${experience.period}</p>
                    <ul class="responsibilities">
                        ${experience.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    render() {
        const experienceHTML = this.experiences
            .map((experience, index) => this.createExperienceItem(experience, index))
            .join('');
        
        this.timelineContainer.innerHTML = experienceHTML;
    }

    init() {
        this.render();
    }
} 