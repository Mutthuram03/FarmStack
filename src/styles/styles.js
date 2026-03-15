export const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --green-deep: #1a4a2e;
    --green-mid: #2d6a4f;
    --green-light: #52b788;
    --green-pale: #d8f3dc;
    --earth: #8b5e3c;
    --earth-light: #c9a87c;
    --earth-pale: #f5ebe0;
    --cream: #fefae0;
    --white: #ffffff;
    --text-dark: #1a1a1a;
    --text-mid: #4a5568;
    --text-light: #718096;
    --border: #e2e8f0;
    --shadow: 0 4px 24px rgba(26,74,46,0.10);
    --shadow-lg: 0 12px 48px rgba(26,74,46,0.16);
    --radius: 16px;
    --radius-sm: 10px;
  }

  body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--text-dark); }

  /* NAV */
  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(26,74,46,0.97);
    backdrop-filter: blur(12px);
    padding: 0 24px;
    display: flex; align-items: center; justify-content: space-between;
    height: 64px;
    box-shadow: 0 2px 20px rgba(0,0,0,0.2);
  }
  .nav-logo { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--cream); cursor: pointer; display: flex; align-items: center; gap: 8px; }
  .nav-logo span { color: var(--green-light); }
  .nav-links { display: flex; gap: 4px; }
  .nav-link { padding: 8px 16px; border-radius: 8px; color: rgba(255,255,255,0.8); cursor: pointer; font-size: 0.9rem; font-weight: 500; transition: all 0.2s; border: none; background: none; }
  .nav-link:hover, .nav-link.active { background: rgba(255,255,255,0.15); color: white; }
  .nav-actions { display: flex; gap: 10px; align-items: center; }
  .btn-nav { padding: 8px 20px; border-radius: 8px; font-size: 0.875rem; font-weight: 600; cursor: pointer; transition: all 0.2s; border: none; }
  .btn-outline { background: transparent; border: 1.5px solid rgba(255,255,255,0.5); color: white; }
  .btn-outline:hover { background: rgba(255,255,255,0.1); }
  .btn-primary { background: var(--green-light); color: var(--green-deep); }
  .btn-primary:hover { background: #74c69d; transform: translateY(-1px); }

  /* HERO */
  .hero {
    background: linear-gradient(135deg, var(--green-deep) 0%, var(--green-mid) 60%, #40916c 100%);
    padding: 80px 24px 100px;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .hero-inner { max-width: 1100px; margin: 0 auto; text-align: center; position: relative; }
  .hero-tag { display: inline-block; background: rgba(255,255,255,0.15); color: var(--green-pale); padding: 6px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px; }
  .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 6vw, 4rem); color: white; line-height: 1.15; margin-bottom: 20px; }
  .hero h1 em { color: var(--green-light); font-style: normal; }
  .hero p { font-size: 1.1rem; color: rgba(255,255,255,0.8); max-width: 580px; margin: 0 auto 36px; line-height: 1.7; }
  .hero-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .hero-btn { padding: 14px 32px; border-radius: 12px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.25s; border: none; }
  .hero-btn-main { background: var(--green-light); color: var(--green-deep); }
  .hero-btn-main:hover { background: #74c69d; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(82,183,136,0.4); }
  .hero-btn-sec { background: transparent; border: 2px solid rgba(255,255,255,0.4); color: white; }
  .hero-btn-sec:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
  .hero-stats { display: flex; gap: 40px; justify-content: center; margin-top: 56px; flex-wrap: wrap; }
  .hero-stat { text-align: center; }
  .hero-stat-num { font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--green-light); font-weight: 700; }
  .hero-stat-label { font-size: 0.8rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.06em; }

  /* LAYOUT */
  .page { max-width: 1200px; margin: 0 auto; padding: 40px 24px; }
  .page-title { font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--green-deep); margin-bottom: 8px; }
  .page-sub { color: var(--text-light); margin-bottom: 32px; }

  /* SEARCH BAR */
  .search-bar { background: white; border-radius: var(--radius); padding: 20px 24px; box-shadow: var(--shadow); display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 32px; align-items: center; }
  .search-input-wrap { flex: 1; min-width: 200px; position: relative; }
  .search-input-wrap svg { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-light); width: 18px; height: 18px; }
  .search-input { width: 100%; padding: 12px 16px 12px 44px; border: 1.5px solid var(--border); border-radius: 10px; font-size: 0.95rem; font-family: inherit; outline: none; transition: border-color 0.2s; background: var(--cream); }
  .search-input:focus { border-color: var(--green-light); background: white; }
  .filter-select { padding: 12px 16px; border: 1.5px solid var(--border); border-radius: 10px; font-size: 0.9rem; font-family: inherit; outline: none; background: var(--cream); cursor: pointer; color: var(--text-mid); min-width: 140px; }
  .filter-select:focus { border-color: var(--green-light); }
  .search-btn { padding: 12px 24px; background: var(--green-mid); color: white; border: none; border-radius: 10px; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
  .search-btn:hover { background: var(--green-deep); }

  /* CATEGORY TABS */
  .cat-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
  .cat-tab { padding: 8px 18px; border-radius: 20px; border: 1.5px solid var(--border); font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.2s; background: white; color: var(--text-mid); }
  .cat-tab:hover { border-color: var(--green-light); color: var(--green-mid); }
  .cat-tab.active { background: var(--green-mid); color: white; border-color: var(--green-mid); }

  /* GRID */
  .grid { display: grid; gap: 24px; }
  .grid-4 { grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); }
  .grid-3 { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }

  /* PRODUCT CARD */
  .card { background: white; border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; transition: all 0.3s; cursor: pointer; border: 1px solid transparent; }
  .card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--green-pale); }
  .card-img { background: linear-gradient(135deg, var(--green-pale), var(--earth-pale)); height: 160px; display: flex; align-items: center; justify-content: center; font-size: 4rem; position: relative; overflow: hidden; }
  .card-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .card-badge { position: absolute; top: 12px; left: 12px; background: var(--green-deep); color: white; padding: 3px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em; }
  .card-badge.avail { background: #38a169; }
  .card-badge.unavail { background: #e53e3e; }
  .card-body { padding: 18px; }
  .card-name { font-weight: 700; font-size: 1rem; margin-bottom: 4px; color: var(--text-dark); }
  .card-farmer { font-size: 0.82rem; color: var(--text-light); margin-bottom: 10px; display: flex; align-items: center; gap: 5px; }
  .card-meta { display: flex; justify-content: space-between; align-items: flex-end; }
  .card-price { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--green-mid); font-weight: 700; }
  .card-price span { font-family: 'DM Sans', sans-serif; font-size: 0.8rem; color: var(--text-light); font-weight: 400; }
  .card-rating { display: flex; align-items: center; gap: 4px; font-size: 0.82rem; color: var(--text-mid); }
  .card-location { font-size: 0.8rem; color: var(--text-light); margin-top: 8px; display: flex; align-items: center; gap: 4px; }
  .card-footer { padding: 14px 18px; border-top: 1px solid var(--border); display: flex; gap: 10px; }
  .card-btn { flex: 1; padding: 10px; border-radius: 8px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s; border: none; text-align: center; }
  .card-btn-primary { background: var(--green-mid); color: white; }
  .card-btn-primary:hover { background: var(--green-deep); }
  .card-btn-secondary { background: var(--green-pale); color: var(--green-deep); }
  .card-btn-secondary:hover { background: #b7e4c7; }

  /* FEATURES SECTION */
  .features { padding: 60px 24px; background: white; }
  .features-inner { max-width: 1100px; margin: 0 auto; }
  .section-label { text-align: center; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--green-light); margin-bottom: 12px; }
  .section-title { text-align: center; font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 4vw, 2.4rem); color: var(--green-deep); margin-bottom: 48px; }
  .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 28px; }
  .feature-card { padding: 32px 24px; border-radius: var(--radius); border: 1.5px solid var(--border); transition: all 0.3s; }
  .feature-card:hover { border-color: var(--green-light); box-shadow: var(--shadow); transform: translateY(-3px); }
  .feature-icon { font-size: 2.4rem; margin-bottom: 16px; }
  .feature-title { font-weight: 700; font-size: 1rem; margin-bottom: 8px; color: var(--green-deep); }
  .feature-desc { font-size: 0.875rem; color: var(--text-light); line-height: 1.6; }

  /* HOW IT WORKS */
  .hiw { padding: 60px 24px; background: var(--green-pale); }
  .hiw-inner { max-width: 900px; margin: 0 auto; }
  .hiw-steps { display: flex; gap: 0; flex-wrap: wrap; justify-content: center; }
  .hiw-step { flex: 1; min-width: 180px; text-align: center; padding: 24px 20px; position: relative; }
  .hiw-step-num { width: 48px; height: 48px; border-radius: 50%; background: var(--green-mid); color: white; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; margin: 0 auto 16px; }
  .hiw-step-title { font-weight: 700; font-size: 0.9rem; color: var(--green-deep); margin-bottom: 6px; }
  .hiw-step-desc { font-size: 0.8rem; color: var(--text-mid); line-height: 1.5; }

  /* MODAL */
  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 0; animation: fadeIn 0.2s ease; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .modal { background: white; border-radius: 0; max-width: 100%; width: 100%; height: 100vh; max-height: 100vh; overflow-y: auto; animation: slideUp 0.3s ease; }
  @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  .modal-hero { height: 300px; background: linear-gradient(135deg, var(--green-pale), var(--earth-pale)); display: flex; align-items: center; justify-content: center; font-size: 6rem; border-radius: 0; position: relative; overflow: hidden; }
  .modal-hero-img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .modal-close { position: absolute; top: 16px; right: 16px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.8); border: none; cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; }
  .modal-body { padding: 40px; max-width: 900px; margin: 0 auto; }
  .modal-body h2 { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: var(--green-deep); margin-bottom: 6px; }
  .modal-farmer { color: var(--text-light); font-size: 0.9rem; margin-bottom: 16px; }
  .modal-desc { color: var(--text-mid); line-height: 1.7; margin-bottom: 20px; font-size: 0.95rem; }
  .modal-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
  .modal-info-item { background: var(--cream); padding: 14px; border-radius: 10px; }
  .modal-info-label { font-size: 0.75rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
  .modal-info-val { font-weight: 700; color: var(--text-dark); font-size: 0.95rem; }
  .modal-actions { display: flex; gap: 12px; }
  .modal-btn { flex: 1; padding: 14px; border-radius: 12px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s; border: none; }
  .modal-btn-main { background: var(--green-mid); color: white; }
  .modal-btn-main:hover { background: var(--green-deep); }
  .modal-btn-sec { background: var(--green-pale); color: var(--green-deep); }

  /* DASHBOARD */
  .dashboard-layout { display: grid; grid-template-columns: 240px 1fr; gap: 28px; max-width: 1200px; margin: 0 auto; padding: 32px 24px; min-height: calc(100vh - 64px); }
  .sidebar { background: white; border-radius: var(--radius); box-shadow: var(--shadow); padding: 24px 16px; height: fit-content; position: sticky; top: 80px; }
  .sidebar-user { text-align: center; padding-bottom: 20px; border-bottom: 1px solid var(--border); margin-bottom: 16px; }
  .sidebar-avatar { font-size: 3rem; margin-bottom: 8px; }
  .sidebar-name { font-weight: 700; font-size: 0.95rem; color: var(--text-dark); }
  .sidebar-role { font-size: 0.75rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 0.06em; }
  .sidebar-nav { display: flex; flex-direction: column; gap: 4px; }
  .sidebar-item { padding: 10px 14px; border-radius: 10px; cursor: pointer; font-size: 0.875rem; font-weight: 500; color: var(--text-mid); display: flex; align-items: center; gap: 10px; transition: all 0.2s; border: none; background: none; text-align: left; width: 100%; }
  .sidebar-item:hover { background: var(--green-pale); color: var(--green-mid); }
  .sidebar-item.active { background: var(--green-mid); color: white; }
  .dash-main { }
  .dash-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; margin-bottom: 28px; }
  .stat-card { background: white; border-radius: var(--radius-sm); padding: 20px; box-shadow: var(--shadow); }
  .stat-card-num { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; color: var(--green-mid); }
  .stat-card-label { font-size: 0.8rem; color: var(--text-light); margin-top: 2px; }
  .stat-card-icon { font-size: 1.5rem; margin-bottom: 8px; }
  .dash-section { background: white; border-radius: var(--radius); box-shadow: var(--shadow); padding: 24px; margin-bottom: 24px; }
  .dash-section-title { font-weight: 700; font-size: 1rem; color: var(--text-dark); margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }
  .table { width: 100%; border-collapse: collapse; }
  .table th { text-align: left; padding: 10px 14px; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-light); border-bottom: 1px solid var(--border); }
  .table td { padding: 14px; font-size: 0.875rem; border-bottom: 1px solid var(--border); color: var(--text-mid); }
  .table tr:last-child td { border-bottom: none; }
  .status-pill { display: inline-block; padding: 3px 10px; border-radius: 10px; font-size: 0.75rem; font-weight: 600; }
  .status-confirmed { background: #c6f6d5; color: #276749; }
  .status-pending { background: #fefcbf; color: #744210; }
  .status-delivered { background: #bee3f8; color: #2a4365; }

  /* AUTH */
  .auth-page { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, 0.7); z-index: 150; backdrop-filter: blur(8px); }
  .auth-card { background: white; border-radius: 24px; padding: 48px 56px; max-width: 580px; width: 90%; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); transform: scale(1); animation: authPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); position: relative; }
  @keyframes authPop { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  .auth-close { position: absolute; top: 20px; right: 20px; width: 36px; height: 36px; border-radius: 50%; background: var(--cream); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; color: var(--text-mid); }
  .auth-close:hover { background: var(--border); transform: rotate(90deg); }
  .auth-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--green-deep); margin-bottom: 6px; }
  .auth-sub { color: var(--text-light); margin-bottom: 28px; font-size: 0.9rem; }
  .form-group { margin-bottom: 18px; }
  .form-label { display: block; font-size: 0.85rem; font-weight: 600; color: var(--text-dark); margin-bottom: 6px; }
  .form-input { width: 100%; padding: 12px 16px; border: 1.5px solid var(--border); border-radius: 10px; font-size: 0.9rem; font-family: inherit; outline: none; transition: border-color 0.2s; }
  .form-input:focus { border-color: var(--green-light); }
  .form-select { width: 100%; padding: 12px 16px; border: 1.5px solid var(--border); border-radius: 10px; font-size: 0.9rem; font-family: inherit; outline: none; background: white; cursor: pointer; }
  .auth-btn { width: 100%; padding: 14px; background: var(--green-mid); color: white; border: none; border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.2s; margin-top: 8px; }
  .auth-btn:hover { background: var(--green-deep); }
  .auth-switch { text-align: center; margin-top: 20px; font-size: 0.875rem; color: var(--text-mid); }
  .auth-switch a { color: var(--green-mid); cursor: pointer; font-weight: 600; text-decoration: none; }
  .role-toggle { display: flex; gap: 0; background: var(--cream); border-radius: 10px; padding: 4px; margin-bottom: 24px; }
  .role-btn { flex: 1; padding: 10px; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; cursor: pointer; transition: all 0.2s; background: none; color: var(--text-mid); }
  .role-btn.active { background: white; color: var(--green-mid); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

  /* LIST ADD FORM */
  .add-form { background: white; border-radius: var(--radius); padding: 28px; box-shadow: var(--shadow); margin-bottom: 28px; }
  .add-form-title { font-weight: 700; font-size: 1rem; color: var(--green-deep); margin-bottom: 20px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .submit-btn { padding: 12px 28px; background: var(--green-mid); color: white; border: none; border-radius: 10px; font-size: 0.9rem; font-weight: 700; cursor: pointer; transition: all 0.2s; }
  .submit-btn:hover { background: var(--green-deep); }

  /* TOAST */
  .toast { position: fixed; bottom: 24px; right: 24px; background: var(--green-deep); color: white; padding: 14px 20px; border-radius: 12px; font-size: 0.875rem; font-weight: 500; box-shadow: var(--shadow-lg); z-index: 300; animation: slideUp 0.3s ease; max-width: 320px; }
  .toast-icon { margin-right: 8px; }

  /* FOOTER */
  .footer { background: var(--green-deep); color: rgba(255,255,255,0.8); padding: 48px 24px 24px; }
  .footer-inner { max-width: 1100px; margin: 0 auto; }
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
  .footer-logo { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: white; margin-bottom: 12px; }
  .footer-desc { font-size: 0.875rem; line-height: 1.7; color: rgba(255,255,255,0.6); }
  .footer-heading { font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--green-light); margin-bottom: 16px; }
  .footer-link { display: block; font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-bottom: 8px; cursor: pointer; }
  .footer-link:hover { color: white; }
  .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
  .footer-copy { font-size: 0.8rem; color: rgba(255,255,255,0.4); }

  /* FARMER PROFILES */
  .farmer-card { background: white; border-radius: var(--radius); padding: 24px; box-shadow: var(--shadow); text-align: center; transition: all 0.3s; }
  .farmer-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
  .farmer-avatar { font-size: 3.5rem; margin-bottom: 12px; }
  .farmer-name { font-weight: 700; font-size: 1rem; color: var(--text-dark); margin-bottom: 4px; }
  .farmer-loc { font-size: 0.82rem; color: var(--text-light); margin-bottom: 12px; }
  .farmer-meta { display: flex; justify-content: center; gap: 20px; margin-bottom: 16px; }
  .farmer-meta-item { text-align: center; }
  .farmer-meta-num { font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--green-mid); font-weight: 700; }
  .farmer-meta-label { font-size: 0.72rem; color: var(--text-light); }
  .stars { color: #f6ad55; font-size: 0.9rem; }

  /* TABS */
  .tabs { display: flex; gap: 2px; background: var(--cream); border-radius: 12px; padding: 4px; margin-bottom: 28px; }
  .tab { flex: 1; padding: 10px; border: none; background: none; border-radius: 10px; font-size: 0.875rem; font-weight: 600; cursor: pointer; color: var(--text-mid); transition: all 0.2s; }
  .tab.active { background: white; color: var(--green-mid); box-shadow: 0 2px 8px rgba(0,0,0,0.08); }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .dashboard-layout { grid-template-columns: 1fr; }
    .sidebar { position: static; }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .modal-info-grid { grid-template-columns: 1fr; }
    .hero-stats { gap: 24px; }
    .auth-card { padding: 36px 28px; }
    .auth-title { font-size: 1.5rem; }
  }
  @media (max-width: 480px) {
    .footer-grid { grid-template-columns: 1fr; }
    .auth-card { padding: 28px 20px; }
    .intro-text h1 { font-size: 2rem; }
  }

  .empty-state { text-align: center; padding: 60px 24px; color: var(--text-light); }
  .empty-state-icon { font-size: 4rem; margin-bottom: 16px; }
  .empty-state p { font-size: 0.95rem; }
  
  .tag { display: inline-block; padding: 3px 10px; background: var(--earth-pale); color: var(--earth); border-radius: 6px; font-size: 0.75rem; font-weight: 600; margin-right: 6px; }

  /* FARMER PROFILE PAGE */
  .farmer-profile-header { 
    background: white; 
    border-radius: var(--radius); 
    padding: 32px; 
    box-shadow: var(--shadow); 
    display: flex; 
    align-items: center; 
    gap: 24px; 
    margin-bottom: 24px; 
  }
  .farmer-profile-avatar { 
    font-size: 5rem; 
    width: 120px; 
    height: 120px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    background: var(--green-pale); 
    border-radius: 50%; 
  }

  .profile-tabs { 
    display: flex; 
    gap: 8px; 
    background: white; 
    border-radius: var(--radius); 
    padding: 8px; 
    margin-bottom: 24px; 
    box-shadow: var(--shadow); 
  }
  .profile-tab { 
    flex: 1; 
    padding: 12px 20px; 
    border: none; 
    background: none; 
    border-radius: 10px; 
    font-size: 0.9rem; 
    font-weight: 600; 
    cursor: pointer; 
    color: var(--text-mid); 
    transition: all 0.2s; 
  }
  .profile-tab:hover { background: var(--cream); }
  .profile-tab.active { 
    background: var(--green-deep); 
    color: white; 
    box-shadow: 0 2px 8px rgba(26,74,46,0.3); 
  }

  .profile-content { 
    background: white; 
    border-radius: var(--radius); 
    padding: 32px; 
    box-shadow: var(--shadow); 
  }
  .profile-about { display: flex; flex-direction: column; gap: 24px; }
  .profile-section-title { 
    font-family: 'Playfair Display', serif; 
    font-size: 1.3rem; 
    color: var(--green-deep); 
    margin-bottom: 12px; 
  }
  .profile-section { 
    padding-bottom: 24px; 
    border-bottom: 1px solid var(--border); 
  }
  .profile-section:last-child { border-bottom: none; padding-bottom: 0; }

  .specialty-badge { 
    display: inline-block; 
    padding: 8px 16px; 
    background: var(--green-pale); 
    color: var(--green-deep); 
    border-radius: 20px; 
    font-size: 0.85rem; 
    font-weight: 600; 
  }
  .certification-badge { 
    display: inline-block; 
    padding: 8px 16px; 
    background: #d4edda; 
    color: #155724; 
    border-radius: 20px; 
    font-size: 0.85rem; 
    font-weight: 600; 
  }

  /* RENTAL CALENDAR */
  .rental-calendar { 
    background: white; 
    border-radius: var(--radius); 
    padding: 24px; 
    box-shadow: var(--shadow); 
  }
  .calendar-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 20px; 
  }
  .calendar-month { 
    font-family: 'Playfair Display', serif; 
    font-size: 1.3rem; 
    font-weight: 700; 
    color: var(--green-deep); 
  }
  .calendar-nav-btn { 
    width: 36px; 
    height: 36px; 
    border: none; 
    background: var(--cream); 
    border-radius: 8px; 
    font-size: 1.2rem; 
    cursor: pointer; 
    transition: all 0.2s; 
    color: var(--green-deep); 
  }
  .calendar-nav-btn:hover { background: var(--green-pale); }

  .calendar-weekdays { 
    display: grid; 
    grid-template-columns: repeat(7, 1fr); 
    gap: 8px; 
    margin-bottom: 8px; 
  }
  .calendar-weekday { 
    text-align: center; 
    font-size: 0.75rem; 
    font-weight: 700; 
    color: var(--text-light); 
    padding: 8px 0; 
  }

  .calendar-grid { 
    display: grid; 
    grid-template-columns: repeat(7, 1fr); 
    gap: 8px; 
    margin-bottom: 20px; 
  }
  .calendar-day { 
    aspect-ratio: 1; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    border-radius: 8px; 
    font-size: 0.9rem; 
    font-weight: 600; 
    position: relative; 
    transition: all 0.2s; 
    background: white; 
    border: 1.5px solid var(--border); 
  }
  .calendar-day:hover:not(.calendar-day-empty):not(.calendar-day-booked):not(.calendar-day-past) { 
    border-color: var(--green-mid); 
    background: var(--green-pale); 
  }
  .calendar-day-empty { border: none; }
  .calendar-day-booked { 
    background: #fff5f5; 
    border-color: #feb2b2; 
    color: #c53030; 
  }
  .calendar-day-selected { 
    background: var(--green-mid); 
    border-color: var(--green-mid); 
    color: white; 
  }
  .calendar-day-past { 
    background: #f7fafc; 
    color: #cbd5e0; 
    border-color: #e2e8f0; 
  }
  .calendar-dot { 
    position: absolute; 
    bottom: 4px; 
    width: 4px; 
    height: 4px; 
    background: #c53030; 
    border-radius: 50%; 
  }

  .calendar-legend { 
    display: flex; 
    gap: 16px; 
    padding: 16px; 
    background: var(--cream); 
    border-radius: 8px; 
  }
  .calendar-legend-item { 
    display: flex; 
    align-items: center; 
    gap: 8px; 
    font-size: 0.85rem; 
    color: var(--text-mid); 
  }
  .calendar-legend-box { 
    width: 24px; 
    height: 24px; 
    border-radius: 6px; 
    border: 1.5px solid var(--border); 
  }

  .equipment-preview-image-wrap {
    width: 88px;
    height: 88px;
    border-radius: 10px;
    overflow: hidden;
    background: var(--cream);
    flex-shrink: 0;
  }
  .equipment-preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .chat-modal {
    background: white;
    border-radius: 20px;
    width: 100%;
    max-width: 620px;
    height: min(82vh, 700px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  .chat-header {
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
  }
  .chat-user-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .chat-user-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--green-pale);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
  }
  .chat-user-name {
    font-weight: 700;
    color: var(--green-deep);
    font-size: 0.95rem;
  }
  .chat-user-sub {
    font-size: 0.78rem;
    color: var(--text-light);
  }

  .chat-body {
    flex: 1;
    overflow-y: auto;
    padding: 18px;
    background: #f8fafc;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .chat-row { display: flex; }
  .chat-row.me { justify-content: flex-end; }
  .chat-row.them { justify-content: flex-start; }
  .chat-bubble-wrap { max-width: 78%; }
  .chat-bubble {
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 0.9rem;
    line-height: 1.5;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  .chat-bubble-me {
    background: var(--green-mid);
    color: white;
    border-bottom-right-radius: 4px;
  }
  .chat-bubble-them {
    background: white;
    color: var(--text-dark);
    border-bottom-left-radius: 4px;
    border: 1px solid var(--border);
  }
  .chat-time {
    font-size: 0.72rem;
    color: var(--text-light);
    margin-top: 4px;
    padding: 0 4px;
  }

  .chat-input-bar {
    display: flex;
    gap: 10px;
    padding: 14px 16px;
    border-top: 1px solid var(--border);
    background: white;
  }
  .chat-input {
    flex: 1;
    border: 1.5px solid var(--border);
    border-radius: 10px;
    padding: 10px 14px;
    font-family: inherit;
    font-size: 0.9rem;
    outline: none;
  }
  .chat-input:focus { border-color: var(--green-light); }
  .chat-footer-note {
    padding: 8px 16px 14px;
    font-size: 0.74rem;
    color: var(--text-light);
    background: white;
  }

  .auth-error {
    background: #fff5f5;
    border: 1px solid #feb2b2;
    color: #c53030;
    padding: 12px 14px;
    border-radius: 8px;
    margin-bottom: 14px;
    font-size: 0.88rem;
  }

  .checkout-grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    gap: 20px;
  }
  .checkout-summary { position: sticky; top: 82px; height: fit-content; }
  .checkout-item-image-wrap {
    width: 100%;
    height: 180px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 12px;
    background: var(--cream);
  }
  .checkout-item-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .checkout-item-name {
    font-weight: 700;
    color: var(--green-deep);
    margin-bottom: 12px;
  }
  .checkout-summary-card {
    max-width: 520px;
    margin: 18px auto 0;
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 18px;
  }
  .checkout-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: var(--text-mid);
    padding: 10px 0;
    border-bottom: 1px solid var(--border);
  }
  .checkout-summary-row:last-child { border-bottom: none; }
  .checkout-success {
    max-width: 760px;
    margin: 0 auto;
    background: white;
    padding: 34px;
    border-radius: 16px;
    box-shadow: var(--shadow);
    text-align: center;
  }
  .checkout-success-icon {
    font-size: 2.2rem;
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    .checkout-grid {
      grid-template-columns: 1fr;
    }
    .checkout-summary {
      position: static;
    }
  }

  /* INTRO ANIMATION */
  .intro-screen {
    position: fixed;
    inset: 0;
    background: linear-gradient(135deg, #1a4a2e 0%, #2d6a4f 50%, #1a4a2e 100%);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: introFadeIn 0.3s ease;
  }
  .intro-fade-out {
    animation: introFadeOut 0.3s ease forwards;
  }
  @keyframes introFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes introFadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  .intro-content {
    text-align: center;
    position: relative;
    width: 100%;
    max-width: 360px;
  }
  .intro-loader {
    width: 56px;
    height: 56px;
    margin: 0 auto 20px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: #95d5b2;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .intro-text {
    text-align: center;
    opacity: 1;
    transform: none;
  }
  .intro-text h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    color: white;
    margin-bottom: 8px;
  }
  .intro-text h1 span {
    color: #95d5b2;
  }
  .intro-text p {
    color: rgba(255, 255, 255, 0.82);
    font-size: 0.95rem;
  }
`;
