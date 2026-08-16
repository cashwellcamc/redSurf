import { Link } from 'react-router-dom';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-shell">
      <header className="blog-header">
        <Link to="/" className="blog-back">&#8592; Back</Link>
        <div className="blog-wordmark">
          <span className="blog-wordmark-main" aria-hidden="true">Red<span>Surf</span> Digital</span>
          <span className="blog-wordmark-sub">Contact</span>
        </div>
      </header>

      <main className="contact-main" id="main-content">
        <div className="contact-card">
          <div className="contact-card-left">
            <div className="contact-eyebrow">Let's work together</div>
            <h1 className="contact-heading">Start a project.</h1>
            <p className="contact-body">
              Tell us what you're building — we'll get back within one business day to discuss
              scope, timeline, and fit.
            </p>
            <div className="contact-details">
              <div>
                <div className="contact-label">Email</div>
                <a href="mailto:hello@redsurfdigital.com" className="contact-link">hello@redsurfdigital.com</a>
              </div>
              <div>
                <div className="contact-label">Location</div>
                <span className="contact-link contact-link--disabled">Richmond, VA</span>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/placeholder"
            method="POST"
            aria-label="Project inquiry form"
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name <span aria-hidden="true">*</span></label>
              <input id="name" name="name" type="text" className="form-input" required aria-required="true" autoComplete="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email <span aria-hidden="true">*</span></label>
              <input id="email" name="email" type="email" className="form-input" required aria-required="true" autoComplete="email" />
            </div>
            <div className="form-group">
              <label htmlFor="company" className="form-label">Company / Brand</label>
              <input id="company" name="company" type="text" className="form-input" autoComplete="organization" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">What are you building? <span aria-hidden="true">*</span></label>
              <textarea id="message" name="message" className="form-textarea" rows={5} required aria-required="true" />
            </div>
            <button type="submit" className="form-submit">Send message <span aria-hidden="true">→</span></button>
          </form>
        </div>
      </main>
    </div>
  );
}
