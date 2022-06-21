const express = require('express');

const Tasks = require('../controllers/Tasks');

const app = express();
app.use(express.json());

app.get('/tasks', Tasks.getAllTasks);

module.exports = app;
