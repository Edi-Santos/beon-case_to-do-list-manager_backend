const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'PSC_beon_to-do_list_manager';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = () => MongoClient
  .connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.log(err);
    process.exit();
  });

module.exports = connection;
