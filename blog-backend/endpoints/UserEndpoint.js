const express = require('express');
const router = express.Router();
const { getAllUsers, loginUser } = require('../controller/UserController');

// GET /api/users
router.get('/', getAllUsers);

router.post('/auth/login', loginUser);

module.exports = router;