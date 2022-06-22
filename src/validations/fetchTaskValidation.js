const { taskNotFound } = require('./error_messages/fetchTaskErrMessage');

module.exports = (task) => {
  if (task === false) return taskNotFound;

  return true;
};
