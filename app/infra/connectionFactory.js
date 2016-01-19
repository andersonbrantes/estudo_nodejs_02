var mysql = require('mysql');

function createDBConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'casadocodigo'
  });
}

// Wrapper
module.exports = function() {
  return createDBConnection;
}