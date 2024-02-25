const mysql = require("mysql2");

const db_info = {
  host: "localhost",
  port: "3306",
  user: "code_crain",
  password: "narcissus113",
  database: "codecrain",
  multipleStatements: true,
};

module.exports = {
  init: function () {
    return mysql.createConnection(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("mysql connection error : " + err);
      else console.log("mysql is connected successfully!");
    });
  },
};
