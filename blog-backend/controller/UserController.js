const pool = require('../database/db');
const User = require('../model/User');

async function getAllUsers(request, response) {
    try {
        const result = await pool.query(`SELECT userId, username, email, admin, createdAt FROM "user"`);

        const users = result.rows.map(row => {
            return new User(
                row.userId,
                row.username,
                row.email,
                row.admin,
                row.createdAt
            );
        })
        response.json(users);
    } catch (error) {
        console.error("Fehler beim Abrufen der User: ",  error);
        response.status(500).json({ error: 'Interner Serverfehler' });
    }
}

module.exports = {
    getAllUsers
};