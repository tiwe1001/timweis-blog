const express = require('express');
const router = express.Router();
const { getAllPosts } = require('../controller/PostController');

// GET /api/posts
router.get('/', getAllPosts);

module.exports = router;