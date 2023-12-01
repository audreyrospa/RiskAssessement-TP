const { db } = require('../models');

const RiskControl = db.riskControl

const addNewRiskControl = async (req, res) => {
    try {
        let riskControlInfo = {
            additionalControl: req.body.additionalControl,
            RC_Severity: req.body.RC_Severity,
            RC_Likelihood: req.body.RC_Likelihood,
            implementationPerson: req.body.implementationPerson,
            dueDate: req.body.dueDate,
            remarks: req.body.remarks,
            riskEval_id: req.body.riskEval_id,
            // RC_RPN will be automatically calculated before saving due to the beforeSave hook in the model
        };

        const newRiskControl = await RiskControl.create(riskControlInfo);
        res.status(200).send(newRiskControl);
        console.log(newRiskControl);
    } catch (error) {
        console.error('Error adding new RiskControl:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    addNewRiskControl
};
