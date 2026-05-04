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
      <div className="page-title">Marketplace</div>
      <div className="page-sub">Buy fresh produce directly from certified Indian farmers</div>
      <div className="search-bar">
        <div className="search-input-wrap">
          <Icon name="search" size={20} color="var(--text-muted)" />
          <input className="search-input" placeholder="Search crops, vegetables, fruits..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <select className="filter-select" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="newest">Sort: Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
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
              <div className="card-img">
                <img src={c.img} alt={c.name} />
                <div className={`card-badge ${c.badge === 'Available' ? 'avail' : 'unavail'}`}>{c.badge}</div>
              </div>
              <div className="card-body">
                <div className="card-name">{c.name}</div>
                <div className="card-farmer"><Icon name="user" size={14} />{c.farmer}</div>
                <div className="card-meta">
                  <div className="card-price">₹{c.price}<span>/{c.unit}</span></div>
                  <div className="card-rating"><Icon name="star" size={14} color="#f59e0b" />{c.rating}</div>
                </div>
                <div className="card-location"><Icon name="map" size={14} />{c.location}</div>
              </div>
              <div className="card-footer">
                <button className="card-btn card-btn-primary" onClick={() => onSelect(c, "crop")}>🛒 Order Now</button>
                <button className="card-btn card-btn-secondary" onClick={() => onSelect(c, "crop")}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
