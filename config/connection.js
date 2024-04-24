const { connect, connection } = require('mongoose');
mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectionString = 'mongodb://localhost:27017/snapiDB';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

module.exports = connection