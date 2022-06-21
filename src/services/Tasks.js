const Tasks = require('../models/Tasks');

const getAllTasks = async () => Tasks.getAllTasks();

const createTask = async (taskDatas) => Tasks.createTask(taskDatas);

const updateTask = async (id, newTaskDatas) => Tasks.updateTask(id, newTaskDatas);

const removeTask = async (id) => Tasks.removeTask(id);

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  removeTask,
};
