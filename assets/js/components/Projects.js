import projects from '../data/projects.js';

export class Projects {
    constructor() {
        this.projects = projects;
        this.projectsGrid = document.querySelector('.projects-grid');
        this.init();
    }

    createProjectCard(project) {
        return `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
                </div>
            </div>
        `;
    }

    render() {
        const projectsHTML = this.projects
            .map(project => this.createProjectCard(project))
            .join('');
        
        this.projectsGrid.innerHTML = projectsHTML;
    }

    init() {
        this.render();
    }
} 