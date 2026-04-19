const express = require('express');
const router = express.Router();
const { getEquipment, createEquipment } = require('../controllers/equipmentController');
const { protect, farmer } = require('../middleware/authMiddleware');

router.route('/').get(getEquipment).post(protect, farmer, createEquipment);

module.exports = router;
