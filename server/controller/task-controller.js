const Task = require('../model/Task');
const asyncHandler = require('express-async-handler')

exports.getAllTasks = asyncHandler(async (req, res, next) => {
    try {
        const allTasks = await Task.find();
        res.status(200).json({ allTasks });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
})

exports.addTask = async (req, res) => {
    try {
        const { title, description, isCompleted, priority, tags, isArchieved, user } = req.body;
        const newTask = new Task({
            title: title,
            description: description,
            isCompleted: isCompleted,
            priority: priority,
            tags: tags,
            isArchived: isArchieved,
            user: user
        })
        await newTask.save()
        res.send({ msg: "Task added successfully!" })
    } catch (e) {
        res.status(404).json({ message: e.message })
    }
}


exports.getTaskbyId = async (req, res, next) => {
    try {
        const { id } = req.body;
        const existingTask = await Task.findById(id)
        res.status(200).json({ existingTask })
    } catch (e) {

    }
}


exports.getTaskbyUserId = async (req, res, next) => {
    try {
        const { id } = req.body;
        const allTasksbyUser = await Task.find({ user: id }).all();
        res.json({ allTasksbyUser })
    } catch (error) {

    }
}

exports.updatebyId = async (req, res) => {
    try {
        const { id, title, description, isCompleted, priority, tags, isArchieved, user } = req.body;
        const existingTask = await Task.findOneAndUpdate({ _id: id }, { title, description, isCompleted, priority, tags, isArchieved, user })
        await existingTask.save();
        res.json({ msg: "Task Updated Successfully" })
    } catch (e) {
        res.status(404).json({ message: e.message })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.body;
        const existingTask = await Task.findByIdAndDelete(id);

        if (!existingTask) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.status(200).json({ msg: "Task Deleted successfully" });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }

}