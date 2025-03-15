// db.js
const mysql = require('mysql2/promise');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ajithvictus@rmkec',
  database: 'AddictionRecovery',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log('Connected to MySQL');
module.exports = pool; // Export the pool
