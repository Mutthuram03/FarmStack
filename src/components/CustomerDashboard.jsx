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
      <div className="sidebar">
        <div className="sidebar-user">
          <div className="sidebar-avatar">{user.avatar}</div>
          <div className="sidebar-name">{user.name}</div>
          <div className="sidebar-role">🧑‍💼 Customer</div>
        </div>
        <div className="sidebar-nav">
          {[
            { key: "overview", icon: "chart", label: "Overview" },
            { key: "orders", icon: "order", label: "My Orders" },
            { key: "history", icon: "list", label: "Purchase History" },
          ].map(s => (
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
        <div style={{ marginBottom: 24 }}>
          <div className="page-title">Welcome, {user.name.split(" ")[0]}! 👋</div>
          <div className="page-sub">Track your orders and discover fresh produce</div>
        </div>
        <div className="dash-stats">
          {[
            { icon: "📦", num: orders.length, label: "Total Orders" },
            { icon: "✅", num: 1, label: "Delivered" },
            { icon: "⏳", num: 2, label: "In Progress" },
            { icon: "💰", num: "₹1,425", label: "Total Spent" },
          ].map(s => (
            <div className="stat-card" key={s.label}>
              <div className="stat-card-icon">{s.icon}</div>
              <div className="stat-card-num">{s.num}</div>
              <div className="stat-card-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="dash-section">
          <div className="dash-section-title">{tab === "history" ? "Purchase History" : "Current Orders"}</div>
          <table className="table">
            <thead><tr><th>Order ID</th><th>Product</th><th>Farmer</th><th>Qty</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td style={{ fontFamily: "monospace", color: "var(--green-mid)" }}>{o.id}</td>
                  <td>{o.product}</td>
                  <td>{o.farmer}</td>
                  <td>{o.qty}</td>
                  <td style={{ fontWeight: 700 }}>{o.amount}</td>
                  <td>{o.date}</td>
                  <td><span className={`status-pill status-${o.status.toLowerCase()}`}>{o.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
