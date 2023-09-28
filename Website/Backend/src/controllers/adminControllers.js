const { response } = require("express");
const pool = require("../../db");

const getAdmin = (req, res) => {

    pool.query("select * from admin", (error, results) => {
        if (error) {
            console.error("Error fetching data:", error);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const newAdmin = (req, res) => {
    //const insert = `insert into admin(admin_name, admin_password, first_name, last_name) values ('${admin_name}', '${admin_password}', '${first_name}', '${last_name}'`;
	const {admin_name, admin_password, first_name, last_name} = req.body
    if (!admin_name ||!admin_password || !first_name || !last_name){
        return res.status(400).send("A filed is missing")
    }
    return res.send(admin_name);
	// pool.query(
	// insert,
	// (error, results) => {
	// if(error){
	// 	//will return if the user already exist
	// 	return return res.status(400).json(error. detail);
	// }}
	// else {
	// 	return res.status(200).send("inserted into table");
	// }
	}
    

module.exports = {
    getAdmin,
    newAdmin
};