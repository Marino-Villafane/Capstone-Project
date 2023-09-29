//getting evreything we need from PG libaray
const { Pool } = require("pg");

const pool = new Pool({
  user: 'postgres',                    
  host: 'localhost', 
  database: 'postgres',      
  password: '',          
  port: 5432,                      
});

module.exports = pool;
