const db = require('../config/db');

const addTrain = async (name, source, destination, totalSeats) => {
    await db.execute("INSERT INTO trains (name, source, destination, total_seats, available_seats) VALUES (?, ?, ?, ?, ?)",
        [name, source, destination, totalSeats, totalSeats]);
};

const getTrains = async (source, destination) => {
    const [trains] = await db.execute("SELECT * FROM trains WHERE source = ? AND destination = ?", [source, destination]);
    return trains;
};

module.exports = { addTrain, getTrains };
