const Equipment = require('../models/equipmentModel');

// @desc    Get all equipment
// @route   GET /api/equipment
const getEquipment = async (req, res) => {
  const equipment = await Equipment.find({}).populate('owner', 'name');
  res.json(equipment);
};

// @desc    Create equipment listing
// @route   POST /api/equipment
// @access  Private/Farmer
const createEquipment = async (req, res) => {
  const { name, category, priceDay, priceHour, location, img, desc } = req.body;

  const equipment = new Equipment({
    name,
    category,
    priceDay,
    priceHour,
    location,
    img,
    desc,
    owner: req.user._id,
  });

  const createdEquipment = await equipment.save();
  res.status(201).json(createdEquipment);
};

module.exports = { getEquipment, createEquipment };
