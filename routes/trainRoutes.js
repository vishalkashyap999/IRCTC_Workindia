const express = require('express');
const { createTrain, fetchTrains } = require('../controllers/trainController');
const authenticateAdmin = require('../middlewares/adminMiddleware');
const router = express.Router();

router.post('/', authenticateAdmin, createTrain);
router.get('/', fetchTrains);

module.exports = router;
