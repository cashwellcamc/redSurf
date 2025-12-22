import './Services.css'

function Services() {
  const services = [
    {
      title: 'Digital Strategy',
      description: 'Comprehensive roadmaps that align technology with your business objectives.',
      icon: '🎯'
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights and competitive advantages.',
      icon: '📊'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end solutions to modernize your operations and processes.',
      icon: '🚀'
    }
  ]

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">What We Do</h2>
          <p className="services-subtitle">
            Expertise that drives digital excellence
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
