import certifications from '../data/certifications.js';

export class Certifications {
    constructor() {
        this.certifications = certifications;
        this.certificationsContainer = document.querySelector('.certifications-grid');
        this.init();
    }

    createCertificationCard(certification) {
        return `
            <div class="certification-card">
                <div class="card-content">
                    <div class="certificate-header">
                        <div class="certificate-title">
                            <h3>${certification.title}</h3>
                            <span class="issuer">
                                <i class="fas fa-building"></i>
                                ${certification.issuer}
                            </span>
                        </div>
                        <div class="certificate-date">
                            <i class="fas fa-calendar"></i>
                            ${certification.issueDate}
                        </div>
                    </div>
                    
                    <div class="certificate-body">
                        <div class="certificate-image">
                            <img src="${certification.image}" alt="${certification.title}">
                        </div>
                        
                        <div class="certificate-actions">
                            <a href="${certification.credlyUrl}" class="action-button view-btn" target="_blank">
                                <i class="fas fa-external-link-alt"></i>
                                View Certificate
                            </a>
                            <button class="action-button share-btn" data-url="${certification.credlyUrl}">
                                <i class="fas fa-share-alt"></i>
                                Share
                            </button>
                            <button class="action-button copy-btn" data-url="${certification.credlyUrl}">
                                <i class="fas fa-copy"></i>
                                Copy Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            const copyBtn = document.querySelector('.copy-btn');
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Link';
            }, 2000);
        });
    }

    render() {
        const certificationsHTML = this.certifications
            .map(cert => this.createCertificationCard(cert))
            .join('');
        
        this.certificationsContainer.innerHTML = certificationsHTML;

        // Add click handlers for copy buttons
        document.querySelectorAll('.copy-btn').forEach(button => {
            button.addEventListener('click', () => {
                this.copyToClipboard(button.dataset.url);
            });
        });
    }

    init() {
        this.render();
    }
} 