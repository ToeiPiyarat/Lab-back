const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authControllers = require('../controllers/auth-controllers')

router.post('/register', authControllers.register)
router.post('/login', authControllers.login)
router.get('/me', authenticate, authControllers.getme)

module.exports = router