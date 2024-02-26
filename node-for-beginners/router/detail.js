const express = require("express");
const router = express.Router();
const db = require("../config/mysql.js");
const conn = db.init();

router.post("/comment", (req, res) => {
  console.log(req.query);
  const { content, board_id, nickname } = req.body;
  const sql = `insert into comment (comment_id, content, createdAt, board_id, nickname) values (NULL, "${content}", NOW(), ${board_id}, "${nickname}")`;
  conn.query(sql, function (err, result) {
    if (err) console.log("quert is not excute" + err);
  });
});

router.get("/:boardId", (req, res) => {
  const bodySql = `select title, body, createdAt from board where board_id=${req.params.boardId}; `;
  const commentSql = `select comment_id, content, createdAt, nickname from comment where board_id=${req.params.boardId}; `;
  conn.query(bodySql + commentSql, function (err, results, field) {
    if (err) console.log("query is not excute" + err);
    else {
      res.send({
        body: results[0][0],
        comment: results[1],
      });
    }
  });
});

module.exports = router;
