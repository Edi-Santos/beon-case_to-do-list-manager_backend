const Tasks = require('../models/Tasks');
const datasValidation = require('../validations/datasValidation');
const fetchTaskValidation = require('../validations/fetchTaskValidation');

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

const updateTask = async (id, newTaskDatas) => {
  try {
    const taskToUpdate = await Tasks.updateTask(id, newTaskDatas);
    
    const validatingTask = fetchTaskValidation(taskToUpdate);

    if (validatingTask !== true) return validatingTask;

    return taskToUpdate;
  } catch (error) {
   console.log(`Erro no Service || ${error}`);
  }
};

const removeTask = async (id) => Tasks.removeTask(id);

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  removeTask,
};
