const datasSchema = require('./datasValidationSchema');

module.exports = (datas) => {
  const { error } = datasSchema.validate(datas);

  if (error) {
    const { message } = error.details[0];
    
    return { status: 400, message };
  }

  return true;
};
