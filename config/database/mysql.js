const { Sequelize } = require("sequelize");
const database = new Sequelize("kampus", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = database;

// Code tanpa Sequelize

// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "kampus",
// });

// connection.connect(function (err) {
//   if (err) {
//     console.error("Error Connection : ", err.stack);
//     return;
//   }
//   console.log("Connected to DB ");
// });

// module.exports = connection;
