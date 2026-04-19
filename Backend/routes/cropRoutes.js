const express = require('express');
const router = express.Router();
const { getCrops, createCrop } = require('../controllers/cropController');
const { protect, farmer } = require('../middleware/authMiddleware');

router.route('/').get(getCrops).post(protect, farmer, createCrop);

module.exports = router;
