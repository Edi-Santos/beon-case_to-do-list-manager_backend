const express = require('express');

const Tasks = require('../controllers/Tasks');

const app = express();
app.use(express.json());

app.get('/tasks', Tasks.getAllTasks);
app.post('/tasks', Tasks.createTask);

module.exports = app;
