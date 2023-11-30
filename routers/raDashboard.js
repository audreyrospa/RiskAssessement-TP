const raDashboardController = require('../controllers/raDashboardController')

// router
const router = require('express').Router()


// use routers

// API get all data for dashboard
router.get('/dashboard', raDashboardController.getAllDataForRaDashboardEntry)
