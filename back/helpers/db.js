const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'crazycrazy',
  database : 'homer'
});
module.exports  =  connection;