const pool = require('../database/db');
const Post = require('../model/Post');

async function getAllPosts(request, response) {
    try {
        const result = await pool.query(`SELECT * FROM post`);
        const posts = result.rows.map(row => {
            return new Post(
                row.postid,
                row.userid,
                row.title,
                row.content,
                row.createdat
            );
        })
        response.json(posts);
    } catch (error) {
        console.error("Fehler beim Abrufen der Posts: ",  error);
        response.status(500).json({ error: 'Interner Serverfehler' });
    }
}

module.exports = {
    getAllPosts
};