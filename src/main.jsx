import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const stats = [
  { value: '24/7', label: 'live footprint visibility' },
  { value: '30+', label: 'tool integrations' },
  { value: '18%', label: 'median energy savings' },
];

const products = [
  {
    name: 'Carbon Cloud',
    description: 'Real-time emissions tracking across cloud spend, CI pipelines, and infrastructure usage.',
    metric: '12% average reduction in infra emissions after 90 days',
  },
  {
    name: 'GreenOps',
    description: 'Policy automation and sustainability workflows for engineering, finance, and operations teams.',
    metric: '45 automated savings recommendations per month',
  },
  {
    name: 'Impact API',
    description: 'Expose verified sustainability metrics in your product, data warehouse, and internal tools.',
    metric: 'Integrates with 30+ common developer tools',
  },
];

const benefits = [
  'Track emissions across code, cloud, and supply chain data in one dashboard.',
  'Turn sustainability goals into concrete engineering and product actions.',
  'Share verified reports with leadership, customers, and auditors.',
];

const pricing = [
  {
    name: 'Starter',
    price: '$0',
    subtitle: 'For small teams exploring sustainability tracking',
    features: ['Up to 3 projects', 'Weekly impact summaries', 'Community support'],
  },
  {
    name: 'Growth',
    price: '$49',
    subtitle: 'For teams shipping greener products at scale',
    features: ['Unlimited projects', 'Team dashboards', 'Automated reporting', 'Slack alerts'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    subtitle: 'For large organizations with advanced compliance needs',
    features: ['SSO and audit logs', 'Dedicated support', 'Custom integrations', 'SLA'],
  },
];

const developers = [
  {
    name: 'Ava Chen',
    role: 'Platform Engineer',
    bio: 'Builds the reliability layer that keeps sustainability data trustworthy and fast to query.',
  },
  {
    name: 'Noah Patel',
    role: 'Developer Experience',
    bio: 'Creates APIs, SDKs, and docs that make greener workflows easy to adopt.',
  },
  {
    name: 'Maya Rivera',
    role: 'Product Engineer',
    bio: 'Designs interfaces that help teams act on emissions insights without slowing delivery.',
  },
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">GreenLedger</div>
          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#pricing">Pricing</a>
            <a href="#developers">Developers</a>
          </div>
        </nav>

        <section className="hero-content">
          <div className="hero-copy-column">
            <p className="eyebrow">Sustainability intelligence for modern teams</p>
            <h1>Measure, manage, and reduce your product’s carbon footprint.</h1>
            <p className="hero-copy">
              GreenLedger helps teams turn sustainability from a reporting burden into a product advantage with clear
              metrics, actionable recommendations, and developer-friendly tooling.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#pricing">
                See pricing
              </a>
              <a className="secondary" href="#products">
                Explore products
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-header">
              <span>Live impact</span>
              <span className="status">Updated 2 min ago</span>
            </div>
            <div className="panel-score">
              <strong>78</strong>
              <p>Green score</p>
            </div>
            <div className="mini-chart">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <ul className="panel-list">
              <li>Cloud spend optimized across 12 services</li>
              <li>2 sustainability policies auto-applied</li>
              <li>3 upcoming actions ready for review</li>
            </ul>
          </div>
        </section>
      </header>

      <main>
        <section className="section stats-strip">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section id="products" className="section">
          <div className="section-header">
            <p>Products</p>
            <h2>Everything you need to turn sustainability into a product advantage.</h2>
          </div>
          <div className="card-grid three">
            {products.map((product) => (
              <article className="card product-card" key={product.name}>
                <span className="pill">{product.metric}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="section alt">
          <div className="section-header">
            <p>Pricing</p>
            <h2>Simple plans for teams of every size.</h2>
          </div>
          <div className="card-grid three">
            {pricing.map((plan) => (
              <article className={`card pricing ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="plan-subtitle">{plan.subtitle}</p>
                <div className="price">
                  {plan.price}
                  <span>{plan.price === 'Custom' ? '' : '/mo'}</span>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section benefits-section alt">
          <div className="section-header">
            <p>Why GreenLedger</p>
            <h2>A cleaner path from sustainability data to real decisions.</h2>
          </div>
          <div className="benefits-layout">
            <div className="benefit-copy">
              <p>Built for teams that want a design-forward sustainability layer without extra operational noise.</p>
              <ul className="benefits-list">
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <aside className="insight-card">
              <p>Monthly insight</p>
              <h3>Most teams discover savings in the first week.</h3>
              <div className="insight-bars">
                <span style={{ height: '42%' }} />
                <span style={{ height: '68%' }} />
                <span style={{ height: '55%' }} />
                <span style={{ height: '82%' }} />
                <span style={{ height: '64%' }} />
              </div>
            </aside>
          </div>
        </section>

        <section id="developers" className="section">
          <div className="section-header">
            <p>Developers</p>
            <h2>Built for teams who want to ship cleaner software.</h2>
          </div>
          <div className="card-grid three">
            {developers.map((dev) => (
              <article className="card developer-card" key={dev.name}>
                <div className="avatar">{dev.name.charAt(0)}</div>
                <h3>{dev.name}</h3>
                <h4>{dev.role}</h4>
                <p>{dev.bio}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
