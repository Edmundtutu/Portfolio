class FormValidator {
    constructor(formElement) {
        this.form = formElement;
        this.submitButton = this.form.querySelector('button[type="submit"]');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        this.form.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.validateField(input));
        });
    }

    validateField(field) {
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        let isValid = true;
        let errorMessage = '';

        // Clear previous errors
        formGroup.classList.remove('error');
        errorElement.textContent = '';

        // Required field validation
        if (field.required && !field.value.trim()) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && field.value) {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Length validation
        if (field.minLength && field.value.length < field.minLength) {
            isValid = false;
            errorMessage = `Minimum ${field.minLength} characters required`;
        }

        // if (field.maxLength && field.value.length > field.maxLength) {
        //     isValid = false;
        //     errorMessage = `Maximum ${field.maxLength} characters allowed`;
        // }

        if (!isValid) {
            formGroup.classList.add('error');
            errorElement.textContent = errorMessage;
        }

        return isValid;
    }

    validateForm() {
        let isValid = true;
        this.form.querySelectorAll('input, textarea').forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        return isValid;
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        this.setLoadingState(true);

        const formData = new FormData(this.form);

        try {
            const response = await fetch('includes/handlers/contact.php', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                this.showNotification('Thanks for reaching out! Edmund will get back to you soon.', 'success');
                this.form.reset();
            } else {
                this.showNotification(data.message || 'Error sending message', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            this.showNotification('An error occurred. Please try again later.', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    setLoadingState(isLoading) {
        this.submitButton.disabled = isLoading;
        this.submitButton.classList.toggle('loading', isLoading);
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        // Add to DOM
        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize form validation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        new FormValidator(contactForm);
    }
});

export default FormValidator;
