const workActivityController = require('../controllers/workActivityController')

// router
const router = require('express').Router()


// use routers

// API Add work activity
router.post('/addWorkActivity', workActivityController.addWorkActivity)

// API Get all work activities
router.get('/getAllWorkActivity', workActivityController.getAllWorkActivities)

// API Get work activity by ID
router.get('/getWorkActivity/:id', workActivityController.getWorkActivityById)

module.exports = router;

