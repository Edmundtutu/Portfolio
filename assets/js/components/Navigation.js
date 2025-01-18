export default class Navigation {
    constructor() {
        this.burger = document.querySelector('.burger');
        this.nav = document.querySelector('.nav-links');
        this.navLinks = document.querySelectorAll('.nav-links li');
        this.themeToggle = document.querySelector('.theme-toggle');
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Burger menu click
        this.burger.addEventListener('click', () => {
            this.toggleNav();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.nav.contains(e.target) && !this.burger.contains(e.target) && this.nav.classList.contains('active')) {
                this.toggleNav();
            }
        });

        // Close menu when clicking a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.nav.classList.contains('active')) {
                    this.toggleNav();
                }
            });
        });

        // Theme toggle
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    toggleNav() {
        // Toggle burger menu animation
        this.burger.classList.toggle('active');
        
        // Toggle navigation menu
        this.nav.classList.toggle('active');

        // Animate links
        this.navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Toggle body scroll
        document.body.style.overflow = this.nav.classList.contains('active') ? 'hidden' : '';
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const icon = this.themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}
