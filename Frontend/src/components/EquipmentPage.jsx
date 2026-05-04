import { useState } from "react";
import { Icon } from "./Icon";
import { EQUIPMENT, CATEGORIES_EQ } from "../data/mockData";

export const EquipmentPage = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("newest");

  const filtered = EQUIPMENT.filter(e =>
    (cat === "All" || e.category === cat) &&
    e.name.toLowerCase().includes(search.toLowerCase()) &&
    (location === "" || e.location.toLowerCase().includes(location.toLowerCase()))
  );

  // Apply sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-low") return a.priceDay - b.priceDay;
    if (sort === "price-high") return b.priceDay - a.priceDay;
    if (sort === "rating") return b.rating - a.rating;
    return 0; // newest - no sorting
  });

  return (
    <div className="page">
      <div className="page-title">Equipment Rental</div>
      <div className="page-sub">Access modern farm machinery from verified owners in your district</div>
      <div className="search-bar">
        <div className="search-input-wrap">
          <Icon name="search" size={20} color="var(--text-muted)" />
          <input className="search-input" placeholder="Search tractors, harvesters, sprayers..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <select className="filter-select" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="newest">Sort: Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
      <div className="cat-tabs">
        {CATEGORIES_EQ.map(c => <button key={c} className={`cat-tab ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      {sorted.length === 0 ? (
        <div className="empty-state"><div className="empty-state-icon">🔍</div><p>No equipment found matching your criteria.</p></div>
      ) : (
        <div className="grid grid-4">
          {sorted.map(eq => (
            <div className="card" key={eq.id}>
              <div className="card-img">
                <img src={eq.img} alt={eq.name} />
                <div className={`card-badge ${eq.available ? "avail" : "unavail"}`}>{eq.available ? "Available" : "Booked"}</div>
              </div>
              <div className="card-body">
                <div className="card-name">{eq.name}</div>
                <div className="card-farmer"><Icon name="user" size={14} />{eq.owner}</div>
                <div className="card-meta">
                  <div className="card-price">₹{eq.priceDay}<span>/day</span></div>
                  <div className="card-rating"><Icon name="star" size={14} color="#f59e0b" />{eq.rating}</div>
                </div>
                <div className="card-location"><Icon name="map" size={14} />{eq.location}</div>
              </div>
              <div className="card-footer">
                <button className="card-btn card-btn-primary" disabled={!eq.available} style={{ opacity: eq.available ? 1 : 0.6 }} onClick={() => eq.available && onSelect(eq, "equipment")}>
                  📅 {eq.available ? "Book Now" : "Unavailable"}
                </button>
                <button className="card-btn card-btn-secondary" onClick={() => onSelect(eq, "equipment")}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
