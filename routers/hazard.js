const hazardController = require('../controllers/hazardController')

// router
const router = require('express').Router()


// use routers

// API get all data for dashboard
router.get('/addHazard', hazardController.addNewHazard)
