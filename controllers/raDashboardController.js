const db = require('../models')

// create main Model
const RaDashboard = db.raDashboard


const addRaDashboard = async (req, res) => {
    try {
        let info = {
            workActivity_id: req.body.workActivity_id,
        };

        const raDashboardEntry = await RaDashboard.create(info);
        res.status(200).send(raDashboardEntry);
        console.log(raDashboardEntry);
    } catch (error) {
        console.error('Error adding RaDashboard entry:', error);
        res.status(500).send('Internal Server Error');
    }
};

const getAllDataForRaDashboardEntry = async (req, res) => {
    const raDashboardId = req.params.id; // Assuming the ID is passed as a route parameter

    try {
        const raDashboardEntry = await RaDashboard.findByPk(raDashboardId, {
            include: [{
                model: WorkActivity,
                attributes: ['id', 'description', 'lastModif', 'hazard_id'], // Add the attributes you want to retrieve
            }],
        });

        if (!raDashboardEntry) {
            return res.status(404).send('RaDashboard entry not found');
        }

        res.status(200).send(raDashboardEntry);
        console.log(raDashboardEntry);
    } catch (error) {
        console.error('Error fetching data for RaDashboard entry:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    addRaDashboard,
    getAllDataForRaDashboardEntry
};