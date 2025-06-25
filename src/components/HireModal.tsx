import React, { useState } from 'react';
import { X, Send, Linkedin, Github, Mail, MessageCircle, Facebook } from 'lucide-react';
import emailjs from 'emailjs-com';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireModal: React.FC<HireModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Email to yourself
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.project,
        message: formData.message,
        to_email: 'edmundtutuma@gmail.com',
        subject: `New Project Inquiry from ${formData.name} - ${formData.project}`,
        reply_to: formData.email
      };

      // Send main email
      await emailjs.send(
        'service_vs4qbko',
        'template_5tqdndw',
        templateParams,
        '0N7-V9m1OrWeJyumM'
      );

      // Auto-reply to user
      const autoReplyParams = {
        from_name: formData.name,
        email: formData.email,
        project_type: formData.project,
      };

      await emailjs.send(
        'service_vs4qbko',
        'template_eeim4v9',
        autoReplyParams,
        '0N7-V9m1OrWeJyumM'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        project: '',
        message: ''
      });

      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/edmund-tutuma',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/edmundtutuma',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:edmundtutuma@gmail.com',
      label: 'Gmail',
      color: '#ea4335'
    },
    {
      icon: <MessageCircle size={20} />,
      href: 'https://wa.me/256763977921',
      label: 'WhatsApp',
      color: '#25d366'
    },
    {
      icon: <Facebook size={20} />,
      href: 'https://facebook.com/edmund.tutuma',
      label: 'Facebook',
      color: '#1877f2'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxHeight: '90vh', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="modal-header">
          <h2 className="modal-title">Let's Work Together</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          {submitStatus === 'success' ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="hire-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="yourname@gmail.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group project-type-fullwidth">
                  <label htmlFor="project">Project Type *</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select kind of project your desire </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Full Stack Application">Full Stack Application</option>
                    <option value="API Development">API Development</option>
                    <option value="Chatbot">Chatbot</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              {submitStatus === 'error' && (
                <div className="error-message">
                  <p>Sorry, there was an error sending your message. Please try again or contact me directly at edmundtutuma@gmail.com</p>
                </div>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="modal-footer">
          <div>
            <p style={{ color: '#64748b', fontStyle: 'italic', marginBottom: '0.5rem', fontSize: '1rem', textAlign: 'center' }}>
              ...Let's connect more on...
            </p>
          </div>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--hover-color': link.color } as React.CSSProperties}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModal;

/* Hide scrollbar for Webkit browsers */
<style>{`
  .modal-container::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    .project-type-fullwidth {
      width: 100%;
      grid-column: 1 / -1;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`}</style>