var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sample_db'
})
conn.connect(() =>{
  console.log(`connected`);
})
module.exports = conn;