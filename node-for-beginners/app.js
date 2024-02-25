const express = require("express");
const db = require("./config/mysql.js");
const app = express();
const conn = db.init();
const cors = require("cors");

app.set("port", process.env.PORT || 8080);
app.set("host", process.env.HOST || "0.0.0.0");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/comment", (req, res) => {});

app.get("/", (req, res) => {
  //여기가 DAO 연결부
  const sql = "select board_id, title, createdAt from board";
  conn.query(sql, function (err, result) {
    if (err) console.log("quert is not excute" + err);
    else {
      //   res.send(result);
      // res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      // res.json;
      // result.map((r) => {r.});
      res.send(result);
    }
  });
  //여기가 DTO 연결부
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(
  //     JSON.stringify({
  //       data: {boardList: result},
  //     })
  //   );
});

app.get("/detail/:boardId", (req, res) => {
  const bodySql = `select body from board where board_id=${req.params.boardId}; `;
  const commentSql = `select comment_id, content, comment.createdAt, nickname from comment where board_id=${req.params.boardId}; `;
  conn.query(bodySql + commentSql, function (err, results, field) {
    if (err) console.log("query is not excute" + err);
    else {
      //   res.send(result);
      // res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      // res.json;
      // result.map((r) => {r.});
      // res.send(results[0][0].body);
      // res.send(results[1]);
      res.send({
        body: results[0][0].body,
        comment: results[1],
      });
    }
  });
});

app.listen(app.get("port"), app.get("host"), () => {
  console.log(
    `서버가 실행됩니다. http://${app.get("host")}:${app.get("port")}`
  );
});
