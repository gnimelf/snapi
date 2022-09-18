const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://localhost:27017/snapiDB';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

module.exports = connection