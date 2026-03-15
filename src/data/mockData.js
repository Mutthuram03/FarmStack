// ── MOCK DATA ──────────────────────────────────────────────────────────────
export const DEFAULT_CROP_IMAGE = "https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&w=900&q=80";
const EQUIPMENT_IMAGE_1 = new URL("../../assets/John Deere Tractor 5050D.jpg", import.meta.url).href;
const EQUIPMENT_IMAGE_2 = new URL("../../assets/Combine Harvester.jpg", import.meta.url).href;
const EQUIPMENT_IMAGE_3 = new URL("../../assets/Rotavator (7-Feet).jpg", import.meta.url).href;
const EQUIPMENT_IMAGE_4 = new URL("../../assets/Power Sprayer (Knapsack).jpg", import.meta.url).href;
const EQUIPMENT_IMAGE_5 = new URL("../../assets/Paddy Seeder Machine.jpg", import.meta.url).href;
const EQUIPMENT_IMAGE_6 = new URL("../../assets/Mini Tractor (20HP).jpg", import.meta.url).href;
const TURMERIC_IMAGE = new URL("../../assets/turmeric powder.jpg", import.meta.url).href;
const CORN_IMAGE = new URL("../../assets/corn.webp", import.meta.url).href;

export const DEFAULT_EQUIPMENT_IMAGE = EQUIPMENT_IMAGE_1;

