const express = require('express');
const router = express.Router();

const {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
} = require('../controllers/task');


router.route('/tasks').get(getAllTasks).post(createTask);
router.route('/tasks/:task_id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router;