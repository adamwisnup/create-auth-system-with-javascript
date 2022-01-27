const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "auth-js",
});

db.connect((err) => {
  if (err) throw err;
  console.log("DB Connected");
});

module.exports = db;
