const mongoose = require('mongoose');

const cropSchema = mongoose.Schema(
  {
    farmer: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
    qty: { type: Number, required: true },
    location: { type: String, required: true },
    img: { type: String },
    badge: { type: String },
    desc: { type: String },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Crop', cropSchema);
