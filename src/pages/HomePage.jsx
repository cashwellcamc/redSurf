import { Link } from 'react-router-dom';
import './HomePage.css';

const SERVICES = ['Websites', 'Mar-Tech', 'Growth', 'Web Apps', 'Tools', 'Branding', 'AI'];

export default function HomePage() {
  return (
    <div className="home">

      {/* ── Full-screen hero image ── */}
      <div className="home-hero">
        <img
          className="home-hero-img"
          src="/red-surf-pic.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="home-hero-overlay" />
      </div>

      {/* ── Centered content ── */}
      <div className="home-content">
        <div className="home-center">

          <h1 className="home-title">Red Surf Digital</h1>
          <p className="home-sub">Digital Engineering for the Outdoor World</p>

          {/* ── Services strip ── */}
          <div className="home-services">
            {SERVICES.map((s) => (
              <span key={s} className="home-service-tag">{s}</span>
            ))}
          </div>

          {/* ── Life raft ring ── */}
          <div className="liferaft" aria-label="Site navigation">

            <svg className="liferaft-svg" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* White ring */}
              <circle cx="130" cy="130" r="95" fill="none" stroke="white" strokeWidth="42" strokeOpacity="0.95" />
              {/* Red alternating arcs at top/bottom */}
              <g transform="rotate(-45, 130, 130)">
                <circle cx="130" cy="130" r="95" fill="none" stroke="#8B1A1A" strokeWidth="42" strokeDasharray="149 149" />
              </g>
              {/* Rope cross */}
              <line x1="130" y1="38"  x2="130" y2="222" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
              <line x1="38"  y1="130" x2="222" y2="130" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
              {/* Knot dots */}
              <circle cx="130" cy="57"  r="3.5" fill="rgba(255,255,255,0.45)" />
              <circle cx="130" cy="203" r="3.5" fill="rgba(255,255,255,0.45)" />
              <circle cx="57"  cy="130" r="3.5" fill="rgba(255,255,255,0.45)" />
              <circle cx="203" cy="130" r="3.5" fill="rgba(255,255,255,0.45)" />
            </svg>

            {/* Nav — vertically stacked, perfectly centered in hole */}
            <nav className="liferaft-nav">
              <span className="liferaft-link">About</span>
              <Link  to="/blog"    className="liferaft-link">Blog</Link>
              <span  className="liferaft-link">Services</span>
              <Link  to="/contact" className="liferaft-link">Contact</Link>
            </nav>

          </div>
        </div>
      </div>

      {/* ── Copyright — pinned to page bottom ── */}
      <p className="home-copy">© 2026 Red Surf Digital &nbsp;·&nbsp; All rights reserved</p>

    </div>
  );
}
