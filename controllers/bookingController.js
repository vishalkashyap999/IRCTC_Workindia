const { bookSeat, getBookingById } = require('../models/bookingModel');

const makeBooking = async (req, res) => {
    try {
        const { trainId } = req.body;
        const bookingId = await bookSeat(req.user.id, trainId);
        res.status(200).json({ message: "Seat booked successfully", bookingId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await getBookingById(id, req.user.id);
        if (!booking) return res.status(404).json({ message: "Booking not found" });
        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { makeBooking, getBooking };
