const Tasks = require('../services/Tasks');

const getAllTasks = async (_req, res) => {
  try {
    const tasks = await Tasks.getAllTasks();

    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

const createTask = async (req, res) => {
  const taskDatas = req.body;

  try {
    const newTask = await Tasks.createTask(taskDatas);

    return res.status(201).json({ newTask });
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const newTaskDatas = req.body;

  try {
    const taskToUpdate = await Tasks.updateTask(id, newTaskDatas);

    return res.status(200).json({ taskUpdated: taskToUpdate });
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

const removeTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Tasks.removeTask(id);

    return res.status(204).end();
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  removeTask,
};
