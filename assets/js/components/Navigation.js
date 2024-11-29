class Navigation {
    constructor() {
        this.burger = document.querySelector('.burger');
        this.nav = document.querySelector('.nav-links');
        this.navLinks = document.querySelectorAll('.nav-links li');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.burger.addEventListener('click', () => this.toggleNav());
    }

    toggleNav() {
        this.nav.classList.toggle('nav-active');
        this.burger.classList.toggle('toggle');

        // Animate links
        this.navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
}); 

export default Navigation;
