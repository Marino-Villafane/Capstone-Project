//getting evreything we need from PG libaray
const { Pool } = require("pg");

const pool = new Pool({
  user: 'postgres',                    // Your database username
  host: 'localhost', // Your RDS endpoint
  database: 'postgres',      // Your RDS database name (DB ID)
  password: 'Messimagical10!',           // Your database password
  port: 5432,                         // PostgreSQL port (usually 5432)
});

module.exports = pool;
