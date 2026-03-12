import { useState } from "react";
import { Icon } from "./Icon";
import { Stars } from "./Stars";
import { RentalCalendar } from "./RentalCalendar";
import { CROPS, EQUIPMENT, FARMERS } from "../data/mockData";

export const FarmerProfilePage = ({ farmerId, onBack, onMessage }) => {
  const [activeTab, setActiveTab] = useState("about");
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  
  const farmer = FARMERS.find(f => f.id === farmerId);
  const farmerCrops = CROPS.filter(c => c.farmerId === farmerId);
  const farmerEquipment = EQUIPMENT.filter(e => e.ownerId === farmerId);

  if (!farmer) return <div className="page">Farmer not found</div>;

  return (
    <div className="page">
      {/* Back Button */}
      <button 
        className="card-btn card-btn-secondary" 
        onClick={onBack}
        style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }}
      >
        ← Back to Farmers
      </button>

      {/* Farmer Header */}
      <div className="farmer-profile-header">
        <div className="farmer-profile-avatar">{farmer.avatar}</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <h1 className="page-title" style={{ margin: 0 }}>{farmer.name}</h1>
            {farmer.verified && (
              <span style={{ 
                background: "#d4edda", 
                color: "#155724", 
                padding: "4px 12px", 
                borderRadius: 20, 
                fontSize: "0.8rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 4
              }}>
                ✓ Verified Farmer
              </span>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#718096", marginBottom: 8 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Icon name="map" size={14} /> {farmer.location}
            </span>
            <span>🌾 {farmer.experience} years experience</span>
            <span>📅 Joined {farmer.joined}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Stars rating={farmer.rating} />
            <span style={{ fontSize: "0.9rem", color: "#718096" }}>
              {farmer.rating} rating • {farmer.totalOrders} orders completed
            </span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="submit-btn" onClick={() => onMessage && onMessage(farmer)}>
            📧 Message
          </button>
          <button className="card-btn card-btn-secondary">
            📞 Call
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="dash-stats" style={{ marginTop: 24 }}>
        <div className="stat-card">
          <div className="stat-card-icon">🌽</div>
          <div className="stat-card-num">{farmer.crops}</div>
          <div className="stat-card-label">Crops Listed</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">🚜</div>
          <div className="stat-card-num">{farmer.equipment}</div>
          <div className="stat-card-label">Equipment</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">📦</div>
          <div className="stat-card-num">{farmer.totalOrders}</div>
          <div className="stat-card-label">Total Orders</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">🔄</div>
          <div className="stat-card-num">{farmer.totalRentals}</div>
          <div className="stat-card-label">Rentals</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        <button 
          className={`profile-tab ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button 
          className={`profile-tab ${activeTab === "crops" ? "active" : ""}`}
          onClick={() => setActiveTab("crops")}
        >
          Crops ({farmerCrops.length})
        </button>
        <button 
          className={`profile-tab ${activeTab === "equipment" ? "active" : ""}`}
          onClick={() => setActiveTab("equipment")}
        >
          Equipment ({farmerEquipment.length})
        </button>
        <button 
          className={`profile-tab ${activeTab === "calendar" ? "active" : ""}`}
          onClick={() => setActiveTab("calendar")}
        >
          Rental Calendar
        </button>
      </div>

      {/* Tab Content */}
      <div className="profile-content">
        {activeTab === "about" && (
          <div className="profile-about">
            <div className="profile-section">
              <h3 className="profile-section-title">About Me</h3>
              <p style={{ lineHeight: 1.6, color: "#4a5568" }}>{farmer.bio}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 16 }}>
                <div>
                  <strong style={{ color: "#2d3748" }}>Farm Size:</strong>
                  <div style={{ color: "#718096", marginTop: 4 }}>{farmer.farmSize}</div>
                </div>
                <div>
                  <strong style={{ color: "#2d3748" }}>Experience:</strong>
                  <div style={{ color: "#718096", marginTop: 4 }}>{farmer.experience} years</div>
                </div>
                <div>
                  <strong style={{ color: "#2d3748" }}>Phone:</strong>
                  <div style={{ color: "#718096", marginTop: 4 }}>{farmer.phone}</div>
                </div>
                <div>
                  <strong style={{ color: "#2d3748" }}>Email:</strong>
                  <div style={{ color: "#718096", marginTop: 4 }}>{farmer.email}</div>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h3 className="profile-section-title">Specialties</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {farmer.specialties.map(spec => (
                  <span key={spec} className="specialty-badge">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="profile-section">
              <h3 className="profile-section-title">Certifications</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {farmer.certifications.map(cert => (
                  <span key={cert} className="certification-badge">
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "crops" && (
          <div className="grid grid-4">
            {farmerCrops.map(c => (
              <div className="card" key={c.id}>
                <div className="card-img">
                  <img src={c.img} alt={c.name} />
                  <div className="card-badge">{c.badge}</div>
                </div>
                <div className="card-body">
                  <div className="card-name">{c.name}</div>
                  <div className="card-meta">
                    <div className="card-price">
                      ₹{c.price}<span>/{c.unit}</span>
                    </div>
                    <Stars rating={c.rating} size={14} />
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-light)", marginTop: 8 }}>
                    Available: {c.qty} {c.unit}
                  </div>
                </div>
                <div className="card-footer">
                  <button className="card-btn card-btn-primary">View Details</button>
                </div>
              </div>
            ))}
            {farmerCrops.length === 0 && (
              <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "40px 0", color: "#718096" }}>
                No crops listed yet
              </div>
            )}
          </div>
        )}

        {activeTab === "equipment" && (
          <div className="grid grid-4">
            {farmerEquipment.map(eq => (
              <div className="card" key={eq.id}>
                <div className="card-img">
                  <img src={eq.img} alt={eq.name} />
                  <div className={`card-badge ${eq.available ? "avail" : "unavail"}`}>
                    {eq.available ? "Available" : "Booked"}
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-name">{eq.name}</div>
                  <div className="card-meta">
                    <div className="card-price">
                      ₹{eq.priceDay}<span>/day</span>
                    </div>
                    <Stars rating={eq.rating} size={14} />
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-light)", marginTop: 8 }}>
                    ₹{eq.priceHour}/hour • {eq.power}
                  </div>
                </div>
                <div className="card-footer">
                  <button 
                    className="card-btn card-btn-primary"
                    onClick={() => {
                      setSelectedEquipment(eq);
                      setActiveTab("calendar");
                    }}
                  >
                    View Calendar
                  </button>
                </div>
              </div>
            ))}
            {farmerEquipment.length === 0 && (
              <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "40px 0", color: "#718096" }}>
                No equipment listed yet
              </div>
            )}
          </div>
        )}

        {activeTab === "calendar" && (
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            {selectedEquipment && (
              <div style={{ marginBottom: 24, padding: 20, background: "#f7fafc", borderRadius: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div className="equipment-preview-image-wrap"><img className="equipment-preview-image" src={selectedEquipment.img} alt={selectedEquipment.name} /></div>
                  <div>
                    <h3 style={{ margin: 0, marginBottom: 4 }}>{selectedEquipment.name}</h3>
                    <div style={{ color: "#718096", fontSize: "0.9rem" }}>
                      {selectedEquipment.power} • {selectedEquipment.location}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <RentalCalendar equipment={selectedEquipment || farmerEquipment[0]} />
          </div>
        )}
      </div>
    </div>
  );
};
