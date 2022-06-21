const Tasks = require('../models/Tasks');

const getAllTasks = async () => Tasks.getAllTasks();

module.exports = {
  getAllTasks,
};
