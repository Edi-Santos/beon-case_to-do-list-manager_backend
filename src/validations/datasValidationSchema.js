const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().required(),
  deadline: Joi.string().required(),
  status: Joi.string().required(),
  priority: Joi.string().required(),
  finished: Joi.string().min(0),
});
