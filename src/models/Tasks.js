const connection = require('./connection');

const COLLECTION = 'tasks';

const getAllTasks = async () => {
  try {
    const db = await connection();
    const tasks = await db.collection(COLLECTION).find().toArray();
    
    return tasks;
  } catch (error) {
    console.log(`Erro no Model || ${error}`);
  }
};

const createTask = async (taskDatas) => {
  try {
    const db = await connection();
    const newTask = await db.collection(COLLECTION).insertOne(taskDatas);

    return {
      _id: newTask.insertedId,
      ...taskDatas,
    };
  } catch (error) {
    console.log(`Erro no Model || ${error}`);
  }
};

module.exports = {
  getAllTasks,
  createTask,
};
