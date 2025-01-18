import skills from '../data/skills.js';

export class Skills {
    constructor() {
        this.skills = skills;
        this.skillsGrid = document.querySelector('.skills-grid');
        this.init();
    }

    createSkillItem(skill) {
        return `
            <div class="skill-item">
                <div class="skill-name">${skill}</div>
            </div>
        `;
    }

    render() {
        const skillsHTML = this.skills
            .map(skill => this.createSkillItem(skill))
            .join('');
        
        this.skillsGrid.innerHTML = skillsHTML;
    }

    init() {
        this.render();
    }
} 