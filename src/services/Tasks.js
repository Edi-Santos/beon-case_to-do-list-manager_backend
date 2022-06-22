const Tasks = require('../models/Tasks');
const datasValidation = require('../validations/datasValidation');

const getAllTasks = async () => Tasks.getAllTasks();

const createTask = async (taskDatas) => {
  try {
    const validatingDatas = datasValidation(taskDatas);

    if (validatingDatas !== true) return validatingDatas;

    const newTask = await Tasks.createTask(taskDatas);
    
    return newTask;
  } catch (error) {
   console.log(`Erro no Service || ${error}`);
  }
};

const updateTask = async (id, newTaskDatas) => Tasks.updateTask(id, newTaskDatas);

const removeTask = async (id) => Tasks.removeTask(id);

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  removeTask,
};
