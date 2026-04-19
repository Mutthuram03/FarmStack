import { useState } from "react";
import { REGISTERED_USERS } from "../data/mockData";
import { Icon } from "./Icon";

export const AuthPage = ({ onLogin, setToast, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("farmer");
  const [form, setForm] = useState({ name: "", email: "", password: "", location: "" });
  const [error, setError] = useState("");

  const handle = () => {
    setError("");
    
    // Validation
    if (!form.email || !form.password) {
      setError("Please fill in all required fields");
      return;
    }
    
    if (isLogin) {
      // Login validation
      const user = REGISTERED_USERS.find(u => u.email === form.email && u.password === form.password);
      
      if (!user) {
        setError("Invalid email or password");
        return;
      }
      
      if (!user.verified) {
        setError("Your account is not verified. Please contact support.");
        return;
      }
      
      if (user.role !== role) {
        setError(`This account is registered as a ${user.role}, not a ${role}`);
        return;
      }
      
      onLogin(user);
    } else {
      // Sign up validation
      if (!form.name || !form.location) {
        setError("Please fill in all required fields");
        return;
      }
      
      const existingUser = REGISTERED_USERS.find(u => u.email === form.email);
      if (existingUser) {
        setError("An account with this email already exists");
        return;
      }
      
      // Create new user (in real app, this would be saved to database)
      const newUser = {
        name: form.name,
        email: form.email,
        role,
        verified: false, // New accounts start unverified
        avatar: role === "farmer" ? "👨‍🌾" : "🧑‍💼"
      };
      
      setToast && setToast("Account created! Please wait for admin verification.");
      setIsLogin(true);
    }
  };

  return (
    <div className="auth-page" onClick={(e) => e.target === e.currentTarget && onClose && onClose()}>
      <div className="auth-card">
        {onClose && (
          <button className="modal-close" onClick={onClose} style={{ top: 32, right: 32 }}>
            <Icon name="close" size={24} />
          </button>
        )}
        <h2 style={{ fontSize: '2.5rem', marginBottom: 8 }}>{isLogin ? "Welcome Back" : "Join the Community"}</h2>
        <p className="page-sub" style={{ marginBottom: 40, fontSize: '1.1rem' }}>{isLogin ? "Sign in to access your FarmStack dashboard" : "Start connecting with farmers and customers today"}</p>
        
        {error && (
          <div style={{ 
            background: "#fff5f5", 
            border: "1px solid #feb2b2", 
            color: "#c53030", 
            padding: "12px 16px", 
            borderRadius: 8, 
            fontSize: "0.9rem",
            marginBottom: 16 
          }}>
            ⚠️ {error}
          </div>
        )}
        
        {isLogin && (
          <div style={{
            background: "#e6fffa",
            border: "1px solid #81e6d9",
            color: "#234e52",
            padding: "12px 16px",
            borderRadius: 8,
            fontSize: "0.85rem",
            marginBottom: 16
          }}>
            💡 Demo credentials:<br/>
            Farmer: ravi.kumar@farm.com / farmer123<br/>
            Customer: customer@demo.com / customer123
          </div>
        )}
        
        <div className="cat-tabs" style={{ marginBottom: 32 }}>
          <button className={`cat-tab ${role === "farmer" ? "active" : ""}`} onClick={() => setRole("farmer")} style={{ flex: 1 }}>🧑‍🌾 I'm a Farmer</button>
          <button className={`cat-tab ${role === "customer" ? "active" : ""}`} onClick={() => setRole("customer")} style={{ flex: 1 }}>🧑‍💼 I'm a Customer</button>
        </div>
        {!isLogin && (
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" placeholder="Ravi Kumar" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
        )}
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input className="form-input" type="email" placeholder="ravi@farm.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input className="form-input" type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        </div>
        {!isLogin && (
          <div className="form-group">
            <label className="form-label">Location / District</label>
            <input className="form-input" placeholder="e.g. Chengalpattu, Tamil Nadu" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
          </div>
        )}
        <button className="btn btn-primary" onClick={handle} style={{ width: '100%', padding: 18, marginTop: 16 }}>{isLogin ? "Sign In to Dashboard" : "Register Now"}</button>
        <div style={{ marginTop: 24, textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          {isLogin ? <>New to FarmStack? <a onClick={() => setIsLogin(false)} style={{ color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>Create Account</a></> : <>Already a member? <a onClick={() => setIsLogin(true)} style={{ color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>Sign In</a></>}
        </div>
      </div>
    </div>
  );
};
