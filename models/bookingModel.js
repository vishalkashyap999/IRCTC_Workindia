const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const bookSeat = async (userId, trainId) => {
    const bookingId = uuidv4();
    await db.execute("INSERT INTO bookings (booking_id, user_id, train_id) VALUES (?, ?, ?)", [bookingId, userId, trainId]);
    await db.execute("UPDATE trains SET available_seats = available_seats - 1 WHERE id = ?", [trainId]);
    return bookingId;
};

const getBookingById = async (bookingId, userId) => {
    const [booking] = await db.execute("SELECT * FROM bookings WHERE booking_id = ? AND user_id = ?", [bookingId, userId]);
    return booking[0];
};

module.exports = { bookSeat, getBookingById };
