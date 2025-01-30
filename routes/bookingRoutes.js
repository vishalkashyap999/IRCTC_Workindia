const express = require('express');
const { makeBooking, getBooking } = require('../controllers/bookingController');
const authenticateUser = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateUser, makeBooking);
router.get('/:id', authenticateUser, getBooking);

module.exports = router;
