const db = require('../models')

// create main Model
const WorkActivity = db.workActivity

// 1. add new work activity
const addWorkActivity = async (req, res) => {
    try {
        let info = {
            description: req.body.description,
            teamLeader: req.body.teamLeader,
            teamMember: req.body.teamMember
        };

        const workActivity = await WorkActivity.create(info);
        res.status(200).send(workActivity);
        console.log(workActivity);
    } catch (error) {
        console.error('Error adding work activity:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    addWorkActivity
}

// 2. show all work activity

const getAllWorkActivities = async (req, res) => {
    try {
        const allWorkActivities = await WorkActivity.findAll();
        res.status(200).send(allWorkActivities);
        console.log(allWorkActivities);
    } catch (error) {
        console.error('Error fetching all work activities:', error);
        res.status(500).send('Internal Server Error');
    }
};

// 3. show work activity by id

const getWorkActivityById = async (req, res) => {
    const workActivityId = req.params.id; // Assuming the ID is passed as a route parameter
    
    try {
        const workActivity = await WorkActivity.findByPk(workActivityId);

        if (!workActivity) {
            return res.status(404).send('Work activity not found');
        }

        res.status(200).send(workActivity);
        console.log(workActivity);
    } catch (error) {
        console.error('Error fetching work activity by ID:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    addWorkActivity,
    getAllWorkActivities,
    getWorkActivityById
};






