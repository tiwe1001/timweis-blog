const pool = require('../database/db');
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function getAllUsers(request, response) {
    try {
        const result = await pool.query(`SELECT userId, username, email, admin, createdAt FROM "user"`);

        const users = result.rows.map(row => {
            return new User(
                row.userid,
                row.username,
                row.email,
                row.admin,
                row.createdat
            );
        })
        response.json(users);
    } catch (error) {
        console.error("Fehler beim Abrufen der User: ",  error);
        response.status(500).json({ error: 'Interner Serverfehler' });
    }
}

async function loginUser(req, res) {
	try {
		const { username, password } = req.body;

		const result = await pool.query('SELECT * FROM "user" WHERE username = $1', [username]);

		if (result.rows.length === 0) {
			return res.status(401).json({ error: 'Benutzer nicht gefunden' });
		}

		const user = result.rows[0];

		const isValid = await bcrypt.compare(password, user.password);
		if (!isValid) {
			return res.status(401).json({ error: 'Falsches Passwort' });
		}

		const token = jwt.sign(
			{ userId: user.userid, username: user.username, email: user.email, isAdmin: user.admin },
			'dein_geheimes_token',
			{ expiresIn: '1d' }
		);

		res.json({
			accessToken: token,
			user: {
                userId: user.userid,
				username: user.username,
                email: user.email,
				isAdmin: user.admin,
			},
		});
	} catch (err) {
		console.error("Login-Fehler:", err);
		res.status(500).json({ error: 'Interner Serverfehler beim Login' });
	}
}

module.exports = {
    getAllUsers,
    loginUser
};