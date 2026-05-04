import { useState } from "react";
import { Icon } from "./Icon";
import { Stars } from "./Stars";
import { FARMERS } from "../data/mockData";

export const FarmersPage = ({ onViewProfile, onMessage }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredFarmers = FARMERS.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase()) &&
    f.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
  <div className="page">
    <div className="page-title">Our Farmers</div>
    <div className="page-sub">Verified and trusted farmers from across India</div>
    <div className="search-bar">
      <div className="search-input-wrap">
        <Icon name="search" color="#718096" />
        <input className="search-input" placeholder="Search farmer name or location..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <input className="search-input" style={{ flex: "0 0 200px", padding: "12px 16px", border: "1.5px solid var(--border)", borderRadius: 10, outline: "none", fontFamily: "inherit", background: "var(--cream)" }} placeholder="📍 Filter by state..." value={location} onChange={e => setLocation(e.target.value)} />
    </div>
    <div className="grid grid-3">
      {filteredFarmers.map(f => (
        <div className="farmer-card" key={f.id}>
          <div className="farmer-avatar">{f.avatar}</div>
          <div className="farmer-name">{f.name}</div>
          <div className="farmer-loc"><Icon name="map" size={12} /> {f.location}</div>
          <div className="farmer-meta">
            <div className="farmer-meta-item"><div className="farmer-meta-num">{f.crops}</div><div className="farmer-meta-label">Crops</div></div>
            <div className="farmer-meta-item"><div className="farmer-meta-num">{f.equipment}</div><div className="farmer-meta-label">Equipment</div></div>
            <div className="farmer-meta-item"><div className="farmer-meta-num">{f.rating}</div><div className="farmer-meta-label">Rating</div></div>
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-light)", marginBottom: 16, lineHeight: 1.5 }}>{f.bio}</div>
          <Stars rating={f.rating} />
          <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
            <button 
              className="card-btn card-btn-primary" 
              style={{ borderRadius: 8 }}
              onClick={() => onViewProfile && onViewProfile(f.id)}
            >
              View Profile
            </button>
            <button className="card-btn card-btn-secondary" style={{ borderRadius: 8 }} onClick={() => onMessage && onMessage(f)}>Message</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
