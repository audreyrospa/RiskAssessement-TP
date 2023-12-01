const riskEvalController = require('../controllers/riskEvalController');

const router = require('express').Router()

// Add new RiskEval
router.post('/addRiskEvals', riskEvalController.addNewRiskEval);

module.exports = router;
