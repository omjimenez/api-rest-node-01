const mongoose = require('mongoose');

const dbName = 'places_facilito_api';

module.exports = {
  // connect: () => mongoose.connect('mongodb://localhost/'+dbName),
  connect: () => mongoose.connect('mongodb://mongo/'+dbName),
  
  dbName,
  connection: () => {
    if (mongoose.connection)
      return mongoose.connection;
    return this.connect();
  }
}
