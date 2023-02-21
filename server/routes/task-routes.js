const express = require('express');
const router = express.Router();
const { getAllTasks, addTask, deleteTask, getTaskbyId, updatebyId, getTaskbyUserId } = require('../controller/task-controller')


router.get('/tasks', getAllTasks)
router.get('/getTask', getTaskbyId)

router.post('/userTask', getTaskbyUserId)
router.post('/addTask', addTask)

router.put('/updateTask', updatebyId)


router.delete('/deleteTask', deleteTask)

module.exports = router;