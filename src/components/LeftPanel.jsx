import { Link } from 'react-router-dom';

export default function LeftPanel() {
  return (
    <aside className="left" role="banner">
      <div className="wordmark">
        <div className="wordmark-main" aria-label="Red Surf Digital">
          Red<span>Surf</span> Digital
        </div>
        <div className="wordmark-sub">Outdoor Industry Digital Engineering</div>
      </div>

      <div className="divider" aria-hidden="true" />

      <p className="tagline">
        We engineer digital experiences for brands that move — from eCommerce platforms to
        headless content systems built for the outdoors industry.
      </p>

      <nav aria-label="Main navigation">
        <div className="contact-block">
          <span className="contact-label">Navigate</span>
          <Link to="/blog"    className="contact-link">Articles &amp; Insights</Link>
          <Link to="/contact" className="contact-link">Contact</Link>
        </div>
      </nav>

      <div className="contact-block" style={{ marginTop: '1.6rem' }}>
        <span className="contact-label">Get in touch</span>
        <a href="mailto:hello@redsurfdigital.com" className="contact-link">
          hello@redsurfdigital.com
        </a>
        <a href="https://linkedin.com/company/redsurfdigital" className="contact-link" target="_blank" rel="noreferrer noopener">
          LinkedIn
        </a>
      </div>

      <div className="availability" aria-label="Currently taking new projects">
        <span className="dot" aria-hidden="true" />
        Taking new projects
      </div>

      <a href="/contact" className="cta-ghost" style={{ marginTop: '1.8rem' }}>
        Start a project <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}
