const mongoose = require('mongoose');

const equipmentSchema = mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    category: { type: String, required: true },
    priceDay: { type: Number, required: true },
    priceHour: { type: Number },
    location: { type: String, required: true },
    img: { type: String },
    available: { type: Boolean, default: true },
    desc: { type: String },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Equipment', equipmentSchema);
