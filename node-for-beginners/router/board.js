const express = require("express");
const router = express.Router();
const db = require("../config/mysql.js");
const conn = db.init();

router.get("/", (req, res) => {
  //여기가 DAO 연결부
  const sql = "select board_id, title, createdAt from board";
  conn.query(sql, function (err, result) {
    if (err) console.log("quert is not excute" + err);
    else {
      res.send(result);
    }
  });
});

module.exports = router;
