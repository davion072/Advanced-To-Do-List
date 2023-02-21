const express = require('express');
const router = express.Router();

const { getAllUsers, signup, login, getMe } = require('../controller/user-controller')
const { protect } = require('../middlewares/authMiddlewares')



router.get('/allUsers', getAllUsers)
router.post('/signup', signup)
router.post('/login', login)
router.get('/me', protect, getMe)

module.exports = router