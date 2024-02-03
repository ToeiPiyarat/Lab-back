const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const todoController = require('../controllers/todo-controllers')

router.get('/', authenticate, todoController.getByUser)

module.exports = router