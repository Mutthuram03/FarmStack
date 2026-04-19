import { Icon } from "./Icon";
import { CROPS } from "../data/mockData";
import heroImg from "../assets/hero-bg.png";

export const HomePage = ({ setPage, user }) => (
  <>
    <div className="hero" style={{ 
      backgroundImage: `linear-gradient(rgba(253, 251, 247, 0.8), rgba(253, 251, 247, 0.2)), url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      minHeight: '80vh'
    }}>
      <div className="hero-inner container">
        <div className="hero-tag" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}>
          <span className="flex-center" style={{ gap: '8px' }}>🌱 The Future of Indian Agriculture</span>
        </div>
        <h1 style={{ marginBottom: '32px' }}>Connecting <em>Farmers</em> Directly<br />with the World</h1>
        <p style={{ fontSize: '1.35rem', marginBottom: '48px', color: '#374151' }}>Buy fresh crops straight from the soil or rent premium equipment from your local community. No middlemen, transparent pricing, better living.</p>
        <div className="hero-ctas">
          <button className="btn btn-primary" style={{ padding: '20px 40px', fontSize: '1.1rem' }} onClick={() => setPage("marketplace")}>
            🛒 Shop Fresh Produce
          </button>
          <button className="btn btn-outline" style={{ padding: '20px 40px', fontSize: '1.1rem', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)' }} onClick={() => setPage("equipment")}>
            🚜 Rent Equipment
          </button>
        </div>
        <div className="hero-stats">
          {[
            { num: "2,400+", label: "Active Farmers" },
            { num: "₹3.2Cr", label: "Monthly Trade" },
            { num: "18+", label: "Indian States" },
          ].map(s => (
            <div className="hero-stat glass" key={s.label} style={{ padding: '24px 40px', borderRadius: '24px' }}>
              <span className="hero-stat-num">{s.num}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <section style={{ padding: '140px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Ecosystem</span>
          <h2 className="section-title">A Complete Solution for Modern Farming</h2>
        </div>
        <div className="grid grid-4" style={{ gap: '32px' }}>
          {[
            { icon: "🧑‍🌾", title: "Direct Listing", desc: "Farmers list crops at their own prices. Customers get the freshest produce without retail markup." },
            { icon: "🚜", title: "Equipment Hub", desc: "Access high-tech machinery from neighbors. Boost productivity without heavy capital investment." },
            { icon: "📍", title: "Hyperlocal Filter", desc: "Our district-level smart filtering connects you with people just a few kilometers away." },
            { icon: "🛡️", title: "Verified Trust", desc: "Every transaction and user is rated by the community, ensuring quality and reliability." },
          ].map(f => (
            <div className="feature-card" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ padding: '140px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <span className="section-label" style={{ textAlign: 'left' }}>Freshly Harvested</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>Produce from Top Farmers</h2>
          </div>
          <button className="btn btn-secondary" onClick={() => setPage("marketplace")}>Browse All Produce →</button>
        </div>
        <div className="grid grid-4">
          {CROPS.slice(0, 4).map(c => (
            <div className="card" key={c.id} onClick={() => setPage("marketplace")}>
              <div className="card-img">
                <img src={c.img} alt={c.name} />
                <div className={`card-badge ${c.badge === 'Available' ? 'avail' : 'unavail'}`}>{c.badge}</div>
              </div>
              <div className="card-body">
                <h4 className="card-name">{c.name}</h4>
                <div className="card-farmer"><Icon name="user" size={14} />{c.farmer}</div>
                <div className="card-meta">
                  <div className="card-price">₹{c.price}<span>/{c.unit}</span></div>
                  <div className="card-rating"><Icon name="star" size={14} color="#f59e0b" />{c.rating}</div>
                </div>
                <div className="card-location" style={{ marginTop: '16px', fontSize: '0.875rem', color: 'var(--text-muted)' }}><Icon name="map" size={14} />{c.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '80px', marginBottom: '100px' }}>
          <div style={{ paddingRight: '40px' }}>
            <div className="nav-logo" style={{ color: 'white', marginBottom: '32px', fontSize: '2rem' }}>🌿 Farm<span>Stack</span></div>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We're building a transparent, efficient, and community-driven agricultural future for India.
              Bridging the gap between the field and the dinner table.
            </p>
          </div>
          <div>
            <h4 className="footer-heading">Marketplace</h4>
            <a className="footer-link">Fruits & Vegetables</a>
            <a className="footer-link">Grains & Spices</a>
            <a className="footer-link">Organic Selection</a>
            <a className="footer-link">Equipment Rental</a>
          </div>
          <div>
            <h4 className="footer-heading">Company</h4>
            <a className="footer-link">Our Mission</a>
            <a className="footer-link">Farmer Stories</a>
            <a className="footer-link">Success Stories</a>
            <a className="footer-link">Contact Us</a>
          </div>
          <div>
            <h4 className="footer-heading">Policy</h4>
            <a className="footer-link">Privacy Policy</a>
            <a className="footer-link">Terms of Use</a>
            <a className="footer-link">Refund Policy</a>
            <a className="footer-link">Safety Center</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '48px', display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '1rem' }}>
          <p>© 2025 FarmStack Technologies Private Limited. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '32px' }}>
            <span className="footer-link" style={{ marginBottom: 0 }}>Twitter</span>
            <span className="footer-link" style={{ marginBottom: 0 }}>Instagram</span>
            <span className="footer-link" style={{ marginBottom: 0 }}>LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  </>
);

