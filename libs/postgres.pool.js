const {Pool} = require('pg')

  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'user',
    password: 'admin123',
    database: 'store'
  });

module.exports = pool;
