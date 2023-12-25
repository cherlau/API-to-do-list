const express = require('express')

const router = express.Router()

const tasksController = require('./controllers/tasksController')
const tasksMIddleware = require('./middlewares/tasksMiddleware')


router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMIddleware.validateTitle, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', tasksMIddleware.validateTitle, tasksMIddleware.validateStatus, tasksController.updateTask)

module.exports = router