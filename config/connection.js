var mysql = require('mysql');
var connection;
var password = require('./config.js');

if (process.env.JAWSDB_URL) {
  console.log('jawsdb is running!!!');
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: password,
    database: 'slope_intercept'
  });
}

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId + ' on port:' + 3306);
});

module.exports = connection;
