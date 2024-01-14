var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
  connectionLimit : 10,
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
});

migration.init(connection, __dirname + '/migrations', function() {
    console.log("finished running migrations");
  });