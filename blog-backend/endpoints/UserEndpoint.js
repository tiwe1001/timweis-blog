const express = require('express');
const router = express.Router();
const { getAllUsers, loginUser, updateUser } = require('../controller/UserController');

// GET /api/users
router.get('/', getAllUsers);

router.post('/auth/login', loginUser);

router.post('/updateUser', updateUser);

module.exports = router;