import { Icon } from "./Icon";
import { Stars } from "./Stars";

export const ProductModal = ({ item, type, onClose, onAction, user }) => {
  const isEq = type === "equipment";

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-hero">
          <img src={item.img} alt={item.name} className="modal-hero-img" />
          <button className="modal-close" onClick={onClose}>
            <Icon name="close" size={16} />
          </button>
        </div>
        <div className="modal-body">
          <div style={{ marginBottom: 8 }}>
            <span className="tag">{item.category}</span>
            {item.badge && (
              <span className="tag" style={{ background: "var(--green-pale)", color: "var(--green-deep)" }}>
                {item.badge}
              </span>
            )}
          </div>
          <h2>{item.name}</h2>
          <div className="modal-farmer">
            by {isEq ? item.owner : item.farmer} · <Icon name="map" size={12} /> {item.location}
          </div>
          <p className="modal-desc">{item.desc}</p>
          <div className="modal-info-grid">
            <div className="modal-info-item">
              <div className="modal-info-label">Price</div>
              <div className="modal-info-val" style={{ color: "var(--green-mid)", fontSize: "1.3rem", fontFamily: "Playfair Display" }}>
                {isEq ? `₹${item.priceDay}/day` : `₹${item.price}/${item.unit}`}
              </div>
            </div>
            <div className="modal-info-item">
              <div className="modal-info-label">Rating</div>
              <div className="modal-info-val">
                <Stars rating={item.rating} /> ({item.reviews})
              </div>
            </div>
            {!isEq && (
              <div className="modal-info-item">
                <div className="modal-info-label">Available Qty</div>
                <div className="modal-info-val">
                  {item.qty} {item.unit}
                </div>
              </div>
            )}
            {isEq && (
              <div className="modal-info-item">
                <div className="modal-info-label">Hourly Rate</div>
                <div className="modal-info-val">₹{item.priceHour}/hr</div>
              </div>
            )}
            {isEq && (
              <div className="modal-info-item">
                <div className="modal-info-label">Status</div>
                <div className="modal-info-val" style={{ color: item.available ? "#38a169" : "#e53e3e" }}>
                  {item.available ? "✅ Available" : "❌ Booked"}
                </div>
              </div>
            )}
          </div>
          <div className="modal-actions">
            <button className="modal-btn modal-btn-main" onClick={() => onAction(item, isEq ? "rent" : "order")}>
              {isEq ? "📅 Request Rental" : "🛒 Place Order"}
            </button>
            <button className="modal-btn modal-btn-sec" onClick={onClose}>
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
