const { addTrain, getTrains } = require('../models/trainModel');

const createTrain = async (req, res) => {
    try {
        const { name, source, destination, totalSeats } = req.body;
        await addTrain(name, source, destination, totalSeats);
        res.status(201).json({ message: "Train added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const fetchTrains = async (req, res) => {
    try {
        const { source, destination } = req.query;
        const trains = await getTrains(source, destination);
        res.json(trains);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTrain, fetchTrains };
