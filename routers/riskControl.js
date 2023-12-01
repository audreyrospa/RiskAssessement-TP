const riskControlController = require('../controllers/riskControlController');

const router = require('express').Router()

// API Add new Risk Control
router.post('/addRiskControl', riskControlController.addNewRiskEval);

module.exports = router;
