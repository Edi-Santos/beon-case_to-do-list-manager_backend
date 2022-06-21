const Tasks = require('../models/Tasks');

const getAllTasks = async () => Tasks.getAllTasks();

const createTask = async (taskDatas) => Tasks.createTask(taskDatas);

module.exports = {
  getAllTasks,
  createTask,
};
