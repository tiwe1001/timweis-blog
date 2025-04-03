const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controller/UserController');

// GET /api/users
router.get('/', getAllUsers);

module.exports = router;