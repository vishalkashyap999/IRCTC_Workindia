const db = require('../config/db');

const createUser = async (username, hashedPassword, role) => {
    await db.execute("INSERT INTO users (username, password, role) VALUES (?, ?, ?)", [username, hashedPassword, role]);
};

const getUserByUsername = async (username) => {
    const [users] = await db.execute("SELECT * FROM users WHERE username = ?", [username]);
    return users[0];
};

module.exports = { createUser, getUserByUsername };
