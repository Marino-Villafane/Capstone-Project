const pool = require("../../db");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();



const getUser = (req, res) => {
    pool.query("Select * from users", (error, results) => {
      if (error) {
        throw error;
      } else {
        return res.status(200).json(results.rows);
      }
    });
  };
  

  const newUser = async (req, res) => {
    const { email, password} = req.body;
    if (!email || !password) {
      return res.status(400).send("You missed a required field");
    }
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.exec(email)) {
      return res.status(400).send("Email is not in proper form");
    }
    if (res.headersSent === true) {
      return res.status(200).send("Insert into table");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const insert = `insert into users(email, password) values('${email}', '${hashedPassword}')`;
    pool.query(insert, (error, results) => {
      if (error) {
        return res.status(400).json(error["detail"]);
      } else {
        return res.status(200).send("Insert into table");
      }
    });
  };
  


  const userLogin = async (req, res) => {
    const findPassword = `Select password from users where email= '${req.body.email}'`;
    let db_password = "";
    console.log("Received email for login:", req.body.email)
    pool.query(findPassword, async (error, results) => {
      if (error) {
        return res.status(400).json(error);
      } else if (!results.rows.length) {
        return res.status(400).send("Email Not Found");
      } else {
        db_password = results.rows[0];
      }
  
      const match = await bcrypt.compare(
        req.body.password,
        db_password.password
      );
      if (match) {
        const accessToken = jwt.sign(
          {
            email: req.body.email,
          },
          process.env.WEB_TOKEN,
          { expiresIn: "1h" }
        );
        return res.status(200).json(accessToken);
      }
      return res.status(400).send(match);
    });
  };
  
  
  
  module.exports = {
    getUser,
    newUser,
    userLogin
  
  };