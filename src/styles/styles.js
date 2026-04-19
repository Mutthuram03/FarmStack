export const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    /* Colors - Light Mode (Premium Cream & Emerald) */
    --primary: #064e3b;
    --primary-light: #059669;
    --accent: #10b981;
    --accent-soft: #ecfdf5;
    --earth: #78350f;
    --earth-light: #fef3c7;
    --bg-main: #fdfbf7;
    --bg-card: #ffffff;
    --text-head: #064e3b;
    --text-body: #1f2937;
    --text-muted: #6b7280;
    --border: #e5e7eb;
    --border-soft: #f3f4f6;
    --green-pale: #ecfdf5;
    --green-mid: #10b981;
    --green-deep: #064e3b;
    
    /* Shadows - Multi-layered for depth */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-premium: 0 0 0 1px rgba(0,0,0,0.01), 0 2px 4px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.02), 0 16px 32px rgba(0,0,0,0.02);

    /* Radii */
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-xl: 32px;
    
    --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  [data-theme='dark'] {
    --primary: #34d399;
    --primary-light: #10b981;
    --accent: #059669;
    --accent-soft: rgba(16, 185, 129, 0.1);
    --earth: #fbbf24;
    --bg-main: #020617;
    --bg-card: #0f172a;
    --text-head: #f8fafc;
    --text-body: #cbd5e1;
    --text-muted: #94a3b8;
    --border: #1e293b;
    --border-soft: #111827;
    --shadow-md: 0 10px 30px rgba(0,0,0,0.5);
    --shadow-lg: 0 20px 50px rgba(0,0,0,0.6);
  }

  body { 
    font-family: 'DM Sans', sans-serif; 
    background: var(--bg-main); 
    color: var(--text-body); 
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.4s ease;
  }

  h1, h2, h3, h4, .font-serif { 
    font-family: 'Playfair Display', serif; 
    color: var(--text-head);
    font-weight: 800;
    letter-spacing: -0.01em;
  }

  /* UTILITIES */
  .container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
  .flex-center { display: flex; align-items: center; justify-content: center; }
  .glass { 
    background: rgba(255, 255, 255, 0.7); 
    backdrop-filter: blur(20px) saturate(180%); 
    border: 1px solid rgba(255, 255, 255, 0.4); 
    box-shadow: var(--shadow-premium);
  }
  [data-theme='dark'] .glass { 
    background: rgba(15, 23, 42, 0.7); 
    border: 1px solid rgba(255, 255, 255, 0.1); 
  }

  /* NAV */
  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(253, 251, 247, 0.8);
    backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid var(--border-soft);
    padding: 0 48px;
    display: flex; align-items: center; justify-content: space-between;
    height: 88px;
    transition: var(--transition);
  }
  [data-theme='dark'] .nav { background: rgba(2, 6, 23, 0.8); border-color: var(--border); }

  
  .nav-logo { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: var(--primary); cursor: pointer; display: flex; align-items: center; gap: 8px; font-weight: 800; }
  .nav-logo span { color: var(--accent); }
  
  .nav-links { display: flex; gap: 4px; }
  .nav-link { 
    padding: 10px 24px; 
    border-radius: 100px; 
    color: var(--text-muted); 
    cursor: pointer; 
    font-size: 0.95rem; 
    font-weight: 600; 
    transition: var(--transition); 
    border: none; 
    background: none; 
    position: relative;
    overflow: hidden;
  }
  .nav-link:hover { color: var(--primary); background: var(--accent-soft); }
  .nav-link.active { color: var(--primary); }
  .nav-link.active::after {
    content: ''; position: absolute; bottom: 0; left: 24px; right: 24px; height: 3px;
    background: var(--primary); border-radius: 3px 3px 0 0;
  }
  
  .nav-actions { display: flex; gap: 12px; align-items: center; }
  
  /* BUTTONS */
  .btn {
    padding: 14px 28px;
    border-radius: 100px;
    font-size: 0.9375rem;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    white-space: nowrap;
    letter-spacing: 0.01em;
  }
  .btn:active { transform: scale(0.96); }
  
  .btn-primary { background: var(--primary); color: white; box-shadow: 0 4px 12px rgba(6, 78, 59, 0.2); }
  .btn-primary:hover { 
    background: var(--primary-light); 
    box-shadow: 0 8px 24px rgba(6, 78, 59, 0.3); 
    transform: translateY(-2px); 
  }
  
  .btn-secondary { background: var(--earth-light); color: var(--earth); }
  .btn-secondary:hover { background: #fee2e2; transform: translateY(-1px); }
  
  .btn-outline { 
    background: transparent; 
    border: 2px solid var(--border); 
    color: var(--text-head); 
  }
  .btn-outline:hover { 
    border-color: var(--primary); 
    color: var(--primary); 
    background: var(--accent-soft); 
    transform: translateY(-2px);
  }

  /* HERO */
  .hero {
    padding: 120px 0 160px;
    background: 
      radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15), transparent 40%),
      radial-gradient(circle at 20% 80%, rgba(120, 53, 15, 0.08), transparent 40%),
      var(--bg-main);
    position: relative; overflow: hidden;
  }
  [data-theme='dark'] .hero {
    background: 
      radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.2), transparent 40%),
      radial-gradient(circle at 20% 80%, rgba(52, 211, 153, 0.1), transparent 40%),
      var(--bg-main);
  }
  
  .hero-inner { max-width: 900px; margin: 0 auto; text-align: center; position: relative; z-index: 2; }
  .hero-tag { 
    display: inline-flex; align-items: center; gap: 8px;
    background: white; border: 1px solid var(--border);
    padding: 8px 16px; border-radius: 100px;
    font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
    color: var(--primary-light); margin-bottom: 32px;
    box-shadow: var(--shadow-sm);
  }
  [data-theme='dark'] .hero-tag { background: var(--bg-card); border-color: var(--border); }
  
  .hero h1 { font-size: clamp(3rem, 8vw, 4.5rem); line-height: 1.05; margin-bottom: 24px; letter-spacing: -0.02em; }
  .hero h1 em { color: var(--accent); font-style: normal; position: relative; }
  .hero h1 em::after { content: ''; position: absolute; bottom: 10px; left: 0; width: 100%; height: 8px; background: var(--accent-soft); z-index: -1; border-radius: 4px; }
  
  .hero p { font-size: 1.25rem; color: var(--text-muted); max-width: 600px; margin: 0 auto 40px; line-height: 1.6; }
  
  .hero-ctas { display: flex; gap: 16px; justify-content: center; }
  
  .hero-stats { display: flex; gap: 80px; justify-content: center; margin-top: 100px; }
  .hero-stat { text-align: center; }
  .hero-stat-num { font-family: 'Playfair Display', serif; font-size: 3rem; color: var(--primary); font-weight: 800; display: block; line-height: 1; }
  .hero-stat-label { font-size: 0.9rem; color: var(--text-muted); font-weight: 600; margin-top: 8px; text-transform: uppercase; letter-spacing: 0.05em; }

  /* PAGE HEADERS */
  .page { padding: 80px 0; max-width: 1200px; margin: 0 auto; padding: 64px 32px; }
  .page-title { font-size: 3.5rem; margin-bottom: 12px; }
  .page-sub { font-size: 1.25rem; color: var(--text-muted); margin-bottom: 64px; }

  /* CARDS */
  .card {
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-soft);
    overflow: hidden;
    transition: var(--transition);
    cursor: pointer;
    box-shadow: var(--shadow-md);
    display: flex; flex-direction: column;
    position: relative;
  }
  .card:hover { transform: translateY(-12px); box-shadow: var(--shadow-xl); border-color: var(--accent); }
  
  .card-img { height: 220px; overflow: hidden; position: relative; }
  .card-img img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition); }
  .card:hover .card-img img { transform: scale(1.05); }
  
  .card-badge { 
    position: absolute; top: 16px; left: 16px; 
    padding: 6px 12px; border-radius: 100px; 
    font-size: 0.7rem; font-weight: 800; text-transform: uppercase; 
    backdrop-filter: blur(8px);
  }
  .card-badge.avail { background: rgba(56, 161, 105, 0.9); color: white; }
  .card-badge.unavail { background: rgba(229, 62, 62, 0.9); color: white; }
  
  .card-body { padding: 24px; flex: 1; }
  .card-name { font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; }
  .card-farmer { font-size: 0.875rem; color: var(--text-muted); display: flex; align-items: center; gap: 6px; margin-bottom: 16px; }
  
  .card-meta { display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid var(--border-soft); }
  .card-price { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--primary); font-weight: 800; }
  .card-price span { font-family: 'DM Sans', sans-serif; font-size: 0.875rem; color: var(--text-muted); font-weight: 500; margin-left: 2px; }
  
  .card-location { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--text-muted); margin-top: 12px; }
  
  .card-footer { padding: 16px 24px 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; border-top: 1px solid var(--border-soft); }
  .card-btn { padding: 12px; border-radius: 12px; font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: var(--transition); border: none; display: flex; align-items: center; justify-content: center; gap: 6px; }
  .card-btn-primary { background: var(--primary); color: white; }
  .card-btn-primary:hover { background: var(--primary-light); transform: translateY(-2px); }
  .card-btn-secondary { background: var(--bg-main); color: var(--text-body); border: 1px solid var(--border); }
  .card-btn-secondary:hover { background: white; border-color: var(--primary); color: var(--primary); }

  /* GRID */
  .grid { display: grid; gap: 32px; padding: 40px 0; }
  .grid-4 { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
  .grid-3 { grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); }

  /* FEATURES */
  .section-header { text-align: center; margin-bottom: 60px; }
  .section-label { color: var(--accent); font-weight: 800; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.2em; display: block; margin-bottom: 12px; }
  .section-title { font-size: 3rem; line-height: 1.2; }

  .feature-card {
    padding: 48px;
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-soft);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
  }
  .feature-card::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px;
    background: var(--accent); opacity: 0; transition: var(--transition);
  }
  .feature-card:hover { border-color: var(--accent); transform: translateY(-8px); box-shadow: var(--shadow-xl); }
  .feature-card:hover::before { opacity: 1; }
  .feature-icon { font-size: 3.5rem; margin-bottom: 32px; display: block; }
  .feature-title { font-size: 1.35rem; font-weight: 800; margin-bottom: 16px; color: var(--text-head); }
  .feature-desc { color: var(--text-muted); font-size: 1rem; line-height: 1.8; }

  /* MODALS */
  .modal-overlay { 
    position: fixed; inset: 0; 
    background: rgba(6, 78, 59, 0.4); 
    backdrop-filter: blur(24px); 
    z-index: 1000; 
    display: flex; align-items: center; justify-content: center; 
    padding: 32px;
    animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  
  .modal { 
    background: var(--bg-card); 
    border-radius: var(--radius-xl); 
    width: 100%; max-width: 1100px; 
    max-height: 85vh; 
    overflow: hidden; 
    display: flex;
    box-shadow: 0 30px 60px -12px rgba(6, 78, 59, 0.25);
    animation: modalPop 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid var(--border-soft);
  }
  @keyframes modalPop { from { transform: translateY(40px) scale(0.98); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
  
  .modal-hero { width: 45%; background: var(--accent-soft); overflow: hidden; position: relative; }
  .modal-hero img { width: 100%; height: 100%; object-fit: cover; }
  .modal-body { width: 55%; padding: 56px; overflow-y: auto; position: relative; }
  
  .modal-farmer { display: flex; align-items: center; gap: 8px; color: var(--text-muted); font-size: 1.1rem; margin-bottom: 24px; font-weight: 500; }
  .modal-desc { font-size: 1.1rem; line-height: 1.8; color: var(--text-body); margin-bottom: 40px; }
  
  .modal-info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 48px; border-top: 1px solid var(--border-soft); padding-top: 32px; }
  .modal-info-item { display: flex; flex-direction: column; gap: 4px; }
  .modal-info-label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); font-weight: 700; }
  .modal-info-val { font-size: 1.25rem; font-weight: 800; color: var(--text-head); }
  
  .modal-actions { display: flex; gap: 16px; margin-top: 48px; }
  .modal-btn { flex: 1; padding: 18px 32px; border-radius: 16px; font-weight: 800; font-size: 1rem; cursor: pointer; transition: var(--transition); border: none; display: flex; align-items: center; justify-content: center; gap: 10px; }
  .modal-btn-main { background: var(--primary); color: white; box-shadow: 0 10px 20px rgba(6, 78, 59, 0.2); }
  .modal-btn-sec { background: var(--bg-main); color: var(--primary); border: 2px solid var(--border); }
  .modal-btn:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }

  .modal-close {
    position: absolute; top: 32px; right: 32px;
    width: 48px; height: 48px; border-radius: 50%;
    background: var(--bg-main); border: 1px solid var(--border);
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: var(--transition);
    z-index: 10;
  }
  .modal-close:hover { background: var(--accent-soft); transform: rotate(90deg); }

  /* DASHBOARD LAYOUT */
  .dashboard-layout {
    display: grid; grid-template-columns: 320px 1fr; gap: 48px;
    padding: 48px; min-height: calc(100vh - 88px);
    background: var(--bg-main);
  }
  .sidebar {
    background: var(--bg-card); border-radius: var(--radius-xl);
    padding: 40px 20px; border: 1px solid var(--border-soft);
    height: fit-content; position: sticky; top: 128px;
    box-shadow: var(--shadow-lg);
  }
  .sidebar-user { text-align: center; margin-bottom: 40px; padding-bottom: 40px; border-bottom: 1px solid var(--border-soft); }
  .sidebar-avatar { 
    width: 96px; height: 96px; margin: 0 auto 20px; 
    border-radius: 24px; background: var(--accent-soft); 
    display: flex; align-items: center; justify-content: center; 
    font-size: 3rem; box-shadow: var(--shadow-md);
  }
  
  .sidebar-nav { display: flex; flex-direction: column; gap: 12px; }
  .sidebar-item {
    padding: 16px 24px; border-radius: 16px;
    font-weight: 700; font-size: 1rem; color: var(--text-muted);
    display: flex; align-items: center; gap: 16px;
    transition: var(--transition); border: none; background: none; text-align: left; width: 100%; cursor: pointer;
  }
  .sidebar-item:hover { background: var(--accent-soft); color: var(--primary); transform: translateX(4px); }
  .sidebar-item.active { background: var(--primary); color: white; box-shadow: 0 10px 20px rgba(6, 78, 59, 0.2); }

  /* STAT CARDS */
  .dash-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px; margin-bottom: 48px; }
  .stat-card {
    padding: 40px; background: var(--bg-card);
    border-radius: var(--radius-lg); border: 1px solid var(--border-soft);
    box-shadow: var(--shadow-md); transition: var(--transition);
  }
  .stat-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-xl); border-color: var(--accent); }
  .stat-card-icon { font-size: 2.5rem; margin-bottom: 20px; display: block; }
  .stat-card-num { font-size: 3rem; font-weight: 800; color: var(--primary); line-height: 1; margin-bottom: 8px; }
  .stat-card-label { font-weight: 700; color: var(--text-muted); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; }

  /* TABLES */
  .table-wrap { overflow-x: auto; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-soft); box-shadow: var(--shadow-sm); }
  .table { width: 100%; border-collapse: collapse; }
  .table th { 
    text-align: left; padding: 24px; font-size: 0.85rem; font-weight: 800; 
    text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted);
    background: var(--bg-main); border-bottom: 1px solid var(--border-soft);
  }
  .table td { padding: 24px; font-size: 1rem; border-bottom: 1px solid var(--border-soft); color: var(--text-body); }
  .table tr:last-child td { border-bottom: none; }
  .table tr:hover td { background: var(--bg-main); }
  
  .status-pill {
    padding: 6px 12px; border-radius: 100px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase;
  }
  .status-confirmed { background: #dcfce7; color: #15803d; }
  .status-pending { background: #fef9c3; color: #a16207; }
  .status-delivered { background: #dbeafe; color: #1d4ed8; }

  /* SEARCH & FILTERS */
  .search-bar {
    background: var(--bg-card); border-radius: 100px;
    padding: 12px 12px 12px 32px; box-shadow: var(--shadow-xl);
    display: flex; gap: 24px; align-items: center; border: 1px solid var(--border-soft);
    max-width: 1000px; margin: -44px auto 64px; position: relative; z-index: 10;
  }
  .search-input-wrap { flex: 1; display: flex; align-items: center; gap: 16px; }
  .search-input { 
    width: 100%; border: none; background: none; font-size: 1.15rem; 
    font-weight: 500; outline: none; color: var(--text-head);
  }
  .filter-select {
    padding: 14px 28px; border: 1px solid var(--border-soft);
    border-radius: 100px; font-size: 0.95rem; font-weight: 600;
    background: var(--bg-main); cursor: pointer; color: var(--text-body);
    outline: none; transition: var(--transition);
  }
  .filter-select:hover { border-color: var(--primary); background: white; }

  /* AUTH */
  .auth-page { 
    position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; 
    background: rgba(6, 78, 59, 0.35); backdrop-filter: blur(20px); z-index: 1000;
    padding: 24px;
  }
  .auth-card {
    background: var(--bg-card); border-radius: var(--radius-xl);
    padding: 72px; max-width: 560px; width: 100%;
    box-shadow: 0 40px 80px -20px rgba(0,0,0,0.3); 
    animation: authPop 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
  }
  @keyframes authPop { from { transform: scale(0.95) translateY(30px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
  
  .form-input {
    width: 100%; padding: 16px 20px; border: 2px solid var(--border-soft);
    border-radius: 16px; font-size: 1rem; font-family: inherit; transition: var(--transition);
    background: var(--bg-main); color: var(--text-head); outline: none;
  }
  .form-input:focus { border-color: var(--primary); background: white; box-shadow: 0 0 0 4px var(--accent-soft); }

  /* FOOTER */
  .footer { background: var(--text-head); color: white; padding: 120px 0 60px; }
  .footer-heading { color: var(--accent); font-weight: 800; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.2em; margin-bottom: 32px; }
  .footer-link { color: #94a3b8; text-decoration: none; display: block; margin-bottom: 16px; transition: var(--transition); cursor: pointer; }
  .footer-link:hover { color: white; transform: translateX(4px); }

  /* THEME TOGGLE */
  .theme-toggle {
    width: 44px; height: 44px; border-radius: 12px;
    background: var(--accent-soft); border: 1px solid var(--border-soft);
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    color: var(--primary); transition: var(--transition);
  }
  .theme-toggle:hover { transform: rotate(15deg) scale(1.1); background: var(--accent); color: white; }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .dashboard-layout { grid-template-columns: 1fr; }
    .sidebar { position: static; }
    .modal { flex-direction: column; max-height: 95vh; }
    .modal-hero { width: 100%; height: 250px; }
    .modal-body { width: 100%; padding: 32px; }
    .nav { padding: 0 20px; }
    .nav-links { display: none; }
    .hero-stats { gap: 32px; flex-wrap: wrap; }
  }

  /* TOAST */
  .toast {
    position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%);
    background: var(--bg-card); color: var(--text-head);
    padding: 18px 36px; border-radius: 100px;
    font-weight: 700; box-shadow: var(--shadow-xl);
    z-index: 2000; animation: toastIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex; align-items: center; gap: 16px;
    border: 1px solid var(--border);
  }
  @keyframes toastIn { from { transform: translateX(-50%) translateY(40px); opacity: 0; } to { transform: translateX(-50%) translateY(0); opacity: 1; } }

  /* INTRO */
  .intro-screen {
    position: fixed; inset: 0; background: var(--bg-main); z-index: 9999;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
  }
  .intro-loader {
    width: 80px; height: 80px; border: 6px solid var(--border-soft);
    border-top: 6px solid var(--primary); border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0.1, 0.4, 0.9) infinite; margin-bottom: 40px;
  }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

  /* FARMER CARDS */
  .farmer-card {
    padding: 40px; background: var(--bg-card);
    border-radius: var(--radius-xl); border: 1px solid var(--border-soft);
    text-align: center; transition: var(--transition);
    box-shadow: var(--shadow-md); position: relative;
  }
  .farmer-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-xl); border-color: var(--accent); }
  .farmer-avatar { 
    width: 100px; height: 100px; margin: 0 auto 24px; 
    border-radius: 30px; background: var(--accent-soft); 
    display: flex; align-items: center; justify-content: center; 
    font-size: 3rem; transform: rotate(-5deg); transition: var(--transition);
  }
  .farmer-card:hover .farmer-avatar { transform: rotate(0deg) scale(1.1); }
  .farmer-name { font-size: 1.5rem; font-weight: 800; margin-bottom: 8px; font-family: 'Playfair Display', serif; }
  .farmer-loc { display: flex; align-items: center; justify-content: center; gap: 6px; color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px; }
  
  .farmer-meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px; padding: 20px 0; border-top: 1px solid var(--border-soft); border-bottom: 1px solid var(--border-soft); }
  .farmer-meta-num { font-size: 1.25rem; font-weight: 800; color: var(--primary); display: block; }
  .farmer-meta-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); font-weight: 700; margin-top: 4px; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

  .tag { 
    display: inline-block; padding: 4px 10px; 
    background: var(--accent-soft); color: var(--primary); 
    border-radius: 8px; font-size: 0.75rem; font-weight: 800; 
    text-transform: uppercase; letter-spacing: 0.05em;
  }

  .cat-tabs { display: flex; gap: 12px; margin-bottom: 48px; flex-wrap: wrap; }
  .cat-tab { 
    padding: 12px 24px; border-radius: 100px; border: 1.5px solid var(--border); 
    background: white; color: var(--text-muted); font-weight: 700; cursor: pointer; 
    transition: var(--transition); 
  }
  .cat-tab:hover { border-color: var(--primary); color: var(--primary); }
  .cat-tab.active { background: var(--primary); color: white; border-color: var(--primary); box-shadow: 0 4px 12px rgba(6, 78, 59, 0.2); }
`;
