const pool = require('../database/db');
const Post = require('../model/Post');

async function getAllPosts(request, response) {
    try {
        const result = await pool.query(`
            SELECT
                p.postId,
                p.userId,
                u.username,
                u.userPseudonym,
                p.title,
                p.content,
                p.createdAt
            FROM post p
            JOIN "user" u ON p.userId = u.userId
            ORDER BY p.createdAt DESC
        `);
        const posts = result.rows.map(row => ({
			postId: row.postid,
			userId: row.userid,
			username: row.username,
            userPseudonym: row.userpseudonym,
			title: row.title,
			content: row.content,
			createdAt: row.createdat
		}));
        
        response.json(posts);
    } catch (error) {
        console.error("Fehler beim Abrufen der Posts: ",  error);
        response.status(500).json({ error: 'Interner Serverfehler' });
    }
}

module.exports = {
    getAllPosts
};