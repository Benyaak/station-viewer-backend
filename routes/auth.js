const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController')

router.post('/login', authController.login);
router.post('/logout', authController.middleware.checkLogin, authController.logout);
router.post('/register', authController.register);

module.exports = router;
