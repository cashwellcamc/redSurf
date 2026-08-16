const ShopifyIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ display: 'block' }}>
    <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.119-.122-.197-.234-.197-.114 0-2.1-.047-2.1-.047s-1.4-1.355-1.55-1.504v21.039zm-1.9.021L13.1.989c-.15.15-1.55 1.504-1.55 1.504S9.564.447 9.45.447c-.113 0-.217.078-.234.197C9.194 6.761 6.59 24.374 6.59 24.374zm-4.35-9.15c.081.005 1.605.052 1.605.052s.534 1.502.76 2.254c-.894-.281-2.365-2.306-2.365-2.306zm.905-7.696s-1.793.547-3.59 1.096C7.187 5.568 8.72 3.78 8.72 3.78l1.272 3.374zm-4.37 14.021S3.73 8.445 3.72 8.326c-.012-.117-.1-.2-.213-.2-.113 0-2.16-.028-2.16-.028S1.25 22.133 1.246 22.24c-.003.109.072.2.18.207.107.009 4.196.728 4.196.728z"/>
  </svg>
);

const BigCommerceIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ display: 'block' }}>
    <path d="M0 0v24h24V0H0zm12.612 18.168c-1.004.588-2.32.588-3.588.588H4.56v-2.4h4.32c.624 0 1.104-.072 1.404-.276.3-.216.456-.54.456-.996 0-.468-.156-.804-.468-1.008-.312-.216-.804-.312-1.476-.312H7.2c-1.344 0-2.388-.312-3.12-.936C3.348 12.204 3 11.268 3 10.02c0-1.344.456-2.34 1.356-2.988C5.256 6.384 6.528 6.06 8.1 6.06h4.44v2.4H8.34c-.552 0-.984.084-1.284.264-.288.18-.444.468-.444.876 0 .384.132.672.396.864.264.18.672.276 1.236.276h1.608c1.428 0 2.496.312 3.216.948.72.636 1.08 1.56 1.08 2.772 0 1.332-.504 2.316-1.536 2.708zm5.688.588h-2.76V6.06h2.76v12.696z"/>
  </svg>
);

const TECH_STACK = [
  {
    category: 'Commerce',
    duration: '13s',
    items: [
      { name: 'Shopify',      icon: <ShopifyIcon /> },
      { name: 'BigCommerce',  icon: <BigCommerceIcon /> },
      { name: 'WordPress',    cls: 'devicon-wordpress-plain' },
      { name: 'WooCommerce',  cls: 'devicon-woocommerce-plain' },
    ],
  },
  {
    category: 'Frontend',
    duration: '11s',
    items: [
      { name: 'React',      cls: 'devicon-react-original' },
      { name: 'Next.js',    cls: 'devicon-nextjs-plain' },
      { name: 'TypeScript', cls: 'devicon-typescript-plain' },
      { name: 'Vue',        cls: 'devicon-vuejs-plain' },
      { name: 'Sass',       cls: 'devicon-sass-original' },
    ],
  },
  {
    category: 'Backend',
    duration: '14s',
    items: [
      { name: 'Node.js',  cls: 'devicon-nodejs-plain' },
      { name: 'Python',   cls: 'devicon-python-plain' },
      { name: 'PHP',      cls: 'devicon-php-plain' },
      { name: 'AWS',      cls: 'devicon-amazonwebservices-plain' },
      { name: 'Docker',   cls: 'devicon-docker-plain' },
    ],
  },
];

const SERVICES = [
  {
    icon: '⊕',
    title: 'eCommerce Engineering',
    desc: 'Shopify, BigCommerce & headless commerce builds for outdoor gear and apparel brands.',
    highlight: true,
  },
  {
    icon: '◈',
    title: 'Brand & Campaign Sites',
    desc: 'High-performance marketing sites and seasonal campaign builds for outdoor brands.',
  },
  {
    icon: '⚙',
    title: 'Headless CMS',
    desc: 'Payload, Contentful & Sanity implementations for content teams that need speed and flexibility.',
  },
  {
    icon: '★',
    title: 'Section 508 & WCAG',
    desc: 'Full accessibility audits, remediation & WAVE-verified delivery for ADA-mandated standards.',
  },
  {
    icon: '◎',
    title: 'Analytics & MarTech',
    desc: 'GA4, GTM, and custom data pipelines — tracking every touchpoint across your digital ecosystem.',
  },
  {
    icon: 'λ',
    title: 'API & Integrations',
    desc: 'Inventory, ERP, fulfillment, and third-party platform integrations for outdoor retail operations.',
  },
  {
    icon: '⊛',
    title: 'Performance Engineering',
    desc: 'Core Web Vitals optimization, edge caching, and scalable infrastructure for high-traffic outdoor retail.',
    featured: true,
  },
  {
    icon: '✦',
    title: 'AI & Automation',
    desc: 'Intelligent product discovery, personalization pipelines, and workflow automation for outdoor brands.',
    featured: true,
  },
];

export default function RightPanel() {
  return (
    <main className="right" id="main-content">
      <svg className="wave-bg" width="520" height="420" viewBox="0 0 520 420" fill="none" aria-hidden="true">
        <path d="M-40 200 Q 60 100 160 200 Q 260 300 360 200 Q 460 100 560 200" stroke="white" strokeWidth="2" fill="none" />
        <path d="M-40 240 Q 60 140 160 240 Q 260 340 360 240 Q 460 140 560 240" stroke="white" strokeWidth="2" fill="none" />
        <path d="M-40 280 Q 60 180 160 280 Q 260 380 360 280 Q 460 180 560 280" stroke="white" strokeWidth="2" fill="none" />
        <path d="M-40 320 Q 60 220 160 320 Q 260 420 360 320 Q 460 220 560 320" stroke="white" strokeWidth="2" fill="none" />
      </svg>

      <div className="right-inner">
        <div className="eyebrow">Outdoor Industry Digital Agency · 13+ Years</div>
        <h2 className="right-heading">Engineering digital for brands that move.</h2>

        <section className="tech-section" aria-label="Technology stack">
          {TECH_STACK.map(({ category, duration, items }) => (
            <div key={category} className="tech-row">
              <span className="tech-cat">{category}</span>
              <div className="tech-marquee">
                <div
                  className="tech-marquee-track"
                  style={{ animationDuration: duration }}
                  aria-hidden="true"
                >
                  {[...items, ...items, ...items, ...items].map(({ name, cls, icon }, i) => (
                    <div key={i} className="tech-item">
                      {icon ?? <i className={cls} aria-hidden="true" />}
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="services-grid" role="list">
          {SERVICES.map(({ icon, title, desc, highlight, featured }) => (
            <div
              key={title}
              className={`service-card${highlight ? ' highlight' : ''}${featured ? ' featured' : ''}`}
              role="listitem"
            >
              <span className="service-icon" aria-hidden="true">{icon}</span>
              <div>
                <div className="service-title">{title}</div>
                <div className="service-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-strip">
          <a href="/contact" className="cta-strip-btn">
            Start a Project <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
