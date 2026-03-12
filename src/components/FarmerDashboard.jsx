import { useState } from "react";
import { Icon } from "./Icon";
import { CROPS, EQUIPMENT, CATEGORIES_CROP, CATEGORIES_EQ, DEFAULT_CROP_IMAGE, DEFAULT_EQUIPMENT_IMAGE } from "../data/mockData";

export const FarmerDashboard = ({ user, onLogout }) => {
  const [tab, setTab] = useState("overview");
  const [showAddCrop, setShowAddCrop] = useState(false);
  const [showAddEq, setShowAddEq] = useState(false);
  const [crops, setCrops] = useState(CROPS.filter(c => c.farmerId === 1));
  const [equipment, setEquipment] = useState(EQUIPMENT.filter(e => e.ownerId === 1));
  const [newCrop, setNewCrop] = useState({ name: "", price: "", qty: "", unit: "kg", category: "Vegetables", location: "", img: "" });
  const [newEq, setNewEq] = useState({ name: "", priceDay: "", priceHour: "", category: "Tractor", location: "", img: "" });

  const orders = [
    { id: "#ORD-001", product: "Organic Tomatoes", customer: "Anjali M.", qty: "10 kg", amount: "₹450", status: "Confirmed", date: "Mar 5" },
    { id: "#ORD-002", product: "Sweet Corn", customer: "Kiran R.", qty: "20 pcs", amount: "₹400", status: "Pending", date: "Mar 6" },
    { id: "#ORD-003", product: "Organic Tomatoes", customer: "Venkat S.", qty: "5 kg", amount: "₹225", status: "Delivered", date: "Mar 3" },
  ];
  
  const rentals = [
    { id: "#RNT-001", equipment: "John Deere 5050D", renter: "Suresh P.", days: "2 days", amount: "₹5,000", status: "Confirmed", date: "Mar 7" },
    { id: "#RNT-002", equipment: "Sweet Corn", renter: "Meena D.", days: "1 day", amount: "₹2,500", status: "Pending", date: "Mar 8" },
  ];

  const addCrop = () => {
    if (!newCrop.name) return;
    setCrops([...crops, { ...newCrop, id: Date.now(), farmer: user.name, farmerId: 1, rating: 4.5, reviews: 0, img: newCrop.img || DEFAULT_CROP_IMAGE, badge: "New", desc: "Freshly listed crop." }]);
    setNewCrop({ name: "", price: "", qty: "", unit: "kg", category: "Vegetables", location: "", img: "" });
    setShowAddCrop(false);
  };

  const handleCropImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setNewCrop(prev => ({ ...prev, img: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const handleEquipmentImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setNewEq(prev => ({ ...prev, img: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const sideItems = [
    { key: "overview", icon: "chart", label: "Overview" },
    { key: "crops", icon: "box", label: "My Crops" },
    { key: "equipment", icon: "tractor", label: "My Equipment" },
    { key: "orders", icon: "order", label: "Orders" },
    { key: "rentals", icon: "list", label: "Rentals" },
  ];

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <div className="sidebar-user">
          <div className="sidebar-avatar">{user.avatar}</div>
          <div className="sidebar-name">{user.name}</div>
          <div className="sidebar-role">🌾 Farmer</div>
        </div>
        <div className="sidebar-nav">
          {sideItems.map(s => (
            <button key={s.key} className={`sidebar-item ${tab === s.key ? "active" : ""}`} onClick={() => setTab(s.key)}>
              <Icon name={s.icon} size={16} />{s.label}
            </button>
          ))}
          <button className="sidebar-item" onClick={onLogout} style={{ marginTop: 16, color: "#e53e3e" }}>
            <Icon name="logout" size={16} color="#e53e3e" />Logout
          </button>
        </div>
      </div>
      <div className="dash-main">
        {tab === "overview" && (
          <>
            <div style={{ marginBottom: 24 }}>
              <div className="page-title">Good morning, {user.name.split(" ")[0]}! 🌤️</div>
              <div className="page-sub">Here's what's happening on your farm today</div>
            </div>
            <div className="dash-stats">
              {[
                { icon: "🌽", num: crops.length, label: "Crops Listed" },
                { icon: "🚜", num: equipment.length, label: "Equipment Listed" },
                { icon: "📦", num: orders.length, label: "Total Orders" },
                { icon: "💰", num: "₹1,075", label: "This Week" },
              ].map(s => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-card-icon">{s.icon}</div>
                  <div className="stat-card-num">{s.num}</div>
                  <div className="stat-card-label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="dash-section">
              <div className="dash-section-title">Recent Orders</div>
              <table className="table">
                <thead><tr><th>Order ID</th><th>Product</th><th>Customer</th><th>Amount</th><th>Status</th></tr></thead>
                <tbody>
                  {orders.map(o => (
                    <tr key={o.id}>
                      <td style={{ fontFamily: "monospace", color: "var(--green-mid)" }}>{o.id}</td>
                      <td>{o.product}</td>
                      <td>{o.customer}</td>
                      <td style={{ fontWeight: 700 }}>{o.amount}</td>
                      <td><span className={`status-pill status-${o.status.toLowerCase()}`}>{o.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {tab === "crops" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div><div className="page-title">My Crop Listings</div></div>
              <button className="submit-btn" onClick={() => setShowAddCrop(!showAddCrop)}><Icon name="plus" size={14} color="white" /> Add Crop</button>
            </div>
            {showAddCrop && (
              <div className="add-form">
                <div className="add-form-title">➕ List a New Crop</div>
                <div className="form-row">
                  <div className="form-group"><label className="form-label">Crop Name</label><input className="form-input" placeholder="e.g. Organic Tomatoes" value={newCrop.name} onChange={e => setNewCrop({ ...newCrop, name: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Category</label><select className="form-select" value={newCrop.category} onChange={e => setNewCrop({ ...newCrop, category: e.target.value })}>{CATEGORIES_CROP.slice(1).map(c => <option key={c}>{c}</option>)}</select></div>
                  <div className="form-group"><label className="form-label">Price (₹)</label><input className="form-input" type="number" placeholder="45" value={newCrop.price} onChange={e => setNewCrop({ ...newCrop, price: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Unit</label><select className="form-select" value={newCrop.unit} onChange={e => setNewCrop({ ...newCrop, unit: e.target.value })}><option>kg</option><option>dozen</option><option>bunch</option><option>piece</option><option>quintal</option></select></div>
                  <div className="form-group"><label className="form-label">Quantity</label><input className="form-input" type="number" placeholder="200" value={newCrop.qty} onChange={e => setNewCrop({ ...newCrop, qty: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Location</label><input className="form-input" placeholder="District, State" value={newCrop.location} onChange={e => setNewCrop({ ...newCrop, location: e.target.value })} /></div>
                  <div className="form-group">
                    <label className="form-label">Product Image</label>
                    <input className="form-input" type="file" accept="image/*" onChange={handleCropImageUpload} />
                  </div>
                  <div className="form-group"><label className="form-label">Image URL (optional)</label><input className="form-input" placeholder="https://..." value={newCrop.img} onChange={e => setNewCrop({ ...newCrop, img: e.target.value })} /></div>
                </div>
                <button className="submit-btn" onClick={addCrop}>✅ Publish Listing</button>
              </div>
            )}
            <div className="grid grid-4">
              {crops.map(c => (
                <div className="card" key={c.id}>
                  <div className="card-img"><img src={c.img || DEFAULT_CROP_IMAGE} alt={c.name} /><div className="card-badge">{c.badge}</div></div>
                  <div className="card-body">
                    <div className="card-name">{c.name}</div>
                    <div className="card-meta">
                      <div className="card-price">₹{c.price}<span>/{c.unit}</span></div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>Qty: {c.qty}</div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="card-btn card-btn-secondary">✏️ Edit</button>
                    <button className="card-btn" style={{ background: "#fff5f5", color: "#e53e3e" }} onClick={() => setCrops(crops.filter(x => x.id !== c.id))}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "equipment" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div><div className="page-title">My Equipment</div></div>
              <button className="submit-btn" onClick={() => setShowAddEq(!showAddEq)}><Icon name="plus" size={14} color="white" /> Add Equipment</button>
            </div>
            {showAddEq && (
              <div className="add-form">
                <div className="add-form-title">➕ List Equipment for Rent</div>
                <div className="form-row">
                  <div className="form-group"><label className="form-label">Equipment Name</label><input className="form-input" placeholder="e.g. John Deere Tractor" value={newEq.name} onChange={e => setNewEq({ ...newEq, name: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Category</label><select className="form-select" value={newEq.category} onChange={e => setNewEq({ ...newEq, category: e.target.value })}>{CATEGORIES_EQ.slice(1).map(c => <option key={c}>{c}</option>)}</select></div>
                  <div className="form-group"><label className="form-label">Daily Rate (₹)</label><input className="form-input" type="number" placeholder="2500" value={newEq.priceDay} onChange={e => setNewEq({ ...newEq, priceDay: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Hourly Rate (₹)</label><input className="form-input" type="number" placeholder="350" value={newEq.priceHour} onChange={e => setNewEq({ ...newEq, priceHour: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Location</label><input className="form-input" placeholder="District, State" value={newEq.location} onChange={e => setNewEq({ ...newEq, location: e.target.value })} /></div>
                  <div className="form-group">
                    <label className="form-label">Equipment Image</label>
                    <input className="form-input" type="file" accept="image/*" onChange={handleEquipmentImageUpload} />
                  </div>
                  <div className="form-group"><label className="form-label">Image URL (optional)</label><input className="form-input" placeholder="https://..." value={newEq.img} onChange={e => setNewEq({ ...newEq, img: e.target.value })} /></div>
                </div>
                <button className="submit-btn" onClick={() => { if (!newEq.name) return; setEquipment([...equipment, { ...newEq, id: Date.now(), owner: user.name, ownerId: 1, rating: 4.5, reviews: 0, img: newEq.img || DEFAULT_EQUIPMENT_IMAGE, available: true, desc: "Newly listed equipment." }]); setNewEq({ name: "", priceDay: "", priceHour: "", category: "Tractor", location: "", img: "" }); setShowAddEq(false); }}>✅ Publish</button>
              </div>
            )}
            <div className="grid grid-4">
              {equipment.map(eq => (
                <div className="card" key={eq.id}>
                  <div className="card-img"><img src={eq.img || DEFAULT_EQUIPMENT_IMAGE} alt={eq.name} /><div className={`card-badge ${eq.available ? "avail" : "unavail"}`}>{eq.available ? "Available" : "Booked"}</div></div>
                  <div className="card-body">
                    <div className="card-name">{eq.name}</div>
                    <div className="card-meta">
                      <div className="card-price">₹{eq.priceDay}<span>/day</span></div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>₹{eq.priceHour}/hr</div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="card-btn card-btn-secondary">✏️ Edit</button>
                    <button className="card-btn" style={{ background: "#fff5f5", color: "#e53e3e" }} onClick={() => setEquipment(equipment.filter(x => x.id !== eq.id))}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "orders" && (
          <div className="dash-section">
            <div className="dash-section-title">All Orders Received</div>
            <table className="table">
              <thead><tr><th>Order ID</th><th>Product</th><th>Customer</th><th>Qty</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o.id}>
                    <td style={{ fontFamily: "monospace", color: "var(--green-mid)" }}>{o.id}</td>
                    <td>{o.product}</td>
                    <td>{o.customer}</td>
                    <td>{o.qty}</td>
                    <td style={{ fontWeight: 700 }}>{o.amount}</td>
                    <td>{o.date}</td>
                    <td><span className={`status-pill status-${o.status.toLowerCase()}`}>{o.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "rentals" && (
          <div className="dash-section">
            <div className="dash-section-title">Rental Bookings</div>
            <table className="table">
              <thead><tr><th>Rental ID</th><th>Equipment</th><th>Renter</th><th>Duration</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
              <tbody>
                {rentals.map(r => (
                  <tr key={r.id}>
                    <td style={{ fontFamily: "monospace", color: "var(--green-mid)" }}>{r.id}</td>
                    <td>{r.equipment}</td>
                    <td>{r.renter}</td>
                    <td>{r.days}</td>
                    <td style={{ fontWeight: 700 }}>{r.amount}</td>
                    <td>{r.date}</td>
                    <td><span className={`status-pill status-${r.status.toLowerCase()}`}>{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
