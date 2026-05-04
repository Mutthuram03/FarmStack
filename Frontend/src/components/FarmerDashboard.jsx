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
      <div className="sidebar shadow-lg">
        <div className="sidebar-user">
          <div className="sidebar-avatar">{user.avatar}</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{user.name}</h3>
          <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Premium Farmer</div>
        </div>
        <div className="sidebar-nav">
          {sideItems.map(s => (
            <button key={s.key} className={`sidebar-item ${tab === s.key ? "active" : ""}`} onClick={() => setTab(s.key)}>
              <Icon name={s.icon} size={20} />{s.label}
            </button>
          ))}
          <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
            <button className="sidebar-item" onClick={onLogout} style={{ color: "#ef4444" }}>
              <Icon name="logout" size={20} color="#ef4444" />Sign Out
            </button>
          </div>
        </div>
      </div>
      <div className="dash-main">
        {tab === "overview" && (
          <>
            <div style={{ marginBottom: 48 }}>
              <h1 className="page-title" style={{ fontSize: '2.5rem' }}>Good morning, {user.name.split(" ")[0]}!</h1>
              <p className="page-sub" style={{ marginBottom: 0 }}>Here's an overview of your farm's performance today.</p>
            </div>
            <div className="dash-stats">
              {[
                { icon: "📦", num: crops.length, label: "Active Crops" },
                { icon: "🚜", num: equipment.length, label: "Equipment" },
                { icon: "🛒", num: orders.length, label: "New Orders" },
                { icon: "📈", num: "₹1,075", label: "Weekly Revenue" },
              ].map(s => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-card-icon">{s.icon}</div>
                  <div className="stat-card-num">{s.num}</div>
                  <div className="stat-card-label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="dash-section" style={{ marginTop: 64 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: 0 }}>Recent Orders</h3>
                <button className="btn btn-secondary" onClick={() => setTab("orders")}>View All</button>
              </div>
              <div className="table-wrap">
                <table className="table">
                  <thead><tr><th>Order ID</th><th>Product</th><th>Customer</th><th>Amount</th><th>Status</th></tr></thead>
                  <tbody>
                    {orders.map(o => (
                      <tr key={o.id}>
                        <td style={{ fontFamily: "monospace", color: "var(--primary)", fontWeight: 700 }}>{o.id}</td>
                        <td>{o.product}</td>
                        <td>{o.customer}</td>
                        <td style={{ fontWeight: 800 }}>{o.amount}</td>
                        <td><span className={`status-pill status-${o.status.toLowerCase()}`}>{o.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {tab === "crops" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
              <div><h2 className="page-title">My Crop Listings</h2></div>
              <button className="btn btn-primary" onClick={() => setShowAddCrop(!showAddCrop)}><Icon name="plus" size={18} /> Add New Crop</button>
            </div>
            {showAddCrop && (
              <div className="card glass" style={{ padding: 48, marginBottom: 48, border: '1px solid var(--primary)' }}>
                <h3 style={{ marginBottom: 32, fontSize: '1.5rem' }}>➕ List a New Crop</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 32 }}>
                  <div className="form-group"><label className="form-label">Crop Name</label><input className="form-input" placeholder="e.g. Organic Tomatoes" value={newCrop.name} onChange={e => setNewCrop({ ...newCrop, name: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Category</label><select className="form-input" value={newCrop.category} onChange={e => setNewCrop({ ...newCrop, category: e.target.value })}>{CATEGORIES_CROP.slice(1).map(c => <option key={c}>{c}</option>)}</select></div>
                  <div className="form-group"><label className="form-label">Price (₹)</label><input className="form-input" type="number" placeholder="45" value={newCrop.price} onChange={e => setNewCrop({ ...newCrop, price: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Unit</label><select className="form-input" value={newCrop.unit} onChange={e => setNewCrop({ ...newCrop, unit: e.target.value })}><option>kg</option><option>dozen</option><option>bunch</option><option>piece</option><option>quintal</option></select></div>
                  <div className="form-group"><label className="form-label">Quantity</label><input className="form-input" type="number" placeholder="200" value={newCrop.qty} onChange={e => setNewCrop({ ...newCrop, qty: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Location</label><input className="form-input" placeholder="District, State" value={newCrop.location} onChange={e => setNewCrop({ ...newCrop, location: e.target.value })} /></div>
                </div>
                <div style={{ display: 'flex', gap: 16 }}>
                  <button className="btn btn-primary" onClick={addCrop} style={{ flex: 1 }}>✅ Publish Listing</button>
                  <button className="btn btn-outline" onClick={() => setShowAddCrop(false)}>Cancel</button>
                </div>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
              <div><h2 className="page-title">My Equipment</h2></div>
              <button className="btn btn-primary" onClick={() => setShowAddEq(!showAddEq)}><Icon name="plus" size={18} /> Add New Equipment</button>
            </div>
            {showAddEq && (
              <div className="card glass" style={{ padding: 48, marginBottom: 48, border: '1px solid var(--primary)' }}>
                <h3 style={{ marginBottom: 32, fontSize: '1.5rem' }}>➕ List Equipment for Rent</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 32 }}>
                  <div className="form-group"><label className="form-label">Equipment Name</label><input className="form-input" placeholder="e.g. John Deere Tractor" value={newEq.name} onChange={e => setNewEq({ ...newEq, name: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Category</label><select className="form-input" value={newEq.category} onChange={e => setNewEq({ ...newEq, category: e.target.value })}>{CATEGORIES_EQ.slice(1).map(c => <option key={c}>{c}</option>)}</select></div>
                  <div className="form-group"><label className="form-label">Daily Rate (₹)</label><input className="form-input" type="number" placeholder="2500" value={newEq.priceDay} onChange={e => setNewEq({ ...newEq, priceDay: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Hourly Rate (₹)</label><input className="form-input" type="number" placeholder="350" value={newEq.priceHour} onChange={e => setNewEq({ ...newEq, priceHour: e.target.value })} /></div>
                  <div className="form-group"><label className="form-label">Location</label><input className="form-input" placeholder="District, State" value={newEq.location} onChange={e => setNewEq({ ...newEq, location: e.target.value })} /></div>
                </div>
                <div style={{ display: 'flex', gap: 16 }}>
                  <button className="btn btn-primary" onClick={() => { if (!newEq.name) return; setEquipment([...equipment, { ...newEq, id: Date.now(), owner: user.name, ownerId: 1, rating: 4.5, reviews: 0, img: newEq.img || DEFAULT_EQUIPMENT_IMAGE, available: true, desc: "Newly listed equipment." }]); setNewEq({ name: "", priceDay: "", priceHour: "", category: "Tractor", location: "", img: "" }); setShowAddEq(false); }} style={{ flex: 1 }}>✅ Publish Equipment</button>
                  <button className="btn btn-outline" onClick={() => setShowAddEq(false)}>Cancel</button>
                </div>
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
            <h2 className="page-title" style={{ marginBottom: 48 }}>Recent Orders</h2>
            <div className="table-wrap">
              <table className="table">
                <thead><tr><th>Order ID</th><th>Product</th><th>Customer</th><th>Qty</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
                <tbody>
                  {orders.map(o => (
                    <tr key={o.id}>
                      <td style={{ fontFamily: "monospace", color: "var(--primary)", fontWeight: 700 }}>{o.id}</td>
                      <td>{o.product}</td>
                      <td>{o.customer}</td>
                      <td>{o.qty}</td>
                      <td style={{ fontWeight: 800 }}>{o.amount}</td>
                      <td>{o.date}</td>
                      <td><span className={`status-pill status-${o.status.toLowerCase()}`}>{o.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "rentals" && (
          <div className="dash-section">
            <h2 className="page-title" style={{ marginBottom: 48 }}>Rental Bookings</h2>
            <div className="table-wrap">
              <table className="table">
                <thead><tr><th>Rental ID</th><th>Equipment</th><th>Renter</th><th>Duration</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
                <tbody>
                  {rentals.map(r => (
                    <tr key={r.id}>
                      <td style={{ fontFamily: "monospace", color: "var(--primary)", fontWeight: 700 }}>{r.id}</td>
                      <td>{r.equipment}</td>
                      <td>{r.renter}</td>
                      <td>{r.days}</td>
                      <td style={{ fontWeight: 800 }}>{r.amount}</td>
                      <td>{r.date}</td>
                      <td><span className={`status-pill status-${r.status.toLowerCase()}`}>{r.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
