import { useState } from "react";
import { Icon } from "./Icon";
import { Stars } from "./Stars";
import { CROPS, EQUIPMENT, FARMERS } from "../data/mockData";

export const FarmerProfilePage = ({ farmerId, onBack, onMessage }) => {
  const [activeTab, setActiveTab] = useState("about");

  const farmer = FARMERS.find(f => f.id === farmerId);
  const farmerCrops = CROPS.filter(c => c.farmerId === farmerId);
  const farmerEquipment = EQUIPMENT.filter(e => e.ownerId === farmerId);

  if (!farmer) return <div className="page">Farmer not found</div>;

  return (
    <div className="page">

      <button
        className="card-btn card-btn-secondary"
        onClick={onBack}
        style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }}
      >
        ← Back to Farmers
      </button>

      <div className="farmer-profile-header">
        <div className="farmer-profile-avatar">{farmer.avatar}</div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <h1 className="page-title" style={{ margin: 0 }}>{farmer.name}</h1>

            {farmer.verified && (
              <span
                style={{
                  background: "#d4edda",
                  color: "#155724",
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: "0.8rem",
                  fontWeight: 600
                }}
              >
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
      </div>


      <div className="profile-content">

        {activeTab === "about" && (
          <div className="profile-about">

            <div className="profile-section">
              <h3 className="profile-section-title">About Me</h3>
              <p style={{ lineHeight: 1.6 }}>{farmer.bio}</p>
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
                      ₹{c.price}/{c.unit}
                    </div>
                    <Stars rating={c.rating} size={14} />
                  </div>
                </div>

                <div className="card-footer">
                  <button className="card-btn card-btn-primary">
                    View Details
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}


        {activeTab === "equipment" && (
          <div className="grid grid-4">

            {farmerEquipment.map(eq => (
              <div className="card" key={eq.id}>

                <div className="card-img">
                  <img src={eq.img} alt={eq.name} />
                </div>

                <div className="card-body">
                  <div className="card-name">{eq.name}</div>

                  <div className="card-meta">
                    <div className="card-price">
                      ₹{eq.priceDay}/day
                    </div>

                    <Stars rating={eq.rating} size={14} />
                  </div>

                  <div style={{ fontSize: "0.8rem", marginTop: 8 }}>
                    ₹{eq.priceHour}/hour • {eq.power}
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    className="card-btn card-btn-primary"
                    onClick={() => alert("Equipment booking coming soon")}
                  >
                    View Equipment
                  </button>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};