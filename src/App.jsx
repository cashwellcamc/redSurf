function App() {
  return (
    <>
      <nav>
        <a href="#" className="logo">
          <div className="logo-mark">
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 14 Q7 8 15 4" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M3 10 Q8 6 15 4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="15" cy="4" r="2" fill="#c0392b"/>
            </svg>
          </div>
          <span className="logo-wordmark"><em>Red</em>Surf Digital</span>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#why">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:cashwell.digital@gmail.com" className="nav-cta">Let's talk</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">Independent Digital Consulting</div>
          <h1>Senior expertise.<br/><em>Without</em> the agency<br/>overhead.</h1>
          <p className="hero-body">Specialized consulting for healthcare, pharma, and government — from enterprise CMS development to Section 508 compliance and accessibility auditing.</p>
          <div className="hero-actions">
            <a href="mailto:cashwell.digital@gmail.com" className="btn-primary">Start a conversation</a>
            <a href="#services" className="btn-ghost">
              View services
              <svg viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

        <div className="hero-credentials">
          <div className="cred-item">
            <div className="cred-icon">
              <svg viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="3" stroke="#0f1f35" strokeWidth="1.3"/><path d="M6 9l2 2 4-4" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <div className="cred-label">Compliance specialty</div>
              <div className="cred-value">Section 508 / WCAG 2.1 AA</div>
            </div>
          </div>
          <div className="cred-item">
            <div className="cred-icon">
              <svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6.5" stroke="#0f1f35" strokeWidth="1.3"/><path d="M9 5v4l2.5 2.5" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="cred-label">Experience</div>
              <div className="cred-value">13+ years full-stack development</div>
            </div>
          </div>
          <div className="cred-item">
            <div className="cred-icon">
              <svg viewBox="0 0 18 18" fill="none"><path d="M3 15V7l6-4 6 4v8" stroke="#0f1f35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><rect x="6.5" y="10" width="5" height="5" rx="1" stroke="#c0392b" strokeWidth="1.3"/></svg>
            </div>
            <div>
              <div className="cred-label">Verticals</div>
              <div className="cred-value">Healthcare · Pharma · Federal Gov</div>
            </div>
          </div>
          <div className="cred-item">
            <div className="cred-icon">
              <svg viewBox="0 0 18 18" fill="none"><path d="M2 14c2-4 5-6 7-6s4 2 7 2" stroke="#0f1f35" strokeWidth="1.3" strokeLinecap="round"/><path d="M5 10c1-2 2.5-3 4-3" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="cred-label">CMS platforms</div>
              <div className="cred-value">Drupal · AEM · WordPress</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-inner">
          <div className="trust-item">
            <div className="trust-num">13<em>+</em></div>
            <div className="trust-label">Years of full-stack experience</div>
          </div>
          <div className="trust-item">
            <div className="trust-num">508</div>
            <div className="trust-label">Section 508 & WCAG compliance</div>
          </div>
          <div className="trust-item">
            <div className="trust-num">PHP<em>/</em>JS</div>
            <div className="trust-label">React, Next.js, Node, TypeScript</div>
          </div>
          <div className="trust-item">
            <div className="trust-num">Veeva</div>
            <div className="trust-label">Pharma CRM specialist</div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">What I do</div>
            <div className="section-title">Services built for<br/>regulated industries</div>
          </div>
        </div>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-accent"></div>
            <div className="service-name">Accessibility auditing & remediation</div>
            <div className="service-desc">WCAG 2.1 AA and Section 508 compliance audits with actionable remediation plans — critical ahead of the May 2026 HHS enforcement deadline.</div>
            <div className="service-tags">
              <span className="tag">WAVE audits</span>
              <span className="tag">Section 508</span>
              <span className="tag">WCAG 2.1</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-accent"></div>
            <div className="service-name">Enterprise CMS development</div>
            <div className="service-desc">Drupal and Adobe Experience Manager (AEM) builds for healthcare systems, federal agencies, and pharma organizations that need stability at scale.</div>
            <div className="service-tags">
              <span className="tag">Drupal</span>
              <span className="tag">AEM</span>
              <span className="tag">WordPress</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-accent"></div>
            <div className="service-name">Full-stack web engineering</div>
            <div className="service-desc">End-to-end development across PHP, React, Next.js, Node.js, and AWS — for platforms, internal tools, and complex integrations.</div>
            <div className="service-tags">
              <span className="tag">React / Next.js</span>
              <span className="tag">PHP</span>
              <span className="tag">Node.js</span>
              <span className="tag">AWS</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="why" id="why">
        <div className="why-inner">
          <div>
            <div className="section-eyebrow">Why Red Surf</div>
            <div className="section-title" style={{color: 'white'}}>Senior talent.<br/>Direct engagement.</div>
            <p className="why-body">You won't get handed off to a junior dev. Every project is handled directly — with the kind of institutional knowledge that comes from 13 years across healthcare, pharma, and government.</p>
          </div>
          <div className="why-points">
            <div className="why-point">
              <div className="why-num">01</div>
              <div>
                <div className="why-point-title">No agency markup</div>
                <div className="why-point-desc">Independent consulting means you pay for expertise, not overhead. Senior-level output at rates that make sense.</div>
              </div>
            </div>
            <div className="why-point">
              <div className="why-num">02</div>
              <div>
                <div className="why-point-title">Niche compliance depth</div>
                <div className="why-point-desc">Section 508, HIPAA-aware development, and Veeva CRM — rare specializations that generalist agencies don't have.</div>
              </div>
            </div>
            <div className="why-point">
              <div className="why-num">03</div>
              <div>
                <div className="why-point-title">Built for regulated work</div>
                <div className="why-point-desc">Years inside healthcare, federal government, and pharma mean I understand the constraints before you explain them.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="footer-cta" id="contact">
        <div className="section-eyebrow">Get in touch</div>
        <h2>Let's talk about your next project.</h2>
        <p>Whether you need an accessibility audit, a CMS build, or a senior engineer for a complex engagement — I'd like to hear what you're working on.</p>
        <a href="mailto:cashwell.digital@gmail.com" className="btn-primary">Send me a message</a>
      </section>

      <footer>
        <div className="footer-logo"><em>Red</em>Surf Digital</div>
        <div className="footer-note">Richmond, VA &nbsp;·&nbsp; redsurfdigital.com</div>
      </footer>
    </>
  )
}

export default App