export const CROPS = [
  { id: 1, name: "Organic Tomatoes", farmer: "Ravi Kumar", farmerId: 1, price: 45, unit: "kg", qty: 200, location: "Chengalpattu, TN", category: "Vegetables", rating: 4.8, reviews: 34, img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80", badge: "Organic", desc: "Sun-ripened, pesticide-free tomatoes grown with drip irrigation." },
  { id: 2, name: "Basmati Rice", farmer: "Suresh Patel", farmerId: 2, price: 85, unit: "kg", qty: 500, location: "Thanjavur, TN", category: "Grains", rating: 4.9, reviews: 67, img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80", badge: "Premium", desc: "Long-grain aromatic basmati harvested in winter season." },
  { id: 3, name: "Red Onions", farmer: "Meena Devi", farmerId: 3, price: 30, unit: "kg", qty: 800, location: "Nashik, MH", category: "Vegetables", rating: 4.6, reviews: 28, img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80", badge: "Fresh", desc: "Freshly harvested red onions with strong flavour." },
  { id: 4, name: "Alphonso Mangoes", farmer: "Priya Nair", farmerId: 4, price: 350, unit: "dozen", qty: 120, location: "Ratnagiri, MH", category: "Fruits", rating: 5.0, reviews: 89, img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80", badge: "GI Tagged", desc: "Authentic Alphonso mangoes with GI certification." },
  { id: 5, name: "Fresh Spinach", farmer: "Arjun Singh", farmerId: 5, price: 25, unit: "bunch", qty: 300, location: "Ludhiana, PB", category: "Vegetables", rating: 4.7, reviews: 19, img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=80", badge: "Organic", desc: "Tender baby spinach leaves, harvested at dawn." },
  { id: 6, name: "Turmeric Powder", farmer: "Lakshmi Bai", farmerId: 6, price: 180, unit: "kg", qty: 150, location: "Erode, TN", category: "Spices", rating: 4.8, reviews: 42, img: TURMERIC_IMAGE, badge: "Pure", desc: "Raw turmeric ground fresh, high curcumin content." },
  { id: 7, name: "Sweet Corn", farmer: "Ravi Kumar", farmerId: 1, price: 20, unit: "piece", qty: 400, location: "Chengalpattu, TN", category: "Vegetables", rating: 4.5, reviews: 15, img: CORN_IMAGE, badge: "Seasonal", desc: "Freshly harvested sweet corn, perfect for grilling." },
  { id: 8, name: "Pomegranate", farmer: "Suresh Patel", farmerId: 2, price: 120, unit: "kg", qty: 90, location: "Solapur, MH", category: "Fruits", rating: 4.9, reviews: 51, img: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=900&q=80", badge: "Premium", desc: "Juicy Bhagwa variety pomegranates, ruby red arils." },
];

export const EQUIPMENT = [
  { id: 1, name: "John Deere Tractor 5050D", owner: "Ravi Kumar", ownerId: 1, priceDay: 2500, priceHour: 350, location: "Chengalpattu, TN", rating: 4.9, reviews: 22, img: EQUIPMENT_IMAGE_1, category: "Tractor", available: true, power: "50 HP", desc: "Well-maintained tractor ideal for ploughing and transportation." },
  { id: 2, name: "Combine Harvester", owner: "Suresh Patel", ownerId: 2, priceDay: 8000, priceHour: 1200, location: "Thanjavur, TN", rating: 4.8, reviews: 18, img: EQUIPMENT_IMAGE_2, category: "Harvester", available: true, power: "120 HP", desc: "Modern combine harvester for rice and wheat crops." },
  { id: 3, name: "Rotavator 7-Feet", owner: "Meena Devi", ownerId: 3, priceDay: 1800, priceHour: 280, location: "Nashik, MH", rating: 4.7, reviews: 11, img: EQUIPMENT_IMAGE_3, category: "Rotavator", available: false, power: "Tractor-mounted", desc: "Heavy-duty rotavator for deep soil tilling." },
  { id: 4, name: "Power Sprayer (Knapsack)", owner: "Priya Nair", ownerId: 4, priceDay: 500, priceHour: 80, location: "Ratnagiri, MH", rating: 4.6, reviews: 35, img: EQUIPMENT_IMAGE_4, category: "Sprayer", available: true, power: "Engine", desc: "High-pressure sprayer for pest and fertiliser application." },
  { id: 5, name: "Paddy Seeder Machine", owner: "Arjun Singh", ownerId: 5, priceDay: 1200, priceHour: 200, location: "Ludhiana, PB", rating: 4.8, reviews: 14, img: EQUIPMENT_IMAGE_5, category: "Seeder", available: true, power: "Self-propelled", desc: "Precision paddy seeder for uniform seed spacing." },
  { id: 6, name: "Mini Tractor (20HP)", owner: "Lakshmi Bai", ownerId: 6, priceDay: 1500, priceHour: 220, location: "Erode, TN", rating: 4.5, reviews: 9, img: EQUIPMENT_IMAGE_6, category: "Tractor", available: true, power: "20 HP", desc: "Compact tractor for small farms and orchards." },
];

export const FARMERS = [
  { 
    id: 1, name: "Ravi Kumar", location: "Chengalpattu, TN", crops: 4, equipment: 2, rating: 4.8, joined: "2022", avatar: "👨‍🌾", 
    bio: "3rd generation farmer specialising in vegetables and paddy.",
    experience: 12, verified: true, phone: "+91 98765 43210", email: "ravi.kumar@farm.com",
    specialties: ["Organic Farming", "Drip Irrigation", "Vegetable Cultivation"],
    certifications: ["Organic Certified", "Soil Health Card"],
    farmSize: "5 acres", totalOrders: 156, totalRentals: 45
  },
  { 
    id: 2, name: "Suresh Patel", location: "Thanjavur, TN", crops: 3, equipment: 1, rating: 4.9, joined: "2021", avatar: "👨‍🌾", 
    bio: "Paddy and fruit farmer from the rice bowl of Tamil Nadu.",
    experience: 18, verified: true, phone: "+91 98765 43211", email: "suresh.patel@farm.com",
    specialties: ["Paddy Cultivation", "Fruit Farming", "Water Management"],
    certifications: ["Organic Certified", "Good Agricultural Practices"],
    farmSize: "10 acres", totalOrders: 234, totalRentals: 67
  },
  { 
    id: 3, name: "Meena Devi", location: "Nashik, MH", crops: 2, equipment: 1, rating: 4.7, joined: "2023", avatar: "👩‍🌾", 
    bio: "Onion and grape farmer in Maharashtra's agri heartland.",
    experience: 8, verified: true, phone: "+91 98765 43212", email: "meena.devi@farm.com",
    specialties: ["Onion Farming", "Grape Cultivation", "Post-Harvest Management"],
    certifications: ["Verified Farmer"],
    farmSize: "7 acres", totalOrders: 89, totalRentals: 23
  },
  { 
    id: 4, name: "Priya Nair", location: "Ratnagiri, MH", crops: 2, equipment: 1, rating: 4.9, joined: "2020", avatar: "👩‍🌾", 
    bio: "GI-certified Alphonso mango cultivator for 15+ years.",
    experience: 15, verified: true, phone: "+91 98765 43213", email: "priya.nair@farm.com",
    specialties: ["Mango Cultivation", "GI Certification", "Export Quality"],
    certifications: ["GI Tagged", "Organic Certified", "Export License"],
    farmSize: "12 acres", totalOrders: 312, totalRentals: 34
  },
  { 
    id: 5, name: "Arjun Singh", location: "Ludhiana, PB", crops: 2, equipment: 1, rating: 4.7, joined: "2022", avatar: "👨‍🌾", 
    bio: "Wheat and vegetable farmer in Punjab's fertile plains.",
    experience: 10, verified: true, phone: "+91 98765 43214", email: "arjun.singh@farm.com",
    specialties: ["Wheat Farming", "Vegetable Cultivation", "Modern Machinery"],
    certifications: ["Verified Farmer", "Soil Health Card"],
    farmSize: "8 acres", totalOrders: 145, totalRentals: 56
  },
  { 
    id: 6, name: "Lakshmi Bai", location: "Erode, TN", crops: 2, equipment: 1, rating: 4.8, joined: "2021", avatar: "👩‍🌾", 
    bio: "Turmeric and coconut farmer, known for organic practices.",
    experience: 20, verified: true, phone: "+91 98765 43215", email: "lakshmi.bai@farm.com",
    specialties: ["Turmeric Cultivation", "Coconut Farming", "Organic Methods"],
    certifications: ["Organic Certified", "Traditional Knowledge Award"],
    farmSize: "6 acres", totalOrders: 198, totalRentals: 41
  },
];

// Mock registered users for authentication
export const REGISTERED_USERS = [
  { email: "ravi.kumar@farm.com", password: "farmer123", name: "Ravi Kumar", role: "farmer", verified: true, farmerId: 1, avatar: "👨‍🌾" },
  { email: "suresh.patel@farm.com", password: "farmer123", name: "Suresh Patel", role: "farmer", verified: true, farmerId: 2, avatar: "👨‍🌾" },
  { email: "customer@demo.com", password: "customer123", name: "Anjali Mehta", role: "customer", verified: true, avatar: "🧑‍💼" },
  { email: "demo@farm.com", password: "demo123", name: "Demo User", role: "customer", verified: true, avatar: "🧑‍💼" },
];

export const CATEGORIES_CROP = ["All", "Vegetables", "Fruits", "Grains", "Spices"];
export const CATEGORIES_EQ = ["All", "Tractor", "Harvester", "Rotavator", "Sprayer", "Seeder"];
