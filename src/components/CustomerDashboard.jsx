import { useState } from "react";
import { Icon } from "./Icon";

export const CustomerDashboard = ({ user, onLogout }) => {
  const [tab, setTab] = useState("overview");
  
  const orders = [
    { id: "#ORD-A01", product: "Basmati Rice", farmer: "Suresh Patel", qty: "5 kg", amount: "₹425", status: "Delivered", date: "Mar 1" },
    { id: "#ORD-A02", product: "Alphonso Mangoes", farmer: "Priya Nair", qty: "2 dozen", amount: "₹700", status: "Confirmed", date: "Mar 5" },
    { id: "#ORD-A03", product: "Red Onions", farmer: "Meena Devi", qty: "10 kg", amount: "₹300", status: "Pending", date: "Mar 6" },
  ];

  return (
    <div className="dashboard-layout">
      <div className="sidebar shadow-lg">
        <div className="sidebar-user">
          <div className="sidebar-avatar">{user.avatar}</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{user.name}</h3>
          <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Member Since 2024</div>
        </div>
        <div className="sidebar-nav">
          {[
            { key: "overview", icon: "chart", label: "Dashboard" },
            { key: "orders", icon: "order", label: "My Orders" },
            { key: "history", icon: "list", label: "Order History" },
          ].map(s => (
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
        <div style={{ marginBottom: 48 }}>
          <h1 className="page-title" style={{ fontSize: '2.5rem' }}>Welcome, {user.name.split(" ")[0]}!</h1>
          <p className="page-sub" style={{ marginBottom: 0 }}>Track your orders and explore the latest harvest from local farmers.</p>
        </div>
        <div className="dash-stats">
          {[
            { icon: "🛍️", num: orders.length, label: "Total Orders" },
            { icon: "🚚", num: 1, label: "Delivered" },
            { icon: "⏳", num: 2, label: "In Progress" },
            { icon: "💳", num: "₹1,425", label: "Total Spent" },
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
            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: 0 }}>{tab === "history" ? "Purchase History" : "Active Orders"}</h3>
          </div>
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>Order ID</th><th>Product</th><th>Farmer</th><th>Qty</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o.id}>
                    <td style={{ fontFamily: "monospace", color: "var(--primary)", fontWeight: 700 }}>{o.id}</td>
                    <td>{o.product}</td>
                    <td>{o.farmer}</td>
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
      </div>
    </div>
  );
};
