import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="brand-name">Red Surf Digital</span>
            <span className="hero-subtitle">Navigating the Digital Wave</span>
          </h1>
          <p className="hero-description">
            Transform your business with cutting-edge digital consulting.
            We deliver innovative solutions that drive growth and excellence.
          </p>
          <div className="hero-cta">
            <button className="cta-primary">Get Started</button>
            <button className="cta-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="wave-animation"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
