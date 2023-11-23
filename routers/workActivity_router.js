// import controllers review, products
const workActivityController = require('../controllers/workActivityController')
// const raDashboardController = require('../controllers/raDashboardController')

// router
const router = require('express').Router()


// use routers
router.post('/addWorkActivity', workActivityController.addWorkActivity)