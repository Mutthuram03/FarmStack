const Crop = require('../models/cropModel');

// @desc    Fetch all crops
// @route   GET /api/crops
const getCrops = async (req, res) => {
  const crops = await Crop.find({}).populate('farmer', 'name');
  res.json(crops);
};

// @desc    Create a crop
// @route   POST /api/crops
// @access  Private/Farmer
const createCrop = async (req, res) => {
  const { name, price, category, unit, qty, location, img, desc } = req.body;

  const crop = new Crop({
    name,
    price,
    farmer: req.user._id,
    category,
    unit,
    qty,
    location,
    img,
    desc,
  });

  const createdCrop = await crop.save();
  res.status(201).json(createdCrop);
};

module.exports = { getCrops, createCrop };

