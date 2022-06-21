const Tasks = require('../services/Tasks');

const getAllTasks = async (_req, res) => {
  try {
    const tasks = await Tasks.getAllTasks();

    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

module.exports = {
  getAllTasks,
};
