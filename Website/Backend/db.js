//getting evreything we need from PG libaray
const POOL = require("pg").Pool;
const pool = new POOL ({
	user: "MarinoV",
	host: "capstone-database.c26t3cwjdeyu.us-east-2.rds.amazonaws.com",
	database: "capstone-database",
	password: "Capstone123",
	port: 5432
});


module.exports = pool;