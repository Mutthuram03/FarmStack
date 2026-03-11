import { useState } from "react";
import { Icon } from "./Icon";
import { CROPS, CATEGORIES_CROP } from "../data/mockData";

export const MarketplacePage = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("newest");

  const filtered = CROPS.filter(c =>
    (cat === "All" || c.category === cat) &&
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (location === "" || c.location.toLowerCase().includes(location.toLowerCase()))
  );

  // Apply sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-low") return a.price - b.price;
    if (sort === "price-high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0; // newest - no sorting
  });

  return (
    <div className="page">
      <div className="page-title">Crop Marketplace</div>
      <div className="page-sub">Buy fresh produce directly from certified farmers</div>
      <div className="search-bar">
        <div className="search-input-wrap">
          <Icon name="search" color="#718096" />
          <input className="search-input" placeholder="Search crops, vegetables, fruits..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <input className="search-input" style={{ flex: "0 0 200px", padding: "12px 16px", border: "1.5px solid var(--border)", borderRadius: 10, outline: "none", fontFamily: "inherit", background: "var(--cream)" }} placeholder="📍 Filter by location..." value={location} onChange={e => setLocation(e.target.value)} />
        <select className="filter-select" value={sort} onChange={e => setSort(e.target.value)}><option value="newest">Sort: Newest</option><option value="price-low">Price: Low-High</option><option value="price-high">Price: High-Low</option><option value="rating">Top Rated</option></select>
      </div>
      <div className="cat-tabs">
        {CATEGORIES_CROP.map(c => <button key={c} className={`cat-tab ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      {sorted.length === 0 ? (
        <div className="empty-state"><div className="empty-state-icon">🔍</div><p>No crops found matching your criteria.</p></div>
      ) : (
        <div className="grid grid-4">
          {sorted.map(c => (
            <div className="card" key={c.id}>
              <div className="card-img"><img src={c.img} alt={c.name} /><div className="card-badge">{c.badge}</div></div>
              <div className="card-body">
                <div className="card-name">{c.name}</div>
                <div className="card-farmer"><Icon name="user" size={12} />{c.farmer}</div>
                <div className="card-meta">
                  <div className="card-price">₹{c.price}<span>/{c.unit}</span></div>
                  <div className="card-rating"><Icon name="star" size={12} color="#f6ad55" />{c.rating} ({c.reviews})</div>
                </div>
                <div className="card-location"><Icon name="map" size={12} />{c.location}</div>
              </div>
              <div className="card-footer">
                <button className="card-btn card-btn-primary" onClick={() => onSelect(c, "crop")}>🛒 Order Now</button>
                <button className="card-btn card-btn-secondary" onClick={() => onSelect(c, "crop")}>Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
