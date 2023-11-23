const db = require('../models')

// create main Model
const WorkActivity = db.workActivity


// 1. create work activity

// const addWorkActivity = async (req, res) => {

//     let info = {
//         description: req.body.title
//         //published: req.body.published ? req.body.published : false
//     }

//     const workActivity = await WorkActivity.create(info)
//     res.status(200).send(workActivity)
//     console.log(workActivity)

// }

const addWorkActivity = async (req, res) => {
    try {
        let info = {
            description: req.body.title
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


