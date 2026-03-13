import { useMemo, useState } from "react";

export const CheckoutPage = ({ checkout, onBack, onPlaced }) => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });
  const [error, setError] = useState("");
  const [placedInfo, setPlacedInfo] = useState(null);

  const isRental = checkout?.actionType === "rent";

  const totalText = useMemo(() => {
    if (!checkout?.item) return "₹0";
    if (isRental) return `₹${checkout.item.priceDay}/day`;
    return `₹${checkout.item.price}`;
  }, [checkout, isRental]);

  const handlePlace = () => {
    setError("");
    if (!form.fullName || !form.phone || !form.addressLine1 || !form.city || !form.state || !form.pincode) {
      setError("Please fill all required address details.");
      return;
    }

    const orderId = `${isRental ? "RNT" : "ORD"}-${Math.floor(100000 + Math.random() * 900000)}`;

    const info = {
      orderId,
      paymentMethod: "Cash on Delivery",
      createdAt: new Date().toLocaleString(),
    };

    setPlacedInfo(info);
    if (onPlaced) onPlaced(info);
  };

  if (!checkout?.item) {
    return (
      <div className="page">
        <div className="dash-section">
          <div className="dash-section-title">No item selected</div>
          <button className="submit-btn" onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  if (placedInfo) {
    return (
      <div className="page">
        <div className="checkout-success">
          <div className="checkout-success-icon">✅</div>
          <div className="page-title">{isRental ? "Rental Booking Placed" : "Order Placed"}</div>
          <div className="page-sub">Your {isRental ? "rental booking" : "order"} has been placed successfully.</div>

          <div className="checkout-summary-card">
            <div className="checkout-summary-row"><span>ID</span><strong>{placedInfo.orderId}</strong></div>
            <div className="checkout-summary-row"><span>Item</span><strong>{checkout.item.name}</strong></div>
            <div className="checkout-summary-row"><span>Amount</span><strong>{totalText}</strong></div>
            <div className="checkout-summary-row"><span>Payment</span><strong>{placedInfo.paymentMethod}</strong></div>
            <div className="checkout-summary-row"><span>Placed At</span><strong>{placedInfo.createdAt}</strong></div>
          </div>

          <div className="modal-actions" style={{ maxWidth: 420, margin: "20px auto 0" }}>
            <button className="modal-btn modal-btn-main" onClick={onBack}>Back to Marketplace</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <div className="page-title">{isRental ? "Rental Booking" : "Place Order"}</div>
          <div className="page-sub">Enter delivery address and confirm Cash on Delivery.</div>
        </div>
        <button className="card-btn card-btn-secondary" style={{ borderRadius: 8, maxWidth: 140 }} onClick={onBack}>← Back</button>
      </div>

      <div className="checkout-grid">
        <div className="dash-section" style={{ marginBottom: 0 }}>
          <div className="dash-section-title">Address Details</div>

          {error && <div className="auth-error">⚠️ {error}</div>}

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input className="form-input" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input className="form-input" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="form-group" style={{ gridColumn: "1 / -1" }}>
              <label className="form-label">Address Line 1 *</label>
              <input className="form-input" value={form.addressLine1} onChange={e => setForm({ ...form, addressLine1: e.target.value })} />
            </div>
            <div className="form-group" style={{ gridColumn: "1 / -1" }}>
              <label className="form-label">Address Line 2</label>
              <input className="form-input" value={form.addressLine2} onChange={e => setForm({ ...form, addressLine2: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">City *</label>
              <input className="form-input" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">State *</label>
              <input className="form-input" value={form.state} onChange={e => setForm({ ...form, state: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Pincode *</label>
              <input className="form-input" value={form.pincode} onChange={e => setForm({ ...form, pincode: e.target.value })} />
            </div>
          </div>

          <div style={{ marginTop: 8 }}>
            <label className="form-label">Payment Method</label>
            <select className="form-select" value={form.paymentMethod} onChange={e => setForm({ ...form, paymentMethod: e.target.value })}>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          <div style={{ marginTop: 18 }}>
            <button className="submit-btn" onClick={handlePlace}>{isRental ? "Confirm Rental Booking" : "Confirm Order"}</button>
          </div>
        </div>

        <div className="dash-section checkout-summary" style={{ marginBottom: 0 }}>
          <div className="dash-section-title">Summary</div>
          <div className="checkout-item-image-wrap">
            <img className="checkout-item-image" src={checkout.item.img} alt={checkout.item.name} />
          </div>
          <div className="checkout-item-name">{checkout.item.name}</div>
          <div className="checkout-summary-row"><span>Type</span><strong>{isRental ? "Rental" : "Product Order"}</strong></div>
          <div className="checkout-summary-row"><span>Amount</span><strong>{totalText}</strong></div>
          <div className="checkout-summary-row"><span>Payment</span><strong>Cash on Delivery</strong></div>
        </div>
      </div>
    </div>
  );
};
