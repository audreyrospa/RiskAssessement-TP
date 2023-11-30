const { db } = require('../models');

const Hazard = db.hazard

// 1. add new hazard
const addNewHazard = async (req, res) => {
    try {
        let hazardInfo = {
            possibleAccident: req.body.possibleAccident,
            implementPerson: req.body.implementPerson,
            dueDate: req.body.dueDate,
        };

        const newHazard = await Hazard.create(hazardInfo);
        res.status(200).send(newHazard);
        console.log(newHazard);
    } catch (error) {
        console.error('Error adding new hazard:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    addNewHazard
};
