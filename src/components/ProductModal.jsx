import { Icon } from "./Icon";
import { Stars } from "./Stars";

export const ProductModal = ({ item, type, onClose, onAction, user }) => {
  const isEq = type === "equipment";

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal glassShadow">
        <div className="modal-hero">
          <img src={item.img} alt={item.name} className="modal-hero-img" />
          <button className="modal-close" onClick={onClose}>
            <Icon name="close" size={20} />
          </button>
        </div>
        <div className="modal-body">
          <div style={{ marginBottom: 16 }}>
            <span className="tag" style={{ marginRight: 8 }}>{item.category}</span>
            {item.badge && (
              <span className="tag" style={{ background: "var(--earth-light)", color: "var(--earth)" }}>
                {item.badge}
              </span>
            )}
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: 12 }}>{item.name}</h2>
          <div className="modal-farmer">
            <Icon name="user" size={18} /> listing by {isEq ? item.owner : item.farmer} · <Icon name="map" size={18} /> {item.location}
          </div>
          <p className="modal-desc">{item.desc}</p>
          
          <div className="modal-info-grid">
            <div className="modal-info-item">
              <div className="modal-info-label">{isEq ? "Daily Rate" : "Unit Price"}</div>
              <div className="modal-info-val" style={{ color: "var(--primary)", fontSize: "1.75rem" }}>
                {isEq ? `₹${item.priceDay}` : `₹${item.price}`}
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}> /{isEq ? 'day' : item.unit}</span>
              </div>
            </div>
            <div className="modal-info-item">
              <div className="modal-info-label">Rating</div>
              <div className="modal-info-val">
                <Icon name="star" size={18} color="#f59e0b" /> {item.rating} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>({item.reviews} reviews)</span>
              </div>
            </div>
            {!isEq && (
              <div className="modal-info-item">
                <div className="modal-info-label">Available Stock</div>
                <div className="modal-info-val">
                  {item.qty} {item.unit}
                </div>
              </div>
            )}
            {isEq && (
              <div className="modal-info-item">
                <div className="modal-info-label">Availability</div>
                <div className="modal-info-val" style={{ color: item.available ? "var(--primary)" : "#e53e3e" }}>
                  {item.available ? "✅ Ready to Rent" : "❌ Currently Booked"}
                </div>
              </div>
            )}
          </div>

          <div className="modal-actions">
            <button className="modal-btn modal-btn-main" onClick={() => onAction(item, isEq ? "rent" : "order")}>
              {isEq ? "📅 Schedule Rental" : "🛒 Add to Cart"}
            </button>
            <button className="modal-btn modal-btn-sec" onClick={onClose}>
              View Farmer Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
