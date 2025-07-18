export default function Home() {
  return (
    <main className="main-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">KigaliMobility+</h1>
          <p className="hero-subtitle">
            Africa's first AI-managed smart mobility ecosystem
          </p>
          <p className="hero-description">
            Transforming every journey into an optimized, safe, and
            community-connected experience
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">40-60%</span>
              <span className="stat-label">Wait time reduction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1.2M+</span>
              <span className="stat-label">Target users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Transport operators</span>
            </div>
          </div>
          <div className="hero-actions">
            <button className="cta-primary">Get Started</button>
            <button className="cta-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="value-props-section">
        <div className="section-header">
          <h2 className="section-title">Transforming Mobility for Everyone</h2>
          <p className="section-subtitle">
            Smart urban operating system that enhances existing transport
            infrastructure
          </p>
        </div>

        <div className="value-props-grid">
          {/* For Commuters */}
          <div className="value-prop-card">
            <h3 className="card-title">For Daily Commuters</h3>
            <p className="card-subtitle">
              1.2M+ users - Working professionals & students
            </p>
            <ul className="benefits-list">
              <li>40-60% reduction in wait times</li>
              <li>Real-time accurate journey information</li>
              <li>Enhanced safety through verified drivers</li>
              <li>Seamless multi-modal transport integration</li>
              <li>Accessible services (USSD/SMS support)</li>
              <li>Emergency response capabilities</li>
            </ul>
          </div>

          {/* For Transport Operators */}
          <div className="value-prop-card">
            <h3 className="card-title">For Transport Operators</h3>
            <p className="card-subtitle">
              500+ operators - Bus companies & moto associations
            </p>
            <ul className="benefits-list">
              <li>15-25% fuel efficiency improvement</li>
              <li>30-40% reduction in maintenance costs</li>
              <li>20-25% better vehicle utilization</li>
              <li>New revenue streams from analytics</li>
              <li>Enhanced safety reputation</li>
              <li>Predictive maintenance capabilities</li>
            </ul>
          </div>

          {/* For Government */}
          <div className="value-prop-card">
            <h3 className="card-title">For Government</h3>
            <p className="card-subtitle">
              City planning, emergency services & transport authorities
            </p>
            <ul className="benefits-list">
              <li>20-35% traffic congestion reduction</li>
              <li>40-70% faster emergency response</li>
              <li>Comprehensive urban mobility data</li>
              <li>Enhanced public safety systems</li>
              <li>Economic development catalyst</li>
              <li>Smart city leadership positioning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Core Features</h2>
          <p className="section-subtitle">
            Three pillars of our comprehensive smart mobility solution
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3 className="feature-title">AI-Powered Journey Optimization</h3>
            <p className="feature-description">
              Real-time ETAs, route optimization, and predictive analytics that
              reduce uncertainty and improve travel efficiency.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3 className="feature-title">Comprehensive Safety Network</h3>
            <p className="feature-description">
              Driver verification, emergency response systems, and incident
              detection to ensure safe journeys for all users.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3 className="feature-title">Unified Transport Platform</h3>
            <p className="feature-description">
              Multi-modal integration with single payment system and coordinated
              services across all transport options.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="metrics-section">
        <div className="section-header">
          <h2 className="section-title">Measurable Impact</h2>
          <p className="section-subtitle">
            Proven results that transform urban mobility
          </p>
        </div>

        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-number">99.5%</span>
            <span className="metric-label">System uptime</span>
          </div>
          <div className="metric-card">
            <span className="metric-number">23.6-39.7x</span>
            <span className="metric-label">ROI over 5 years</span>
          </div>
          <div className="metric-card">
            <span className="metric-number">85%+</span>
            <span className="metric-label">Monthly user retention</span>
          </div>
          <div className="metric-card">
            <span className="metric-number">80%+</span>
            <span className="metric-label">Feature adoption rate</span>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="section-header">
          <h2 className="section-title">Strategic Partnerships</h2>
          <p className="section-subtitle">
            Collaborating with leading organizations to build Rwanda's smart
            mobility future
          </p>
        </div>

        <div className="partners-grid">
          <div className="partner-category">
            <h4 className="category-title">Government Partners</h4>
            <ul className="partner-list">
              <li>Rwanda Utilities Regulatory Authority (RURA)</li>
              <li>Rwanda Transport Development Agency (RTDA)</li>
              <li>Kigali City Council</li>
              <li>Ministry of ICT and Innovation</li>
            </ul>
          </div>

          <div className="partner-category">
            <h4 className="category-title">Transport Partners</h4>
            <ul className="partner-list">
              <li>AC Group (Tap&Go integration)</li>
              <li>SafariBus Platform</li>
              <li>KHENZ Systems</li>
              <li>Moto associations</li>
            </ul>
          </div>

          <div className="partner-category">
            <h4 className="category-title">Development Partners</h4>
            <ul className="partner-list">
              <li>World Bank Group</li>
              <li>African Development Bank</li>
              <li>UN-Habitat</li>
              <li>Transport for London (TfL)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Journey?</h2>
          <p className="cta-description">
            Join Africa's first AI-managed smart mobility ecosystem and
            experience the future of urban transport.
          </p>
          <div className="cta-actions">
            <button className="cta-primary">Join the Platform</button>
            <button className="cta-secondary">Contact Us</button>
          </div>
        </div>
      </section>
    </main>
  );
}
