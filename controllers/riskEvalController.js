const { db } = require('../models');

const RiskEval = db.riskEval

const addNewRiskEval = async (req, res) => {
    try {
        let riskEvalInfo = {
            existRiskControl: req.body.existRiskControl,
            RE_Severity: req.body.RE_Severity,
            RE_Likelihood: req.body.RE_Likelihood,
            // RE_RPN will be automatically calculated before saving due to the beforeSave hook in the model
        };

        const newRiskEval = await RiskEval.create(riskEvalInfo);
        res.status(200).send(newRiskEval);
        console.log(newRiskEval);
    } catch (error) {
        console.error('Error adding new RiskEval:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    addNewRiskEval
};
