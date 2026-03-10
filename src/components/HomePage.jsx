import { Icon } from "./Icon";
import { CROPS } from "../data/mockData";

export const HomePage = ({ setPage, user }) => (
  <>
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-tag">🌱 Farm-to-Table · Equipment Sharing</div>
        <h1>Connecting <em>Farmers</em> Directly<br />with Customers & Each Other</h1>
        <p>Buy fresh crops straight from the field. Rent farm equipment from nearby farmers. Cut out the middleman — keep more profit where it belongs.</p>
        <div className="hero-ctas">
          <button className="hero-btn hero-btn-main" onClick={() => setPage("marketplace")}>🛒 Shop Fresh Produce</button>
          <button className="hero-btn hero-btn-sec" onClick={() => setPage("equipment")}>🚜 Rent Equipment</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="hero-stat-num">2,400+</div><div className="hero-stat-label">Farmers</div></div>
          <div className="hero-stat"><div className="hero-stat-num">₹3.2Cr</div><div className="hero-stat-label">Sales This Month</div></div>
          <div className="hero-stat"><div className="hero-stat-num">850+</div><div className="hero-stat-label">Equipment Listed</div></div>
          <div className="hero-stat"><div className="hero-stat-num">18+</div><div className="hero-stat-label">States Covered</div></div>
        </div>
      </div>
    </div>

    <div className="features">
      <div className="features-inner">
        <div className="section-label">Why FarmStack</div>
        <div className="section-title">Everything a Farmer & Buyer Needs</div>
        <div className="features-grid">
          {[
            { icon: "🧑‍🌾", title: "Direct from Farm", desc: "No middlemen. Farmers list crops directly and customers buy at fair prices." },
            { icon: "🚜", title: "Equipment Sharing", desc: "Rent tractors, harvesters and sprayers from nearby farmers at affordable rates." },
            { icon: "📍", title: "Location Filtering", desc: "Find farmers and equipment within your district or state easily." },
            { icon: "⭐", title: "Verified Ratings", desc: "Trusted review system ensures quality produce and reliable equipment." },
          ].map(f => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="hiw">
      <div className="hiw-inner">
        <div className="section-label">How It Works</div>
        <div className="section-title">Get Started in Minutes</div>
        <div className="hiw-steps">
          {[
            { n: "1", title: "Create Account", desc: "Sign up as a Farmer or Customer in under 2 minutes." },
            { n: "2", title: "List or Browse", desc: "Farmers list crops/equipment. Customers search by location." },
            { n: "3", title: "Connect Directly", desc: "Place orders or request rentals directly with the farmer." },
            { n: "4", title: "Grow Together", desc: "Rate each other and build a trusted agri community." },
          ].map(s => (
            <div className="hiw-step" key={s.n}>
              <div className="hiw-step-num">{s.n}</div>
              <div className="hiw-step-title">{s.title}</div>
              <div className="hiw-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="page">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <div className="page-title">Fresh Listings</div>
          <div className="page-sub">Directly from farms near you</div>
        </div>
        <button style={{ padding: "10px 20px", background: "var(--green-pale)", color: "var(--green-deep)", border: "none", borderRadius: 10, fontWeight: 700, cursor: "pointer" }} onClick={() => setPage("marketplace")}>View All →</button>
      </div>
      <div className="grid grid-4">
        {CROPS.slice(0, 4).map(c => (
          <div className="card" key={c.id} onClick={() => setPage("marketplace")}>
            <div className="card-img"><img src={c.img} alt={c.name} /><div className="card-badge">{c.badge}</div></div>
            <div className="card-body">
              <div className="card-name">{c.name}</div>
              <div className="card-farmer"><Icon name="user" size={12} />{c.farmer}</div>
              <div className="card-meta">
                <div className="card-price">₹{c.price}<span>/{c.unit}</span></div>
                <div className="card-rating"><Icon name="star" size={12} color="#f6ad55" />{c.rating}</div>
              </div>
              <div className="card-location"><Icon name="map" size={12} />{c.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">🌿 FarmStack</div>
            <div className="footer-desc">Connecting farmers with customers and each other across India. Building a better agriculture economy.</div>
          </div>
          {[
        
          ].map(col => (
            <div key={col.heading}>
              <div className="footer-heading">{col.heading}</div>
              {col.links.map(l => <div className="footer-link" key={l}>{l}</div>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 FarmStack. Made for Indian Farmers.</div>
          <div className="footer-copy">Developed By Mutthuram S R </div>
          <div className="footer-copy">🌱 Helping farmers grow</div>
        </div>
      </div>
    </div>
  </>
);
