import { useEffect, useState } from "react";
import { css } from "./styles/styles";
import { HomePage } from "./components/HomePage";
import { MarketplacePage } from "./components/MarketplacePage";
import { EquipmentPage } from "./components/EquipmentPage";
import { FarmersPage } from "./components/FarmersPage";
import { AuthPage } from "./components/AuthPage";
import { FarmerDashboard } from "./components/FarmerDashboard";
import { CustomerDashboard } from "./components/CustomerDashboard";
import { FarmerProfilePage } from "./components/FarmerProfilePage";
import { MessageConversation } from "./components/MessageConversation";
import { CheckoutPage } from "./components/CheckoutPage";
import { ProductModal } from "./components/ProductModal";
import { Toast } from "./components/Toast";
import { IntroAnimation } from "./components/IntroAnimation";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [page, setPage] = useState("home");
  const [selectedFarmerId, setSelectedFarmerId] = useState(null);
  const [chatFarmer, setChatFarmer] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (user) return;
    const reminderTimer = setTimeout(() => {
      setToast({ msg: "🔐 Please login to place orders and book rentals.", duration: 5000 });
    }, 10000);

    return () => clearTimeout(reminderTimer);
  }, [user]);

  const handleAction = (item, actionType) => {
    setModal(null);
    setCheckout({ item, actionType });
    setPage("checkout");
  };

  const handleLogin = (u) => {
    setUser(u);
    setPage(u.role === "farmer" ? "farmer-dashboard" : "customer-dashboard");
    setToast(`Welcome back, ${u.name.split(" ")[0]}! 🌾`);
  };

  const handleViewProfile = (farmerId) => {
    setSelectedFarmerId(farmerId);
    setPage("farmer-profile");
  };

  const handleMessage = (farmer) => {
    setChatFarmer(farmer);
  };

  const navPages = [
    { key: "home", label: "Home" },
    { key: "marketplace", label: "Marketplace" },
    { key: "equipment", label: "Equipment" },
    { key: "farmers", label: "Farmers" },
  ];

  if (showIntro) {
    return (
      <>
        <style>{css}</style>
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      </>
    );
  }

  return (
    <>
      <style>{css}</style>

      <nav className="nav">
        <div className="nav-logo" onClick={() => setPage("home")}>🌿 Farm<span>Stack</span></div>
        <div className="nav-links">
          {navPages.map(p => (
            <button key={p.key} className={`nav-link ${page === p.key ? "active" : ""}`} onClick={() => setPage(p.key)}>{p.label}</button>
          ))}
        </div>
        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? "🌙" : "☀️"}
          </button>
          {user ? (
            <button className="btn btn-primary" onClick={() => setPage(user.role === "farmer" ? "farmer-dashboard" : "customer-dashboard")}>
              {user.avatar} Dashboard
            </button>
          ) : (
            <>
              <button className="btn btn-outline" onClick={() => setPage("auth")}>Login</button>
              <button className="btn btn-primary" onClick={() => setPage("auth")}>Sign Up</button>
            </>
          )}
        </div>
      </nav>

      {page === "home" && <HomePage setPage={setPage} user={user} />}
      {page === "marketplace" && <MarketplacePage onSelect={(item, type) => setModal({ item, type })} />}
      {page === "equipment" && <EquipmentPage onSelect={(item, type) => setModal({ item, type })} />}
      {page === "farmers" && <FarmersPage onViewProfile={handleViewProfile} onMessage={handleMessage} />}
      {page === "farmer-profile" && selectedFarmerId && (
        <FarmerProfilePage 
          farmerId={selectedFarmerId} 
          onBack={() => setPage("farmers")}
          onMessage={handleMessage}
        />
      )}
      {page === "auth" && <AuthPage onLogin={handleLogin} setToast={setToast} onClose={() => setPage("home")} />}
      {page === "checkout" && checkout && (
        <CheckoutPage
          checkout={checkout}
          onBack={() => {
            setCheckout(null);
            setPage(checkout.actionType === "rent" ? "equipment" : "marketplace");
          }}
          onPlaced={() => {
            setToast(checkout.actionType === "rent" ? `✅ Rental booking placed for ${checkout.item.name}!` : `🛒 Order placed for ${checkout.item.name}!`);
          }}
        />
      )}
      {page === "farmer-dashboard" && user && <FarmerDashboard user={user} onLogout={() => { setUser(null); setPage("home"); }} />}
      {page === "customer-dashboard" && user && <CustomerDashboard user={user} onLogout={() => { setUser(null); setPage("home"); }} />}

      {modal && (
        <ProductModal
          item={modal.item}
          type={modal.type}
          onClose={() => setModal(null)}
          onAction={handleAction}
          user={user}
        />
      )}

      {toast && (
        <Toast
          msg={typeof toast === "string" ? toast : toast.msg}
          duration={typeof toast === "string" ? 3000 : toast.duration}
          onClose={() => setToast(null)}
        />
      )}
      {chatFarmer && <MessageConversation farmer={chatFarmer} currentUser={user} onClose={() => setChatFarmer(null)} />}
    </>
  );
}
