const express = require('express');
const router = express.Router();
const { getAllPosts, createNewPost } = require('../controller/PostController');

// GET /api/posts
router.get('/', getAllPosts);

router.post('/newpost', createNewPost);

module.exports = router;