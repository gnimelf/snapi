const { connect, connection } = require('mongoose');
mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectionString = 'mongodb://localhost:27017/snapiDB';

connect(connectionString);
  

module.exports = connection